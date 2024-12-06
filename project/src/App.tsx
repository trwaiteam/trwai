import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Questionnaire } from './pages/Questionnaire';
import { AILeadGeneration } from './pages/AILeadGeneration';
import { CustomerSupport } from './pages/CustomerSupport';
import { CRMIntegrations } from './pages/CRMIntegrations';
import { Background } from './components/Background';
import { MouseGlow } from './components/MouseGlow';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-black">
        <Background />
        <MouseGlow />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/start" element={<Questionnaire />} />
            <Route path="/services/ai-lead-generation" element={<AILeadGeneration />} />
            <Route path="/services/customer-support" element={<CustomerSupport />} />
            <Route path="/services/crm-integrations" element={<CRMIntegrations />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;