import { useParams, Link } from 'react-router-dom';
import {
  BLOG_POSTS,
  SITE,
  ICON_MAP
} from '../data/constants';

import {
  Calendar,
  Clock,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Share2,
  ArrowLeft,
  Landmark
} from 'lucide-react';

import './About.css';
import blogHero from '../assets/blog_hero.png';

export default function BlogPost() {
  const { slug } = useParams();

  const post = BLOG_POSTS.find(
    (p) => p.slug === slug
  );

  if (!post) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <BookOpen size={80} />

        <h2>Post Not Found</h2>

        <Link
          to="/blog"
          className="btn btn-primary"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
      </div>
    );
  }

  const PostIcon = ICON_MAP[post.icon] || BookOpen;

  return (
    <div className="page-wrapper">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(4,20,10,0.8), rgba(4,20,10,0.9)), url(${blogHero})`
        }}
      >
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>

            <span>
              <ChevronRight size={14} />
            </span>

            <Link to="/blog">Blog</Link>
          </nav>

          <h1
            className="section-title"
            style={{ color: '#fff' }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
              color: '#fff'
            }}
          >
            <span>
              <Calendar size={14} /> {post.date}
            </span>

            <span>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div
          className="container"
          style={{ maxWidth: '900px' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}
          >
            <PostIcon
              size={120}
              color="#f59e0b"
            />
          </div>

          <p
            style={{
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}
          >
            {post.excerpt}
          </p>

          <div
            style={{
              marginTop: '3rem',
              display: 'flex',
              gap: '1rem'
            }}
          >
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <button className="btn btn-outline">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}