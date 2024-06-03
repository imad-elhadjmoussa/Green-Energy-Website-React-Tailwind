import React from 'react'
import bg from './icons/wallpaperflare.com_wallpaper.jpg'
import { solutions } from './data'
import { SolutionCard } from './SolutionCard'
import { motion } from 'framer-motion'

export const OurSolution = () => {
    return (
        <div
            className=' bg-cover bg-no-repeat bg-center w-full py-[100px]  px-[40px]  flex flex-col items-center gap-5 '
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className=' w-full flex items-center justify-center '>
                <motion.hr initial={{ width: "0%" }} whileInView={{ width: "20%",transition:{delay:0.4} }} viewport={{ amount: "all", once: true }}
                    className=' h-[5px] rounded-full bg-primary  w-[50%] border-none ' />
            </div>

            <span className=' font-Rajdhani font-bold text-primary text-xl '>
                OUR SOLUTION
            </span>
            <span className=' text-3xl text-dark-primary font-bold  text-center max-w-[400px] '>
                Keep your environment clean make the
                earth green.
            </span>
            <span className=' text-lg font-reboto max-w-[500px] text-white text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
            </span>

            <div className=' flex flex-wrap gap-10 pt-[50px] items-center justify-start '>
                {
                    solutions.map((ele, index) => {
                        return (
                            <motion.div
                                className=' flex-1' key={ele.id}
                                initial={{ y: 400, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 * (index + 1) } }} viewport={{ once: true, amount: "some" }}
                            >
                                <SolutionCard title={ele.title} text={ele.text} icon={ele.icon} image={ele.image} />
                            </motion.div>
                        )
                    })
                }
            </div>

        </div>
    )
}
