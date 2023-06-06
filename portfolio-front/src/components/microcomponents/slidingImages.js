import React, { useState } from 'react';


const SlidingImage = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <div className="sliding-image">
        <div className="image-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
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
