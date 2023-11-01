import React from 'react'
import { motion } from 'framer-motion'

function WorkExperienceCard(props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 xl:space-y-2 
    flex-shrink-0 w-[230px] md:w-[390px] xl:w-[405px] snap-center
    bg-[#334155] py-3 px-2 overflow-scroll-x">
        <motion.img 
            initial={{ 
                y: -100,
                opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="w-[90px] h-[90px] rounded-full md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px] object-cover object-center"
            src={props.companyLogo} alt="Company Logo"
        />

        <div className="">
            <h4 className="text-2xl font-light text-center">{props.jobTitle}</h4>
            <p className="font-bold text-1xl mt-1 text-center">{props.employer}</p>
            <div className="flex space-x-2 my-2 justify-center">
                {props.Logos.map((logos, index) => (
                    <img 
                        className="h-8 w-8 xl:w-15 xl:h-15 rounded-full"
                        src={logos} 
                        alt ="Tech Used" 
                        key={index}                                
                    />
                ))}
            </div>
            <p className="uppercase pb-5 text-gray-300 text-sm text-center">{props.date}</p>
            <ul className="list-disc space-y-1 ml-5 text-sm md:text-md">
                {props.Roles.map((roles, index) => (
                    <li key={index}>{roles}</li>
                ))} 
            </ul>
        </div>
    </article>
  );
}

export default WorkExperienceCard