import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Orb from "./Orb";
import SectionHeading from "./SectionHeading";
import ScrollArrow from "./ScrollArrow";

const Skills = () => {
  const SKILLS = [
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "Vue", color: "#00ba22" },
    { name: "Next.js", color: "#aaaaab" },
    { name: "Node.js", color: "#68A063" },
    { name: "Python", color: "#3776AB" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05032" },
    { name: "Tanstack Query", color: "#764ABC" },
    { name: "Tanstack Router", color: "#4d0ab8" },
    { name: "Tailwind CSS", color: "#38BDF8" },
    { name: "Express", color: "#aaaaaa" },
    { name: "Flask", color: "#41B883" },
    { name: "Firebase", color: "#FFCA28" },
    // { name: "AWS", color: "#FF9900" },
    // { name: "Kubernetes", color: "#326CE5" },
    // { name: "Linux", color: "#FCC624" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="skills" className="section">
      <Orb
        size="600px"
        color="radial-gradient(circle, #4f46e5, transparent)"
        top="50%"
        left="50%"
        opacity={0.05}
      />
      <Orb
        size="300px"
        color="radial-gradient(circle, #a5b4fc, transparent)"
        top="0%"
        left="0%"
        opacity={0.04}
      />
      <div className="container">
        <SectionHeading label="Skills" index={2} />
        <div ref={ref} className="skills-wrap">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-pill"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.025, duration: 0.22 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = skill.color + "55";
                e.currentTarget.style.background = skill.color + "0d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.background = "";
              }}>
              <span className="skill-dot" style={{ background: skill.color }} />
              {skill.name}
            </motion.div>
          ))}
        </div>
        <ScrollArrow to="projects" />
      </div>
    </section>
  );
};

export default Skills;
