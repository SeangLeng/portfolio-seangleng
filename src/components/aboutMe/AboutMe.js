'use client'
import React from 'react'
import aboutMe from '@assets/aboutme.png'
import Image from 'next/image'
import { Button, Slider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'


export const skills = [
    {
        skill: 'UX/UI design',
        level: 0.8
    },
    {
        skill: 'Design tools',
        level: 0.9
    },
    {
        skill: 'NextJs + ReactJs',
        description: 'JavaScript + typescript templates for frontend development',
        level: 0.85
    },
    {
        skill: 'Adobe Photoshop + Canva',
        level: 0.4
    },
    {
        skill: 'GIT Source code',
        level: 0.9
    },
    {
        skill: 'Vecel deploy',
        level: 0.7
    },
    {
        skill: 'Python',
        level: 0.4,
        description: 'Phython for data analysis.'
    },
    {
        skill: 'SQL',
        level: 0.5,
        description: 'Database management.'
    },
    {
        skill: 'Agile Methodologies',
        level: 0.5,
        description: 'Experienced in Agile methodologies for project management.'
    },
    {
        skill: 'Scrum',
        level: 0.5,
        description: 'Proficient in Scrum for iterative project development.'
    },
    {
        skill: 'Teamwork',
        level: 0.9,
        description: 'Experienced in collaborative environments, effective communication, and conflict resolution.'
    }
];


export default function AboutMe() {
    const router = useRouter();
    return (
        <section>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center w-full'>
                <Image src={aboutMe} alt='seangleng-about-me' className='rounded-xl w-1/2 m-auto' id='aboutme' />
                <div>
                    <p className='text-xl text-secondary-color font-medium'>About me</p>
                    <p className='text-3xl font-bold uppercase'>Developer + UX/UI designer</p>
                    <p className='text-sm border-l-[5px] pl-3 my-5 border-secondary-color'>
                        I am Seng Seang Leng, and Welcome to my portfolio, where I embark on a thrilling journey into the world of full stack web development. With a solid foundation in both front-end and back-end technologies, I have honed my skills over the past two months to create dynamic and immersive digital experiences mostly in <strong className='text-secondary-color'>UX/UI design</strong>.
                    </p>
                    <Button onClick={() => {
                        window.open('/assets/ux-ui-designer-CV-sengseangleng.pdf', '_blank');
                    }} variant='ghost' color='warning' className='rounded-none animated-border-button' >Download CV</Button>
                </div>
            </div>
            <div className='grid my-10 justify-around w-full items-center lg:grid-cols-2 gap-10 md:grid-cols-2 grid-cols-1'>
                {
                    skills.map((item, index) => (
                        <div className='w-full hover:shadow-lg hover:shadow-gray-700 transition-all rounded-xl p-5' key={index}>
                            <div className='grid gap-5'>
                                <div>
                                    <p className='text-xl'>{item.skill}</p>
                                    {
                                        item.description && <p className='text-gray-200 text-sm'>{item.description}</p>
                                    }
                                </div>
                                <Slider
                                    showTooltip={true}
                                    size="md"
                                    hideThumb={true}
                                    isDisabled
                                    label='Level'
                                    step={0.01}
                                    maxValue={1}
                                    minValue={0}
                                    color='warning'
                                    defaultValue={item.level}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
