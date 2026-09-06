import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('suvora_cookie_consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('suvora_cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-300 text-sm md:text-base flex-1">
            <span className="font-bold text-white mr-2 inline-flex items-center gap-1.5">
              <Cookie className="w-4 h-4 text-suvora-accent" /> We value your privacy.
            </span>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <a 
              href="/legal" 
              className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center"
            >
              Learn More
            </a>
            <button 
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-white bg-suvora-primary hover:bg-suvora-accent rounded-lg transition-colors shadow-lg shadow-suvora-primary/20"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
