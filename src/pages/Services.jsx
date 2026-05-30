import { Link } from 'react-router-dom';
import { SERVICES, PACKAGES, SITE, ICON_MAP } from '../data/constants';
import { 
  GraduationCap, 
  Star, 
  UtensilsCrossed, 
  Repeat, 
  DoorClosed, 
  ConciergeBell, 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  Send,
  CheckCircle,
  Gem,
  Clock,
  Landmark
} from 'lucide-react';
import './About.css';

// Image Imports
import servicesHero from '../assets/services_hero.png';
import { useLanguage } from '../context/LanguageContext';

const SERVICE_FEATURES = [
  { icon: 'GraduationCap', title: 'Scholar Guidance', desc: 'Qualified Islamic scholars accompany every group, conducting daily bayans and guiding pilgrims through each ritual.' },
  { icon: 'TrendingUp', title: 'Luxury Travel',    desc: 'Air-conditioned luxury coaches, Bullet Train options, and premium airport transfers.' },
  { icon: 'UtensilsCrossed', title: 'Homely Food',      desc: 'Authentic Tamil Nadu cuisine prepared by our experienced cooks — Biriyani, Sambar, Rasam and more.' },
  { icon: 'Repeat', title: 'Multiple Umrah',   desc: 'Perform multiple Umrahs during your stay with guidance on proper etiquette for each.' },
  { icon: 'ShieldCheck', title: 'Separate Rooms',  desc: 'Male and female pilgrims are accommodated in separate, comfortable rooms with complete privacy.' },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="page-wrapper">
  {/* Hero */}
  <section
    className="page-hero"
    style={{
      backgroundImage: `linear-gradient(rgba(4, 20, 10, 0.75), rgba(4, 20, 10, 0.85)), url(${servicesHero})`
    }}
  >
    <div
      className="container page-hero-content"
      style={{
        minHeight: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <h1
        className="section-title"
        style={{
          color: '#fff',
          fontSize: 'clamp(2rem,4.5vw,3.5rem)',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          maxWidth: '900px'
        }}
      >
        {t('services.hero.title')} <span className="gold-text">{t('services.hero.goldTitle')}</span>
      </h1>

      <p
        style={{
          color: 'rgba(255,255,255,.85)',
          maxWidth: '700px',
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginTop: '1rem'
        }}
      >
        {t('services.hero.subtitle')}
      </p>
    </div>
  </section>


      {/* Services List */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><ConciergeBell size={16} className="inline-icon" /> What We Offer</div>
            <h2 className="section-title">Professional <span className="gold-text">Guidance & Support</span></h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Everything you need for a complete, worry-free pilgrimage experience.
            </p>
            <div className="gold-divider center" />
          </div>
          <div className="services-grid" style={{marginTop: '3.5rem'}}>
            {SERVICES.map((s,i) => {
              const Icon = ICON_MAP[s.icon] || ConciergeBell;
              return (
                <div key={i} className="service-card card" style={{padding: '2.5rem', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-md)'}}>
                  <div className="service-card-icon" style={{color: 'var(--gold-500)', marginBottom: '1.5rem'}}><Icon size={40} /></div>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '1rem'}}>{s.title}</h3>
                  <p style={{lineHeight: 1.7, color: 'var(--text-secondary)'}}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-py" style={{background:'var(--gray-50)', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)'}}>
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><Star size={16} className="inline-icon" /> Our Excellence</div>
            <h2 className="section-title">What Sets <span className="gold-text">Us Apart</span></h2>
            <div className="gold-divider center" />
          </div>
          <div className="grid-responsive" style={{gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '4rem'}}>
            {SERVICE_FEATURES.map((f,i) => {
              const Icon = ICON_MAP[f.icon] || Star;
              return (
                <div key={i} className="feature-card glass" style={{padding: '2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div className="feature-icon-wrap" style={{width: '70px', height: '70px', background: 'var(--gold-50)', color: 'var(--gold-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                    <Icon size={32} />
                  </div>
                  <h3 className="feature-title" style={{fontSize: '1.15rem', marginBottom: '0.75rem'}}>{f.title}</h3>
                  <p className="feature-desc" style={{fontSize: '0.9rem', lineHeight: 1.6}}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing overview */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><Gem size={16} className="inline-icon" /> Flexible Pricing</div>
            <h2 className="section-title">Estimated <span className="gold-text">Package Costs</span></h2>
            <div className="gold-divider center" />
          </div>
          <div className="grid-responsive" style={{gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1.5rem',marginTop:'4rem'}}>
            {PACKAGES.map(pkg => (
              <div key={pkg.id} className="card" style={{
                background:'#fff',
                border:`1px solid var(--gray-200)`,
                borderRadius:'var(--radius-lg)',padding:'2.5rem',textAlign:'center',
                transition:'var(--transition)',position:'relative',overflow:'hidden',
                boxShadow: 'var(--shadow-md)'
              }}
              >
                <div style={{fontSize:'0.8rem',background:`${pkg.color}15`,color:pkg.color,border:`1px solid ${pkg.color}30`,borderRadius:'var(--radius-sm)',padding:'0.4rem 1rem',display:'inline-block',marginBottom:'1rem',fontWeight:800,letterSpacing:'0.05em'}}>{pkg.badge}</div>
                <h4 style={{fontFamily:'var(--font-serif)',fontSize:'1.4rem',marginBottom:'0.5rem',color:'var(--text-primary)'}}>{pkg.name}</h4>
                <div style={{fontFamily:'var(--font-serif)',fontSize:'2.5rem',fontWeight:800,color:'var(--emerald-deep)',margin:'1rem 0 0.5rem'}}>{pkg.price}</div>
                <div style={{fontSize:'0.9rem',color:'var(--text-muted)',marginBottom:'2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'}}><Clock size={16} /> {pkg.duration}</div>
                <Link to={`/packages#${pkg.id}`} className="btn btn-primary" style={{width:'100%',justifyContent:'center', padding: '0.8rem'}}>
                  Explore Features
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-islamic" style={{textAlign:'center'}}>
        <div className="container">
          <h2 className="section-title" style={{color:'#fff',marginBottom:'1.25rem', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)'}}>
            Talk to Our <span className="gold-text">Travel Experts</span>
          </h2>
          <p style={{color:'rgba(255,255,255,.75)',marginBottom:'2.5rem',maxWidth:'600px',margin:'0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.8}}>
            Not sure which package is right for you? Our consultants are happy to
            help you choose the best option for your spiritual needs and budget.
          </p>
          <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',flexWrap:'wrap'}}>
            <a 
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`} 
              target="_blank" rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{padding: '0.9rem 2rem'}}
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a 
              href={`tel:${SITE.phone[0]}`} 
              className="btn btn-outline"
              style={{padding: '0.9rem 2rem'}}
            >
              <Phone size={18} /> Call Now
            </a>
            <Link 
              to="/contact" 
              className="btn btn-primary"
              style={{padding: '0.9rem 2rem'}}
            >
              <Send size={18} /> Send Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
