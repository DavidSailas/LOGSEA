import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND + SOCIAL */}
        <div className="footer-col brand">
          <h2 className="brand-title">LGSA</h2>
          <p className="brand-desc">
            Lamb of God Special Education Academy provides inclusive, high-quality education that nurtures growth, compassion, and excellence.
          </p>
          <div className="social-icons" aria-label="social links">
            <a href="https://www.facebook.com/LGSADavao" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="mailto:info@lgsa.edu.ph" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col newsletter">
          <h4>Subscribe</h4>
          <p>Get news, events, and enrollment updates delivered to your inbox.</p>
          <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" aria-label="Email address" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/#home'); else window.location = '/#home';}}>Home</a></li>
            <li><a href="#about" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/#about'); else window.location = '/#about';}}>About</a></li>
            <li><a href="#programs" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/#programs'); else window.location = '/#programs';}}>Programs</a></li>
            <li><a href="/facilities" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/facilities'); else window.location = '/facilities';}}>Facilities</a></li>
            <li><a href="#news" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/news'); else window.location = '/#news';}}>News</a></li>
            <li><a href="#contact" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/#contact'); else window.location = '/#contact';}}>Contact</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <small>© {year} Lamb of God Special Education Academy (LGSA). All rights reserved.</small>
          <nav className="legal-links" aria-label="legal">
            <a href="#privacy">Privacy</a>
            <span aria-hidden>·</span>
            <a href="#terms">Terms</a>
          </nav>
          <div className="partner-credit" aria-hidden>
            Built by <span className="partner-name-inline">JMSOneIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;