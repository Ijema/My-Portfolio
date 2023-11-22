import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
            justify-evenly mx-auto items-center z-0"
        >
            
            <h3 className="absolute top-10 uppercase tracking-[9px] text-gray-100 text-2xl">
                Projects
            </h3>
                
            <div className="relative top-[40px] w-full flex space-x-5 p-10 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffffff] z-20">
            <ProjectCard
                link="./"
                projectImage="./assets/portfolio-logo.jpg"
                projectTitle="My Portfolio"
                Logo={[
                    "./assets/react.png",
                    "./assets/framer-motion-logo.jpg",
                    "./assets/sanity.png",
                    "./assets/tailwind-logo.png",
                    "./assets/typescript.png"
                ]}
                description="This project is used to determine how many students were present in a certain classroom during a particular lecture."
            />

            <ProjectCard link="https://ijeoma-transport-queue-system.netlify.app/"
                projectImage="./assets/queue-transport-system-Image.png"
                projectTitle="Queue Transport System"
                Logo={[
                    "./assets/react.png",
                ]}
                description="It's a queue transport system that incorporates a user-friendly drag-and-drop feature for efficiently managing customers and scheduling them on the planner throughout the week."
            />

            <ProjectCard link="https://product-inventory-management-system.netlify.app/"
                projectImage="./assets/product-inventory-management-image.png"
                projectTitle="Product Inventory Mangement"
                Logo={[
                    "./assets/react.png",
                ]}
                description="This system is designed for managing product inventory through a table-based interface. It empowers the sales administrator to perform CRUD (Create, Read, Update, Delete) operations on products."

            />
            <ProjectCard 
                link="https://demmicod-travels.netlify.app/" 
                projectImage="./assets/demmicod-travels-image.png" 
                projectTitle=" Demmicod Travel Guide" 
                Logo={["./assets/html-logo.jpg", "./assets/css-logo.png", "./assets/react.png"]} 
                description=" Demmicod Travels is a user-friendly travel website offering personalized travel options, travel advisories, and a vibrant community of fellow travelers. It's your ultimate destination for exploring the world with confidence and convenience." 
            />

            <ProjectCard 
                link="https://ijema.github.io/wrist-watch-online-shopping-mall/" 
                projectImage="./assets/bog-image.png" 
                projectTitle=" BOG Wrist Watch Store" 
                Logo={["./assets/html-logo.jpg", "./assets/css-logo.png"]} 
                description=" Our website serves as a premier online marketplace dedicated to the seamless purchase of wristwatches. It offers a wide selection of timepieces, allowing customers to explore and acquire their desired watches with convenience and confidence." 
            />

            <ProjectCard 
                link="https://ijema.github.io/task-reminder/" 
                projectImage="./assets/to-do-list.png" 
                projectTitle=" My To Do List" 
                Logo={["./assets/html-logo.jpg", "./assets/css-logo.png", "./assets/javascript-logo.png"]} 
                description=" This webpage enables individuals to check off completed tasks, set deadlines, and even reminds us when the task is due." 
            />

            <ProjectCard 
                link="https://gets-password.netlify.app/" 
                projectImage="./assets/password-generator.jpg" 
                projectTitle=" Password Generator" 
                Logo={["./assets/html-logo.jpg", "./assets/css-logo.png", "./assets/javascript-logo.png"]} 
                description=" This project is designed to generate strong and reliable passwords 
                with your chosen words and special characters." 
            />


            </div>

            <div className="w-full absolute top-[35%] h-[60%] bg-[#F7ABBA]/10 left-0 h-[500px]
            -skew-y-12">
            </div>
   </motion.div>     
  )
}

export default Projects