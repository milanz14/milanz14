import React, { useState } from "react";

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Left Arrow */}
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 rounded-full cursor-pointer shadow-lg hover:bg-gray-700"
        onClick={handlePrevious}
      >
        <i className="fa-solid fa-arrow-left text-white text-2xl"></i>
      </div>

      {/* Project Slide */}
      <div className="w-full max-w-xl px-4">
        <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform">
          <img
            className="w-full h-60 object-cover rounded-lg mb-4"
            src={projects[currentIndex].imgSrc}
            alt={projects[currentIndex].name}
          />
          <h3 className="text-white text-lg font-bold">
            {projects[currentIndex].subtitle} - {projects[currentIndex].name}
          </h3>
          <p className="text-sm text-white mb-4">
            {projects[currentIndex].description}
          </p>
          <div className="flex space-x-4">
            <a
              href={projects[currentIndex].githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={projects[currentIndex].liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fa-solid fa-pager"></i>
            </a>
          </div>
          <div className="flex mt-4">
            {projects[currentIndex].tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-tertiary rounded-full px-3 py-1 text-sm text-white mr-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 rounded-full cursor-pointer shadow-lg hover:bg-gray-700"
        onClick={handleNext}
      >
        <i className="fa-solid fa-arrow-right text-white text-2xl"></i>
      </div>
    </div>
  );
};

export default Carousel;
