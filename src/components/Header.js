import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="left-0 h-48 sm:h-64 xs:h-64 p-5 bg-primary shadow md:flex md:items-center md:justify-between z-[-1] md:z-auto md:static absolute w-full left-1 md:w-auto md:py-0 py-4">
      <div clasName="flex justify-between items-center">
        <span class="glow text-sm text-black uppercase cursor-pointer py-4">
          <NavLink to="/">
            Milan <br />
            Zagorac
            <br />
          </NavLink>
        </span>
      </div>
      <ul className="md:flex md:items-center">
        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/about"
            className="text-xl duration-200 hover:text-secondary"
          >
            About
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/projects"
            className="text-xl duration-200 hover:text-secondary"
          >
            Projects
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/contact"
            className="text-xl duration-200 hover:text-secondary"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
