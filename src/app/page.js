'use client'

import Image from 'next/image'
import profile from '@assets/profile.png'
import { useEffect, useState } from 'react';
import AboutMe from '@/components/aboutMe/AboutMe';
import TraningProject from '@/components/traningProject.js/TraningProject';
import Service from '@/components/service/Service';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const text = "For introducing myself, I am a developer, who handles UX/UI design and frontend development. Moreover, I also have skills in dynamic web pages with API and make it more interactive with modern UI following the century.";

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 10);
  }, []);

  return (
    <main className={'flex flex-col justify-center items-center'}>
      <div className={'lg:w-2/3 md:w-2/3 w-full min-h-screen pt-10 px-5 grid gap-5'}>
        <section className='grid grid-cols-1 gap-5 lg:grid-cols-2 md:grid-cols-2 justify-between items-center'>
          <div className='transition-all'>
            <p className='w-full text-5xl uppercase font-bold mb-2 text-secondary-color'>seng seang<span className='text-white' id='leng_animation'>leng</span></p>
            <p className='text-3xl mt-3 mb-5 font-medium'>Frontend - UX/UI design</p>
            <p id='intro' className='md:text-lg text-base'>{displayText}</p>
          </div>
          <Image src={profile} alt='profile image' className='hidden md:block' />
        </section>
        <AboutMe />
        <Service />
        <TraningProject />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
