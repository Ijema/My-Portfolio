import React from 'react';
import { motion } from 'framer-motion';

function SkillsCard(props) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center top-20">       
      <motion.img 
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={`./assets/${props.icon}`} alt="Skills have"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      
      <div className="absolute opacity-0 group-hover:opacity-80 transition-300
        ease-in-ease-out group-hover:bg-white h-20 w-20 xl:w-28 xl:h-28
        rounded-full z-0 flex items-center justify-center">
        <p className="text-2xl xl:text-3xl font-bold text-black opacity-100">{props.percentage}</p>
      </div>

      <div className='absolute text-md top-[110px] flex justify-center'>
        <h2>{props.skillsName}</h2>
      </div>
    </div>
  );
}

export default SkillsCard;