import React, { useState } from 'react';
import { submitContactForm, ContactFormData } from '../services/api';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
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
      <div className="bg-suvora-800/50 backdrop-blur-md p-8 rounded-2xl border border-green-500/30 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-300 mb-6">Thank you for reaching out. Our team will review your project and get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-suvora-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-suvora-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-suvora-primary/20 rounded-full blur-3xl pointer-events-none" />

      <h3 className="text-2xl font-display font-bold text-white mb-6">Start a Project</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-suvora-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-suvora-primary focus:border-transparent transition-all outline-none"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-suvora-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-suvora-primary focus:border-transparent transition-all outline-none"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-1">Company (Optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-suvora-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-suvora-primary focus:border-transparent transition-all outline-none"
            placeholder="Tech Inc."
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-suvora-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-suvora-primary focus:border-transparent transition-all outline-none resize-none"
            placeholder="Tell us about your project goals..."
          />
        </div>

        {/* Honeypot for bots */}
        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-gradient-to-r from-suvora-primary to-suvora-accent text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(124,92,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;