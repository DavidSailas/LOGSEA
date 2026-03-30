import React, { useRef, useEffect, useState } from "react";
import { FaBook, FaMicroscope, FaFootballBall, FaLaptop } from "react-icons/fa";
import bgImage from "../assets/images/backgrounds/Facilities.jpg";

const facilitiesData = [
  {
    icon: <FaBook />,
    title: "Library",
    description: "A well-stocked library with curated resources, quiet study areas, and research support services.",
  },
  {
    icon: <FaMicroscope />,
    title: "Science Lab",
    description: "Equipped laboratories for hands-on experiments in physics, chemistry, and biology with modern safety features.",
  },
  {
    icon: <FaFootballBall />,
    title: "Sports Complex",
    description: "Indoor and outdoor courts for basketball, volleyball, and a playing field for team sports and physical education.",
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    description: "High-performance workstations, up-to-date software, and supervised access for digital learning and coding practice.",
  },
];

function Facilities() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`facilities-section ${visible ? "show" : ""}`}
      id="facilities"
      aria-labelledby="facilities-title"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="facilities-overlay">
        <div className="facilities-container">
          <div className="facilities-header">
            <h2 id="facilities-title" className="section-title">Our Facilities</h2>
            <p className="section-subtitle">
              Modern spaces designed to foster learning, creativity, and well-being.
            </p>
          </div>

          <div className="facilities-grid">
              {facilitiesData.map((f, i) => (
                <article
                  className={`facility-card ${visible ? "card-show" : ""}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                  key={i}
                >
                <a
                  className="facility-card-link"
                  href="#contact"
                  aria-label={`Learn more about ${f.title}`}
                >
                  <div className="facility-icon" aria-hidden>{f.icon}</div>
                  <h3 id={`facility-${i}-title`} className="facility-title">{f.title}</h3>
                  <p className="facility-description">{f.description}</p>
                </a>

                <div className="facility-actions">
                  <a className="card-cta" href="#contact">Learn More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;