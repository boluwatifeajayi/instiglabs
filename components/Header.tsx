'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.svg';
import Link from 'next/link';

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`px-3 md:px-6 py-5 bg-white gap-8 sm:gap-96 flex shadow-sm nav  fixed w-full top-0 z-10`}
    >
      <div className="flex items-center">

        <Link href="/"><Image alt="logo" src={logo}  className="mr-20" /></Link>
        
        <ul className="flex space-x-20 ml-40 inv text-sm font-bold text-[#082630]">
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection('/')}>
            Events
          </li>
          <Link href="/community" className="cursor-pointer hover:font-bold">
            Community
          </Link>
          <Link className="cursor-pointer hover:font-bold" href="/blog">
            Blog
          </Link>
          <li className="cursor-pointer hover:font-bold" onClick={() => scrollToSection('about-us')}>
            About Us
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
       
        <button onClick={() => scrollToSection('request-quote')} className="text-[#40B8D3] px-6 py-3 text-xs sm:text-sm  bg-[#082630] rounded-lg">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Header;
