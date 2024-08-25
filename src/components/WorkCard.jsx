import React from 'react';

const WorkCard = ({ imgSrc, title, description }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden'>
      {/* Image Section */}
      <div className='w-full h-48'>
        <img 
          src={imgSrc} 
          alt={title} 
          className='w-full h-full object-cover' 
        />
      </div>
      {/* Text Section */}
      <div className='p-4 flex flex-col justify-center'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
