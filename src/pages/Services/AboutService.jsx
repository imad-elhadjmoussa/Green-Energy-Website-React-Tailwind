
import React from 'react'

export const AboutService = ({ icon, title }) => {
    return (
        <div className=' flex bg-white cursor-pointer flex-col items-center gap-2 p-5 shadow-lg min-w-[200px] rounded-lg  '>
            <img className=' size-[80px] ' src={icon} alt="" />
            <span className=' green-title' >
                {title}
            </span>
            <span className=' text-gray-600 text-center '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur quia quibusdam,  ut sit!
            </span>
        </div>
    )
}
