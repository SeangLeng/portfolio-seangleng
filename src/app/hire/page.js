import Contact from '@/components/contact/Contact'
import React from 'react'

export const metadata = {
  title: 'Leng | Get in touch',
  description: 'Reach out to me for updates, inquiries, or collaborations. Stay informed and get notified about my latest projects and opportunities.',
};


export default function Hire() {
  return (
    <div className='container mx-auto px-5 flex justify-center items-center min-h-screen'>
      <Contact />
    </div>
  )
}
