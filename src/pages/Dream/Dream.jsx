import React from 'react'
import bg from "./dream.jpg"
import { motion } from 'framer-motion'
import { GreenBtn } from '../All/GreenBtn'


export const Dream = () => {
    return (
        <div className=' w-full h-[90vh] px-[40px] flex flex-col items-center justify-center gap-10 bg-cover bg-no-repeat bg-center ' 
        style={{ backgroundImage: `url(${bg})` }} >

            <span className=' font-Rajdhani text-4xl text-dark-primary font-bold text-center ' >
                Let's shine the dream with solar energy
            </span>

            <span className=' font-reboto text-gray-600 max-w-[800px] text-center ' >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum vero quos unde nobis, sunt omnis? Libero perferendis dicta cumque obcaecati labore odio quidem ducimus debitis architecto vel fuga, quasi quae.
            </span>

            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1,transition:{delay:0.4} }} viewport={{ amount: "all", once: true }}>
                <GreenBtn text={"Discover More"} link={"aboutSolution"} />
            </motion.div>

        </div>
    )
}
