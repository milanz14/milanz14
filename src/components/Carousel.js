import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === projects.length ? 0 : prevIndex + 1;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="flex justify-around mt-8">
        <div
          className="leftArrow animate-bounce shadow-xl rounded-2xl w-1"
          onClick={handlePrevious}
          disabled={currentIndex === 0 ? true : false}
        >
          <i className="fa-solid fa-arrow-left bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-3xl font-bold text-center md:text-5xl"></i>
        </div>
        <div className="rightArrow" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-3xl font-bold text-center md:text-5xl"></i>
        </div>
      </div>
      <div
        className="mt-8 flex justify-center"
        key={projects[currentIndex].name}
      >
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 md:w-3/4">
          <img
            className="w-21 h-21 mt-1 rounded-lg"
            src={projects[currentIndex].imgSrc}
            alt="project screenshot"
          />
          <h5 className="text-white text-lg font-bold">
            {projects[currentIndex].subtitle} - {projects[currentIndex].name}
          </h5>
          <p className="text-sm text-white">
            {projects[currentIndex].description}
          </p>
          <div className="flex flex-row items-center">
            <a
              href={projects[currentIndex].githubLink}
              target="_blank"
              className="text-white px-4"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={projects[currentIndex].liveSite}
              className="text-white px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-pager"></i>
            </a>
          </div>
          <div>
            {projects[currentIndex].tech.map((data, idx) => (
              <span
                key={idx}
                className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2"
              >
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
