import React from 'react';
import Typing from 'react-typing-effect';
import heroVideo from '../assets/hero-video.mov'; 

const Hero = () => {
  return (
    <div id='home' className='relative flex flex-col  justify-center items-center' style={{ height: 'calc(100vh - 60px)' }}>
      {/* Background Video */}
      <video 
        src={heroVideo} 
        autoPlay 
        loop 
        muted 
        className='absolute inset-0 w-full h-full object-cover'
      />
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black opacity-70' />
      {/* Content Section */}
      <div className='relative flex flex-col items-start text-left text-white p-4 z-10'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
          Hey, I'm <Typing speed={100} eraseSpeed={50} text={['Hisham']} /> 
        </h1>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>
          I <span className='font-bold'>fix</span> your mobile with expert precision and care
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-6'>
          Expert mobile repairs with a commitment to data security. Fast, reliable service with your privacy in mind.
        </p>
        <a href="#contact">
        <button className='px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-bold border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300'>
          Get in Touch
        </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
