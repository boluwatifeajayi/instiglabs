'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import man from '../assets/images/man-video.png';

const Story: React.FC = () => {

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
    <section id="about-us" className='story px-6 md:px-20 py-16 bg-[#F0F9FF]'>
        <div className='block md:flex hero gap-2 md:gap-32'>
            <div className='sm:w-1/2 mb-6 sm:mb-1'>
                <p className='text-[#40B8D3] font-bold'>LEARNING HUB</p>
                <p className='text-[#082630] sm:text-4xl text-2xl font-bold mt-2 mb-5'>Fostering an Enriching Environment for Acquiring Knowledge</p>
                <p className='text-[#082630]'>
                At Instig Labs, we believe that knowledge knows no bounds, and we're dedicated to fostering a vibrant community of brilliant minds. Our platform serves as a hub for individuals passionate about learning, networking, and investing in the future. Whether you're an aspiring ent
                </p>
                
                <button onClick={() => scrollToSection('services')} className="text-[#40B8D3] mt-8 px-10 py-3 rounded-lg text-sm font-bold bg-[#082630]">Watch Our Podcasts</button>
            </div>
            <div className='sm:w-1/2'>
                <Image src={man} alt="man"/>
            </div>
        </div>
    </section>
  );
};

export default Story;
