'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import apple from '../assets/images/apple.png';
import Link from 'next/link';
import play from '../assets/images/play.png';
import country from '../assets/images/country.png';
import phone from '../assets/images/per.png';

const Hero = () => {
  const gradientBackground = {
    backgroundImage: 'linear-gradient(to bottom left, #020d1f, #072a63',
  };

  const phoneVariants = {
    hidden: {
      y: 200
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className='px-5 mt-48 hero-2 w-full'>
      <div className='block mx-auto hero'>
        <div className="mx-auto">
          <div>
            <h2 className='text-3xl sm:text-7xl text-center  font-bold text-[#082630]'>
            Your Gateway to <span className='text-[#40B8D3]'>Data</span>  <br/> <span className='text-[#40B8D3]'>& AI Excellence</span>
            </h2>
            <p className='text-[#082630] text-lg sm:text-xl text-center mt-6'>
            Learn and build with a community of data professionals 
            and AI developers
            </p>
          </div>
          <div className='block sm:flex mx-auto gap-1 sm:gap-5 justify-center mt-4 md:mt-auto'>
            <Link href="#">
              <button className='bg-[#082630] px-8 sm:px-14  mt-8 border border-[#082630] text-[#40B8D3] rounded-lg py-3'>Contact Us</button>
            </Link>
            <Link href="#">
            <button className='bg-transparent px-8 sm:px-3 mt-8 text-[#082630] border border-[#082630] rounded-lg py-3'>Subscribe To News Letter</button>
            </Link>
          </div>
          
        </div>
        <div 
          className="flex items-end"
        >
          <div className='mx-auto mt-8 justify-center'>
          <video autoPlay muted loop className="w-full h-auto rounded-lg">
        <source src='/vid.mp4' type="video/mp4" />
      </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;