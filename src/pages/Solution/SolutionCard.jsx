import { motion } from 'framer-motion'
import React from 'react'


export const SolutionCard = ({ title, icon, image, text }) => {
    return (
        <motion.div 
        whileHover={{y:-20}}
        className=' bg-white flex flex-col rounded-sm min-w-[300px] shadow-lg cursor-pointer h-full    '
        >
            <img className=' w-full h-[250px] rounded-t-sm ' src={image} alt={title} />

            <div className=' p-6 flex flex-col items-center '>
                <img className=' size-[70px]  ' src={icon} alt={title} />

                <span className=' green-title'>
                    {title}
                </span>

                <span className=' text-center font-reboto text-dark-primary '>
                    {text}
                </span>
            </div>

        </motion.div>
    )
}
