import React from 'react';

export default function Contact() {
  return (
    <div className='h-full bg-black text-white flex flex-col justify-start items-center w-full gap-5 sm:gap-10 p-[20px] sm:p-[50px]'>
      <div id='contact' className=' flex gap-[20px]'>
        <div>
          <a
            href='https://www.linkedin.com/in/erick-barasa357-61b0599b/'
            target='_blank'
            className='text-[20px] md:text-[50px] underline'
          >
            linkedin.
          </a>
        </div>
        <div>
          <a
            href='https://twitter.com/erickbaraza2'
            target='_blank'
            className='text-[20px] md:text-[50px] underline'
          >
            X.
          </a>
        </div>
        <div>
          <a
            href='mailto:erickbaraza@invisible.email'
            target='_blank'
            className='text-[20px] md:text-[50px] underline'
          >
            email.
          </a>
        </div>
        <div>
          <a
            href='https://github.com/procode3'
            target='_blank'
            className='text-[20px] md:text-[50px] underline'
          >
            github.
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex items-center justify-center text-white md:flex-row gap-10 md:gap-[48px]  text-[12px] sm:text-[16px] md:text-[18px] font-bold leading-normal '>
          <p className='text-white'>Conditions of Use</p>
          <p className='text-white'>Privacy & Policy</p>
          <p className='text-white'>Press Room</p>
        </div>
        <div className='flex flex-col font-normal  text-white text-[14px] md:text-[18px]'>
          &copy; 2023 Erick Barasa. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
