import { motion } from "framer-motion";
import Cursor from "./Cursor";
import useTypewriter from "../hooks/useTypewriter";

function Hero() {
  const typed = useTypewriter([
    "software developer",
    "react enthusiast",
    "typescript devotee",
    "always building",
    "always learning",
  ]);
  return (
    <section id="hero" className="hero">
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "min(700px,80vw)",
          height: "min(700px,80vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)",
          transform: "translate(30%,-30%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "min(500px,60vw)",
          height: "min(500px,60vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)",
          transform: "translate(-40%,40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "56rem" }}>
        <motion.h1
          className="hero-name syne"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}>
          Milan<span style={{ color: "#818cf8" }}>.</span>
        </motion.h1>
        <motion.div
          className="hero-typerow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}>
          <span className="hero-typed">{typed}</span>
          <Cursor />
        </motion.div>
        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}>
          Former sales manager and mechanical engineer turned developer. I build
          software that solves real business problems because I've lived them.
        </motion.p>
        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.35 }}>
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }>
            View Projects
          </button>
          <button
            className="btn-ghost"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }>
            Get in touch
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ cursor: "pointer" }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
