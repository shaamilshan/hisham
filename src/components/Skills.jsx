import React from 'react';
import Card from './Card';
import diagnosing from '../assets/diagnosing.jpeg';
import swap from '../assets/swap.jpeg'
import data from '../assets/data-recovery.webp'
import privacy from '../assets/privacy.jpg'

function Skills() {
  return (
    <div className='p-8 mb-12' >
      <h1 className='mt-4 text-center mb-16 text-4xl font-bold'>My Expertise</h1>
      <div className='flex flex-col md:flex-row overflow-x-auto gap-8 mb-4'>
        <Card
          imgSrc={diagnosing}
          title="Diagnosing"
          description="Experienced in detecting and fixing mobile device malfunctions efficiently."
        />
        <Card
          imgSrc={swap} 
          title="Swapping"
          description="Specialist in component swapping, ensuring your device runs like new."
        />
        <Card
          imgSrc={data} 
          title="Data Recovery"
          description="Specialist in restoring lost data from mobile devices with advanced techniques."
        />
        <Card
          imgSrc={privacy} 
          title="Customer Privacy"
          description="Committed to maintaining the highest level of customer privacy and data security."
        />
      </div>
    </div>
  );
}

export default Skills;
