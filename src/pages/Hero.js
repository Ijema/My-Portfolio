import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../pages/BackgroundCircles'



function Hero() {
const [text] = useTypewriter({
             words: [
                "Hello, I'm Ijeoma, transitioning to Frontend Development.",
                "Dedicated and hardworking professional.",
                "Striving to exceed limits.",
                "Embarking on my coding journey.",
                "Passionate about creating seamless user experiences.",
                "My best work is yet to come."
        ],    
        loop: true,
        delaySpeed: 2000,
    })

  return (
     <div className="h-screen flex flex-col space-y-0 items-center text-center pt-[7px] overflow-hidden">
        <BackgroundCircles />
        <img
            className="relative top-7 rounded-full h-[163px] w-[163px] mx-auto object-cover "
            src ="./assets/profile-picture1.png" alt="My Profile Display" 
        />
        <div className="z-20">
            <h2 className="text-sm md:text-md pt-[40px] md:uppercase text-gray-100 tracking-[3px]">
                Customer Suport |
            </h2>
            <h2 className="text-sm md:text-md md:uppercase text-gray-100 tracking-[3px] pb-2 pl-2">
                Frontend Developer
            </h2>
            <h1 className="text-md md:text-1xl font-semibold px-10 overflow-hidden">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#ffffff" />
            </h1>
            <div className="pt-2 space-x-1">
                    <a href="#about">
                        <button className="heroButton">About</button>
                    </a>
                    <a href="#workExperience">
                        <button className="heroButton">Experience</button>
                    </a>
                    <a href="#skills">
                        <button className="heroButton">Skills</button>
                    </a>
                    <a href="#projects">
                        <button className="heroButton">Projects</button>
                    </a>
            </div>
        </div>
    </div>
  );
}

export default Hero