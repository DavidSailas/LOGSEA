import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src={Logo} alt="LOGSEA Logo" className="logo-img" />

        <div className="header-top-text">
          <div className="school-name">
            Lamb of God Special Education Academy of Buhangin, Inc.
          </div>
          <div className="header-tagline">
            <span>Dedicated to nurturing and educating children with special needs.</span>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#">Facilities</a>
          <a href="#">News</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#enroll" className="enroll-btn">Enroll Now</a>
      </div>
    </header>
  );
}

export default Header;