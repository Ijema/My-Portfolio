import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
            justify-evenly mx-auto items-center z-0"
        >
            
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ffffff] scrollbar-thin">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center pt-[155px] space-y-5">
                        <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration:1.2}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-40 h-20 md:w-60 md:h-40 xl:w-80 xl:h-60"
                            src="./assets/survey-image.jpg" alt="Projects"
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-5xl">
                            <h4 className="text-3xl font-semibold text-center">
                                <span className="underline decoration-[gray]">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                UPS clone
                            </h4>
                            <p className="text-md text-center md:text-left">
                                To complete a project successfully, a collective communication 
                                structure housing these various construction agents is 
                                required due to the complexity of the construction 
                                industry, which is made up of different construction 
                                agents such as contractors, architects, engineers, 
                                builders, workers, and suppliers. Therefore, the 
                                management of associations is a necessity for the 
                                construction sector 
                            </p>
                        </div>
                        <div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[35%] h-[60%] bg-[#F7ABBA]/10 left-0 h-[500px]
            -skew-y-12">
            </div>
        </motion.div>
  )
}

export default Projects