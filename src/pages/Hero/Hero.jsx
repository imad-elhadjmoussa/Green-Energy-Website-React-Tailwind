import React, { useEffect } from 'react'
import heroBg from './Icons/hero2.jpg'
import { card, scrollToSection } from './data'
import { HeroCard } from './HeroCard'
import energyIcon from './Icons/electricity-flash-svgrepo-com.svg'
import { motion } from 'framer-motion'
import { GreenBtn } from '../All/GreenBtn'


export const Hero = ({ ref }) => {

    return (
        <div
            className=' relative  w-full h-[120vh]  flex justify-center bg-center bg-no-repeat bg-cover items-center flex-col md:gap-7 gap-4  text-white px-[40px]   '
            style={{ backgroundImage: `url(${heroBg})` }}
        >

            <motion.p
                className='  text-xl font-bold font-Rajdhani pt-[20px] text-primary '
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.2, delay: 0.2 }}
            >
                Welecom to greenio
            </motion.p>

            <motion.h1
                className=' md:text-5xl text-4xl font-kanti font-semibold  max-w-[650px] text-center'
                initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 }}
            >
                The better source of energy for the better tomorrow
            </motion.h1>

            <motion.p
                className=' md:text-xl text-lg  font-bold max-w-[650px] text-center font-reboto '
                initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }} transition={{ duration: 0.2, delay: 0.8 }}
            >
                Help protect the enviroment by powering your home with 100% renewable energy
            </motion.p>

            <div className=' flex gap-5 font-semibold flex-wrap items-center justify-center   '>
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.2, delay: 1.1 } }}
                >
                    <GreenBtn text={"Get Started"} link={"About"} />
                </motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: 1.4 }} >
                    <motion.button
                        className=' px-[40px] py-[10px]  rounded-sm border-[2px] border-white hover:bg-white/20 hover:border-white/20 transition-all duration-250 ease-linear '
                        onClick={()=>{scrollToSection("About")}}
                        whileTap={{scale:0.95}}
                    >
                        Discover More
                    </motion.button>
                </motion.div>
            </div>
            <div className=' absolute px-4 flex  items-center gap-6 top-[85%] justify-center  flex-wrap ' ref={ref} >

                <motion.div
                    className='  flex  cursor-pointer flex-col gap-3 p-10 shadow-lg rounded-sm items-center bg-[#1a63a8]'
                    initial={{ scale: 0 }} whileInView={{ scale: 1, transition: { delay: 0.2 } }} viewport={{ once: true, amount: "all" }}
                >
                    <img className=' size-[80px] ' src={energyIcon} alt="" />
                    <span className=' block font-semibold text-lg '>
                        Since 2010 our costomer avoided
                    </span>
                    <span className=' block font-bold text-2xl '>
                        +112,845,311
                    </span>
                    <span className=' block text-lg '>
                        bound of Co²
                    </span>
                </motion.div>

                {
                    card.map((ele, index) => {
                        return (
                            <motion.div
                                className='  flex-1 block cursor-pointer'
                                key={ele.id}
                                initial={{ scale: 0 }} whileInView={{ scale: 1, transition: { delay: 0.2 * (index + 2) } }} viewport={{ once: true, amount: "all" }}

                            >
                                <HeroCard icon={ele.icon} title={ele.title} text={ele.text} />
                            </motion.div>
                        )
                    })
                }
            </div>

        </div>
    )
}
