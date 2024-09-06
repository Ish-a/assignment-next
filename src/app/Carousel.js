"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    'https://images.ctfassets.net/xny2w179f4ki/1yiDlJpGxrAJzlBCUm341Q/4943dd3839b9f15df5d3dc63a7f2df0d/product-help-center.webp?q=90',
    'https://images.ctfassets.net/xny2w179f4ki/2ab23d3849c7f121f5c63e7b23f1df0d/customer-support.webp?q=90',
    'https://images.ctfassets.net/xny2w179f4ki/3cd3d349f5c6e7b23f1df0d/sales-support.webp?q=90',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel" style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%', maxWidth: '500px', margin: 'auto' }}>
      <button 
        onClick={prevSlide} 
        style={{ position: 'absolute', left: 0, zIndex: 1, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '24px' }}
      >
        &#10094;
      </button>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', height: 'auto' }}>
        <Image 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`} 
          width={900} 
          height={500} 
          layout="responsive" 
          style={{ objectFit: 'contain' }}
        />
      </div>
      <button 
        onClick={nextSlide} 
        style={{ position: 'absolute', right: 0, zIndex: 1, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '24px' }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
