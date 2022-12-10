import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-[#6789FD] flex justify-between items-center p-5'>
            <h5 className='text-xl font-black'>RAIHAN GAZI</h5>
            <ul className='w-5/12 flex justify-between font-semibold'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;