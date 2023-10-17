import logo from '../assets/skoteLogosimple.png'
import React, { useState, useEffect } from 'react';

function scrollToSection(elementId) {
  console.log('scrollToSection called with elementId:', elementId);
  const element = document.getElementById(elementId);
  if(element){
    element.scrollIntoView({ behavior: 'smooth' });
  };
}

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavbarVisible(
        currentScrollPos < 10 || currentScrollPos < prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`flex fixed w-full z-50 bg-black transition-all duration-300 ${isNavbarVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`}>
      <div className='flex flex-row justify-between items-center w-full px-5'>
        <img src={logo} alt='Georgios Logo' className='h-16 transition-all duration-300 hover:scale-110 cursor-pointer' onClick={(e) => {e.preventDefault(); scrollToSection('showreel')}}></img>
        <div className='flex flex-row space-x-5'>
          <h1 className='hover:underline rounded-sm cursor-pointer text-xl font-bold'><a href='#impReel' onClick={(e) => {e.preventDefault(); scrollToSection('impReel')}}>Implementation</a></h1>
          <h1 className='hover:underline cursor-pointer text-xl font-bold'><a href='#about' onClick={(e) => {e.preventDefault(); scrollToSection('about')}}>About</a></h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
