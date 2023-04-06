import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import Logo1 from '../public/images/Logo1.png';

const Footer = () => {
  return (
    <div id='contact' className='w-screen flex flex-col justify-center items-center'>
      {/* Top */}
      <div className='py-5'>
        <h3 className='font-bold text-m md:text-ml l:text-l lg:text-lg pb-3'>Follow me on Instagram</h3>
        <p className='text-center duration-500 hover:duration-500 text-purple hover:text-dpurple text-s md:text-sm l:text-m lg:text-ml hover:text-sm'><a href="https://www.instagram.com/beyond001photography/">@beyond001photography</a></p>
      </div>

      {/* bottom */}
      <div className='flex flex-col-reverse items-center px-5'>
        {/* copyright */}
        <div>
          <small className='block text-center items-center font-bold'>
            Copyright &#169; 2023 All right reserved | Designed and 
            Developed by <Link href="/"> Digimatic Marketers </Link>
          </small>
        </div>

        {/* Bottom */}
        <div className='w-full flex flex-col items-center'>
          {/* Logo */}
          <div className='pb-5'>
            <Link href="/">
              <Image 
                className='h-28 duration-700 hover:duration-700 hover:h-32 l:h-32 l:hover:h-36 w-auto'
                src={Logo1}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Social Icons */}
          <div className='w-2/3 flex flex-row justify-between pb-5'>
            <Link href=""><FacebookIcon className='text-purple hover:text-dpurple text-m duration-500 md:text-ml md:duration-500 md:hover:text-l md:hover:duration-500 l:text-lg l:duration-500 l:hover:text-xl l:hover:duration-500 hover:text-ml hover:duration-500' /></Link>
            <Link href=""><InstagramIcon className='text-purple hover:text-dpurple text-m duration-500 md:text-ml md:duration-500 md:hover:text-l md:hover:duration-500 l:text-lg l:duration-500 l:hover:text-xl l:hover:duration-500 hover:text-ml hover:duration-500' /></Link>
            <Link href=""><LinkedInIcon className='text-purple hover:text-dpurple text-m duration-500 md:text-ml md:duration-500 md:hover:text-l md:hover:duration-500 l:text-lg l:duration-500 l:hover:text-xl l:hover:duration-500 hover:text-ml hover:duration-500' /></Link>
            <Link href=""><TwitterIcon className='text-purple hover:text-dpurple text-m duration-500 md:text-ml md:duration-500 md:hover:text-l md:hover:duration-500 l:text-lg l:duration-500 l:hover:text-xl l:hover:duration-500 hover:text-ml hover:duration-500' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
