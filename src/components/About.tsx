import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollArrow from "./ScrollArrow";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Orb from "./Orb";

function About() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  const cards = [
    {
      icon: "⚡",
      title: "Frontend",
      desc: "React, Next.js, TypeScript, Tailwind",
    },
    {
      icon: "🛠",
      title: "Backend",
      desc: "Node.js, Express, Python, Flask, Firebase, Supabase",
    },
    { icon: "🗄", title: "Database", desc: "PostgreSQL, MongoDB" },
    { icon: "☁️", title: "Infra", desc: "Docker" },
  ];

  const paras = [
    {
      delay: 0,
      text: (
        <>
          I'm a self-taught developer from the{" "}
          <strong style={{ color: "#fff", fontWeight: 500 }}>
            Toronto area
          </strong>{" "}
          with an unconventional background: 13 years in commercial sales and 4
          years in mechanical engineering. I started coding on and off a long
          time ago but really picked it up again in 2019. I completed my
          software engineering training at{" "}
          <strong style={{ color: "#fff", fontWeight: 500 }}>
            Springboard Bootcamp
          </strong>{" "}
          in 2021 and haven't stopped building since.
        </>
      ),
    },
    {
      delay: 0.1,
      text: (
        <>
          That cross-discipline background shapes how I approach software. I
          build things that solve{" "}
          <strong style={{ color: "#a5b4fc", fontWeight: 500 }}>
            real business problems
          </strong>{" "}
          and not just elegant code for its own sake. My flagship project,
          Quotar, came directly from watching sales teams waste hours wrestling
          with spreadsheet-based quoting. I am building the tool that I wish
          existed when I was writing quotes daily.
        </>
      ),
    },
    {
      delay: 0.15,
      text: (
        <>
          My stack centres on{" "}
          <strong style={{ color: "#fff", fontWeight: 500 }}>
            React, TypeScript, and Node.js
          </strong>
          , with PostgreSQL, MongoDB, and Docker rounding out the backend. I'm
          equally comfortable owning a UI component or designing a database
          schema.
        </>
      ),
    },
    {
      delay: 0.2,
      text: (
        <em
          style={{
            color: "#3f3f46",
            borderLeft: "2px solid rgba(99,102,241,0.4)",
            paddingLeft: "1rem",
            display: "block",
            fontSize: "0.95rem",
          }}>
          Tinkering and learning ad infinitum.
        </em>
      ),
    },
  ];

  return (
    <section id="about" className="section">
      <Orb
        size="500px"
        color="radial-gradient(circle, #6366f1, transparent)"
        top="10%"
        left="100%"
        opacity={0.06}
      />
      <Orb
        size="350px"
        color="radial-gradient(circle, #818cf8, transparent)"
        top="80%"
        left="10%"
        opacity={0.05}
      />
      <div className="container">
        <SectionHeading label="About" index={1} />
        <div className="about-grid">
          <div className="about-text">
            {paras.map((p, i) => (
              <FadeIn key={i} delay={p.delay}>
                <p
                  style={{
                    color: "#71717a",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}>
                  {p.text}
                </p>
              </FadeIn>
            ))}
          </div>
          <div ref={cardsRef} className="about-cards">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className="about-card"
                initial={{ opacity: 0, y: 16 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="about-card-icon">{c.icon}</div>
                <div className="about-card-title syne">{c.title}</div>
                <div className="about-card-desc">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <ScrollArrow to="skills" />
      </div>
    </section>
  );
}

export default About;
