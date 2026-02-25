import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SectionHeading({ label, index }: { label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="section-heading">
      <motion.span
        className="section-index"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}>
        0{index}
      </motion.span>
      <motion.h2
        className="section-title syne"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.35, delay: 0.05 }}>
        {label}
      </motion.h2>
      <motion.div
        className="section-rule"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

export default SectionHeading;
