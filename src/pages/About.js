import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left 
      md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-6  md:top-10 xl:top-24 uppercase tracking-[9px] p-30 text-gray-100 text-2xl">
        About
      </h3>
      <motion.img 
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        src="./assets/full-picture.png" alt="Full Picture" 
          className="-mb-20 md:mb-0 flex-shrink-0 w-[129px] h-[129px] rounded-full object-cover
          md:rounded-none md:border-none md:w-64 md:h-64 lg:w-[300px] lg:h-[330px]"
        />
        <div className="space-y-3 xl-space-y-10 px-0 md:px-10">
          <h4 className="text-2xl xl:text-3xl font-semibold">
            Here is a summary of me
          </h4>
          <p className="text-justify xl:text-base text-1sm px-0">
            Ojukwu Ijeoma Amara is my name. I am a frontend developer with keen interest in developing and delivering 
            tech solutions with the best users experience. I am profient in HTML, CSS, JavaScript, React js. 
            My solution driven and people oriented approach, causes me to push the limits by delivering solutions 
            that seamlessly reasonates with the anticipated users. Timely delivery and efficiency keeps me learning 
            and improving with every project completed; I look forward to collaborative projects as well as 
            superheading independent projects of any size and scale.
          </p>
        </div>
    </motion.div>
  );
}

export default About