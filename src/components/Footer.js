import React from "react";
// import headerLogo from "../assets/header-logo.png";
// import twitter from "../assets/icon-twitter.svg";
// import youtube from "../assets/icon-youtube.svg";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black" id="footer">
      {/* <!-- Flex Container --> */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and Social Links Container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved.
          </div>
          {/* <!-- Logo --> */}
          <button
            onClick={handleScrollToTop}
            className="hover:cursor-pointer transform transition duration-500 hover:scale-105"
          >
            <div className="pt-2">
              <h1 className="max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-5xl font-bold text-center md:text-5xl md:text-left">
                <i className="fa-solid fa-laptop-code pr-2"></i>mz
              </h1>
            </div>
          </button>
          {/* <!-- Social Links Container --> */}
          {/* <div className="flex justify-center space-x-4 py-2">
            <a href="#">
              <img src={twitter} className="h-8" alt="" />
            </a>
            <a href="#">
              <img src={youtube} className="h-8" alt="" />
            </a>
          </div> */}
        </div>
        {/* <!-- List container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-secondary">
            <a
              href="#about"
              className="hover:text-tertiary hover:cursor-pointer transform transition duration-500 hover:scale-105"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-tertiary hover:cursor-pointer transform transition duration-500 hover:scale-105"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-tertiary hover:cursor-pointer transform transition duration-500 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
