import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className='flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-6 w-full'>
      {/* Image Section */}
      <div className='w-full md:w-1/2'>
        <img src={imgSrc} alt={title} className='w-full h-48 md:h-full object-cover' />
      </div>
      {/* Text Section */}
      <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600' style={{ fontSize: '12px' }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
