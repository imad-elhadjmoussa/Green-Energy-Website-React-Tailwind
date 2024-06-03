import React from 'react'
import bg from './bg.jpg'
import { motion } from 'framer-motion'
import { GreenBtn } from '../All/GreenBtn'


export const Aboutsolution2 = () => {
  return (
    <div className=' mx-[40px] h-[80vh] bg-cover bg-center bg-no-repeat gap-9 flex flex-col items-center justify-center rounded-xl ' style={{ backgroundImage: `url(${bg})` }} >
      <div className=' flex flex-col gap-3 w-full text-center'>
        <div className=' w-full flex items-center justify-center '>
          <motion.hr initial={{ width: "0%" }} whileInView={{ width: "20%" ,transition:{delay:0.4}}} viewport={{ amount: "all", once: true }}
            className=' h-[5px] rounded-full  bg-gray-600  w-[50%] border-none ' />
        </div>
        <span className=' font-Rajdhani font-bold text-gray-600 text-xl '>
          OUR SOLUTION
        </span>
      </div>

      <span className=' text-3xl text-dark-primary font-bold  text-center max-w-[400px] '>
        Keep your environment clean make the
        earth green.
      </span>
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1,transition:{delay:0.4} }} viewport={{ amount: "all", once: true }}>
        <GreenBtn text={"Discover More"} link={"Contact"} />
      </motion.div>

    </div>
  )
}
