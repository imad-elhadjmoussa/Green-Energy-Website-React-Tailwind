import { motion } from 'framer-motion'
import React from 'react'
import { works } from './data'
import { WorkCard } from './WorkCard'


export const Howitwork = () => {
    return (
        <div className=' px-[40px] flex items-center flex-col gap-5  ' >
            <div className=' w-full flex items-center justify-center '>
                <motion.hr initial={{ width: "0%" }} whileInView={{ width: "20%",transition:{delay:0.4} }} viewport={{ amount: "all", once: true }}
                    className=' h-[5px] rounded-full bg-primary  w-[50%] border-none ' />
            </div>

            <span className=' font-Rajdhani font-bold text-primary text-xl '>
                HOW IT WORKS
            </span>
            <span className=' text-3xl text-dark-primary font-bold  text-center max-w-[400px] '>
                Esay Step
            </span>
            <span className=' font-reboto text-gray-600 max-w-[700px] text-center  '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium vero nihil quos iure, esse, blanditiis facilis quisquam rem ipsum architecto nisi asperiores? Earum magnam eveniet hic minus dolorum consequatur.
            </span>

            <div className=' flex flex-wrap gap-16 md:gap-10 pt-[50px] '>
                {
                    works.map((ele, index) => {
                        return (
                            <motion.div
                                key={ele.id}
                                initial={{ scale:0 , opacity: 0 }}
                                whileInView={{ scale:1, opacity: 1, transition: { delay: (index + 1) * 0.4 } }}
                                viewport={{ once: true, amount: "some" }}
                                className=' flex-1'
                            >
                                <WorkCard title={ele.title} nbr={index + 1} />
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    )
}
