import { motion } from 'framer-motion'
import React from 'react'
import { scrollToSection } from '../Hero/data'


export const GreenBtn = ({text,link}) => {
    return (
        <motion.button
            className=' px-[50px] py-[10px] bg-primary border-[2px] hover:shadow-lg border-primary rounded-sm text-white font-semibold '
            whileHover={{ scale: 1.08 }}
            whileTap={{scale:0.92}}
            onClick={()=>{scrollToSection(link)}}
        >
            {text}
        </motion.button>
    )
}
