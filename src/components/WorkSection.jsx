import React from 'react';
import WorkCard from './WorkCard';

// Import images directly
import iPhone11ProImg from '../assets/11pro.jpeg';
import iPhone13Img from '../assets/13pro.jpeg';
import NothingPhone1Img from '../assets/Nothing.jpeg';

const WorksSection = () => {
  const works = [
    {
      imgSrc: iPhone11ProImg,
      title: 'iPhone 11 Pro',
      description: 'Completed a glass replacement for an iPhone 11 Pro. The screen is now perfectly restored, with crystal-clear clarity and full functionality. Another job well done!',
    },
    {
      imgSrc: iPhone13Img,
      title: 'iPhone 13',
      description: 'Successfully fixed an iPhone 13 with a No Service issue. The phone now has full signal reception, ensuring reliable connectivity and smooth performance.',
    },
    {
      imgSrc: NothingPhone1Img,
      title: 'Nothing Phone 1',
      description: 'Completed a successful data recovery on a Nothing Phone 1 after a system failure. All essential files were restored, and the device is back to optimal performance.',
    },
  ];

  return (
    <section id='works' className='p-8 mb-16'>
      <h1 className='text-4xl font-bold text-center mb-8'>Recent Works</h1>
      <div className='flex flex-col md:flex-row gap-8 justify-center'>
        {works.map((work, index) => (
          <WorkCard
            key={index}
            imgSrc={work.imgSrc}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
