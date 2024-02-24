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
          jobTitle="Customer Support Representative"  
          employer = "Nnamdi Azikiwe University"
          date="July 2023 – Till date"
          Logos={["./assets/html-logo.jpg", "./assets/php.png", "./assets/mysql1.png", "./assets/javascript-logo.png", "./assets/react.png", "./assets/sanity.png"]}
          Roles={["Provided timely and effective support for the students experiencing technical issues with the servers.", 
                  "Attended promptly to the inquiries of the students via phone, emails and live chat.", 
                  "Taught 100+ students on the practical application and use cases of programming languages.", 
                  "Documented all feedback given by the students noting areas that required urgent attention.",
                  "Measured team progress on a daily and weekly basis thereby offering improved services to students."
                ]}
        />
        <WorkExperienceCard 
          companyLogo="./assets/first-kingdom-kids logo.png"
          jobTitle="Customer Support"  
          employer = "First Kingdom Kids Academy"
          date="June 2019 – July 2023"
          Logos={["./assets/Logo-Zendesk.jpg", "./assets/Microsoft-Office-logo (1).png"]}
          Roles={["Dealing with general telephone enquiries, taking messages accurately, giving information and advice to staff, parents and pupils.",
                  "Sorting and resolving all technical issues related to the software application.", 
                  "Reporting and analysing all product malfunctions and ensuring it is resolved immediately.",
                  "Monitoring database entries and updating parents on the new features.",
                  "Acting as the first point of contact between the customers and the school."]}
        />
        <WorkExperienceCard 
          companyLogo="./assets/ijeoma-logo1.jpg"
          jobTitle="Teacher"  
          employer = "Freelancer"
          date="August 2018 - June 2019"
          Logos={["./assets/html-logo.jpg", "./assets/css-logo.png"]}
          Roles={["Actively involved in the training of 500+ women in Tech Skills.", 
                  "Designed training materials used during the duration of the session.",
                  "Counselled women on the importance of acquiring tech skills in the 21st Century."
                ]}
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