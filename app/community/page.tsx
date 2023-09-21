import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image';
import Link from 'next/link';
import comm from '../../assets/images/comm.png'
import comm3 from '../../assets/images/comm3.png'

function page() {
  return (
    <div>
        <Header/>
        {/* hero */}
        <section id="hero" className='px-5 mt-48 hero-2 w-full'>
      <div className='block mx-auto hero'>
        <div className="mx-auto">
          <div>
            <h2 className='text-4xl sm:text-7xl text-center  font-bold text-[#082630]'>
            Instig Labs Community 
            </h2>
            <p className='text-[#082630] text-xl text-center mt-6'>
            Learn and build with a community of data professionals 
            <br/>and AI developers
            </p>
          </div>
          
          
        </div>
        <div 
          className="flex items-end"
        >
          <div className='mx-auto mt-8 justify-center'>
            <Image className='ml-3' src={comm} alt='phone' />
          </div>
        </div>
      </div>
    </section>

    <section className='px-12 sm:px-36 bg-[#F5FDFF]  py-20'>
        <div className='block sm:flex gap-2 sm:gap-36'>
            <div className='w-full sm:w-1/2  py-6 sm:py-32'>
            <p className='text-[#40B8D3] font-bold'>DATA ANALYTICS</p>
            <p className='text-[#082630] sm:text-5xl text-4xl font-bold mt-2 mb-5'>
                Instig Data
            </p>
                <p className='text-md'>Unlock the power of data analytics with Instig Data. Dive into a <br/>
                world of data-driven insights. Discover how data can drive innovation <br/>
                and growth in your career.</p>
            </div>
            <div className='w-full sm:w-1/2'>
                <Image src={comm3} alt='data'/>
            </div>
        </div>
    </section>

    <section className='px-12 sm:px-36 bg-[#F5FDFF]  py-20'>
        <div className='block sm:flex gap-2 sm:gap-36'>
            <div className='w-full sm:w-1/2  py-6 sm:py-32'>
            <p className='text-[#40B8D3] font-bold'>DATA ANALYTICS</p>
            <p className='text-[#082630] sm:text-5xl text-4xl font-bold mt-2 mb-5'>
                Instig Data
            </p>
                <p className='text-md'>Unlock the power of data analytics with Instig Data. Dive into a <br/>
                world of data-driven insights. Discover how data can drive innovation <br/>
                and growth in your career.</p>
            </div>
            <div className='w-full sm:w-1/2'>
                <Image src={comm3} alt='data'/>
            </div>
        </div>
    </section>

    <section className='px-12 sm:px-36 bg-[#F5FDFF]  py-20'>
        <div className='block sm:flex gap-2 sm:gap-36'>
            <div className='w-full sm:w-1/2  py-6 sm:py-32'>
            <p className='text-[#40B8D3] font-bold'>DATA ANALYTICS</p>
            <p className='text-[#082630] sm:text-5xl text-4xl font-bold mt-2 mb-5'>
                Instig Data
            </p>
                <p className='text-md'>Unlock the power of data analytics with Instig Data. Dive into a <br/>
                world of data-driven insights. Discover how data can drive innovation <br/>
                and growth in your career.</p>
            </div>
            <div className='w-full sm:w-1/2'>
                <Image src={comm3} alt='data'/>
            </div>
        </div>
    </section>

    </div>
  )
}

export default page