// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { z } from 'zod';

type Resp = { ok: boolean; message?: string };

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  message: z.string().min(1),
  website: z.string().optional().nullable(), // honeypot
});

// very small per-process in-memory rate limiter (suitable for low traffic/dev)
const rateMap = (global as any).__contactRateMap ?? new Map<string, { count: number; reset: number }>();
if (!(global as any).__contactRateMap) (global as any).__contactRateMap = rateMap;
function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 60_000; // 60 seconds
  const max = 10; // max requests per window
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + windowMs });
    return false;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count > max;
}

async function getSheetsClient() {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
  if (!b64) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 env var');

  const raw = Buffer.from(b64, 'base64').toString('utf8');
  const key = JSON.parse(raw);

  const jwtClient = new google.auth.JWT(
    key.client_email,
    undefined,
    key.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  await jwtClient.authorize();
  return google.sheets({ version: 'v4', auth: jwtClient });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resp>) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, message: 'Method not allowed' });

  // validate body
  let data;
  try {
    data = ContactSchema.parse(req.body);
  } catch (err) {
    const msg = (err as any)?.errors?.map((e: any) => e.message).join('; ') ?? 'Invalid input';
    return res.status(400).json({ ok: false, message: msg });
  }

  // honeypot trap
  if (data.website) {
    console.warn('Honeypot hit; dropping submission.');
    return res.status(200).json({ ok: true, message: 'Thanks' });
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ?? req.socket.remoteAddress ?? 'unknown';
  if (isRateLimited(ip)) return res.status(429).json({ ok: false, message: 'Too many requests' });

  const now = new Date().toISOString();
  // timestamp, name, email, company, message, ip
  const row = [
    now,
    data.name,
    data.email,
    data.company ?? '',
    data.message.replace(/\n/g, ' ↵ '),
    ip,
  ];

  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const sheetName = process.env.SHEET_NAME ?? 'Sheet1';
    if (!spreadsheetId) throw new Error('Missing SPREADSHEET_ID env var');

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:F`,
      valueInputOption: 'RAW',
      requestBody: { values: [row] },
    });

    return res.status(200).json({ ok: true, message: 'Submitted' });
  } catch (err) {
    console.error('Sheets append failed', err);
    return res.status(500).json({ ok: false, message: 'Server error' });
  }
}
