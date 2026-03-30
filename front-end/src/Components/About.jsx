import React, { useEffect, useRef, useState } from "react";
import AboutImage from "../assets/images/School.jpg";
import { FaGraduationCap, FaUsers, FaHeart } from "react-icons/fa";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [years, setYears] = useState(0);

  // compute years of service dynamically
  const targetYears = new Date().getFullYear() - 1992;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // we only need to trigger once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // smooth number animation for years of service
  useEffect(() => {
    if (!visible) return;
    let rafId = null;
    const duration = 900; // ms
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setYears(Math.floor(eased * targetYears));
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setYears(targetYears);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [visible, targetYears]);

  return (
    <section
      className={`about ${visible ? "visible" : ""}`}
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
    >
      <div className="about-inner">

        <div className="about-text">
          <h2 id="about-heading">About Our Academy</h2>
          <h3>Delivering specialised education since 1992</h3>

          <p>
            Lamb of God Special Education Academy of Buhangin, Inc. (LGSA) provides
            specialist education and therapeutic services for children with diverse learning
            needs. Our multidisciplinary team partners with families to design individualised
            education plans that support academic, social and functional development.
          </p>

          <p>
            We maintain a safe, inclusive learning environment backed by ongoing professional
            development and evidence-informed practices to help every child achieve measurable
            progress.
          </p>

        </div>

        <div className="about-image">
          <figure className="photo-frame">
            <img src={AboutImage} alt="LOGSEA campus" />
            <figcaption>LOGSEA campus — fostering growth since 1992</figcaption>
          </figure>
        </div>

      </div>

      {/* Highlights: placed below the text and image for full-width emphasis */}
      <div className="about-highlights" aria-hidden={!visible}>
        <div className="highlight">
          <div className="icon" aria-hidden>
            <FaGraduationCap />
          </div>
          <h4>{years}+</h4>
          <span>Years of Service</span>
        </div>

        <div className="highlight">
          <div className="icon" aria-hidden>
            <FaUsers />
          </div>
          <h4>Individualised</h4>
          <span>Learning Plans</span>
        </div>

        <div className="highlight">
          <div className="icon" aria-hidden>
            <FaHeart />
          </div>
          <h4>Inclusive</h4>
          <span>Safe Environment</span>
        </div>
      </div>
    </section>
  );
}

export default About;