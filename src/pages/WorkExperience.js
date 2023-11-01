import React from 'react'
import { motion } from 'framer-motion'
import WorkExperienceCard from './WorkExperienceCard'


export default function WorkExperience() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      
      <h3 className="absolute top-1 xl:top-[9px] uppercase tracking-[5px] text-gray-100 text-2xl z-10">
        Work Experience
      </h3>

      <div className="w-full relative flex space-x-5 xl:p-10 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffffff]">
        <WorkExperienceCard 
          companyLogo="./assets/Nau-logo.png"
          jobTitle="Frontend Developer"  
          employer = "Nnamdi Azikiwe University"
          date="June 2019 -Till date"
          Logos={["./assets/html-logo.jpg", "./assets/php.png", "./assets/mysql1.png", "./assets/javascript-logo.png", "./assets/react.png", "./assets/sanity.png"]}
          Roles={["Create user-friendly web pages languages like HTML for the school", "Review students code", "Design, Test and Implement codes.", "keep the website updated and improved Conduct hands-on practice for students in languages like HTML, PHP, CSS, Ajax, JavaScript, and MySQL"]}
        />
        <WorkExperienceCard 
          companyLogo="./assets/ijeoma-logo1.jpg"
          jobTitle="Web Developer"  
          employer = "Freelancer"
          date="January 2017 - April 2019"
          Logos={["./assets/html-logo.jpg", "./assets/css-logo.png"]}
          Roles={["Use web development best practices, to write well-designed, tested, efficient code.", "Work with stakeholders to collect and improve requirements based on technical needs.", "Responsible for site's upkeep, growth, and scaling."]}
        />
        <WorkExperienceCard 
          companyLogo="./assets/toro-logo.jpg"
          jobTitle="Computer Science Instructor"  
          employer = "Government Secondary School, Toro"
          date="April 2015 - April 2016"
          Logos={["./assets/html-logo.jpg", "./assets/css-logo.png"]}
          Roles={["Provide training to pupils on the Microsoft Office suite and other pertinent technologies.", "Teach students how to write computer programs and algorithms", "Create projects that will improve lectures."]}
        />
      </div>
    </motion.div>
  );
} 