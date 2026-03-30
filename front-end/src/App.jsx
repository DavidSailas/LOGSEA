import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Facilities from "./Components/Facilities";
import News from "./Components/News";
import { scrollToSection } from "./utils/scrollToSection";

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname + window.location.hash);

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname + window.location.hash);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (path) => {
    const current = window.location.pathname + window.location.hash;
    const same = current === path;

    if (!same) {
      window.history.pushState({}, "", path);
      setRoute(path);
    } else {
      // still update route state to trigger any listeners
      setRoute(path);
    }

    const hashIndex = path.indexOf("#");
    if (hashIndex !== -1) {
      const id = path.slice(hashIndex + 1);

      // retry until the target exists (handles component mount/render delay)
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          // use shared helper for consistent offset and easing
          scrollToSection(id);
          return;
        }
        attempts += 1;
        if (attempts < 80) requestAnimationFrame(tryScroll);
      };

      // start shortly after navigation to give React a frame to render
      setTimeout(tryScroll, 16);
    } else {
      // scroll to top for full page routes
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  // route matching: / or /#section => Home, /facilities => Facilities
  const pathname = route.split("#")[0];

  return (
    <div className="app-root">
      <Header onNavigate={navigate} currentRoute={route} />

      <main style={{ marginTop: "var(--header-full-height)" }}>
        {pathname === "/facilities" ? (
          <Facilities />
        ) : pathname === "/news" ? (
          <News />
        ) : (
          <Home />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
