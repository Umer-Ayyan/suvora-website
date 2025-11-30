const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { google } = require('googleapis'); 
const { z } = require('zod');

// --- PATH FIX FOR DOTENV ---
// Sirf Local Development ke liye .env load karein
if (process.env.NODE_ENV !== 'production') {
  const path = require('path');
  const dotenv = require('dotenv');
  // Ab kyunke hum 'api' folder mein hain, to .env.local ek folder piche (..) hai
  dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
}

const app = express();
const PORT = process.env.PORT || 3001;

// 2. CORS Setup
// --- CORS SETTINGS UPDATE ---

// 1. Allowed websites ki list banayen
const allowedOrigins = [
  'http://localhost:5173',                   // Local Development
  'http://localhost:3000',                   // Alternative Local
  'https://suvora-website.vercel.app',       // LIVE WEBSITE (Frontend)
  'https://suvora.vercel.app'                // (Optional) Another Deployment
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// --- END UPDATE ---

app.use(bodyParser.json());

// Validation schema
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  message: z.string().min(1),
  website: z.string().optional().nullable(),
});

// --- 🔥 UPDATED AUTH FUNCTION (ASYNC) ---
async function getSheetsService() {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
  
  if (!b64) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 env var');
  }

  try {
    // Decode Base64 to JSON
    const raw = Buffer.from(b64, 'base64').toString('utf8');
    const key = JSON.parse(raw);

    // FIX: Private key formatting (Replace literal \n with actual newlines)
    if (key.private_key) {
      key.private_key = key.private_key.replace(/\\n/g, '\n');
    }

    // MODERN AUTH METHOD: GoogleAuth
    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create client explicitly
    const client = await auth.getClient();

    // Return authenticated Sheets service
    return google.sheets({ version: 'v4', auth: client });

  } catch (error) {
    console.error("Auth Logic Error:", error.message);
    throw new Error("Failed to authenticate with Google. Check Key format.");
  }
}

// Rate limiting
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

// --- API ROUTE ---
app.post('/api/contact', async (req, res) => {
  console.log('Backend: /api/contact called');
  
  try {
    // Validation
    const parsed = ContactSchema.parse(req.body);

    if (parsed.website) {
      return res.json({ ok: true, message: 'Thanks' });
    }

    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(ip)) return res.status(429).json({ ok: false, message: 'Too many requests' });

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

    // --- 🔥 NEW: AWAIT THE SERVICE ---
    const sheets = await getSheetsService();
    
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const sheetName = process.env.SHEET_NAME || 'Sheet1';

    if (!spreadsheetId) throw new Error('Missing SPREADSHEET_ID env var');

    console.log(`Appending to Sheet ID: ${spreadsheetId}...`);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [row] },
    });

    console.log("✅ Success! Data saved.");
    return res.json({ ok: true, message: 'Submitted' });

  } catch (err) {
    console.error('❌ Error in /api/contact:', err.message);
    
    if (err instanceof z.ZodError) {
      return res.status(400).json({ ok: false, message: err.errors });
    }
    return res.status(500).json({ ok: false, message: 'Server error: ' + err.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  });
}

module.exports = app;