import { motion } from 'framer-motion'
import img from './images/carousel-1.jpg'
import energyIcon from './images/power-svgrepo-com.svg'
import { GreenBtn } from '../All/GreenBtn'


export const About = () => {

    return (
        <div className=' flex flex-col items-center md:flex-row gap-10 md:gap-20 px-[40px]  '  >

            <div className=' flex flex-col md:flex-1 md:items-start items-center  gap-3'>
                <div className=' w-full flex items-center justify-center'>
                    <motion.hr initial={{ width: "0%" }} whileInView={{ width: "30%" ,transition:{delay:0.4}}} viewport={{ amount: "all", once: true }}
                        className=' h-[5px] rounded-full bg-primary  w-[50%] border-none ' />
                </div>
                <span className=' font-bold font-Rajdhani text-primary text-lg text-center w-full '>
                    WHO WE ARE
                </span>
                <span className=' font-bold font-reboto text-2xl text-dark-primary text-justify'>
                    clean make the earth green. <br />
                    Aliquet sodales litora bibendum quam dui pharetra pretium
                </span>
                <span className=' font-reboto  text-gray-500'>
                    torquent gravida ullamcorper. Si arcu est aenean nisi velit
                    vivamus vestibulum fames mollis. Mollis letius eros massa elit
                    cubilia eleifend donec volutpat. Suscipit ultrices vivamus faucibus
                    lacus molestie nec duis consequat nisl metus fusce.
                </span>
                <motion.div  initial={{scale:0}} whileInView={{scale:1,transition:{delay:0.4} }} viewport={{ amount: "all", once: true }}>
                    <GreenBtn text={"Discover More"} link={"ourSolution"} />
                </motion.div>
            </div>

            <div className=' relative md:flex-1 '>
                <img className=' rounded-lg  h-[350px] w-full ' src={img} alt="" />
                <motion.div
                    className=' flex cursor-pointer flex-col gap-2 max-w-[250px]  shadow-lg items-center p-4 rounded-lg absolute left-[20%]  top-[60%] md:-left-[20%] bg-white'
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ amount: "all", once: true }}
                >
                    <img className=' size-[80px] ' src={energyIcon} alt="Energy" />
                    <span className='font-bold font-Rajdhani text-primary text-lg text-center'>
                        RENEWABLE ENERGY
                    </span>
                    <span className=' font-bold text-center text-dark-primary text-lg'>
                        Energy is the future,Make it brilliant
                    </span>
                </motion.div>
            </div>

        </div>
    )
}
