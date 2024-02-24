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
        src="./assets/profile-picture1.png" alt="Picture" 
          className="-mb-20 md:mb-0 flex-shrink-0 w-[129px] h-[129px] rounded-full object-cover
          md:rounded-none md:border-none md:w-64 md:h-64 lg:w-[300px] lg:h-[330px]"
        />
        <div className="space-y-3 xl-space-y-10 px-0 md:px-10">
          <p className="text-justify xl:text-base text-1sm px-0">
            A dedicated Customer Service Specialist with over 4 years of experience, I am now poised to transition into
             a career as a Frontend Developer. My background in delivering exceptional customer service and sales has 
             instilled in me the importance of seamless processes for businesses to thrive. Proficient in HTML, CSS, 
             JavaScript and React js, I bring a unique blend of customer support expertise and technical acumen to 
             swiftly address complex issues.
          </p>

          <p className='text-justify xl: text-base text-1sm px-0'>
            My proficiency in frontend development allows me to leverage coding skills to implement effective solutions 
            and enhance user experiences. I am committed to applying my knowledge, skills, and expertise to excel in 
            delivering outstanding customer service, contributing to over 40% customer retention, and fostering business 
            growth.
          </p>
        </div>
    </motion.div>
  );
}

export default About