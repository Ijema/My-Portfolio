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
            src="./assets/BOG Image.png" alt="Projects"
        /></a>

        <div className="space-y-5 px-0 md:px-10 max-w-5xl">
                            <h4 className="text-3xl font-semibold text-center">
                                <span className="underline decoration-[gray]">
                                <a href="https://ijema.github.io/wrist-watch-online-shopping-mall/" target="_blank" rel="noopener noreferrer"> BOG Wrist Watch Online Shop</a>
                                </span>{" "}
                            </h4>
                            <div className="flex space-x-2 justify-center items-center">
                                <img className="h-8 w-8 xl:w-15 xl:h-15 rounded-full"
                                src="./assets/html-logo.jpg" alt ="Tech Used"
                                />
                                <img className="h-8 w-8 rounded-full"
                                src="./assets/css-logo.png" alt ="Tech Used"
                                />
                                {/* Tech used */}
                            </div>
                            <p className="text-md text-center md:text-left">
                                Our website serves as a premier online marketplace dedicated to the seamless purchase of wristwatches. It offers a wide selection of timepieces, allowing customers to explore and acquire their desired watches with convenience and confidence.
                            </p>
                        </div>
    </article>
  );
}

export default Project1