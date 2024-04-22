'use client'
import { Button, Input, Textarea, user } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'

export default function Contact() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    async function handleContact() {

        const data = {
            username,
            email,
            number,
            message
        };

        try {
            const response = await fetch('http://localhost:8080/api/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const router = useRouter();

    return (
        <div className='md:p-0 p-5 shadow-md shadow-gray-900 my-5 gap-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            <div className='grid gap-5'>
                <div>
                    <p className='uppercase text-secondary-color font-semibold text-sm'>Get in touch</p>
                    <p className='text-4xl font-bold'>Feel Free To Reach & <span className='text-secondary-color'>Contact !</span></p>
                    <p className='text-description-color my-5 pl-4 border-l-5 border-secondary-color'>Feel free to reach out and connect with me. I am passionate about creating intuitive and visually compelling user experiences. Let is collaborate to bring your design visions to life!</p>
                </div>

                <div className='grid gap-2'>
                    <p className='text-secondary-color flex gap-2 text-xl items-center'><MdMarkEmailUnread /><a className='text-white hover:underline' href={'mailto:mr.lengseng@gmail.com'}>mr.lengseng@gmail.com</a></p>
                    <a href='tel:011348219' className='text-white hover:underline flex gap-2 text-xl items-center'> <FaPhoneAlt className='text-secondary-color' /> (+855) 11 348 219</a>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-3xl text-secondary-color'>Greeting <span className='text-white font-semibold'>{username}</span></p>
                <Input value={username} onValueChange={setUsername} radius='none' variant='bordered' placeholder={'Username'} size='sm' classNames={{
                    inputWrapper: ['border-1 border-gray-500']
                }} />
                <div className='grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1'>
                    <Input value={email} onValueChange={setEmail} type='email' radius='none' variant='bordered' placeholder={'Email'} size='sm' classNames={{
                        inputWrapper: ['border-1 border-gray-500']
                    }} />
                    <Input value={number} onValueChange={setNumber} type='number' radius='none' variant='bordered' placeholder={'Number'} size='sm' classNames={{
                        inputWrapper: ['border-1 border-gray-500']
                    }} />
                </div>
                <Textarea value={message} onValueChange={setMessage} variant='bordered' radius='none' placeholder='Enter message...' classNames={{
                    inputWrapper: ['border-1 border-gray-500']
                }} />
                <div className='grid grid-cols-2 gap-5'>
                    <Button onClick={() => router.push('/')} color='warning' variant='ghost' radius='none' >Cancel</Button>
                    <Button onClick={handleContact} color='warning' radius='none' >Send</Button>
                </div>
            </div>
        </div>
    )
}
