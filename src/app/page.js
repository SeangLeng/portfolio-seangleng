import Image from 'next/image'
import profile from '@assets/profile.png'
import AboutMe from '@/components/aboutMe/AboutMe';
import TraningProject from '@/components/traningProject.js/TraningProject';
import Service from '@/components/service/Service';
import Contact from '@/components/contact/Contact';
import { TypingText } from '@/constants/TypingText';

export const metadata = {
  title: 'Leng | Profile',
  description: 'Discover the journey of a passionate UX/UI designer and frontend developer. Explore my work, skills, and how I bring creative solutions to life.',
};

export default function Home() {
  return (
    <main className={'container mx-auto px-5 py-3'}>
      <section className='grid grid-cols-1 gap-10 my-10 md:grid-cols-2 justify-between items-center'>
        <div className='transition-all w-full'>
          <p className='w-full text-5xl uppercase font-bold mb-2 text-secondary-color'>seng seang<span className='text-white' id='leng_animation'>leng</span></p>
          <p className='text-3xl mt-3 mb-5 font-medium'>Frontend - UX/UI design</p>
          <TypingText text={'For introducing myself, I am a developer, who handles UX/UI design and frontend development. Moreover, I also have skills in dynamic web pages with API and make it more interactive with modern UI following the century.'} />
        </div>
        <Image src={profile} alt='profile image' className='hidden md:block m-auto w-3/4' />
      </section>
      <AboutMe />
      <Service />
      <TraningProject />
      <Contact />
    </main>
  )
}
