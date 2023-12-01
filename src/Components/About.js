'use client';
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div
      id='about'
      className='aboutsection h-screen h-100%  flex flex-col py-[40px] items-center px-[0px] sm:px-[60px] bg-neutral-900 text-white gap-10'
    >
      <div className='w-screen flex justify-between text-neutral-300 uppercase my-[10px] px-[10px] md:px-[70px] text-lg sm:text-3xl font-bold'>
        <h1 className=''>About me.</h1>
        <h1>erick barasa</h1>
      </div>
      <div className='flex flex-col md:flex-row text-lg md:text-2xl w-screen'>
        <div className='left w-full md:w-2/3  px-5 md:px-[70px]'>
          <h1 className='text-neutral-500 md:leading-[45px]'>
            Hello, I'm{' '}
            <span className='text-neutral-200 font-bold'>Erick Barasa</span>, a
            budding software developer based in the vibrant city of Nairobi,
            Kenya. I specialize in crafting remarkable digital experiences,
            combining cutting-edge technologies with my expertise in NextJS,
            NodeJS and Python design to create interactive, user-centric
            solutions.
          </h1>
          <div className='my-4 md:my-10'>
            <h1 className='uppercase my-5 sm:my-10 font-bold text-neutral-300'>
              techstack.
            </h1>
            <div className='text-sm md:text-xl w-screen lg:w-4/5 flex flex-row flex-wrap gap-[10px] md:gap-[20px] text-gray-100'>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                NextJS
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                ReactJS
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                NodeJS
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                ExpressJS
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                TypeScript
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                Python
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                c
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                Chai
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                MongoDB
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                Jest
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                Tailwind
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                Passport
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                Prisma
              </div>
              <div className='px-[8px] md:px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black'>
                NextAuth
              </div>
            </div>
          </div>

          <h1 className='text-neutral-300'>
            <i>"generating business through user experience."</i>
          </h1>
        </div>
        <div className='hidden lg:block right w-0 lg:w-1/3 relative'>
          <Image
            src='/profile.jpg'
            width={400}
            height={400}
            alt='profilepic'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
