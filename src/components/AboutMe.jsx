import React from 'react';
import aboutMeImage from '../assets/about.png'; // Replace with your image path

const AboutMe = () => {
  return (
    <section id='aboutme' className='p-8 mb-6 flex flex-col md:flex-row items-center' style={{ backgroundColor: '#F5FCFF' }}>
      {/* Left Side: Text Section */}
      <div className='md:w-1/2 p-4 flex flex-col justify-center'>
        <h1 className='text-4xl font-bold mb-4'>About Me</h1>
        <p className='text-gray-700 text-xl'>
          I am a passionate mobile technician with years of experience in diagnosing and repairing a wide range of devices. My expertise lies in providing quick and reliable solutions for all kinds of mobile issues, from screen replacements to data recovery. I am dedicated to delivering the highest quality of service while ensuring customer satisfaction and maintaining privacy.
        </p>
      </div>

      {/* Right Side: Image Section */}
      <div className='md:w-1/2 p-4 flex justify-end '>
        <img 
          src={aboutMeImage} 
          alt="About Me" 
          className='w-full h-auto max-w-sm object-cover rounded-lg shadow-lg' 
        />
      </div>
    </section>
  );
};

export default AboutMe;
