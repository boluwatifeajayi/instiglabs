'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';

const Testimonials: React.FC = () => {
  // Dummy testimonial data
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="testimonials" className='px-6 md:px-20 mt-32 py-16 bg-[#082630]'>
      <div className='block md:flex mb-4 gap-2 md:gap-12'>
        <div className='w-full md:w-1/2'>
          <p className='text-[#40B8D3] font-bold'>ABOUT INSTIG LABS</p>
          <p className='text-white sm:text-5xl text-4xl font-bold mt-2 mb-5'>
           Why InstigLabs
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <p className='text-gray-50 mt-1'>
          At Instig Labs, we believe that knowledge knows no bounds, and we're dedicated to fostering a vibrant community of brilliant minds. Our platform serves as a hub for individuals passionate about learning, networking, and investing in the future. Whether you're an aspiring ent
          </p>
        </div>
      </div>

      <div className='block md:flex mt-14 gap-2 md:gap-12'>
        <div className='w-full mb-6 sm:mb-1 md:w-1/2'>
          <Image alt="person" src={person1}/>
        </div>
        <div className='w-full mb-6 sm:mb-1 md:w-1/2'>
          <Image alt="creative" src={person2}/>
        </div>
      </div>


     
    </section>
  );
};

export default Testimonials;
