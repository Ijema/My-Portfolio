import React from 'react'
// import Link from 'next/link'
import { motion } from 'framer-motion'

function Project1() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 
    flex-shrink-0 w-[270px] md:w-[360px] lg:w-[350px] xl:w-[445px] snap-center
    bg-[#334155] py-5  overflow-scroll-x">
        <a href="http://naucsclab.42web.io/" target="_blank" rel="noopener noreferrer"><motion.img 
            initial={{ 
                y: 200,
                opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="w-40 h-20 md:w-60 md:h-40 xl:w-60 xl:h-55"
            src="./assets/naucsclab-image.png" alt="Projects"
        /></a>

        <div className="space-y-5 px-0 md:px-10 max-w-5xl">
                            <h4 className="text-3xl font-semibold text-center">
                                <span className="underline decoration-[gray]">
                                <a href="http://naucsclab.42web.io/" target="_blank" rel="noopener noreferrer"> Nau Computer Science Laboratory Website</a>
                                </span>{" "}
                            </h4>
                            <div className="flex space-x-2 justify-center items-center">
                                <img className="h-8 w-8 xl:w-15 xl:h-15 rounded-full"
                                src="./assets/wordpress-logo.png" alt ="Tech Used"
                                />
                                {/* Tech used */}
                            </div>
                            <p className="text-md text-center md:text-left">
                                This website is developed for the computer science laboratory department. This will help the department
                                conduct practicals quiz better.
                            </p>
                        </div>
    </article>
  );
}

export default Project1