import React from 'react';

const Hero = () => {
    return (
        <section className='bg-[#5CAC6B] py-40 px-5'>
            <div>
                <h1 className='text-white text-[50px] font-bold'>ABUL KHAYER RAIHAN</h1>
                <h2 className='text-white text-[30px] font-medium'>FRONTEND DEVELOPER</h2>
                <div className='flex'>
                    <button className='bg-black text-white text-lg font-medium py-2 px-8 mr-5 hover:bg-white hover:text-black'>Resume</button>
                    <button className='bg-black text-white text-lg font-medium py-2 px-8 mr-5 hover:bg-white hover:text-black'><a href="#contact">Contact Me</a></button>
                </div>
            </div>
        </section>
    );
};

export default Hero;