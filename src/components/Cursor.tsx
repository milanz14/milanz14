import { motion } from "framer-motion";

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 0.5, 1] }}
      style={{
        display: "inline-block",
        width: 3,
        height: "1.5em",
        background: "#818cf8",
        marginLeft: 6,
        borderRadius: 2,
        verticalAlign: "middle",
      }}
    />
  );
}

export default Cursor;
