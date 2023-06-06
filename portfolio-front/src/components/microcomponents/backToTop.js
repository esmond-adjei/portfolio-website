import React, { useState, useEffect } from 'react';
import './micro.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const scrolledToBottom = scrollTop + windowHeight >= 0.8*scrollHeight;
    console.log("scroll height: " + scrollHeight);

    setIsVisible(scrolledToBottom);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
