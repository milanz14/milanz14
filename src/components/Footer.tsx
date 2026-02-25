function Footer() {
  return (
    <footer className="footer">
      <span style={{ color: "#3f3f46", fontSize: "0.75rem" }}>
        © {new Date().getFullYear()} Milan Zagorac
      </span>
      <span style={{ color: "#27272a", fontSize: "0.75rem" }}>
        Built with React & Framer Motion with ❤️
      </span>
    </footer>
  );
}

export default Footer;
