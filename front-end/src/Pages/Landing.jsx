import React from "react";
import "../Pages/landing.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import About from "../Components/About";
import Programs from "../Components/Programs";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

function Landing() {
  return (
    <div className="landing-container">
      <Header />
      <Hero />
      <WhyChooseUs />
      <About />
      <Programs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Landing;