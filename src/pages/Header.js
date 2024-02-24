import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "../App.js"
// import { calculateSizeAdjustValues } from 'next/dist/server/font-utils.js';
// import { social } from "../typings";

export default function Header() {
  return (
    <header className="top-0 p-2 md:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity:1,
                scale: 1           
            }}
            transition={{
                duration:1.5
            }}
            className="flex flex-row items-center mb-5">
                
                
                <SocialIcon 
                    url="https://www.facebook.com/ijeoma.ojukwu.58"  
                    fgColor="white" 
                    bgColor="transparent"
                />
                <SocialIcon 
                    url="https://linkedin.com/in/ijeoma-amara-ojukwu"  
                    fgColor="white" 
                    bgColor="transparent"
                />
                <SocialIcon 
                    url="https://twitter.com/Ijeoma_Oj1?t=rgtSDAOLI3Hkpkm_3mql6g&s=09"  
                    fgColor="white" 
                    bgColor="transparent"
                />
                <SocialIcon 
                    url="https://www.youtube.com/channel/UCM-Na8P7Osg96zya8U0iZ2g"  
                    fgColor="white" 
                    bgColor="transparent"
                />
                <a href="#contact">
                    <SocialIcon 
                        className="cursor-pointer"
                        network="email"  
                        fgColor="white" 
                        bgColor="transparent"
                    />
                </a>
        </motion.div>
    
    
        <motion.div 
            initial={{
                x: 500,
                opacity:0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duartion: 1.5
            }}
            className="flex flex-row items-center text-blue-300 cursor-pointer"
            >
            
            <a 
                href="../../public/assets/files/_IJEOMA AMARA OJUKWU CV.pdf" 
                download="_IJEOMA AMARA OJUKWU CV" 
                target="_blank"
                rel="noreferrer">
                <button className="border-solid border-2 px-4 border-gray-500 hover:text-gray-500 rounded-full text-white mt-3 md:mt-0 mr-2">CV</button> 
            </a>
                <p className="uppercase hidden md:inline-flex text-md text-stone-300 pl-2 pr-5">Download</p>
        </motion.div>
    </header>
  );
}

