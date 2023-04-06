import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '../public/images/Logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activePage, setActivePage] = useState('home')
    const [color, setColor] = useState('#00000050')

    const handleNav = () => {
        setNav(!nav)
    };

    const handleClick = (page) => {
        setActivePage(page)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY) {
                setColor('black');
            } else {
                setColor('#00000050')
            }
        };
        window.addEventListener('scroll', changeColor)
    }, []);

  return (
    <div className='fixed top-0 left-0 z-10'>
        <div style={{backgroundColor: `${color}`}} className='flex flex-row justify-around items-center h-20 w-screen'>
            <div className=''>
                <Link href='/'>
                    <Image
                        className='h-20 w-auto'
                        src={Logo}
                        alt='Logo'
                    />
                </Link>
            </div>

            <nav className='hidden md:flex w-1/2'>
                <ul className='w-full flex flex-row justify-around text-white '>
                    <li className={
                        activePage === "home" ? "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300 border-b-4 border-purple" 
                        : "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300"
                    }>
                        <Link href="/" onClick={() => handleClick('home')}>Home</Link>
                    </li>

                    <li className={
                        activePage === "portfolio" ? "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300 border-b-4 border-purple" 
                        : "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300"
                    }>
                        <Link href="#portfolio" onClick={() => handleClick('portfolio')}>Portfolio</Link>
                    </li>

                    {/* <li className={
                        activePage === "about" ? "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300 border-b-4 border-purple" 
                        : "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300"
                    }>
                        <Link href="/about/About" onClick={() => handleClick('about')}>About</Link>
                    </li> */}

                    <li className={
                        activePage === "gallery" ? "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300 border-b-4 border-purple" 
                        : "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300"
                    }>
                        <Link href="/gallery/Gallery" onClick={() => handleClick('gallery')}>Gallery</Link>
                    </li>

                    <li className={
                        activePage === "contact" ? "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300 border-b-4 border-purple" 
                        : "l:text-s l:hover:text-sm text-xs hover:text-xxs font-bold hover:text-purple ease-in duration-300 hover:ease-in hover:duration-300"
                    }>
                        <Link href="#contact" onClick={() => handleClick('contact')}>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Change size and animate */}
            {/* Mobile Button */}
            <div onClick={handleNav} className='md:hidden block z-10 text-white hover:text-purple'>
                {nav ? <CloseIcon size={30}  /> : <MenuIcon size={30} /> }
            </div>

            {/* Mobile Navigation */}
            <div className= {
                nav
                ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }
            >
                <ul className='text-white'>
                    <li className='text-s hover:text-m pb-6 hover:text-purple font-bold ease-in duration-300 hover:ease-in hover:duration-300'><Link href="/">Home</Link></li>
                    <li className='text-s hover:text-m pb-6 hover:text-purple font-bold ease-in duration-300 hover:ease-in hover:duration-300'><Link href="/portfolio/Portfolio">Portfolio</Link></li>
                    <li className='text-s hover:text-m pb-6 hover:text-purple font-bold ease-in duration-300 hover:ease-in hover:duration-300'><Link href="/about/About">About</Link></li>
                    <li className='text-s hover:text-m pb-6 hover:text-purple font-bold ease-in duration-300 hover:ease-in hover:duration-300'><Link href="/gallery/Gallery">Gallery</Link></li>
                    <li className='text-s hover:text-m pb-6 hover:text-purple font-bold ease-in duration-300 hover:ease-in hover:duration-300'><Link href="/contact/Contact">Contact</Link></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar