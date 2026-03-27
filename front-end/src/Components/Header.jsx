import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGSEA</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#enroll" className="enroll-btn">Enroll Now</a>
    </header>
  );
}

export default Header;