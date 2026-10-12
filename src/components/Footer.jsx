import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap row">
        
        {/* Brand & Byline */}
        <div className="left footer-brand">
          <Link className="footer-brand-link" to="/">
            <span className="site-nav-logo-text" style={{ fontSize: '20px' }}>
              Carears<span className="dot">.ai</span>
            </span>
          </Link>
          <span className="footer-byline">
            <span className="by">by</span>
            <span className="rjn">
              <a target="_blank" rel="noopener noreferrer" href="https://remotejobnepal.com">
                Remote Job Nepal
              </a>
            </span>
          </span>
        </div>

        {/* Links */}
        <div className="links">
          <a href="https://remotejobnepal.com" target="_blank" rel="noopener noreferrer">
            Remote Job Nepal <span className="ext">↗</span>
          </a>
          <span className="sep">·</span>
          <Link to="/blog">blog</Link>
          <span className="sep">·</span>
          <a href="https://remotejobnepal.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy
          </a>
          <span className="sep">·</span>
          <a href="https://remotejobnepal.com/termsandcondition" target="_blank" rel="noopener noreferrer">
            Terms
          </a>
          <span className="sep">·</span>
          <a href="https://remotejobnepal.com/contact" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </div>

        {/* Micro */}
        <div className="micro">© 2026 · Made in Kathmandu</div>

      </div>
    </footer>
  );
}
