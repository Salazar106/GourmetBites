'use client';

import React, { useState } from 'react';
import { Image, Button } from '@nextui-org/react';

const images = [
  '/imgs/html.svg',
  '/imgs/js.svg',
  '/imgs/css.svg',
  '/imgs/db.svg'
];

export const Carousel = ({data}:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto transition-all duration-500">
      <div className="overflow-hidden relative h-80">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute flex justify-center  inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width="200"
            />
          </div>
        ))}
      </div>
      <Button isIconOnly className="absolute text-white hover:scale-150 bg-transparent top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}>
        &#9664;
      </Button>
      <Button isIconOnly className="absolute text-white hover:scale-150 bg-transparent top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>
        &#9654;
      </Button>
    </div>
  );
};
