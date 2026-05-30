import { Link } from 'react-router-dom';
import { SITE } from '../data/constants';

import {
  Landmark,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronRight
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';

import './Footer.css';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Packages', path: '/packages' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

const packageLinks = [
  { label: 'Basic Package', path: '/packages#basic' },
  { label: 'Economy Package', path: '/packages#economy' },
  { label: 'Premium Package', path: '/packages#premium' },
  { label: 'Elite Package', path: '/packages#elite' },
  { label: 'Palestine Tour', path: '/packages#tours' },
  { label: 'Dubai Tour', path: '/packages#tours' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top wave */}
      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#0a1810"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">
                <Landmark size={32} />
              </span>

              <div>
                <div className="footer-logo-name">
                  Haram Hajj
                </div>

                <div className="footer-logo-sub">
                  Service
                </div>
              </div>
            </div>

            <p className="footer-brand-desc">
              Your trusted partner for a spiritually enriching
              Umrah & Hajj experience. Serving pilgrims from
              Tamil Nadu with love, care, and divine guidance.
            </p>

            <div className="footer-arabic">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>

            {/* Social Icons */}
            <div className="footer-social">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Quick Links
            </h4>

            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="footer-link"
                  >
                    <span className="footer-link-arrow">
                      <ChevronRight size={14} />
                    </span>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Our Packages
            </h4>

            <ul className="footer-links">
              {packageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="footer-link"
                  >
                    <span className="footer-link-arrow">
                      <ChevronRight size={14} />
                    </span>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Contact Us
            </h4>

            <div className="footer-contact-list">
              {SITE.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="footer-contact-item"
                >
                  <span className="footer-contact-icon">
                    <Phone size={16} />
                  </span>

                  <span>{phone}</span>
                </a>
              ))}

              <a
                href={`mailto:${SITE.email}`}
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={16} />
                </span>

                <span>{SITE.email}</span>
              </a>

              <a
                href={`https://wa.me/${SITE.whatsapp.replace(
                  /\D/g,
                  ''
                )}`}
                className="footer-contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-contact-icon">
                  <MessageCircle size={16} />
                </span>

                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Branches */}
            <h4
              className="footer-col-title"
              style={{ marginTop: '1.5rem' }}
            >
              Branch Locations
            </h4>

            <div className="footer-branches">
              {SITE.branches.map((branch) => (
                <div
                  key={branch.city}
                  className="footer-branch"
                >
                  <span className="footer-branch-city">
                    <MapPin
                      size={14}
                      style={{ marginRight: '0.4rem' }}
                    />

                    {branch.city}
                  </span>

                  <span className="footer-branch-addr">
                    {branch.address}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year}{' '}
            <strong>Haram Hajj Service</strong>. All Rights
            Reserved.
          </p>

          <p className="footer-by">
            Serving pilgrims with ❤️ from Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}