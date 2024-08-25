import React from 'react';
import RecentCard from './RecentCard'

const RecentWorks = ({ works }) => {
  return (
    <div className='p-8 mb-6' style={{ backgroundColor: '#F5FCFF' }}>
      <h1 className='mt-4 text-center mb-16 text-4xl font-bold'>Recent Works</h1>
      <div className='flex flex-col md:flex-row overflow-x-auto gap-8 mb-4'>
        {works.map((work, index) => (
          <RecentCard
            key={index}
            imgSrc={work.imgSrc}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentWorks;
