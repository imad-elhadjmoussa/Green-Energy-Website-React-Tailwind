import { motion } from 'framer-motion'
import React from 'react'

export const HeroCard = ({ title, text, icon }) => {
    return (
        <motion.div
            className=' bg-white flex flex-col items-center gap-3 shadow-lg p-4 rounded-sm'
            whileHover={{scale:1.05}}
        >
            <div>
                <img className=' size-[80px] ' src={icon} alt={title} />
            </div>

            <h2 className=' text-dark-primary text-xl font-bold font-reboto  '>
                {title}
            </h2>

            <p className=' text-gray-500 text-center '>
                {text}
            </p>

        </motion.div>
    )
}
