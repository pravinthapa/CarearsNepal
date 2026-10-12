import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenInquiry }) {
  const location = useLocation();

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        
        {/* Brand Logo */}
        <Link to="/" className="site-nav-brand" aria-label="Carears home">
          <span className="site-nav-logo-text">
            Carears<span className="dot">.ai</span>
          </span>
        </Link>

        {/* Center Pill */}
        <div className="site-nav-center">
          <div className="site-nav-pill">
            <span className="site-nav-pill-dot" aria-hidden="true"></span>
            <span>Cohort 02</span>
            <span className="site-nav-pill-sep">·</span>
            <span className="site-nav-pill-enrolling">Now Enrolling</span>
          </div>
        </div>

        {/* Links */}
        <div className="site-nav-links">
          <Link to="/testimonials" className="site-nav-link">
            Testimonials
          </Link>
          <Link to="/blog" className="site-nav-link">
            Blogs
          </Link>
        </div>

      </div>
    </header>
  );
}
