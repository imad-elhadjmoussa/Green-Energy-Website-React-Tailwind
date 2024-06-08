import { motion } from 'framer-motion'
import React from 'react'
import { GreenBtn } from '../All/GreenBtn'


export const Contact = () => {

    return (
        <div className='  px-[40px] flex md:flex-row flex-col  gap-10 '>

            <motion.div
                className=' flex flex-col gap-7 items-start justify-start p-8 flex-1 bg-white shadow-lg rounded-lg '
                initial={{ x: '-50%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
                viewport={{ once: true, amount: "some" }}
            >
                <span className=' green-title ' >GET IN TOUCH</span>
                <span className=' text-3xl text-dark-primary font-bold font-Rajdhani' >Contact our sales</span>
                <span className=' text-gray-600 font-reboto' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam velit, reiciendis cum aspernatur ipsum sed optio quaerat nesciunt ex, id molestiae ad dignissimos officia sit maxime? Necessitatibus, repellendus explicabo?</span>
                <span className=' text-xl text-dark-primary font-bold font-Rajdhani'>email@example.com</span>
                <span className=' text-xl text-dark-primary font-bold font-Rajdhani'>+8801714457298</span>

                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ amount: "all", once: true }} >
                    <GreenBtn text={"Online support"} link={"Footer"} />
                </motion.div>
            </motion.div>

            <motion.div
                className=' flex flex-col gap-7 p-8 flex-1 bg-white shadow-lg rounded-lg '
                initial={{ x: '50%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.8 } }}
                viewport={{ once: true, amount: "some" }}
            >
                <span className=' green-title ' >Appiontment</span>
                <span className=' text-3xl text-dark-primary font-bold font-Rajdhani' >Let's start your project</span>

                <form action="" className=' flex-col flex gap-6'  >
                    <div className=' flex gap-4 items-center  '>
                        <div className=' flex flex-col gap-2 items-start flex-1 '>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className=' flex flex-col gap-2 items-start flex-1 '>
                            <label htmlFor="">Company</label>
                            <input type="text" placeholder='Company' />
                        </div>
                    </div>
                    <div className=' flex gap-4 items-center   '>
                        <div className=' flex flex-col gap-2 items-start flex-1 '>
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className=' flex flex-col gap-2 items-start flex-1 '>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>
                    <div className=' flex flex-col gap-2 items-start '>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" className=' w-full' rows="7" placeholder='Message'></textarea>
                    </div>
                    <GreenBtn text={"Send"} link={"Contact"} />
                </form>
            </motion.div>



        </div>
    )
}
