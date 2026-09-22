import React, { useState } from 'react';
import { submitContactForm, ContactFormData } from '../services/api';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
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
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#0f1a2e] p-8 rounded-2xl border border-green-500/30 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2 font-display">Inquiry Received</h3>
        <p className="text-slate-300 mb-6 text-sm">Thank you for contacting Suvora Tech. Our technical solutions team will review your specifications and get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-sky-400 hover:underline text-sm font-medium"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0f1a2e] p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl relative">
      <div className="mb-6">
        <h3 className="text-xl font-display font-bold text-white">Request Consultation</h3>
        <p className="text-xs text-slate-400 mt-1">Discuss project architecture, ERP licensing, or technical consulting.</p>
      </div>
      
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
          <div>
            <p className="font-semibold text-white text-xs">Message could not be sent</p>
            <p className="text-xs text-slate-300 mt-1">Please try again or email us directly at <a href="mailto:teams@suvora.tech" className="text-sky-400 underline">teams@suvora.tech</a>.</p>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#080e1a] border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="Muhammad Ali"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Corporate Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#080e1a] border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="name@organization.com"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Contact Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#080e1a] border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="+92 300 1234567"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Company / Organization</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#080e1a] border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="Enterprise Ltd."
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Project Specifications</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#080e1a] border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Describe your technical challenges, system scale, or ERP requirements..."
          />
        </div>

        {/* Honeypot for bots */}
        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm uppercase tracking-wider shadow-sm"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Processing Inquiry...
            </>
          ) : (
            <>
              Submit Consultation Request <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;