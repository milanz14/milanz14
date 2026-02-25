import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollArrow from "./ScrollArrow";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Orb from "./Orb";

const PROJECTS = [
  {
    name: "Quotar",
    emoji: "﹩",
    description:
      "A robust quoting agent built to eliminate spreadsheet-based sales quotes. My mission is to provide a user-friendly and efficient solution that streamlines sales processes, saving time and effort for both sellers and buyers. Currently in development.",
    tags: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    github: "https://github.com/milanz14/quotar",
    live: null,
  },
  {
    name: "Savee",
    emoji: "📋",
    description:
      "A full stack application for managing and understanding your personal finances. With a user-friendly interface and a clean, modern design, Savee empowers you to take control of your finances and make informed decisions about your future.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Mantine"],
    github: "https://github.com/milanz14/savee",
    live: "https://savee.netlify.app/",
  },
  {
    name: "React Pass Generator",
    emoji: "🔓",
    description:
      "A react based password generator for all of your unique password needs. Lowercase letters, capital letters, numbers, symbols and length of password are all customizable. It's a fun and easy to use tool for generating secure passwords.",
    tags: ["React", "Firebase", "Node.js"],
    github: "https://github.com/milanz14/ReactPassGen",
    live: "https://github.com/milanz14/ReactPassGen",
  },
  {
    name: "6Wordle",
    emoji: "🎲",
    description:
      "A browser-based word guessing game inspired by Wordle — but harder. You have 6 attempts to guess a secret 6-letter word.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/milanz14/6Wordle",
    live: "https://6wordle.surge.sh/",
  },
];

function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="projects" className="section">
      <Orb
        size="450px"
        color="radial-gradient(circle, #6366f1, transparent)"
        top="20%"
        left="0%"
        opacity={0.06}
      />
      <Orb
        size="400px"
        color="radial-gradient(circle, #818cf8, transparent)"
        top="80%"
        left="100%"
        opacity={0.05}
      />
      <div className="container">
        <SectionHeading label="Projects" index={3} />
        <div ref={ref} className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              className="project-card"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.4 }}>
              <div className="project-header">
                <div>
                  <span className="project-emoji">{p.emoji}</span>
                  <h3 className="project-name syne">{p.name}</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.5rem",
                  }}>
                  {p.live && <span className="project-badge">Active</span>}
                  <div className="project-links">
                    {p.github && p.live && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        title="GitHub repo">
                        {/* GitHub icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                        title="Live site">
                        {/* External link icon */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="project-tag"
                    style={{ color: "white" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <FadeIn delay={0.25} className="">
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              href="https://github.com/milanz14"
              target="_blank"
              rel="noreferrer"
              className="more-gh"
              style={{ color: "white" }}>
              More on GitHub →
            </a>
          </div>
        </FadeIn>
        <ScrollArrow to="contact" />
      </div>
    </section>
  );
}

export default Projects;
