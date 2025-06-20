import React, { useEffect, useState } from 'react';
import './Home.css';
import './AnimatedLogo.css';

const Home = () => {
  const slides = [
    "Welcome to Jobify",
    "Your career starts here",
    "Find your dream job today",
    "Opportunities don't happen, you create them"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="logo-animated">Jobify</div>
        <h1 className="slide-text">{slides[currentSlide]}</h1>
        <p className="subtitle">Where Passion Meets Profession</p>
      </div>
    </div>
  );
};

export default Home;
