import React, { useEffect, useState } from 'react';

import images1 from './img/images1.jpg';
import images2 from './img/images2.jpg';
import images3 from './img/images3.jpg';

const Imgslidebar = () => {
  const images = [images1, images2, images3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  
  const headings = [
    {
      title: "Sanatana Dharma",
      paragraph: "Vedic Tradition, Dharma & Karma"
    },
    {
      title: "Our Dream",
      paragraph: "to provide education for all connect with us now!"
    },
    {
      title: "Welcome to our world",
      paragraph: "It is never too late to start learning and improving your education"
    }
  ];

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setTimeout(() => {
      nextSlide();
      setAnimate(true);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='relative w-[98.7vw] h-[60vh] overflow-hidden group'>
      <div className='relative w-full h-full'>
        {images.map((image, index) => (
          <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src={image} 
              alt={`Slide ${index}`} 
              className='w-full h-full object-cover'
            />
            <div className={`absolute inset-0 flex justify-center items-center flex-col text-white ${animate && currentIndex === index ? 'animate-slide-up' : ''}`} style={{ zIndex: 20 }}>
              <h2 className="text-6xl font-bold">{headings[index].title}</h2>
              <p className="mt-2 text-lg text-center">{headings[index].paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
     

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
          key={index}
          className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          onClick={() => {
            console.log(`Dot clicked: ${index}`);
            setCurrentIndex(index);
          }}
        />
        
        ))}
      </div>
    </div>
  );
};

export default Imgslidebar;
