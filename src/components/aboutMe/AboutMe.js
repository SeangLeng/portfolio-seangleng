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
        skill: 'NextJs - frontend development',
        level: 0.85
    },
    {
        skill: 'Adobe Photoshop + Canva',
        level: 0.4
    },
    {
        skill: 'GIT Source code',
        level: 0.9
    }
]

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
                        router.push("https://drive.google.com/file/d/1mxVnRaze5OGfMNHiQhJFnwFRwcERd3xw/view?usp=drive_link")
                    }} variant='ghost' color='warning' className='rounded-none animated-border-button' >Download CV</Button>
                </div>
            </div>
            <div className='grid my-10 justify-around w-full items-center lg:grid-cols-2 gap-3 md:grid-cols-2 grid-cols-1'>
                {
                    skills.map((item, index) => (
                        <div className='w-full min-h-[100px]' key={index}>
                            <div className='grid gap-5'>
                                <p className='text-xl'>{item.skill}</p>
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
                                    className="max-w-md"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
