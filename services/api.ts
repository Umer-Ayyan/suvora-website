// services/api.ts

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
}

// 🚨 Yahan Apne Backend ka URL Lagayen (Jo Vercel ne diya tha)
const LIVE_BACKEND_URL = 'https://suvora-backend.vercel.app'; 

// Logic: Agar Live hain to Backend URL, agar Local hain to Localhost
const BACKEND_BASE = import.meta.env.PROD 
  ? LIVE_BACKEND_URL 
  : 'http://localhost:3001';

export const submitContactForm = async (data: ContactFormData) => {
  // console.log("Sending to:", `${BACKEND_BASE}/api/contact`); 

  const res = await fetch(`${BACKEND_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || 'Failed');
  return { success: true, message: body.message || 'Submitted' };
};