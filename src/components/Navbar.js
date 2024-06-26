'use client'
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import logo from '@assets/logo.png'
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname();


    return (
        <div className={'sticky container mx-auto top-0 bg-[#131313cc] backdrop-blur-sm z-50 md:flex hidden flex-col justify-center items-center'}>
            <div className={'w-full p-2 border-0 border-b-[1px] md:flex block justify-between gap-5'}>
                <div className={'lg:flex md:flex gap-5 flex-wrap'}>
                    <div className={'flex justify-center gap-2 items-center text-description-color text-sm'}>
                        <FaPhoneAlt /> (+855) 11 348 219
                    </div>
                    <div className={'flex justify-center gap-2 items-center text-description-color text-sm hover:text-secondary-color transition-all'}>
                        <MdEmail /> <a href={'mailto:mr.lengseng@gmail.com'}>mr.lengseng@gmail.com</a>
                    </div>
                    <div className={'flex justify-center gap-2 items-center text-description-color text-sm hover:text-secondary-color transition-all'}>
                        <FaLocationDot /> <a href={'https://maps.app.goo.gl/zU5eKqQ4dRGfniov9'}>GV34+WV2, Phnom Penh</a>
                    </div>
                </div>
                <Button onClick={() => {
                    if (pathname === '/hire') {
                        router.push('/')
                    } else {
                        router.push('/hire')
                    }
                }} className='animate-pulse duration-100 font-semibold text-white' variant='solid' radius='full' color='warning'>{
                        pathname === '/hire' ? 'Back to my profile' : 'Hire me'
                    }</Button>
            </div>
        </div>
    );
};

export default Navbar;