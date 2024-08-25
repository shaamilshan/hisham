import React from 'react';
import logoImage from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-white text-black'>
      <div className='container mx-auto flex justify-between items-center px-4 py-2 border-t'>
        {/* Copyright Section */}
        <div className='text-sm text-gray-600 md:text-base'>
          &copy; {new Date().getFullYear()} <a href="https://www.instagram.com/shaamilshan/" className='hover:text-blue-500'>shaamilshan</a>. All rights reserved.
        </div>
        {/* Logo Section */}
        <div className='flex justify-end'>
          <img src={logoImage} alt="Logo" style={{ width: '88px' }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
