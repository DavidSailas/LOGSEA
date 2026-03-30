import React from "react";

// Import news images so the bundler (Vite) includes them reliably
import newsImg1 from "../assets/images/news/news1.png";
import newsImg2 from "../assets/images/news/news2.png";
import newsImg3 from "../assets/images/news/news3.png";

const newsData = [
  {
    image: newsImg1,
    title: "LGSA Annual Science Fair 2026",
    date: "March 15, 2026",
    description:
      "Showcasing student projects in science, technology, engineering, and mathematics with interactive demos.",
    link: "#",
  },
  {
    image: newsImg2,
    title: "New Sports Complex Inauguration",
    date: "February 28, 2026",
    description:
      "State-of-the-art sports facilities inaugurated to support physical education and extracurricular activities.",
    link: "#",
  },
  {
    image: newsImg3,
    title: "Community Outreach Program",
    date: "January 20, 2026",
    description:
      "Students and staff engaged in a meaningful outreach program to support local communities.",
    link: "#",
  },
];

function News() {
  return (
    <section className="news-section" id="news" aria-labelledby="news-heading">
      <div className="news-wrapper">

        <header className="news-header">
          <h2 id="news-heading" className="news-heading">
            Latest News
          </h2>
          <p className="news-subheading">
            Stay updated with our latest events, announcements, and student achievements.
          </p>
        </header>

        <div className="news-list">
          {newsData.map((item, index) => (
            <article
              key={index}
              className="news-item"
              role="article"
              aria-labelledby={`news-item-${index}`}
            >
              <figure className="news-item-image" aria-hidden="false">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width="640"
                  height="360"
                />
                <figcaption className="sr-only">{item.title}</figcaption>
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
    </section>
  );
}

export default News;