import { motion } from 'framer-motion'
import React from 'react'


export const WorkCard = ({ title, nbr }) => {
    return (
        <motion.div

            className={(nbr - 1) % 2 === 0 ?
                '  md:-translate-y-[20px] translate-y-0 bg-white cursor-pointer min-w-[250px] rounded-lg shadow-lg p-4 gap-2 flex flex-col items-center   '
                :
                ' md:translate-y-[20px] translate-y-0 bg-white cursor-pointer min-w-[250px] rounded-lg shadow-lg p-4 gap-2 flex flex-col items-center  '}
        >
            <div className=' bg-primary px-[20px] py-[11px]   text-white font-Rajdhani font-bold text-xl rounded-full '>
                {nbr}
            </div>

            <span className=' text-lg font-bold font-Rajdhani text-dark-primary ' >
                {title}
            </span>

            <span className=' text-center text-gray-600 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo rerum voluptatem.
            </span>

        </motion.div>
    )
}
