import { motion } from 'framer-motion'
import React from 'react'


export const Service = ({ image, title }) => {
    return (
        <div className=' rounded-sm flex flex-col   gap-4 bg-white shadow-xl min-w-[300px] cursor-pointer '>
            <div className=' w-full h-[280px] overflow-hidden '>
                <motion.img whileHover={{ scale: 1.1 }} className='overflow-hidden rounded-t-sm w-full h-[280px] ' src={image} alt={title} />
            </div>
            <div className=' flex flex-col gap-1 p-4'>
                <span className=' font-Rajdhani font-bold text-primary text-xl '>
                    {title}
                </span>
                <span className='text-style1 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam ipsam excepturi? Quia iure
                </span>
            </div>
        </div>
    )
}
