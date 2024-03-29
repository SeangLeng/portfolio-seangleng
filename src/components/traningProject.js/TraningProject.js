import React from 'react'
import portfolio from '@assets/portoflio.png'
import portistad from '@assets/CV-vs.-Resume-437x230.png'
import kQuick from '@assets/kquicksight.png'
import Image from 'next/image'

export const ImageStyle = 'min-w-full rounded-xl min-h-full object-cover';

export const projects = [
    {
        thumbnail: <Image className={ImageStyle} src={portfolio} alt={'portfolio'} />,
        name: 'Modern portfolio',
        link: 'https://seng-seangleng.vercel.app/'
    },
    {
        thumbnail: <Image className={ImageStyle} src={kQuick} alt={'K-quicksight'} />,
        name: "k - quicksight",
        link: 'https://k-quicksight.istad.co'
    },
    {
        thumbnail: <Image className={ImageStyle} src={portistad} alt={'portistad'} />,
        name: 'portistad',
        link: 'https://portistad.istad.co/'
    },
]

export default function TraningProject() {
    return (
        <div className='py-10'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                <div>
                    <p className='font-medium'>What i have <span className='text-secondary-color'>done?</span></p>
                    <p className='text-4xl font-semibold'>
                        Project <span className='text-secondary-color'>Traning</span>
                    </p>
                </div>
                <p className='text-lg border-l-5 border-secondary-color pl-3 text-white mt-2'>
                    I have actively participated in FullStack website projects, specializing in the implementation of contemporary UX/UI components, with a primary focus on frontend development.
                </p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                {
                    projects.map((item, index) => (
                        <a key={index} target='_blank' href={item.link} className='hover:scale-105 transition-all'>
                            {item.thumbnail}
                        </a>
                    ))
                }
            </div>

        </div>
    )
}
