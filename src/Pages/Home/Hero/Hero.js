import React from 'react';
import Fade from 'react-reveal/Fade';
import user from '../../../assets/user.png'


class Hero extends React.Component {
    render() {
        return (
            <section
                className='bg-gradient-to-r from-[RGBA(126,213,111,0.8)] to-[RGBA(40,180,133,0.8)]  p-5 md:pb-0 md:pt-10 overflow-hidden flex flex-col-reverse md:flex-row items-center'>
                <div className='md:w-7/12'>
                    <Fade top>
                        <h1 className='text-white text-[25px] md:text-[35px] lg:text-[50px] font-bold'>ABUL KHAYER RAIHAN</h1>
                        <h2 className='text-white text-[18px] md:text-[22px] lg:text-[30px] font-medium'>FRONTEND DEVELOPER</h2>
                    </Fade>
                    <Fade left>
                        <p className='text-md md:text-xl  lg:text-2xl'>
                            I am a frontend focused fullstack web-developer. I have more than 1 year of experience to design & develop website. I am passionate about creating websites that will give the users best experience.
                        </p>
                    </Fade>
                    <Fade bottom>
                        <div className='md:flex'>
                            <button
                                className='bg-black text-white text-base lg:text-lg font-medium py-2 px-8 mr-5 hover:bg-white hover:text-black bg-gradient-to-r from-cyan-500 to-blue-500 transition-all hover:shadow-xl hover:-translate-y-1 mt-5'>Resume</button>
                            <button
                                className='bg-black text-white text-base lg:text-lg font-medium py-2 px-8 mr-5 hover:bg-white hover:text-black bg-gradient-to-r from-cyan-500 to-blue-500 transition-all hover:shadow-xl hover:-translate-y-1 mt-5'>
                                <a href="#contact">Contact Me</a></button>
                        </div>
                    </Fade>
                </div>
                <div className='w-5/12'>
                    <Fade right>
                        <img src={user} className="w-full" alt="" />
                    </Fade>
                </div>
            </section>
        );
    }
}
export default Hero;