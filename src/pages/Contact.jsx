import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE, PACKAGES, FAQS } from '../data/constants';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Share2, 
  Camera, 
  Play, 
  X, 
  Send, 
  ChevronRight, 
  MapPin, 
  HelpCircle,
  ExternalLink,
  Plus,
  Minus,
  Navigation
} from 'lucide-react';
import './About.css';

// Image Imports
import contactHero from '../assets/contact_hero.png';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    alert(`JazakAllah Khair, ${data.name}! We have received your inquiry and will contact you shortly.`);
    e.target.reset();
  };

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section
  className="page-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(4, 20, 10, 0.75), rgba(4, 20, 10, 0.85)), url(${contactHero})`
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
        fontSize: 'clamp(2.3rem,4.5vw,3.5rem)',
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        maxWidth: '900px'
      }}
    >
      {t('contact.hero.title')} <span className="gold-text">{t('contact.hero.goldTitle')}</span>
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
      {t('contact.hero.subtitle')}
    </p>
  </div>
</section>

      {/* Contact Main */}
      <section className="section-py">
        <div className="container contact-grid" style={{gap: '4rem', alignItems: 'start'}}>
          {/* Left: Info */}
          <div className="contact-info-section" style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
            <div>
              <div className="section-tag"><Phone size={16} className="inline-icon" /> Reach Us</div>
              <h2 className="section-title" style={{marginBottom:'1rem', fontSize: '2rem'}}>
                We're <span className="gold-text">Here For You</span>
              </h2>
              <div className="gold-divider" style={{margin: '0'}} />
              <p className="section-subtitle" style={{marginTop:'1.5rem', color: 'var(--text-secondary)', maxWidth: '100%'}}>
                Whether you're planning your first Umrah or need guidance on Hajj,
                our team of experts is just a call or message away.
              </p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div className="contact-info-item" style={{display: 'flex', gap: '1.25rem', alignItems: 'flex-start'}}>
                <div className="contact-info-icon" style={{width: '45px', height: '45px', background: 'var(--gold-50)', color: 'var(--gold-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <Phone size={20} />
                </div>
                <div className="contact-info-detail">
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.4rem'}}>Phone Numbers</h4>
                  {SITE.phone.map(p => <a key={p} href={`tel:${p}`} style={{display:'block', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem'}}>{p}</a>)}
                </div>
              </div>

              <div className="contact-info-item" style={{display: 'flex', gap: '1.25rem', alignItems: 'flex-start'}}>
                <div className="contact-info-icon" style={{width: '45px', height: '45px', background: 'var(--gold-50)', color: 'var(--gold-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <MessageCircle size={20} />
                </div>
                <div className="contact-info-detail">
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.4rem'}}>WhatsApp Support</h4>
                  <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{color: 'var(--emerald-mid)', fontWeight: 700, fontSize: '0.95rem'}}>
                    {SITE.whatsapp} — Chat instantly
                  </a>
                </div>
              </div>

              <div className="contact-info-item" style={{display: 'flex', gap: '1.25rem', alignItems: 'flex-start'}}>
                <div className="contact-info-icon" style={{width: '45px', height: '45px', background: 'var(--gold-50)', color: 'var(--gold-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <Mail size={20} />
                </div>
                <div className="contact-info-detail">
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.4rem'}}>Email Address</h4>
                  <a href={`mailto:${SITE.email}`} style={{color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem'}}>{SITE.email}</a>
                </div>
              </div>

              <div className="contact-info-item" style={{display: 'flex', gap: '1.25rem', alignItems: 'flex-start'}}>
                <div className="contact-info-icon" style={{width: '45px', height: '45px', background: 'var(--gold-50)', color: 'var(--gold-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <Clock size={20} />
                </div>
                <div className="contact-info-detail">
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.4rem'}}>Working Hours</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Sat – Thu: 9:00 AM – 9:00 PM</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Friday: 2:00 PM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{paddingTop: '2rem', borderTop: '1px solid var(--gray-200)'}}>
              <h4 style={{fontFamily:'var(--font-serif)',marginBottom:'1.25rem', fontSize: '1.2rem'}}>Follow Our Journey</h4>
              <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
                {[
                  { label:'Share2', url: SITE.social.Share2, icon: <Share2 size={18} /> },
                  { label:'Camera', url: SITE.social.Camera, icon: <Camera size={18} /> },
                  { label:'Play', url: SITE.social.Play, icon: <Play size={18} /> },
                  { label:'X', url: SITE.social.X, icon: <X size={18} /> },
                ].map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline" style={{padding:'0.6rem 1.2rem',fontSize:'0.85rem',gap:'0.6rem', borderRadius: 'var(--radius-md)'}}
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card card" style={{padding: '3rem', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-lg)'}}>
            <h3 style={{fontFamily:'var(--font-serif)',fontSize:'1.8rem',color:'var(--emerald-deep)',marginBottom:'2rem', textAlign: 'center'}}>
              Send Us an <span className="gold-text">Inquiry</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid-responsive" style={{gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:'1.5rem', marginBottom: '1.5rem'}}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input id="contact-name" name="name" type="text" className="form-input" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                  <input id="contact-phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className="form-group" style={{marginBottom: '1.5rem'}}>
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group" style={{marginBottom: '1.5rem'}}>
                <label className="form-label" htmlFor="contact-package">Package Interest</label>
                <select id="contact-package" name="package" className="form-input">
                  <option value="">Select a package or service</option>
                  {PACKAGES.map(p => <option key={p.id}>{p.name}</option>)}
                  <option>Palestine Tour</option>
                  <option>Dubai Tour</option>
                  <option>Saudi Tour</option>
                  <option>Hajj Service</option>
                  <option>Custom Package</option>
                </select>
              </div>
              <div className="form-group" style={{marginBottom: '2rem'}}>
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" className="form-input" rows="5"
                  placeholder="Tell us about your requirements, preferred dates, group size..."
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center',padding:'1rem', fontSize: '1.1rem', fontWeight: 800}}>
                <Send size={18} /> Submit Inquiry
              </button>
            </form>

            <div style={{textAlign:'center',margin:'2rem 0',color:'var(--text-muted)',fontSize:'0.9rem', fontWeight: 600}}>Contact Us Directly</div>

            <div style={{display:'flex',gap:'1rem', flexWrap: 'wrap'}}>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-whatsapp" style={{flex:1,justifyContent:'center', padding: '0.8rem'}}
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href={`tel:${SITE.phone[0]}`} className="btn btn-outline" style={{flex:1,justifyContent:'center', padding: '0.8rem'}}>
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="section-py" style={{background:'var(--gray-50)', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)'}}>
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><MapPin size={16} className="inline-icon" /> Our Network</div>
            <h2 className="section-title">Our <span className="gold-text">Branch Locations</span></h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Visit any of our physical offices for personal consultations and registration.
            </p>
            <div className="gold-divider center" />
          </div>

          <div className="grid-responsive" style={{gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:'2rem',marginTop:'4rem'}}>
            {SITE.branches.map(branch => (
              <div key={branch.city} className="branch-card card" style={{padding: '0', background: '#fff', border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-md)'}}>
                <div className="branch-card-head" style={{padding: '2rem', background: 'var(--emerald-deep)', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h4 style={{fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 0}}><MapPin size={18} className="gold-text" /> {branch.city}</h4>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(branch.address)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-sm" style={{background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.2)', padding: '0.4rem 0.8rem', fontSize: '0.75rem'}}
                  >
                    Navigate <Navigation size={12} style={{marginLeft: '0.4rem'}} />
                  </a>
                </div>
                <div className="branch-card-body" style={{padding: '2rem'}}>
                  <div className="branch-phone" style={{display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--emerald-mid)'}}>
                    <Phone size={16} /> {branch.phone}
                  </div>
                  <div className="branch-addr" style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6}}>
                    {branch.address}
                  </div>
                  <iframe
                    className="branch-map"
                    src={branch.mapUrl}
                    style={{width: '100%', height: '200px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-100)'}}
                    allowFullScreen=""
                    loading="lazy"
                    title={`${branch.city} map`}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-py">
        <div className="container faq-inner" style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start'}}>
          <div className="faq-left">
            <div className="section-tag"><HelpCircle size={16} className="inline-icon" /> Support</div>
            <h2 className="section-title" style={{fontSize: '2.25rem'}}>Common <span className="gold-text">Questions</span></h2>
            <div className="gold-divider" style={{margin: '1.5rem 0'}} />
            <p className="section-subtitle" style={{maxWidth: '100%', color: 'var(--text-secondary)'}}>
              Can't find the answer you're looking for? Reach out to us directly through WhatsApp or a phone call.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp" style={{marginTop:'2rem', padding: '0.8rem 2rem'}}
            >
              <MessageCircle size={18} /> Ask on WhatsApp
            </a>
          </div>
          <div className="faq-list" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} style={{background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', overflow: 'hidden'}}>
      <button className="faq-q" onClick={() => setOpen(!open)} style={{padding: '1.5rem', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer'}}>
        <span style={{fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)'}}>{faq.q}</span>
        <span className="faq-icon" style={{color: 'var(--gold-500)'}}>{open ? <Minus size={20} /> : <Plus size={20} />}</span>
      </button>
      {open && <div className="faq-a" style={{padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem'}}>{faq.a}</div>}
    </div>
  );
}
