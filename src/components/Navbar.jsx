import React, { useState } from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative p-4'>
      {/* Navbar Container */}
      <div className='flex justify-between items-center  px-4 py-3 md:py-4 bg-white' style={{ height: '60px' }}>
        {/* Logo */}
        <div className='flex justify-start item'>
          <img src={logo} style={{ width: '88px' }} alt="logo" />
        </div>
        {/* Desktop Menu */}
        <div className='hidden md:flex gap-10'>
          <a href="#home" className='hover:text-blue-500'>Home</a>
          <a href="#aboutme" className='hover:text-blue-500'>About me</a>
          <a href="#testimonial" className='hover:text-blue-500'>Testimonials</a>
          <a href="#works" className='hover:text-blue-500'>Works</a>
        </div>
        {/* Contact Button */}
        <div className='hidden md:block'>
        <a href="#contact"><button className='bg-black text-white rounded-lg py-2 px-4 text-sm md:text-base mt-2'>Contact me</button></a>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <ul className='flex flex-col gap-3 items-center mt-2 list-none py-4'>
            <li><a href="#home" onClick={toggleMenu} className='hover:text-blue-500'>Home</a></li>
            <li><a href="#aboutme" onClick={toggleMenu} className='hover:text-blue-500'>About me</a></li>
            <li><a href="#testimonial" onClick={toggleMenu} className='hover:text-blue-500'>Testimonials</a></li>
            <li><a href="#works" onClick={toggleMenu} className='hover:text-blue-500'>Works</a></li>
            <li><a href="#contact"><button className='bg-black text-white rounded-lg py-2 px-4 text-sm md:text-base mt-2'>Contact me</button></a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
