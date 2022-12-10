import React from 'react';
import { Fade } from 'react-reveal';
import { Button } from '../../../component/Button/Button';

class About extends React.Component {
    render() {
        return (
            <section className="py-10" >
                <h2 className='text-white text-4xl text-center font-black'>ABOUT ME</h2>
                <div className='md:flex justify-between overflow-hidden'>
                    <div className='md:w-6/12 mt-12'>
                        <h3 className='text-2xl lg:text-3xl font-black mb-5'>Hi, I am Raihan </h3>
                        <Fade left>
                            <p className='text-md lg:text-xl mb-2'>
                                Earned a Bachelor's degree in Computer Science. I'm working as a full-stack web developer for more than 1 year.</p>
                            <p className='text-md lg:text-xl mb-2'>
                                I have vast experience in NodeJS, React, Express Js HTML5, CSS3, Bootstrap, and JavaScript. Not only that, but I also work with database MongoDB in backend development to create dynamic web applications. I work with RESTful API.
                            </p>
                            <p className='text-md lg:text-xl mb-2'>
                                I like to share my knowledge and help others. Client's satisfaction is the best priority for me. Feel free to contact me for any web development related task.
                                Thank You.
                            </p>
                            <Button>Contact Me</Button>
                        </Fade>
                    </div>
                    <div className='md:w-6/12 mt-12'>
                        <h3 className='text-2xl lg:text-3xl font-black mb-5 md:text-right'>My Skills</h3>
                        <Fade right>
                            <div className='flex flex-wrap md:justify-end'>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>HTML</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>CSS</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>JAVASCRIPT</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>TAILWIND CSS</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>BOOTSTRAP</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>REACT</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>NODE JS</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>EXPRESS JS</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>REST API</p>
                                <p className='text-md lg:text-xl font-bold p-1 px-5 bg-white rounded-md m-2'>MONGODB</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    };
};

export default About;