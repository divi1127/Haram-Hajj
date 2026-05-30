import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  BLOG_CATEGORY_MAP,
  FAQS,
  SITE,
  ICON_MAP
} from '../data/constants';

import {
  Search,
  Calendar,
  Clock,
  ChevronRight,
  Library,
  BookOpen,
  Layout,
  ChevronUp,
  ChevronDown,
  Play,
  Mail,
  HelpCircle
} from 'lucide-react';

import './About.css';
import blogHero from '../assets/blog_hero.png';
import { useLanguage } from '../context/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();
  const [activeCat, setActiveCat] = useState('All');

  const filtered =
    activeCat === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCat);

  return (
    <div className="page-wrapper">
  <section
  className="page-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(4, 20, 10, 0.8), rgba(4, 20, 10, 0.9)), url(${blogHero})`,
    minHeight: '60vh'
  }}
>
  <div
    className="container page-hero-content"
    style={{
      minHeight: '60vh',
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
        fontSize: 'clamp(2.2rem,5vw,3.8rem)',
        fontWeight: 800,
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        maxWidth: '900px'
      }}
    >
      {t('blog.hero.title')} <span className="gold-text">{t('blog.hero.goldTitle')}</span>
    </h1>

    <p
      style={{
        color: 'rgba(255,255,255,.85)',
        maxWidth: '700px',
        fontSize: '1.15rem',
        lineHeight: 1.8,
        marginTop: '1rem'
      }}
    >
      {t('blog.hero.subtitle')}
    </p>
  </div>
</section>

      <section
        className="section-py"
        style={{
          paddingBottom: '0',
          marginTop: '-3rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div className="container">
          <div
            className="glass-light"
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {BLOG_CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[BLOG_CATEGORY_MAP[cat]] || Layout;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`btn ${
                    activeCat === cat ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  <Icon size={18} /> {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div
            className="blog-grid"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '2rem'
            }}
          >
            {filtered.map((post) => {
              const PostIcon = ICON_MAP[post.icon] || BookOpen;

              return (
                <article
                  key={post.id}
                  className="card blog-card"
                >
                  <div
                    className="blog-card-thumb"
                    style={{
                      background:
                        'linear-gradient(135deg,var(--emerald-deep),#041008)',
                      height: '240px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PostIcon size={80} color="#f59e0b" />
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>
                        <Calendar size={14} /> {post.date}
                      </span>

                      <span>
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="blog-card-title"
                    >
                      {post.title}
                    </Link>

                    <p className="blog-card-excerpt">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-outline"
                    >
                      Read Article
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <Search size={60} />

              <h3>No articles found</h3>

              <button
                className="btn btn-primary"
                onClick={() => setActiveCat('All')}
              >
                Show All
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-q"
        onClick={() => setOpen(!open)}
      >
        <span>{faq.q}</span>

        <span>
          {open ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>
      </button>

      {open && (
        <div className="faq-a">
          {faq.a}
        </div>
      )}
    </div>
  );
}