import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ICON_MAP,
  FEATURES, PACKAGES, WHY_CHOOSE_US, DESTINATIONS,
  AMENITIES, TESTIMONIALS, FAQS, STATS, SITE, TOUR_PACKAGES
} from '../data/constants';
import './Home.css';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Heart, 
  Headphones, 
  Users, 
  Moon, 
  Star, 
  MessageCircle, 
  Calendar, 
  CheckCircle, 
  BookOpen, 
  Landmark, 
  Gift, 
  ArrowRight, 
  HelpCircle, 
  UtensilsCrossed,
  ChevronUp,
  ChevronDown,
  Send,
  Phone,
  MapPin
} from 'lucide-react';

// Image Imports
import makkahImg from '../assets/makkah.png';
import madinaImg from '../assets/madina.png';
import palestineImg from '../assets/palestine.png';
import foodImg from '../assets/food.png';

/* ── Sub-components ────────────────────────────────────────────── */

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-pattern" />

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-pre-title">
            <span className="hero-arabic-small">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
            <div className="hero-tag-glow"> Trusted Since 2004</div>
          </div>

          <h1 className="hero-title">
            <span className="title-part-1">{t('hero.title').split(' ')[0]} {t('hero.title').split(' ')[1]} {t('hero.title').split(' ')[2]}</span>
            <span className="title-part-2">
              <span className="gold-text-glow">{t('hero.goldTitle')}</span>
            </span>
          </h1>

          <p className="hero-desc">
            {t('hero.subtitle')}
          </p>

          <div className="hero-badges">
            <div className="hero-badge-item">
              <span className="hbi-icon"><Landmark size={24} strokeWidth={1.5} /></span>
              <div className="hbi-text">
                <strong>5000+</strong>
                <span>{t('home.stats.pilgrims')}</span>
              </div>
            </div>
            <div className="hero-badge-item">
              <span className="hbi-icon"><Moon size={24} strokeWidth={1.5} /></span>
              <div className="hbi-text">
                <strong>20+</strong>
                <span>{t('home.stats.years')}</span>
              </div>
            </div>
            <div className="hero-badge-item">
              <span className="hbi-icon"><Star size={24} strokeWidth={1.5} /></span>
              <div className="hbi-text">
                <strong>98%</strong>
                <span>{t('home.stats.success')}</span>
              </div>
            </div>
          </div>

          <div className="hero-ctas">
            <Link to="/packages" className="btn-primary-hero">
              <span>{t('hero.cta')}</span>
              <Landmark size={20} strokeWidth={1.5} />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp-hero"
            >
              <span>{t('hero.whatsapp')}</span>
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
{/* 
        <div className="hero-right animate-float-slow">
          <div className="hero-card-wrap">
            <div className="hero-kaaba-card glass">
              <div className="kaaba-icon"><Landmark size={120} strokeWidth={1.5} /></div>
              <div className="hero-card-info">
                <h3>Kaaba Al-Musharrafah</h3>
                <p>Makkah Al-Mukarramah</p>
              </div>
              <div className="hero-card-badge">Premium Packages</div>
            </div>

            <div className="hero-floating-card card-makkah">
              <span className="fc-icon"><Building2 size={28} strokeWidth={1.5} /></span>
              <div className="fc-content">
                <div className="fc-title">Masjid Al-Haram</div>
                <div className="fc-sub">Upcoming Tours</div>
              </div>
            </div>

            <div className="hero-floating-card card-madina">
              <span className="fc-icon"><Heart size={28} strokeWidth={1.5} /></span>
              <div className="fc-content">
                <div className="fc-title">Madina Packages</div>
                <div className="fc-sub">From ₹1,45,000</div>
              </div>
            </div>

            <div className="hero-floating-card card-support">
              <span className="fc-icon"><Headphones size={28} strokeWidth={1.5} /></span>
              <div className="fc-content">
                <div className="fc-title">24/7 Support</div>
                <div className="fc-sub">Always with you</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C480,100 960,20 1440,60 L1440,100 L0,100 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-strip bg-emerald">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{s.value}</span>
              <span className="stat-text">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="section-py features-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag"><Star size={20} className="inline-icon" /> Why Pilgrims Trust Us</div>
          <h2 className="section-title">Everything You Need for a<br /><span className="gold-text">Blessed Pilgrimage</span></h2>
          <div className="gold-divider center" />
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => {
            const Icon = ICON_MAP[f.icon] || Building2;
            return (
              <div key={i} className="feature-card animate-scale-in">
                <div className="feature-icon-wrap">
                  <Icon size={28} className="feature-icon" />
                  <div className="feature-icon-glow" />
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                <div className="feature-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackagesPreviewSection() {
  return (
    <section className="section-py packages-preview bg-islamic islamic-pattern">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag" style={{background:'rgba(245,158,11,.15)'}}>
            <Landmark size={18} className="inline-icon" /> Our Packages
          </div>
          <h2 className="section-title" style={{color:'#fff'}}>
            Choose Your <span className="gold-text">Umrah Package</span>
          </h2>
          <p className="section-subtitle" style={{color:'rgba(255,255,255,.6)', margin:'0 auto'}}>
            We offer carefully crafted packages to suit every pilgrim's needs and budget.
          </p>
          <div className="gold-divider center" />
        </div>

        <div className="packages-grid">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className={`pkg-card ${pkg.popular ? 'pkg-popular' : ''} card`}>
              {/* {pkg.popular && <div className="pkg-popular-badge"><Star size={18} className="inline-icon" /> Most Popular</div>} */}
              <div className="pkg-header" style={{borderColor: pkg.color}}>
                <span className="pkg-badge" style={{color: pkg.iconColor, background: `${pkg.color}22`}}>
                  {pkg.badge}
                </span>
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-price">{pkg.price}</div>
                <div className="pkg-duration"><Calendar size={16} className="inline-icon" /> {pkg.duration}</div>
              </div>
              <ul className="pkg-features">
                {pkg.features.slice(0,5).map((f,i) => (
                  <li key={i}><CheckCircle size={16} className="pkg-check-icon" />{f}</li>
                ))}
                {pkg.features.length > 5 && (
                  <li className="pkg-more">+{pkg.features.length - 5} more benefits</li>
                )}
              </ul>
              <Link
                to={`/packages#${pkg.id}`}
                className="btn btn-outline pkg-btn"
                style={{borderColor: pkg.color, color: pkg.iconColor}}
              >
                View Full Details <ArrowRight size={16} className="inline-icon" />
              </Link>
            </div>
          ))}
        </div>

        <div className="packages-cta">
          <Link to="/packages" className="btn btn-primary">
            <BookOpen size={18} className="inline-icon" /> View All Packages & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="section-py why-section">
      <div className="container">
        <div className="why-inner">
          <div className="why-left">
            <div className="section-tag"><Users size={18} className="inline-icon" /> Why Haram Hajj</div>
            <h2 className="section-title">
              Why Thousands Choose<br /><span className="gold-text">Haram Hajj Service</span>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              With over 20 years of experience, we've built a reputation for delivering
              spiritually enriching, comfortable, and hassle-free pilgrimage experiences.
            </p>
            <div className="why-features">
              {WHY_CHOOSE_US.map((w, i) => {
                const Icon = ICON_MAP[w.icon] || BookOpen;
                return (
                  <div key={i} className="why-item">
                    <div className="why-icon"><Icon size={24} /></div>
                    <div>
                      <h4 className="why-title">{w.title}</h4>
                      <p className="why-desc">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="why-ctas">
              <Link to="/about" className="btn btn-green">Learn Our Story</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>

          <div className="why-right">
            <div className="why-visual">
              <div className="why-central-icon animate-float"><Landmark size={80} strokeWidth={1.5} /></div>
              <div className="why-ring why-ring-1" />
              <div className="why-ring why-ring-2" />
              <div className="why-ring why-ring-3" />
              {STATS.map((s, i) => (
                <div key={i} className={`why-stat-bubble bubble-${i}`}>
                  <span className="stat-number" style={{fontSize:'1.5rem'}}>{s.value}</span>
                  <span style={{fontSize:'0.7rem',color:'rgba(255,255,255,.6)'}}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoodSection() {
  return (
    <section className="section-py food-section bg-dark-section">
      <div className="container">
        <div className="food-inner">
          <div className="food-image-side animate-fade-in">
            <div className="food-main-img-wrap">
              <img src={foodImg} alt="Tamil Nadu Homely Food" className="food-main-img" />
              <div className="food-img-badge"><UtensilsCrossed size={18} className="inline-badge-icon" /> Authentic Taste</div>
            </div>
            <div className="food-floating-card glass">
              <h4>Home Away From Home</h4>
              <p>Delicious South Indian meals prepared fresh daily by our chefs.</p>
            </div>
          </div>
          <div className="food-text-side">
            <div className="section-tag" style={{background:'rgba(245,158,11,.15)'}}><UtensilsCrossed size={16} className="inline-badge-icon" /> Taste of Home</div>
            <h2 className="section-title" style={{color:'#fff'}}>
              Authentic <span className="gold-text">Tamil Nadu Homely Food</span>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle" style={{color:'rgba(255,255,255,.7)'}}>
              We understand the importance of familiar food during your long spiritual journey.
              Our experienced cooks prepare authentic Tamil Nadu dishes that make you feel truly at home.
            </p>
            <div className="food-menu-highlights">
              {[
                { name: 'Muslim Style Biriyani', desc: 'Scented rice with tender meat and authentic masalas.' },
                { name: 'Sambar & Rasam', desc: 'Comforting South Indian staples served hot.' },
                { name: 'Brinjal Curry (Dalcha)', desc: 'The perfect accompaniment to our special Biriyani.' },
                { name: 'Vegetarian Options', desc: 'Healthy and delicious veg varieties for every meal.' },
              ].map((m, i) => (
                <div key={i} className="menu-highlight-item">
                  <CheckCircle size={18} className="menu-check-icon" style={{color: 'var(--gold-500)'}} />
                  <div>
                    <h5 style={{color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem'}}>{m.name}</h5>
                    <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem'}}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  return (
    <section className="section-py destinations-section bg-dark-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag" style={{background:'rgba(245,158,11,.15)'}}>
            <MapPin size={16} className="inline-icon" /> Tour Destinations
          </div>
          <h2 className="section-title" style={{color:'#fff'}}>
            Sacred & Scenic <span className="gold-text">Destinations</span>
          </h2>
          <div className="gold-divider center" />
        </div>

        <div className="dest-grid">
          {DESTINATIONS.map((d, i) => {
            let img = null;
            if (d.name.includes('Makkah')) img = makkahImg;
            if (d.name.includes('Madinah')) img = madinaImg;
            if (d.name.includes('Jerusalem')) img = palestineImg;

            const Icon = ICON_MAP[d.icon] || Landmark;

            return (
              <div key={i} className="dest-card card-dark">
                <div className="dest-image-wrap">
                  {img ? (
                    <img src={img} alt={d.name} className="dest-img" />
                  ) : (
                    <div className="dest-icon" style={{background: 'var(--emerald-deep)', color: 'var(--gold-400)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Icon size={64} /></div>
                  )}
                  <div className="dest-badge">{d.country}</div>
                </div>
                <div className="dest-info" style={{padding: '2rem'}}>
                  <h3 className="dest-name" style={{color: '#fff', fontSize: '1.5rem'}}>{d.name}</h3>
                  <p className="dest-desc" style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.6}}>{d.desc}</p>
                  <Link to="/packages" className="dest-link" style={{color: 'var(--gold-400)', fontWeight: 700}}>Explore Packages <ArrowRight size={16} className="inline-icon" /></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  return (
    <section className="section-py amenities-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag"><Gift size={16} className="inline-icon" /> Package Inclusions</div>
          <h2 className="section-title">
            Your Package <span className="gold-text">Includes</span>
          </h2>
          <p className="section-subtitle" style={{margin:'0 auto'}}>
            Every package comes with a thoughtfully curated set of pilgrimage essentials.
          </p>
          <div className="gold-divider center" />
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((a, i) => {
            const Icon = ICON_MAP[a.icon] || Gift;
            return (
              <div key={i} className="amenity-card card scale-hover">
                <div className="amenity-icon" style={{color: 'var(--gold-600)'}}><Icon size={40} /></div>
                <h4 className="amenity-name" style={{fontSize: '1.2rem'}}>{a.name}</h4>
                <p className="amenity-desc">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-py testimonials-section bg-islamic islamic-pattern">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag" style={{background:'rgba(245,158,11,.15)'}}>
            <MessageCircle size={16} className="inline-icon" /> Pilgrim Stories
          </div>
          <h2 className="section-title" style={{color:'#fff'}}>
            What Our <span className="gold-text">Pilgrims Say</span>
          </h2>
          <div className="gold-divider center" />
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card glass">
              <div className="testi-stars">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={14} fill="var(--gold-400)" color="var(--gold-400)" />)}
              </div>
              <p className="testi-text" style={{color: 'rgba(255,255,255,0.85)'}}>"{t.text}"</p>
              <div className="testi-footer">
                <div className="testi-avatar" style={{background: 'var(--gold-500)', color: '#000', fontWeight: 800}}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testi-name" style={{color: '#fff'}}>{t.name}</div>
                  <div className="testi-meta" style={{color: 'rgba(255,255,255,0.5)'}}>{t.city} · {t.package}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section-py faq-section">
      <div className="container faq-inner" style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem'}}>
        <div className="faq-left">
          <div className="section-tag"><HelpCircle size={16} className="inline-icon" /> FAQ</div>
          <h2 className="section-title">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <div className="gold-divider" style={{margin: '1.5rem 0'}} />
          <p className="section-subtitle" style={{maxWidth: '100%'}}>
            Have questions about your Umrah journey? We've answered the most common ones below.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{marginTop:'1.5rem'}}>
            Ask Us Anything <MessageCircle size={18} className="inline-icon" />
          </Link>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} style={{marginBottom: '1rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', background: 'var(--gray-50)'}}>
      <button className="faq-q" onClick={() => setOpen(!open)} style={{padding: '1.5rem', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none'}}>
        <span style={{fontSize: '1.1rem', fontWeight: 700}}>{faq.q}</span>
        <span className="faq-icon" style={{color: 'var(--gold-500)'}}>{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>
      {open && <div className="faq-a" style={{padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7}}>{faq.a}</div>}
    </div>
  );
}

function CTASection() {
  return (
    <section className="cta-section bg-islamic">
      <div className="container cta-inner">
        <div className="cta-text">
          <div className="cta-arabic">اللَّهُمَّ لَبَّيْكَ لَبَّيْكَ</div>
          <h2 className="section-title" style={{color:'#fff', fontSize:'2.5rem', marginBottom: '1.5rem'}}>
            Begin Your <span className="gold-text">Sacred Journey</span> Today
          </h2>
          <p style={{color:'rgba(255,255,255,.7)', fontSize:'1.1rem', lineHeight:1.8, marginBottom: '2.5rem'}}>
            Don't delay your spiritual calling. Reach out to us and let our experts
            help you plan the most blessed experience of your life.
          </p>
          <div style={{display: 'flex', gap: '1rem'}}>
             <div className="hero-badge-item glass" style={{padding: '1rem 1.5rem'}}>
                <span className="hbi-icon" style={{color: 'var(--gold-400)'}}><Users size={24} /></span>
                <div className="hbi-text">
                  <strong style={{color: '#fff'}}>5000+</strong>
                  <span style={{color: 'rgba(255,255,255,0.6)'}}>Happy Pilgrims</span>
                </div>
              </div>
          </div>
        </div>

        <div className="cta-form-card glass">
          <h3 className="cta-form-title">Send Us an Inquiry</h3>
          <form className="cta-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly. جزاك الله خيراً'); }}>
            <div className="cta-form-row">
              <div className="form-group">
                <label className="form-label" style={{color:'rgba(255,255,255,.8)'}}>Full Name</label>
                <input id="cta-name" type="text" className="form-input cta-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" style={{color:'rgba(255,255,255,.8)'}}>Phone Number</label>
                <input id="cta-phone" type="tel" className="form-input cta-input" placeholder="+91 98765 43210" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" style={{color:'rgba(255,255,255,.8)'}}>Package Interest</label>
              <select id="cta-package" className="form-input cta-input">
                <option value="">Select a package</option>
                <option>Basic Package</option>
                <option>Economy Package</option>
                <option>Premium Package</option>
                <option>Elite Package</option>
                <option>Palestine Tour</option>
                <option>Dubai Tour</option>
                <option>Custom Package</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{color:'rgba(255,255,255,.8)'}}>Message (Optional)</label>
              <textarea id="cta-message" className="form-input cta-input" rows="3" placeholder="Any special requirements..." />
            </div>
            <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center', padding: '1rem', fontWeight: 800}}>
              <Send size={18} /> Submit Inquiry
            </button>
          </form>
          <div className="cta-or">— or reach us directly —</div>
          <div className="cta-direct-btns">
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{flex:1,justifyContent:'center', padding: '0.8rem'}}
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href={`tel:${SITE.phone[0]}`} className="btn btn-outline" style={{flex:1,justifyContent:'center', padding: '0.8rem'}}>
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main Home component ─────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PackagesPreviewSection />
      <WhyChooseUsSection />
      <FoodSection />
      <DestinationsSection />
      <AmenitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
