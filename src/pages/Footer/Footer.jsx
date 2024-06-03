import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { company, getInTouch, services, socialContacts, supports } from './data';
import { motion } from 'framer-motion';


export const Footer = () => {
    return (
        <div className=' px-[40px] pt-[80px] pb-[20px] bg-dark-primary gap-10 flex flex-col '>

            <motion.div 
            className=' flex justify-between md:items-end flex-col md:flex-row gap-7 items-center  '
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:1 ,transition:{delay:0.3}}}
            viewport={{once:true,amount:"all"}}
            >
                <div className=' flex flex-col max-w-[600px] gap-4'>
                    <span className=' text-3xl text-white font-Rajdhani font-bold text-center md:text-start '>Sign-Up Our newsletter to get update information, news, insght or promotions.</span>
                    <div className=' flex gap-7 items-center '>
                        <input type="text" />
                        <button className=' flex  bg-primary py-[5px] rounded-sm text-white gap-1 px-5 items-center font-bold font-Rajdhani '>
                            <MailIcon /> 
                            <p className=''> SingUp </p>
                        </button>
                    </div>
                </div>
                <div className=' text-primary flex gap-3' >
                    {
                        socialContacts.map((ele) => {
                            return (
                                <div className=' ' key={ele.id}>
                                    <a href={ele.link} target="_blank" > {ele.icon} </a>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>

            <div>
                <motion.hr initial={{width:0}} whileInView={{width:"100%",transition:{delay:0.3}}} className=' border-none bg-primary h-[3px] w-full rounded-full ' />
            </div>

            <div className=' flex gap-7 items-start justify-between flex-col md:flex-row  '>
                <div>
                    <ColumFooter title={"Services"} data={services} />
                </div>
                <div>
                    <ColumFooter title={"Support"} data={supports} />
                </div>                    <div>
                    <ColumFooter title={"Company"} data={company} />
                </div>                    <div>
                    <ColumFooter title={"Get in touch"} data={getInTouch} />
                </div>
            </div>

            <div>
                <motion.hr initial={{width:0}} whileInView={{width:"100%",transition:{delay:0.3}}} viewport={{once:true,amount:"all "}} className=' border-none bg-primary h-[3px] w-full rounded-full ' />
            </div>

            <div className=' text-white text-lg flex justify-between items-center md:flex-row flex-col gap-4 '>
                <span>
                    Copy right &copy; 2024
                </span>
                <div className=' flex gap-2'>
                    <span className=' border-r-2 border-primary pr-2 ' >Tearm of use</span>
                    <span className=' border-r-2 border-primary pr-2 ' >Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>

        </div>
    )
}


const ColumFooter = ({ title, data }) => {
    return (
        <div className=' flex flex-col md:gap-5 gap-2 '>
            <span className=' text-primary font-Rajdhani text-xl font-bold ' > {title} </span>
            <div className=' flex flex-col gap-1 text-white '>
                {
                    data.map((ele) => {
                        return (
                            <span  key={ele} > {ele} </span>
                        )
                    })
                }
            </div>
        </div>
    )
}