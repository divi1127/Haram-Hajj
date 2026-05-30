import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES, TOUR_PACKAGES, AMENITIES, SITE, ICON_MAP } from '../data/constants';
import {
  Landmark,
  ChevronRight,
  Check,
  X,
  Calendar,
  BarChart3,
  Map,
  Gift,
  Plane,
  Star,
  MessageCircle,
  Phone,
  Send,
  Building2,
  Flower2,
  MapPin,
  Award
} from 'lucide-react';
import './About.css';
import './Packages.css';

// Image Imports
import packagesHero from '../assets/packages_hero.png';

const COMPARISON = [
  { feature: 'Distance to Haram',  basic:'2-3 km',     economy:'500m–1km', premium:'Adjacent',       elite:'Kaaba View' },
  { feature: 'Food Type',          basic:'TN Homely',   economy:'TN Homely', premium:'International',  elite:'International' },
  { feature: 'Hotel Category',     basic:'Budget',      economy:'3-Star',    premium:'5-Star',          elite:'Luxury Suite' },
  { feature: 'AC Transport',       basic:'✓',           economy:'✓',         premium:'✓',               elite:'Luxury' },
  { feature: 'Scholar Guidance',   basic:'Weekly',      economy:'Bi-weekly', premium:'Daily',           elite:'Personal' },
  { feature: '24/7 Hospitality',   basic:'—',           economy:'✓',         premium:'✓',               elite:'✓ VIP' },
  { feature: 'Bullet Train',       basic:'—',           economy:'—',         premium:'—',               elite:'✓' },
  { feature: 'Package Kit',        basic:'Basic',       economy:'Standard',  premium:'Premium',         elite:'Elite' },
];

import { useLanguage } from '../context/LanguageContext';

