// api/contact.js
import { google } from 'googleapis';
import { z } from 'zod';
import dotenv from 'dotenv';

// Vercel Environment Variables load karein
// (Vercel production mein process.env khud provide karta hai)

// Validation Schema
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  message: z.string().min(1),
  website: z.string().optional().nullable(),
});

// --- HELPER: Auth Logic ---
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

// --- MAIN HANDLER (Native Vercel Function) ---
export default async function handler(req, res) {
  
  // 1. MANUAL CORS HEADERS (Express ke baghair)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // 2. Handle OPTIONS (Preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. Handle GET (Browser Check)
  if (req.method === 'GET') {
    return res.status(200).send("<h1>✅ Suvora Backend is Live (Native Mode)</h1>");
  }

  // 4. Handle POST (Form Submission)
  if (req.method === 'POST') {
    try {
      // Body Parsing (Vercel khud karta hai agar JSON ho)
      const body = req.body; 

      // Validation
      const parsed = ContactSchema.parse(body);

      // Honeypot
      if (parsed.website) return res.json({ ok: true, message: 'Thanks' });

      // Prepare Data
      const ip = req.headers['x-forwarded-for'] || 'unknown';
      const now = new Date().toISOString();
      const row = [
        now,
        parsed.name,
        parsed.email,
        parsed.company || '',
        parsed.message.replace(/\n/g, ' ↵ '),
        ip.toString(),
      ];

      // Sheets Logic
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

    } catch (error) {
      console.error("Error:", error.message);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ ok: false, message: error.errors });
      }
      return res.status(500).json({ ok: false, message: error.message });
    }
  }

  // Method Not Allowed
  return res.status(405).json({ error: 'Method Not Allowed' });
}