import { motion } from 'framer-motion'
import React from 'react'
import { services } from './data'
import { Service } from './Service'

export const Services = () => {
    return (
        <div className=' px-[40px] flex flex-col items-center gap-5 '>
            <div className=' w-full flex items-center justify-center '>
                <motion.hr initial={{ width: "0%" }} whileInView={{ width: "20%" ,transition:{delay:0.4}}} viewport={{ amount: "all", once: true }}
                    className=' h-[5px] rounded-full bg-primary  w-[50%] border-none ' />
            </div>

            <span className=' font-Rajdhani font-bold text-primary text-xl '>
                WHAT WE OFFER
            </span>
            <span className=' text-3xl text-dark-primary font-bold  text-center max-w-[500px] '>
                Make energy choice that's good for business and the plante
            </span>

            <div className=' flex flex-wrap gap-12 pt-[50px] '>
                {
                    services.map((ele, index) => {
                        return (
                            <motion.div
                                key={ele.id}
                                className=' flex-1'
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 * (index + 1) } }}
                                viewport={{ once: true, amount: "some" }}

                            >
                                <Service image={ele.image} title={ele.title} />
                            </motion.div>
                        )

                    })
                }
            </div>
        </div>
    )
}
