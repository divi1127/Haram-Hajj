import { Link } from 'react-router-dom';
import { STATS, ORGANIZATIONS, SITE, ICON_MAP } from '../data/constants';
import { 
  Users, 
  Map, 
  Heart, 
  Phone, 
  Landmark, 
  Building2, 
  Mountain, 
  Gem, 
  Bus, 
  Hotel, 
  UtensilsCrossed, 
  UserCheck,
  Target,
  Moon,
  Library,
  GraduationCap,
  Book,
  Radio,
  Camera,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import './About.css';

// Image Imports
import aboutHero from '../assets/about_hero.png';
import { useLanguage } from '../context/LanguageContext';

const TEAM = [
  { name: 'Sirajudeen Yousufi', role: 'Proprietor & Lead Scholar', icon: 'GraduationCap', desc: 'Qualified Islamic scholar with 20+ years of experience in Shariah studies and pilgrimage guidance.' },
  { name: 'Tour Coordinator',   role: 'Senior Guide',              icon: 'Map', desc: 'Experienced in managing Umrah and Hajj groups across Saudi Arabia.' },
  { name: 'Hospitality Team',   role: 'Guest Relations',           icon: 'Heart', desc: 'Dedicated team ensuring comfort and care for every pilgrim 24/7.' },
  { name: 'Support Team',       role: 'Customer Service',          icon: 'Phone', desc: 'Multilingual support team fluent in Tamil, Urdu, and Arabic.' },
];

const GALLERY_ITEMS = [
  { icon: 'Landmark', label: 'Masjid Al-Haram' },
  { icon: 'Building2', label: 'Masjid An-Nabawi' },
  { icon: 'Mountain', label: 'Mount Arafat' },
  { icon: 'Gem', label: 'Kaaba View' },
  { icon: 'Bus', label: 'Group Transport' },
  { icon: 'Hotel', label: 'Hotel Rooms' },
  { icon: 'UtensilsCrossed', label: 'Tamil Nadu Food' },
  { icon: 'Users', label: 'Group Photos' },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="page-wrapper">
      {/* ── Page Hero */}
      <section
  className="page-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(4, 20, 10, 0.75), rgba(4, 20, 10, 0.85)), url(${aboutHero})`
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
        fontSize: 'clamp(2rem,4vw,3.5rem)',
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        maxWidth: '900px'
      }}
    >
      {t('about.hero.title')}
      <br />
      <span className="gold-text">{t('about.hero.goldTitle')}</span>
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
      {t('about.hero.subtitle')}
    </p>
  </div>
