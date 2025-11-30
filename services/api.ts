// services/api.ts

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
} // 👈 Masla 1 Fix: Bracket bund kiya

// 👈 Masla 2 Fix: Logic wapis layen
// Agar aapne Backend aur Frontend ALAG ALAG deploy kiye hain (jo humne pehle kiya tha),
// to yahan Backend ka poora URL dena zaroori hai.
const LIVE_BACKEND_URL = 'https://suvora-backend.vercel.app'; 

const BACKEND_BASE = import.meta.env.PROD 
  ? LIVE_BACKEND_URL 
  : 'http://localhost:3001';

export const submitContactForm = async (data: ContactFormData) => {
  console.log("Sending to:", `${BACKEND_BASE}/api/contact`); // Debugging line

  const res = await fetch(`${BACKEND_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || 'Failed');
  return { success: true, message: body.message || 'Submitted' };
};
