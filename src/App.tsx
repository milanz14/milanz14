import { useEffect, useState } from "react";

import "./styles/global.css";

export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const style = document.createElement("style");
    // style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.3 },
    );
    ["hero", "about", "skills", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", background: "#07070f", color: "#e4e4e7" }}>
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
