import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Legal from './pages/Legal';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AIAutomation from './pages/Blog/AIAutomation';
import ReactVsNextJS from './pages/Blog/ReactVsNextJS';
import BestSaaSStack from './pages/Blog/BestSaaSStack';
import 'react-loading-skeleton/dist/skeleton.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ai-automation" element={<AIAutomation />} />
        <Route path="/blog/react-vs-nextjs" element={<ReactVsNextJS />} />
        <Route path="/blog/best-saas-stack-2026" element={<BestSaaSStack />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);