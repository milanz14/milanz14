import React, { useState } from "react";

import headerLogo from "../assets/header-logo.png";
import "../styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="container relative mx-auto p-2 bg-transparent sticky top-0 z-10 hover:z-50">
      <div className="flex items-center justify-between text-primary">
        {/* <!-- logo --> */}
        <button
          onClick={handleScrollToTop}
          className="hover:cursor-pointer hover:scale-105"
        >
          <div className="pt-2">
            <img src={headerLogo} alt="logo" className="bg-transparent" />
          </div>
        </button>
        {/* <!-- Menu Items --> */}

        <div className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-tertiary hover:cursor-pointer">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* <!-- Hamburger Icon --> */}
        <button
          onClick={handleMenuClick}
          id="menu-btn"
          className={
            isOpen
              ? "open block hamburger md:hidden focus:outline-none"
              : " block hamburger md:hidden focus:outline-none"
          }
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className="md:hidden">
        <div
          id="menu"
          className={
            isOpen
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold  text-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md "
              : "hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold  text-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <a href="#about" className="hover:text-tertiary hover:cursor-pointer">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
