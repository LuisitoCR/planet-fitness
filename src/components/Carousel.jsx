import React, { useState } from 'react';
import styles from "../style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import {
    curl,
    fly,
    extensionquad,
    abduadu,
    nose,
    jungla2,
    jungla, } from "../assets";

const images = [
  { url: curl, title: '' },
  { url: fly, title: '' },
  { url: extensionquad, title: '' },
  { url: abduadu, title: '' },
  { url: jungla2, title: '' },
  { url: jungla, title: '' },
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  function nextImage() {
    const currentIndex = images.findIndex(image => image === currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  }

  function prevImage() {
    const currentIndex = images.findIndex(image => image === currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  }

  return (
    <div className="flex items-center justify-between" id='product'>
        <button onClick={prevImage} className="z-[1] bg-gray-800 hover:bg-gray-400 rows-carousel font-bold py-4 px-8 rounded-l">
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-50 pink__gradient" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-30 rounded-full white__gradient top-50" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 top-50 blue__gradient" />
        {/* gradient end */}
        <img src={currentImage.url} alt={currentImage.title} className="z-[1] w-[30%] h-[40%] rounded-lg shadow-lg mb-4 transition-transform" />
        
 
        <button onClick={nextImage} className="z-[1] bg-gray-800 hover:bg-gray-400 rows-carousel font-bold py-4 px-8 rounded-r">
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </div>
  );
}

export default Carousel;