export default function Packages() {
  const { t } = useLanguage();
  const [activePkgId, setActivePkgId] = useState(PACKAGES[2]?.id || PACKAGES[0]?.id); // Default to Premium or first
  const activePkg = PACKAGES.find(p => p.id === activePkgId) || PACKAGES[0];

  return (
    <div className="page-wrapper">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{ backgroundImage: `linear-gradient(rgba(4,20,10,0.75), rgba(4,20,10,0.85)), url(${packagesHero})` }}
      >
        <div className="container page-hero-content" style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', minHeight:'420px', justifyContent:'center' }}>
          <h1 className="section-title" style={{ color:'#fff', fontSize:'clamp(2rem,4.5vw,3.5rem)', textShadow:'0 4px 20px rgba(0,0,0,0.5)', marginBottom:'1rem' }}>
            {t('packages.hero.title')} <span className="gold-text">{t('packages.hero.goldTitle')}</span>
          </h1>
          <p style={{ color:'rgba(255,255,255,.8)', maxWidth:'600px', fontSize:'1.1rem', lineHeight:1.8 }}>
            {t('packages.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Tabbed Packages List ────────────────────────────────── */}
      <section className="section-py bg-light" id="packages-list" style={{ background:'#f8fafc' }}>
        <div className="container">
          <div className="section-header center" style={{ textAlign:'center' }}>
            <div className="section-tag"><Award size={16} className="inline-icon" /> Detailed Comparison</div>
            <h2 className="section-title">Select Your <span className="gold-text">Umrah Plan</span></h2>
            <div className="gold-divider center" />
          </div>

          <div className="packages-tab-container">
            
            {/* Left Column: Details */}
            <div className="pkg-details-view" key={activePkg.id}>
              {/* Header Tab */}
              <div className="details-header" style={{ background: activePkg.headerBg || activePkg.color }}>
                {activePkg.popular && (
                  <div style={{
                    position: 'absolute', top: 0, right: '2rem',
                    background: '#f59e0b', color: '#000',
                    padding: '0.4rem 1rem', borderRadius: '0 0 12px 12px',
                    fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase'
                  }}>
                    <Star size={12} fill="#000" className="inline-icon" /> Most Popular
                  </div>
                )}
                <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
                  {activePkg.badge}
                </span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {activePkg.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: 900 }}>{activePkg.price}</span>
                  <span style={{ fontSize: '1.1rem', opacity: 0.8, fontWeight: 600 }}>/ {activePkg.duration} Full Trip</span>
                </div>
              </div>

              {/* Airlines Section */}
              <div className="details-airline-box">
                <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Plane size={14} /> Available Airlines
                </p>
                <div className="airline-grid">
                  {(activePkg.airlines || []).map((airline, i) => (
                    <span key={i} style={{ 
                      color: airline.color, 
                      fontSize: '1.1rem', 
                      fontWeight: 800,
                      fontStyle: airline.name === 'AirArabia' ? 'italic' : 'normal'
                    }}>
                      {airline.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features & Content */}
              <div className="details-body">
                <h4 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                  Package Inclusions & Features
                </h4>
                
                <ul className="feature-list-long">
                  {activePkg.features.map((f, i) => (
                    <li key={i} className="feature-item">
                      <Check size={18} className="icon-check" />
                      {f}
                    </li>
                  ))}
                  {activePkg.notIncluded.map((f, i) => (
                    <li key={`n${i}`} className="feature-item" style={{ opacity: 0.4 }}>
                      <X size={18} className="icon-cross" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="details-actions">
                  <a 
                    href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}?text=I'm interested in the ${activePkg.name}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-whatsapp" 
                    style={{ flex: 1, justifyContent: 'center', padding: '1.25rem' }}
                  >
                    <MessageCircle size={20} /> Book This Package via WhatsApp
                  </a>
                  <Link to="/contact" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '1.25rem', borderColor: activePkg.headerBg || activePkg.color, color: activePkg.headerBg || activePkg.color }}>
                    Request Custom Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Tabs */}
            <div className="pkg-sidebar">
              {PACKAGES.map(pkg => (
                <button 
                  key={pkg.id} 
                  className={`pkg-tab-btn ${activePkgId === pkg.id ? 'active' : ''}`}
                  onClick={() => setActivePkgId(pkg.id)}
                >
                  <span className="tab-btn-name">{pkg.name.replace(' Package', '')}</span>
                  <span className="tab-btn-price">Starting from {pkg.price}</span>
                  {pkg.popular && (
                    <span style={{ position: 'absolute', top: '10px', right: '10px', color: '#f59e0b' }}>
                      <Star size={14} fill="#f59e0b" />
                    </span>
                  )}
                </button>
              ))}
              
              <div style={{ marginTop: '1rem', padding: '1.5rem', background: 'var(--emerald-deep)', borderRadius: 'var(--radius-md)', color: '#fff' }}>
                <h5 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Need Help?</h5>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.5, marginBottom: '1rem' }}>
                  Our expert advisors are available to help you choose the best plan for your spiritual journey.
                </p>
                <a href={`tel:${SITE.phone[0]}`} style={{ color: 'var(--gold-400)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} /> {SITE.phone[0]}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Comparison Table ───────────────────────────────────── */}
      <section className="section-py" style={{ background:'var(--gray-50)', borderTop:'1px solid var(--gray-200)', borderBottom:'1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header center" style={{ textAlign:'center' }}>
            <div className="section-tag"><BarChart3 size={16} className="inline-icon" /> Side-by-Side</div>
            <h2 className="section-title">Quick <span className="gold-text">Reference Table</span></h2>
            <div className="gold-divider center" />
          </div>
          <div style={{ overflowX:'auto', marginTop:'3.5rem', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-md)' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff' }}>
              <thead>
                <tr style={{ background:'var(--emerald-deep)', color:'#fff' }}>
                  <th style={{ padding:'1.25rem 1.5rem', textAlign:'left' }}>Feature</th>
                  <th style={{ padding:'1.25rem 1rem', textAlign:'center' }}>Basic</th>
                  <th style={{ padding:'1.25rem 1rem', textAlign:'center' }}>Economy</th>
                  <th style={{ padding:'1.25rem 1rem', textAlign:'center', background:'var(--gold-500)', color:'#000' }}>Premium</th>
                  <th style={{ padding:'1.25rem 1rem', textAlign:'center' }}>Elite</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} style={{ borderBottom:'1px solid var(--gray-100)' }}>
                    <td style={{ padding:'1.25rem 1.5rem', fontWeight:600, color:'var(--text-primary)' }}>{row.feature}</td>
                    <td style={{ padding:'1.25rem 1rem', textAlign:'center' }}>{row.basic}</td>
                    <td style={{ padding:'1.25rem 1rem', textAlign:'center' }}>{row.economy}</td>
                    <td style={{ padding:'1.25rem 1rem', textAlign:'center', fontWeight:700, color:'var(--gold-600)', background:'rgba(245,158,11,0.03)' }}>{row.premium}</td>
                    <td style={{ padding:'1.25rem 1rem', textAlign:'center' }}>{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Itinerary ──────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center" style={{ textAlign:'center' }}>
            <div className="section-tag"><Map size={16} className="inline-icon" /> Journey Plan</div>
            <h2 className="section-title">Typical <span className="gold-text">Tour Itinerary</span></h2>
            <div className="gold-divider center" />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'2rem', marginTop:'4rem' }}>
            {[
              { day:'Days 1-3',    dest:'Jeddah',       icon:<Building2 size={32} />, acts:['City Welcome','City Rest','Corniche Walk'] },
              { day:'Days 4-17',  dest:'Makkah',        icon:<Landmark size={32} />,  acts:["Umrah Rituals","Tawaf & Sa'i","Daily Bayans","Ziyarat"] },
              { day:'Days 18-24', dest:'Madina',        icon:<Building2 size={32} />, acts:['Masjid An-Nabawi','Rauḍah Visit','Quba Mosque','Uhud'] },
              { day:'Days 25-28', dest:'Taif & Jeddah', icon:<Flower2 size={32} />,   acts:['Taif Gardens','Shopping','Farewell Dinner'] },
            ].map((it, i) => (
              <div key={i} className="card" style={{ padding:'2.5rem', textAlign:'center', border:'1px solid var(--gray-200)', background:'#fff' }}>
                <div style={{ color:'var(--gold-500)', marginBottom:'1.25rem' }}>{it.icon}</div>
                <div style={{ fontSize:'0.75rem', background:'var(--gold-50)', color:'var(--gold-700)', border:'1px solid var(--gold-200)', borderRadius:'var(--radius-sm)', padding:'0.3rem 1rem', display:'inline-block', marginBottom:'1rem', fontWeight:800 }}>{it.day}</div>
                <h4 style={{ fontFamily:'var(--font-serif)', fontSize:'1.3rem', marginBottom:'1.5rem' }}>{it.dest}</h4>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.6rem', textAlign:'left' }}>
                  {it.acts.map(a => (
                    <li key={a} style={{ fontSize:'0.9rem', color:'var(--text-secondary)', display:'flex', alignItems:'flex-start', gap:'0.6rem' }}>
                      <span style={{ color:'var(--gold-500)', fontWeight:900, marginTop:'2px' }}>•</span>{a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-py bg-islamic" style={{ textAlign:'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color:'#fff', marginBottom:'1.25rem', fontSize:'clamp(1.8rem,4vw,2.5rem)' }}>
            Ready to <span className="gold-text">Start Your Journey?</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,.75)', marginBottom:'2.5rem', maxWidth:'550px', margin:'0 auto 2.5rem', fontSize:'1.05rem', lineHeight:1.8 }}>
            Contact our advisors today for a free consultation and personalized package recommendation.
          </p>
          <div style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding:'1.1rem 2.2rem' }}>
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <a href={`tel:${SITE.phone[0]}`} className="btn btn-outline" style={{ padding:'1.1rem 2.2rem' }}>
              <Phone size={20} /> Talk to Expert
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
