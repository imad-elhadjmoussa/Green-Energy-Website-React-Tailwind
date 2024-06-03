import React from 'react'
import imgEngineer from './images/energy-engineer.jpeg'
import { otheServices } from './data'
import { AboutService } from './AboutService'
import { motion } from 'framer-motion'


export const AboutServices = () => {
    return (
        <div className=' flex gap-14 px-[40px]  md:flex-row flex-col items-center ' >
            <div className=' flex flex-col gap-5 items-start  '>
                <div className=' w-full flex items-center justify-center'>
                    <motion.hr initial={{ width: "0%" }} whileInView={{ width: "30%" ,transition:{delay:0.4}}} viewport={{ amount: "all", once: true }}
                        className=' h-[5px] rounded-full bg-primary  w-[50%] border-none ' />
                </div>
                <span className=' font-Rajdhani w-full font-bold text-lg text-primary text-center '>
                    WHY CHOOSE US
                </span>

                <span className=' text-center text-4xl font-Rajdhani font-bold  text-dark-primary '>
                    Live green, Love green, Think green
                </span>

                <span className=' text-gray-600' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet accusantium blanditiis voluptatem eos ipsum eum sint nisi quidem et delectus deserunt exercitationem
                </span>

                <motion.img
                    className=' w-full h-full rounded-lg shadow-lg  ' src={imgEngineer} alt=""
                    initial={{ opacity: 0 }}
                    whileInView={{opacity: 1, transition: { delay: 0.4 } }}
                    viewport={{ amount: 'some', once: true }}
                />
            </div>

            <div className=' flex-wrap flex gap-5 '>
                {
                    otheServices.map((ele, index) => {
                        return (
                            <motion.div
                                key={ele.id} className=' flex-1 '
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1, transition: { delay: 0.6 * (index + 1) } }}
                                viewport={{ amount: 'some', once: true }}
                            >
                                <AboutService title={ele.title} icon={ele.icon} />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
