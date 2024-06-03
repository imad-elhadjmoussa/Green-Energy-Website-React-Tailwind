import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../Hero/data';


export const Navbar = ({ isOpen, setOpen }) => {

    const links = ["Home", "About", "Services", "Projects", "Contact"];

    return (
        <motion.div
            className='flex fixed z-50 justify-between items-center bg-[#1a2a36]  py-[15px] w-full px-[40px] '
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
        >
            {/* Logo */}
            <div
                className=' font-bebas-neue font-bold text-2xl text-primary cursor-pointer '
                onClick={() => { scrollToSection("hero") }}
            >
                Green Energy
            </div>
            {/* Links in larg screen */}
            <ul className=' md:flex lg:gap-10 md:gap-5 hidden text-white  '>
                {
                    links.map((ele) => {
                        return (
                            <motion.li
                                className='font-semibold cursor-pointer '
                                key={ele}
                                whileHover={{ color: "#32c36c", y: '-20%' }}
                                onClick={() => { scrollToSection(ele === "Home" ? "hero" :  ele === "Projects" ?  "Services" : ele) }}
                            >
                                {ele}
                            </motion.li>
                        )
                    })
                }
            </ul>
            <motion.button
                className=' bg-primary px-[16px] py-[8px] border-[3px] font-bold border-primary rounded-sm text-white  hidden md:block hover:shadow-lg  '
                whileHover={{ backgroundColor: "white ", color: "#32c36c" }}
                onClick={() => { scrollToSection("About") }}
            >
                Get Started
            </motion.button>

            {/* Links in small screen */}
            <div className=' md:hidden'>
                <Hamburger color='white' size={35} toggled={isOpen} toggle={setOpen} />
            </div>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.ul
                        className=' md:hidden fixed flex  border-t border-gray-100 py-[30px]  left-0 top-[78px] bg-[#1a2a36] text-white px-[40px] w-full z-[1000] '
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: {
                                x: "100%"
                            },
                            visible: {
                                x: 0,
                            },
                            exit: {
                                x: "100%"
                            }
                        }}
                        transition={{ staggerChildren: 0.3, delayChildren: 0.3 }}
                    >
                        <div className=' flex gap-4 flex-col '>
                            {
                                links.map((ele) => {
                                    return (
                                        <motion.li
                                            className='font-semibold cursor-pointer text-lg'
                                            key={ele}
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    x: "-100%"
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                            }}
                                            whileHover={{ color: "#32c36c", x: '20%' }}
                                            onClick={() => {  scrollToSection(ele === "Home" ? "hero" :  ele === "Projects" ?  "Services" : ele); setOpen(prev=>!prev) }}
                                        >
                                            {ele}
                                        </motion.li>
                                    )
                                })
                            }
                        </div>
                    </motion.ul>
                }
            </AnimatePresence>
        </motion.div>
    )
}
