// import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SkillsCard from './SkillsCard'

function Skills() {
  
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className ="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
    <h3 className="absolute top-[60px] uppercase tracking-[9px] text-gray-100 text-2xl">
           Skills
    </h3>
        <h3 className="absolute top-[120px] uppercase tracking-[3px] text-gray-300 text-sm md:text-lg">
            Hover over a skill to see the skill proficiency
        </h3>

        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
          <SkillsCard icon="Logo-Zendesk.jpg"
                  percentage= "90%"
                  skillsName="Zendesk" 
          />
          <SkillsCard icon="microsoft-office-logo.png"
                  percentage= "100%"
                  skillsName="Ms Office" 
          />
          <SkillsCard icon="react.png"
                  percentage= "80%"
                  skillsName="React" 
          />
          <SkillsCard icon="css-logo.png"
                  percentage= "100%"
                  skillsName="CSS" 
          />
          <SkillsCard icon="html-logo.jpg"
                  percentage= "100%"
                  skillsName="Html" 
          />
          <SkillsCard icon="javascript-logo.png"
                  percentage= "100%"
                  skillsName="JavaScript" 
          />
          <SkillsCard icon="tailwind-logo.png"
                  percentage= "80%"
                  skillsName="Tailwind" 
          />
          
            
        </div>
    </motion.div>
  );
}

export default Skills