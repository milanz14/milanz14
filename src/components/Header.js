import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/header-logo.png";
import "../styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container relative mx-auto p-6 bg-transparent sticky top-0 z-50">
      <div className="flex items-center justify-between text-primary">
        {/* <!-- logo --> */}
        <Link to="/">
          <div className="pt-2">
            <img src={headerLogo} alt="logo" className="bg-transparent" />
          </div>
        </Link>
        {/* <!-- Menu Items --> */}

        <div className="hidden md:flex space-x-4">
          <Link
            to="/about"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-tertiary hover:cursor-pointer"
          >
            Contact
          </Link>
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
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md "
              : "hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <a className="hover:text-tertiary hover:cursor-pointer">About</a>
          <a className="hover:text-tertiary hover:cursor-pointer">Projects</a>
          <a className="hover:text-tertiary hover:cursor-pointer">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
