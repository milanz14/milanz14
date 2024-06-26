import { useState } from "react";

import React from "react";

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex((prevIndex) => {
        return prevIndex + 1 === projects.length ? 0 : prevIndex + 1;
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => {
        return prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1;
      });
    }
  };

  return (
    <>
      <div className="flex justify-around mt-8">
        <button
          className="text-3xl shadow-xl p-3 w-12 h-12 rounded-full border-2 hover:cursor-pointer flex justify-center items-center bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800"
          onClick={handlePrevious}
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          className="text-3xl shadow-xl p-3 w-12 h-12 rounded-full border-2 hover:cursor-pointer flex justify-center items-center bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800"
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
      <div className="flex justify-center">
        <div
          className="mt-8 h-full w-full flex justify-center overflow-hidden relative"
          key={projects[currentIndex].name}
        >
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 h-full w-full">
            <img
              className="mt-1 rounded-lg"
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
    </>
  );
};

export default Carousel;
