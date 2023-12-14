import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
    const router = useRouter();
    return (
        <div className='flex flex-wrap justify-between items-center'>
            <div className='flex gap-3 justify-start items-center text-4xl text-gray-400'>
                <a href='' className='hover:scale-110 transition-all'><MdFacebook /></a>
                <a href='' className='hover:scale-110 transition-all'><FaGithub /></a>
                <a href='' className='hover:scale-110 transition-all'><PiInstagramLogoFill /></a>
            </div>
            <div>
                <a href="/" className="font-bold text-secondary-color text-3xl">L<span className="text-white">eng.</span></a>
            </div>
            <Button onClick={() => router.push('/hire')} variant='ghost' color='warning' radius='none' >Hire me now</Button>
        </div>
    )
}
