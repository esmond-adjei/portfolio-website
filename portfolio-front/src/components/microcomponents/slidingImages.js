import React, { useState, useRef } from 'react';

const SlidingImage = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (event) => {
    setDragStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (dragStartX !== null) {
      const dragDistance = event.clientX - dragStartX;
      containerRef.current.style.transform = `translateX(calc(-${activeIndex * 100}% + ${dragDistance}px))`;
    }
  };

  const handleMouseUp = (event) => {
    if (dragStartX !== null) {
      const dragDistance = event.clientX - dragStartX;
      const slideWidth = containerRef.current.offsetWidth;
      const swipeThreshold = slideWidth / 5;

      if (dragDistance < -swipeThreshold && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (dragDistance > swipeThreshold && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }

      containerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
      setDragStartX(null);
    }
  };

  return (
    <div
      className="sliding-image"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="image-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        ref={containerRef}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : 'inactive'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingImage;