</section>
      {/* ── Mission & Vision */}
      <section className="section-py">
        <div className="container about-mv-grid">
          <div className="about-mv-card mission">
            <div className="about-mv-icon"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>
              To provide every pilgrim with a spiritually enriching, comfortable, and well-guided
              Umrah &amp; Hajj experience—rooted in authentic Islamic values and Tamil Nadu's warm hospitality.
            </p>
          </div>
          <div className="about-mv-card vision">
            <div className="about-mv-icon"><Moon size={32} /></div>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted Islamic travel company in South India, known for
              our scholars' guidance, homely care, and commitment to making every pilgrimage
              a life-changing spiritual journey.
            </p>
          </div>
          <div className="about-mv-card values">
            <div className="about-mv-icon"><Heart size={32} /></div>
            <h3>Our Values</h3>
            <p>
              Taqwa (God-consciousness), Amanah (Trust), Ihsan (Excellence), and Rahmah (Compassion)
              guide every decision we make in serving our pilgrims.
            </p>
          </div>
        </div>
      </section>

      {/* ── Company Story */}
      <section className="section-py about-story-section" style={{background:'var(--gray-100)'}}>
        <div className="container about-story-grid">
          <div className="about-story-text">
            <div className="section-tag"><Library size={16} className="inline-icon" /> Our Story</div>
            <h2 className="section-title">
              A Legacy Built on <span className="gold-text">Faith & Service</span>
            </h2>
            <div className="gold-divider" />
            <p>
              Founded in 2004 by Sirajudeen Yousufi, Haram Hajj Service began as a small but deeply
              committed travel group from Tamil Nadu. What started with a handful of pilgrims has grown
              into one of South India's most trusted Umrah and Hajj service providers.
            </p>
            <p style={{marginTop:'1.25rem'}}>
              Our approach has always been rooted in genuine care for pilgrims — not just as customers,
              but as guests of Allah (ضيوف الرحمن). We handle every detail from visa processing to
              accommodation, transport, meals, and spiritual guidance, so pilgrims can focus entirely
              on their worship.
            </p>
            <div className="about-story-stats">
              {STATS.map(s => (
                <div key={s.label} className="about-stat-item">
                  <div className="stat-number">{s.value}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-story-visual">
            <div className="about-visual-card glass">
              <div className="about-visual-icon animate-float"><Landmark size={48} color="var(--gold-400)" /></div>
              <h3>Established 2004</h3>
              <p>Serving pilgrims from Tamil Nadu for over two decades</p>
              <div className="about-milestones">
                {[
                  { year: '2004', event: 'Company founded by Sirajudeen Yousufi' },
                  { year: '2008', event: 'First 100 pilgrims milestone' },
                  { year: '2012', event: 'Opened Karaikkal branch' },
                  { year: '2018', event: '1000+ pilgrims served' },
                  { year: '2022', event: 'Launched Palestine tours' },
                  { year: '2024', event: '5000+ pilgrims served' },
                ].map(m => (
                  <div key={m.year} className="about-milestone">
                    <span className="milestone-year">{m.year}</span>
                    <span className="milestone-event">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proprietor */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><GraduationCap size={16} className="inline-icon" /> Leadership</div>
            <h2 className="section-title">
              Meet Our <span className="gold-text">Proprietor & Guide</span>
            </h2>
            <div className="gold-divider center" />
          </div>

          <div className="proprietor-card">
            <div className="prop-avatar">
              <div className="prop-avatar-icon"><GraduationCap size={48} /></div>
            </div>
            <div className="prop-info">
              <h3 className="prop-name">Sirajudeen Yousufi</h3>
              <p className="prop-title">Proprietor, Lead Islamic Scholar & Tour Guide</p>
              <div className="gold-divider" style={{margin:'1rem 0'}} />
              <div className="prop-bio">
                <p>
                  A distinguished Islamic scholar with a lifelong commitment to religious education and
                  pilgrimage service, Sirajudeen Yousufi founded Haram Hajj Service in 2004 with a vision
                  to provide authentic, spiritually guided Umrah and Hajj experiences to pilgrims from Tamil Nadu.
                </p>
                <p style={{marginTop:'1rem'}}>
                  Having studied at renowned Islamic institutions, he brings deep knowledge of Shariah,
                  Fiqh, and Hadith to every pilgrimage group he leads. His approach combines scholarly
                  rigor with compassionate pastoral care.
                </p>
              </div>
              <div className="prop-credentials">
                {[
                  { icon: <GraduationCap size={18} />, label: 'Islamic Studies – Advanced Shariah' },
                  { icon: <Book size={18} />, label: 'Certified Quran Teacher' },
                  { icon: <Landmark size={18} />, label: '20+ Umrah & Hajj Journeys Led' },
                  { icon: <Radio size={18} />, label: 'Founder – LIVE DAWAH Channel' },
                ].map(c => (
                  <div key={c.label} className="prop-cred">
                    <span>{c.icon}</span> {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Organizations */}
      <section className="section-py" style={{background:'var(--dark-800)'}}>
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag" style={{background:'rgba(245,158,11,.15)'}}>
              <Building2 size={16} className="inline-icon" /> Our Network
            </div>
            <h2 className="section-title" style={{color:'#fff'}}>
              Our <span className="gold-text">Organizations & Channels</span>
            </h2>
            <div className="gold-divider center" />
          </div>
          <div className="org-grid">
            {ORGANIZATIONS.map((o, i) => {
              const Icon = ICON_MAP[o.icon] || Building2;
              return (
                <div key={i} className="org-card">
                  <div className="org-icon"><Icon size={32} /></div>
                  <h4 className="org-name">{o.name}</h4>
                  <p className="org-desc">{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><Users size={16} className="inline-icon" /> Our Team</div>
            <h2 className="section-title">The People Behind <span className="gold-text">Your Journey</span></h2>
            <div className="gold-divider center" />
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => {
              const Icon = ICON_MAP[m.icon] || Users;
              return (
                <div key={i} className="team-card">
                  <div className="team-avatar"><Icon size={32} /></div>
                  <h4 className="team-name">{m.name}</h4>
                  <p className="team-role">{m.role}</p>
                  <p className="team-desc">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery */}
      <section className="section-py" style={{background:'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header center" style={{textAlign:'center'}}>
            <div className="section-tag"><Camera size={16} className="inline-icon" /> Gallery Highlights</div>
            <h2 className="section-title">Memories from <span className="gold-text">Sacred Journeys</span></h2>
            <div className="gold-divider center" />
          </div>
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((g, i) => {
              const Icon = ICON_MAP[g.icon] || Landmark;
              return (
                <div key={i} className="gallery-item">
                  <div className="gallery-icon"><Icon size={32} /></div>
                  <div className="gallery-label">{g.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="section-py bg-islamic" style={{textAlign:'center'}}>
        <div className="container">
          <div className="cta-arabic" style={{fontFamily:'var(--font-arabic)',fontSize:'1.8rem',color:'var(--gold-400)',marginBottom:'1.5rem'}}>
            لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
          </div>
          <h2 className="section-title" style={{color:'#fff',marginBottom:'1.25rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'}}>
            Ready to Begin Your <span className="gold-text">Spiritual Journey?</span>
          </h2>
          <p style={{color:'rgba(255,255,255,.75)',marginBottom:'2.5rem',maxWidth:'550px',margin:'0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.7}}>
            Contact us today for a free consultation and let us help you plan
            the most blessed experience of your life.
          </p>
          <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn btn-primary" style={{padding:'0.9rem 2.2rem'}}>
              <Phone size={18} /> Contact Us
            </Link>
            <Link to="/packages" className="btn btn-outline" style={{padding:'0.9rem 2.2rem'}}>
              <Landmark size={18} /> View Packages
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{padding:'0.9rem 2.2rem'}}
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
