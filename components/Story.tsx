'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';
import pic5 from '../assets/images/pic5.png';

import { useMediaQuery } from '@react-hook/media-query';

const Explore: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Define your breakpoint
  const numberOfCardsToShow = isSmallScreen ? 1 : 4; // Number of cards to show initially

  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: pic1,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic2,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic5,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic2,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic5,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic1,
      title: 'Cote d’Azur, France',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    // Add more cards here
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <section id="explore" className="story px-5 sm:px-10 py-20">
      <div className="hero">
        <div>
        <div className="block md:flex px-3 sm:px-20 mb-4 gap-2 md:gap-12">
        <div className="w-full md:w-1/2">
          <p className="text-[#40B8D3] font-bold">INSTIGLAB BLOG</p>
          <p className="text-[#082630] sm:text-5xl text-4xl font-bold mt-2 mb-5">
            Stay Connected
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[#082630] mt-1">
            Stay updated with the latest industry insights, trends, and expert
            opinions by exploring our blog.
          </p>
        </div>
      </div>
          <div className="relative mt-10">
            <div className={`flex gap-6 hero ${isSmallScreen ? 'carousel' : ''}`}>
              {cards.slice(currentCard, currentCard + numberOfCardsToShow).map((card, index) => (
                <div key={index} className="mb-6 card relative">
                  <Image src={card.image} alt={`place${index + 1}`} />
                  <p className="mt-3 text-xl sm:text-2xl font-bold text-blue-950">{card.title}</p>
                  <div className="flex gap-2 mt-3">
                    
                    <p className="text-blue-950 text-lg">{card.date}</p>
                  </div>
                  <div className="flex gap-2">
                   
                    <p className="text-[#40B8D3] text-lg">{card.price}</p>
                  </div>
                </div>
              ))}
             
                <div className="carousel-controls absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                  <button
                    className="prev rounded-full border ml-3 text-white p-3 px-5 absolute top-1/2 left-1 sm:left-0 transform -translate-y-1/2"
                    onClick={handlePrev}
                  >
                    ←
                  </button>
                  <button
                    className="next rounded-full  border mr-6 text-white p-3 px-5 absolute top-1/2 right-1 sm:right-0 transform -translate-y-1/2"
                    onClick={handleNext}
                  >
                    →
                  </button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;