import React from 'react'
import { FaFigma } from 'react-icons/fa'
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineNaturePeople, MdOutlineWebhook } from 'react-icons/md'

export const boxs = [
    {
        name: 'UX/UI design',
        icon: <FaFigma />,
        description: 'Design webpages'
    },
    {
        name: 'Frontend development',
        icon: <MdOutlineWebhook />,
        description: 'Offer ReactJs and NextJs'
    },
    {
        name: 'Moble app design',
        icon: <CiMobile3 />,
        description: 'Design UXUI for Mobile applications'
    },
    {
        name: 'Product Testing and support',
        icon: <MdOutlineNaturePeople />,
        description: 'Support and tesing products for mobile applications and web applications that require'
    }
]


export default function Service() {
    return (
        <section className='my-5 w-full'>
            <p className='text-md font-semibold text-secondary-color'>What i provide ?</p>
            <p className='text-4xl font-semibold text-white w-1/2'>
                I Offer Wide Range Of Top Notch <span className='text-secondary-color' id='leng_animation'>Services</span>
            </p>
            <div id='listBox' className='w-full mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    boxs.map((item, index) => (
                        <div key={index} className='p-5 hover:scale-105 transition-all cursor-pointer rounded-2xl'>
                            <p className='text-5xl text-secondary-color'>{item.icon}</p>
                            <p className='text-2xl text-gray-300 mt-4 font-semibold'>{item.name}</p>
                            <p className='text-md text-gray-300 mt-3'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
