import React, { useState, useEffect } from "react";

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("right");

  // Handle the sliding animation
  const handleNext = () => {
    if (isSliding) return;
    setDirection("right");
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setIsSliding(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (isSliding) return;
    setDirection("left");
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
      );
      setIsSliding(false);
    }, 500);
  };

  // Determine the animation class based on direction
  const slideClass =
    direction === "right"
      ? "translate-x-0 slide-in-right"
      : "translate-x-0 slide-in-left";

  return (
    <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto mt-8">
      {/* Left Arrow */}
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-b from-pink-700 to-violet-800 p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 transition md:left-4"
        onClick={handlePrevious}
      >
        <i className="fa-solid fa-arrow-left text-white text-2xl"></i>
      </div>

      {/* Carousel Wrapper */}
      <div className="flex justify-center items-center w-full max-w-3xl p-4 overflow-hidden">
        <div
          className={`relative flex flex-col items-center p-6 space-y-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 shadow-lg w-full transition-transform duration-500 ease-in-out ${slideClass}`}
          style={{ minHeight: "500px", maxHeight: "600px" }}
          key={projects[currentIndex].name}
        >
          {/* Project Image */}
          <img
            className="w-full h-52 md:h-60 object-cover rounded-lg"
            src={projects[currentIndex].imgSrc}
            alt={projects[currentIndex].name}
            style={{ minHeight: "200px", maxHeight: "240px" }}
          />

          {/* Project Title */}
          <h5 className="text-white text-lg font-bold text-center">
            {projects[currentIndex].subtitle} - {projects[currentIndex].name}
          </h5>

          {/* Project Description */}
          <p className="text-sm text-white text-center px-4 line-clamp-3">
            {projects[currentIndex].description}
          </p>

          {/* Links */}
          <div className="flex space-x-4">
            <a
              href={projects[currentIndex].githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={projects[currentIndex].liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fa-solid fa-pager"></i>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center mt-4">
            {projects[currentIndex].tech.map((tech, idx) => (
              <span
                key={idx}
                className="inline-block bg-tertiary rounded-full px-3 py-1 text-sm text-white mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-b from-pink-700 to-violet-800 p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 transition md:right-4"
        onClick={handleNext}
      >
        <i className="fa-solid fa-arrow-right text-white text-2xl"></i>
      </div>
    </div>
  );
};

export default Carousel;
