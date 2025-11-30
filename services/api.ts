// services/api.ts
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
}


const LIVE_URL = 'https://suvora-backend.vercel.app'; 

const BACKEND_BASE = ''; 

export const submitContactForm = async (data: ContactFormData) => {
  const res = await fetch(`${BACKEND_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || 'Failed');
  return { success: true, message: body.message || 'Submitted' };
};
