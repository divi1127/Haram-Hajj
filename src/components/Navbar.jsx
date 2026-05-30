import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE, ICON_MAP } from '../data/constants';
import { Landmark, MessageCircle, Phone, X, Menu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { label: 'nav.home',     path: '/' },
  { label: 'nav.packages', path: '/packages' },
  { label: 'nav.services', path: '/services' },
  { label: 'nav.about',    path: '/about' },
  { label: 'nav.blog',     path: '/blog' },
  { label: 'nav.contact',  path: '/contact' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const LanguageSwitcher = () => (
    <div className="language-selector">
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`lang-btn ${language === 'ta' ? 'active' : ''}`} 
        onClick={() => setLanguage('ta')}
      >
        தமிழ்
      </button>
      <button 
        className={`lang-btn ${language === 'ur' ? 'active' : ''}`} 
        onClick={() => setLanguage('ur')}
      >
        اردو
      </button>
    </div>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon"><Landmark size={32} /></div>
            <div className="logo-text">
              <span className="logo-main">Haram Hajj</span>
              <span className="logo-sub">Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="navbar-right">
            <LanguageSwitcher />
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp nav-cta"
            >
              <MessageCircle size={18} /> <span>{t('common.whatsapp')}</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon"><Landmark size={28} /></div>
            <div className="logo-text">
              <span className="logo-main">Haram Hajj</span>
              <span className="logo-sub">Service</span>
            </div>
          </Link>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}><X size={24} /></button>
        </div>

        <div className="mobile-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        
        <div style={{padding: '0 1.5rem', marginBottom: '1.5rem'}}>
          <LanguageSwitcher />
        </div>

        <ul className="mobile-nav-links">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {t(link.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-cta-group">
          <a href={`tel:${SITE.phone[0]}`} className="btn btn-outline" style={{width:'100%',justifyContent:'center'}}>
            <Phone size={18} /> {SITE.phone[0]}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{width:'100%',justifyContent:'center'}}
          >
            <MessageCircle size={18} /> {t('common.whatsapp')}
          </a>
        </div>
      </div>

      {/* Spacer so content doesn't go under fixed navbar */}
      <div className="navbar-spacer" />
    </>
  );
}
