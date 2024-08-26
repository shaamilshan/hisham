import React from 'react';
import contactImage from '../assets/contact-image.JPG'; 
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col md:flex-row items-center justify-center px-8 py-12' style={{backgroundColor:'#F5FCFF'}}>
      {/* Left Section: Image */}
      <div className='w-full md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start'>
        <img 
          src={contactImage} 
          alt="Contact" 
          className='w-full h-auto object-cover rounded-lg shadow-lg' 
        />
      </div>

      {/* Middle Section: Text */}
      <div className='w-full md:w-1/3 flex flex-col items-start text-left mb-6 md:mb-0 px-4 md:px-6 lg:px-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black'>
          Contact Me
        </h2>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-black'>
          Facing any problems? <br /> Get in touch with me!
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-gray-600'>
          I'm here to assist you with any issues or queries you may have. Whether it's a quick question or a detailed concern, feel free to reach out through the options below.
        </p>
      </div>

      {/* Right Section: Buttons */}
      <div className='w-full md:w-1/3 flex flex-col items-start text-left px-4 md:px-0'>
        <div className='flex flex-col gap-4 w-full max-w-xs mx-0'>
          <a href="https://wa.me/9605569390" className='w-full'>
            <button className='flex items-center justify-center border-green-500 text-green-500 rounded-lg py-3 px-6 hover:bg-green-50 transition duration-300'>
              <FaWhatsapp className='mr-2 text-xl'/> 
              <span>WhatsApp</span>
            </button>
          </a>
          <a href="https://www.instagram.com/h1sham.in" className='w-full'>
            <button className='flex items-center justify-center border-pink-500 text-pink-500 rounded-lg py-3 px-6 hover:bg-pink-50 transition duration-300'>
              <FaInstagram className='mr-2 text-xl'/> 
              <span>Instagram</span>
            </button>
          </a>
          <a href="tel:9605569390" className='w-full'>
            <button className='flex items-center justify-center border-blue-500 text-blue-500 rounded-lg py-3 px-6 hover:bg-blue-50 transition duration-300'>
              <IoCall className='mr-2 text-xl'/> 
              <span>Call Me</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
