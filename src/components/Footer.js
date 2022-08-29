import React from "react";
import headerLogo from "../assets/header-logo.png";

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
              <img src={headerLogo} alt="logo" className="bg-transparent" />
            </div>
          </button>
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4 py-2">
            <a href="#">
              <img src="img/icon-facebook.svg" className="h-8" alt="" />
            </a>
            <a href="#">
              <img src="img/icon-youtube.svg" className="h-8" alt="" />
            </a>
            <a href="#">
              <img src="img/icon-twitter.svg" className="h-8" alt="" />
            </a>
            <a href="#">
              <img src="img/icon-pinterest.svg" className="h-8" alt="" />
            </a>
            <a href="#">
              <img src="img/icon-instagram.svg" className="h-8" alt="" />
            </a>
          </div>
        </div>
        {/* <!-- List container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
