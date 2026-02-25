import { motion } from "framer-motion";

function ScrollArrow({ to }: { to: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      style={{ display: "flex", justifyContent: "center", paddingTop: "3rem" }}>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        style={{ cursor: "pointer" }}
        onClick={() =>
          document.getElementById(to)?.scrollIntoView({ behavior: "smooth" })
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
  );
}

export default ScrollArrow;
