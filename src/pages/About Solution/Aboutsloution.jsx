import { motion } from 'framer-motion'
import React from 'react'
import bg from "./about-solution.jpg"
import arrowIcon from './triangle-right-filled-svgrepo-com.svg'
import { GreenBtn } from '../All/GreenBtn'
import { scrollToSection } from '../Hero/data'

export const Aboutsloution = () => {
    return (
        <div className=' px-[40px] flex gap-20 items-center flex-col md:flex-row   '>

            <div className=' flex-1 relative'>
                <img className=' h-[80vh]  rounded-lg ' src={bg} alt="" />
                <motion.div
                onClick={()=>{scrollToSection("aboutServices")}}
                    className=' absolute cursor-pointer md:right-0 md:top-[50%] md:translate-x-[50%] shadow-lg md:-translate-y-[50%] bg-white p-3 rounded-full top-[100%] -translate-y-[50%]  right-[50%] translate-x-[50%]   '
                >
                    <motion.img  className=' size-[70px] ' src={arrowIcon} alt=""  whileHover={{rotate:'90deg'}} />
                </motion.div>
            </div>

            <div className=' flex-1 flex flex-col gap-10 md:items-start items-center '>
                <span className=' font-bold font-Rajdhani text-dark-primary text-5xl text-center md:text-start ' >
                    We need a solar solution for
                    a better future.
                </span>
                <span className=' font-reboto text-gray-600   ' >
                    Fringilla etiam tempor faucibus ullamcorper arcu nulla duis.
                    Magnis faucibus nulla risus laoreet maximus. Diam lorem suscipit
                    nisi imperdiet quis feugiat nec pede mauris vel iaculis. Sociosqu
                    magna mi mollis litora nascetur pharetra.
                    Fringilla etiam tempor faucibus ullamcorper arcu nulla duis.
                    Magnis faucibus nulla risus laoreet maximus. Diam lorem suscipit
                    nisi imperdiet quis feugiat nec pede mauris vel iaculis. Sociosqu
                    magna mi mollis litora nascetur pharetra.
                </span>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1,transition:{delay:0.4} }} viewport={{ amount: "all", once: true }}>
                    <GreenBtn text={"Discover More"} link={"aboutServices"} />
                </motion.div>
            </div>
        </div>
    )
}
