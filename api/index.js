const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { google } = require('googleapis'); 
const { z } = require('zod');

// --- PATH FIX FOR DOTENV ---
if (process.env.NODE_ENV !== 'production') {
  const path = require('path');
  const dotenv = require('dotenv');
  dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
}

const app = express();

// 👇 1. CORS CONFIGURATION (Sabse Pehle) 👇
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

// Vercel preflight checks ke liye zaroori
app.options('*', cors());

app.use(bodyParser.json());

// 2. Validation Schema
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  message: z.string().min(1),
  website: z.string().optional().nullable(),
});

// 3. AUTH FUNCTION
async function getSheetsService() {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
  if (!b64) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 env var');

  try {
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

  } catch (error) {
    console.error("Auth Logic Error:", error.message);
    throw new Error("Failed to authenticate with Google. Check Key format.");
  }
}

// 4. Rate limiting
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

// --- 🔥 MAIN HANDLER (The Fix) ---
// Hum specific '/contact' path use nahi kar rahe taake 404 na aaye.
// Ye function har request ko handle karega.
app.use(async (req, res) => {
  
  // Debugging logs (Vercel logs mein dikhenge)
  console.log(`Incoming Request: ${req.method} ${req.url}`);

  // CASE 1: POST Request (Form Submission)
  if (req.method === 'POST') {
    try {
      // Rate Limit Check
      const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
      if (isRateLimited(ip)) return res.status(429).json({ ok: false, message: 'Too many requests' });

      // Validation
      const parsed = ContactSchema.parse(req.body);

      // Honeypot
      if (parsed.website) {
        return res.json({ ok: true, message: 'Thanks' });
      }

      // Prepare Data
      const now = new Date().toISOString();
      const row = [
        now,
        parsed.name,
        parsed.email,
        parsed.company || '',
        parsed.message.replace(/\n/g, ' ↵ '),
        ip,
      ];

      // Google Sheets Operation
      const sheets = await getSheetsService();
      const spreadsheetId = process.env.SPREADSHEET_ID;
      const sheetName = process.env.SHEET_NAME || 'Sheet1';

      if (!spreadsheetId) throw new Error('Missing SPREADSHEET_ID env var');

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:F`,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [row] },
      });

      console.log("✅ Success! Data saved.");
      return res.status(200).json({ ok: true, message: 'Submitted' });

    } catch (err) {
      console.error('❌ Error:', err.message);
      if (err instanceof z.ZodError) {
        return res.status(400).json({ ok: false, message: err.errors });
      }
      return res.status(500).json({ ok: false, message: 'Server error: ' + err.message });
    }
  }

  // CASE 2: GET Request (Browser Health Check)
  else if (req.method === 'GET') {
    return res.status(200).send("<h1>✅ Suvora Backend is Live and Ready!</h1>");
  }

  // CASE 3: OPTIONS Request (Preflight - Boht Zaroori)
  else {
    return res.status(200).end();
  }
});

// Localhost Listener
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;