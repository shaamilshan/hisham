import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';

const TestimonialCard = ({ imgSrc, name, quote }) => {
  return (
    <div className="border rounded-lg mb-16  p-6">
      <div className="flex items-center mb-4">
        <img src={imgSrc} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
}

export default TestimonialCard;
