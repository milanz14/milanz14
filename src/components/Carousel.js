import { useState, useEffect } from "react";

import React from "react";
import ProjectCard from "./ProjectCard";

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
    <div>
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
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
};

export default Carousel;
