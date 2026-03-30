import React, { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import Logo from "../assets/images/Logo.png";

function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashNav = (e, id, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      // attempt to scroll after a short delay so target can mount
      setTimeout(() => scrollToSection(id), 64);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>

      <div className={`header-top ${scrolled ? "hide" : ""}`}>
        <img src={Logo} alt="LGSA Logo" className="logo-img" />

        <div className="header-top-text">
          <div className="school-name">
            Lamb of God Special Education Academy of Buhangin, Inc.
          </div>
          <div className="header-tagline">
            Dedicated to nurturing and educating children with special needs.
          </div>
        </div>
      </div>

      <div className={`header-bottom ${scrolled ? "sticky-nav" : ""}`}>
        <nav>
          <a href="/#home" onClick={(e)=>handleHashNav(e,'home','/#home')}>Home</a>
          <a href="/#about" onClick={(e)=>handleHashNav(e,'about','/#about')}>About</a>
          <a href="/#programs" onClick={(e)=>handleHashNav(e,'programs','/#programs')}>Programs</a>
          <a href="/facilities" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/facilities'); else window.location = '/facilities';}}>Facilities</a>
          <a href="/news" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/news'); else window.location = "news";}}>News</a>
          <a href="/#contact" onClick={(e)=>handleHashNav(e,'contact','/#contact')}>Contact</a>
        </nav>

        <a href="#enroll" className="enroll-btn">Enroll Now</a>
      </div>
    </header>
  );
}

export default Header;