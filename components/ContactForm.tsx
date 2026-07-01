import React, { useState } from 'react';
import { submitContactForm, ContactFormData } from '../services/api';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="p-10 rounded-3xl text-center"
        style={{
          background: 'rgba(255,255,255,.025)',
          border: '1px solid rgba(52,211,153,.22)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06), 0 24px 48px rgba(0,0,0,.30), 0 0 40px rgba(52,211,153,.04)',
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: 'rgba(52,211,153,.10)', border: '1px solid rgba(52,211,153,.22)' }}
        >
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. Our team will review your project and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-suvora-accent font-semibold hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-7 md:p-9 rounded-3xl relative overflow-hidden"
      style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid rgba(255,255,255,.07)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06), 0 24px 56px rgba(0,0,0,.32)',
      }}
    >
      {/* Ambient inner glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 300, height: 200,
          background: 'radial-gradient(ellipse, rgba(124,92,255,.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-display font-bold text-white mb-7">Start a Project</h3>

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-input"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-input"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Company <span className="normal-case text-slate-700">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="p-input"
              placeholder="Tech Inc."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="p-input resize-none"
              placeholder="Tell us about your project goals..."
            />
          </div>

          {/* Honeypot */}
          <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          {status === 'error' && (
            <p className="text-xs text-red-400 font-medium">
              Something went wrong. Please try again or email us directly at teams@suvora.tech
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
