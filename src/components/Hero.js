import React from "react";
import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 md:mb-12">
          <h1 className="max-width-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-bold text-center md:text-5xl md:text-left hover:bg-gradient-to-l from-pink-500 to-violet-500">
            Milan Zagorac <br />
            Web Developer
          </h1>
          <p className="max-w-sm text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-left hover:bg-gradient-to-b from-pink-500 to-violet-500">
            Full stack web developer with a passion for JavaScript. My areas of
            expertise are React, Vue, TypeScript and Node.
          </p>
          <div className="flex justify-center md:justify-start">
            <a className="p-3 px-6 pt-2 text-white bg-primary rounded-full baseline hover:cursor-pointer hover:bg-gradient-to-t from-pink-500 to-violet-500">
              Contact Me
            </a>
          </div>
        </div>

        <div className="drop-shadow-md md:w-1/2">
          <img src={HeroImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
