import React, { useRef, useEffect, useState } from "react";
import newsImg1 from "../assets/images/news/news1.png";
import newsImg2 from "../assets/images/news/news2.png";
import newsImg3 from "../assets/images/news/news3.png";

const newsData = [
  {
    image: newsImg1,
    title: "LGSA Annual Science Fair 2026",
    date: "March 15, 2026",
    description:
      "Students showcased innovative projects in science, technology, and engineering through interactive demonstrations.",
    link: "#",
  },
  {
    image: newsImg2,
    title: "New Sports Complex Inauguration",
    date: "February 28, 2026",
    description:
      "A modern sports complex was officially opened to enhance student wellness and athletic development.",
    link: "#",
  },
  {
    image: newsImg3,
    title: "Community Outreach Program",
    date: "January 20, 2026",
    description:
      "Students and faculty participated in a meaningful outreach initiative supporting local communities.",
    link: "#",
  },
  {
    image: newsImg1,
    title: "Inclusive Learning Workshop for Educators",
    date: "December 10, 2025",
    description:
      "Teachers attended a professional development workshop focused on inclusive education strategies and student support.",
    link: "#",
  },
  {
    image: newsImg2,
    title: "Student Leadership Training Program",
    date: "November 22, 2025",
    description:
      "Selected students completed a leadership training program aimed at developing confidence, teamwork, and responsibility.",
    link: "#",
  },
  {
    image: newsImg3,
    title: "Parent-Teacher Engagement Conference",
    date: "October 18, 2025",
    description:
      "A collaborative event strengthening communication between parents and educators for improved student outcomes.",
    link: "#",
  },
  {
    image: newsImg1,
    title: "Arts and Creativity Week Celebration",
    date: "September 30, 2025",
    description:
      "Students expressed creativity through visual arts, music, and performances during the annual arts celebration.",
    link: "#",
  },
  {
    image: newsImg2,
    title: "Health and Wellness Awareness Campaign",
    date: "August 25, 2025",
    description:
      "A school-wide initiative promoting mental health, physical wellness, and healthy lifestyle habits.",
    link: "#",
  },
];

function News() {
  const trackRef = useRef(null);
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

  // measure the duplicated track and set CSS vars so the CSS animation can run
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = null;
    let attempts = 0;

    function recalc() {
      const fullWidth = track.scrollWidth || track.getBoundingClientRect().width;
      if (!fullWidth && attempts < 20) {
        attempts += 1;
        raf = requestAnimationFrame(recalc);
        return;
      }

      const singleWidth = fullWidth / 2 || 0;
      const speed = 30; // px per second, tweak for tempo
      const duration = singleWidth / speed;

      // set CSS variables on the track element
      track.style.setProperty("--scroll-distance", `-${singleWidth}px`);
      track.style.setProperty("--scroll-duration", `${Math.max(duration, 8)}s`);
    }

    // initial calc and a small delayed recalc to account for images
    recalc();
    const timeout = setTimeout(recalc, 250);

    function onResize() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recalc);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [visible]);

  return (
    <section ref={sectionRef} className={`news-section ${visible ? "show" : ""}`} id="news">
      <div className="news-wrapper">

        <header className={`news-header ${visible ? "show" : ""}`}>
          <h2 id="news-heading" className="news-heading">
            Latest News
          </h2>
          <p className="news-subheading">
            Stay updated with our latest events, announcements, and student achievements.
          </p>
        </header>

        <div className={`news-carousel ${visible ? "show" : ""}`}>
          <div className="carousel-viewport">
            <div className="carousel-track" role="list" ref={trackRef}>
              {[...newsData, ...newsData].map((item, index) => (
                <article
                  key={index}
                  className={`carousel-item ${visible ? "item-show" : ""}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <figure className="news-item-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width="640"
                      height="360"
                    />
                  </figure>

                  <div className="news-item-content">
                    <p className="news-item-date" aria-hidden="true">
                      {item.date}
                    </p>

                    <h3 id={`news-item-${index}`} className="news-item-title">
                      {item.title}
                    </h3>

                    <p className="news-item-text">{item.description}</p>

                    <a
                      href={item.link || "#"}
                      className="news-item-button"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default News;