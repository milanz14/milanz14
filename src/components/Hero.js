import AboutMe from "../assets/aboutme.png";
import avatar from "../assets/avatar.png";

import { useRef } from "react";

const Hero = () => {
  const imageRef = useRef();

  return (
    <section id="hero" className="h-full">
      <div className="container h-full flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col items-center mb-8 space-y-8 md:w-1/2">
          <h1 className="max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-5xl font-bold text-center md:text-5xl ">
            Milan Zagorac <br />
            Software <br />
            Developer
          </h1>
          <p className="max-w-sm pt-10 text-left bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-l from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 lg:text-left">
            I write code.
          </p>
          <div className="flex flex-col md:hidden transform transition duration-500 hover:scale-105">
            <img src={avatar} alt="developer memeoji" />
          </div>
          <div className="flex justify-start md:justify-start">
            <a
              href="#contact"
              className="p-3 px-6 pt-2 text-white bg-primary rounded-full baseline hover:cursor-pointer transition-all duration-500 bg-gradient-to-l from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hover:drop-shadow-lg md:w-1/2 transform transition duration-500">
          <img src={AboutMe} alt="details code snippet" ref={imageRef} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
