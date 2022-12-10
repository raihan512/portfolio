import React, { useState } from 'react';
import { TfiAlignRight, TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const menuItems = <>
        <li><a href="#home" className='text-lg hover:text-white transition-all'>Home</a></li>
        <li><a href="#about" className='text-lg hover:text-white transition-all'>About Me</a></li>
        <li><a href="#projects" className='text-lg hover:text-white transition-all'>Projects</a></li>
        <li><a href="#contact" className='text-lg hover:text-white transition-all'>Contact Me</a></li>
    </>
    return (
        <header>
            <nav
                className='flex justify-between items-center p-5'>
                <h5 className='text-xl  font-black'>RAIHAN GAZI</h5>
                <ul className='hidden w-7/12 lg:w-5/12 md:flex justify-between  font-semibold'>
                    {menuItems}
                </ul>
                <button className='md:hidden' onClick={() => setMobileNav(value => !value)}>{mobileNav ? <TfiAlignRight className='text-2xl' /> : <TfiClose className='text-2xl' />}</button>
            </nav>
            {/* Mobile Nav */}
            <div
                className={`fixed top-0 ${mobileNav ? 'left-[-800px]' : 'left-[0px]'} transition-all 
             z-40 w-8/12 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 md:hidden`}>
                <ul className='text-white m-10'>
                    {menuItems}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;