import { useEffect, useState } from "react";

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(
      () =>
        document
          .getElementById(id.toLowerCase())
          ?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <button
          className="nav-logo"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
          milan<span style={{ color: "#818cf8" }}>.</span>
        </button>

        {/* Desktop */}
        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l}
              className={`nav-link${active === l.toLowerCase() ? " active" : ""}`}
              onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
          <a
            href="https://github.com/milanz14"
            target="_blank"
            rel="noreferrer"
            className="nav-gh">
            GitHub ↗
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <button
            key={l}
            className={`nav-link${active === l.toLowerCase() ? " active" : ""}`}
            onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
        <a
          href="https://github.com/milanz14"
          target="_blank"
          rel="noreferrer"
          className="nav-gh"
          onClick={() => setMenuOpen(false)}>
          GitHub ↗
        </a>
      </div>
    </>
  );
}

export default Navbar;
