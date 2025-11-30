// api/index.js

// 1. New Syntax (Imports)
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { google } from 'googleapis';
import { z } from 'zod';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// 2. Setup __dirname (ES Modules mein ye available nahi hota, banana parta hai)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 3. Env Config (Localhost only)
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
}

const app = express();

// 4. CORS Setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', cors());
app.use(bodyParser.json());

// Validation Schema
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  message: z.string().min(1),
  website: z.string().optional().nullable(),
});

// 5. Auth Function
async function getSheetsService() {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
  if (!b64) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 env var');

  const raw = Buffer.from(b64, 'base64').toString('utf8');
  const key = JSON.parse(raw);

  if (key.private_key) {
    key.private_key = key.private_key.replace(/\\n/g, '\n');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

// Rate Limiter
const rateMap = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 10;
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + windowMs });
    return false;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count > max;
}

// 6. MAIN HANDLER
app.use(async (req, res) => {
  // POST Request
  if (req.method === 'POST') {
    try {
      const ip = req.headers['x-forwarded-for']?.split(',')[0] || 'unknown';
      if (isRateLimited(ip)) return res.status(429).json({ ok: false, message: 'Too many requests' });

      const parsed = ContactSchema.parse(req.body);
      if (parsed.website) return res.json({ ok: true, message: 'Thanks' });

      const now = new Date().toISOString();
      const row = [
        now,
        parsed.name,
        parsed.email,
        parsed.company || '',
        parsed.message.replace(/\n/g, ' ↵ '),
        ip,
      ];

      const sheets = await getSheetsService();
      const spreadsheetId = process.env.SPREADSHEET_ID;
      const sheetName = process.env.SHEET_NAME || 'Sheet1';

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:F`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [row] },
      });

      return res.status(200).json({ ok: true, message: 'Submitted' });

    } catch (err) {
      console.error('❌ Error:', err.message);
      if (err instanceof z.ZodError) return res.status(400).json({ ok: false, message: err.errors });
      return res.status(500).json({ ok: false, message: 'Server error: ' + err.message });
    }
  }

  if (req.method === 'GET') return res.status(200).send("<h1>Backend Live (ESM Mode) 🚀</h1>");
  
  return res.status(200).end();
});

// 7. EXPORT DEFAULT (Ye Zaroori hai ESM ke liye)
export default app;