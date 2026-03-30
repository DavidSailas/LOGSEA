import React, { useEffect, useRef, useState } from "react";
import { FaBook, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

function WhyChooseUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`why ${visible ? "visible" : ""}`} id="why" ref={ref}>
      <h2>Why Choose LGSA?</h2>
      <div className="cards">
        <div className="card">
          <div className="card-icon">
            <FaBook />
          </div>
          <h3>Personalized Learning</h3>
          <p>Customized educational plans to meet each child's individual needs and strengths.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaChalkboardTeacher />
          </div>
          <h3>Expert Educators</h3>
          <p>Highly trained teachers specializing in special education for impactful guidance.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaUsers />
          </div>
          <h3>Inclusive & Safe</h3>
          <p>A nurturing environment that celebrates diversity and encourages social growth.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;