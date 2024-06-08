import { motion } from 'framer-motion'
import React from 'react'
import { scrollToSection } from '../Hero/data'


export const GreenBtn = ({text,link}) => {
    return (
        <motion.button
            className=' px-[50px] py-[10px] bg-primary border-[2px] hover:scale-[1] hover:bg-green-400 hover:border-green-400 hover:shadow-lg transition-all duration-250 ease-linear border-primary rounded-sm text-white font-semibold '
            onClick={()=>{scrollToSection(link)}}
            whileTap={{scale:0.95}}
        >
            {text}
        </motion.button>
    )
}
