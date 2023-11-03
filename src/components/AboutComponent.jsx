"use client"
import React, { useEffect, useState } from 'react'
import about from '../data/about.json'
import { AiOutlineGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'

const AboutComponent = () => {
    const { about_content, name, title, website, github_username } = { ...about }
    const [email, setEmail] = useState('');

    useEffect(() => {
        const user = 'jonas';
        const domain = 'falcken.de';
        setEmail(`${user}@${domain}`);
    }, [])

    return (
        // <div className='mt-8 fixed top-0 right-0 w-1/3 pr-20'>
        <div className='mt-8 fixed mr-32 pl-10'>
            <h1 className='font-bold'>{name}</h1>
            <div className='text-justify'>{about.about_content}</div>
            <div className='flex flex-row pt-1'>
                <div><AiOutlineGithub size='1.5em' /></div>
                <a href="https://github.com/joe-nas" target='_blank' className='ml-3'>{github_username}</a>
            </div>
            <div className='flex flex-row'>
                <div><CgWebsite size='1.5em' /></div>
                <a href='https://joe-nas.github.io' target='_blank' className='ml-3'>{website}</a>
            </div>
            <div className='flex flex-row'>
                <div><AiOutlineMail size='1.5em' /></div>
                <a href={`mailto:${email}`} className='ml-3'>{email}</a>
            </div>
        </div >
    )
}

export default AboutComponent