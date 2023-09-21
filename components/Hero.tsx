'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import apple from '../assets/images/apple.png';
import Link from 'next/link';
import play from '../assets/images/play.png';
import country from '../assets/images/country.png';
import phone from '../assets/images/phone-hero.svg';

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
            <h2 className='text-4xl sm:text-7xl text-center  font-bold text-[#082630]'>
            Your Gateway to <span className='text-[#40B8D3]'>Data</span>  <br/> <span className='text-[#40B8D3]'>& AI Excellence</span>
            </h2>
            <p className='text-[#082630] text-xl text-center mt-6'>
            Learn and build with a community of data professionals 
            <br/>and AI developers
            </p>
          </div>
          <div className='flex mx-auto gap-5 justify-center mt-4 md:mt-auto'>
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
            <Image className='ml-3' src={phone} alt='phone' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;