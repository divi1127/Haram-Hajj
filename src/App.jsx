import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { Landmark } from 'lucide-react';

import Home     from './pages/Home';
import About    from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Blog     from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact  from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/packages"  element={<Packages />} />
          <Route path="/blog"      element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact"   element={<Contact />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'1.5rem',textAlign:'center',padding:'2rem'}}>
              <div style={{color:'var(--gold-500)', filter:'drop-shadow(0 0 20px rgba(245,158,11,0.3))'}}><Landmark size={120} /></div>
              <h1 style={{fontFamily:'var(--font-serif)',fontSize:'2.5rem'}}>Page Not Found</h1>
              <p style={{color:'var(--text-muted)'}}>The page you're looking for doesn't exist.</p>
              <a href="/" className="btn btn-primary">← Return Home</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
