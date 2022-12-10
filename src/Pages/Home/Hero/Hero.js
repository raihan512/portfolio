import React from 'react';
import Fade from 'react-reveal/Fade';
import user from '../../../assets/user.png'
import { Button } from '../../../component/Button/Button';


class Hero extends React.Component {
    render() {
        return (
            <section
                className=' p-5 md:pb-0 md:pt-10 overflow-hidden flex flex-col-reverse md:flex-row items-center'>
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
                        <Button>Resume</Button>
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