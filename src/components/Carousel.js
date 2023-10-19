import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === cards.length ? 0 : prevIndex + 1;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return <div>Carousel</div>;
};

export default Carousel;
