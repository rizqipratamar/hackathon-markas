"use client";

import { useState, useEffect } from "react";
import styles from "./Carousel.module.css"; // Import your CSS file for styling

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>
      <button className={styles.button} style={{ left: 0 }} onClick={prevSlide}>
        Previous
      </button>
      <button
        className={styles.button}
        style={{ right: 0 }}
        onClick={nextSlide}
      >
        Next
      </button>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={[
              styles.indicator,
              index === currentSlide && styles.active,
            ]}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
