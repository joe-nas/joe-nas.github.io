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
        // <div className='mt-8 fixed mr-32 pl-10'>
        <div className='sm:pr-32 md:pr-8 md:min-w-56'>
            <h1 className='font-bold'>{name}</h1>
            < div className='flex flew-col sm:flex-row justify-between' >
                <div className='flex flex-col py-8 mr-8'>
                    <a href="https://github.com/joe-nas" target='_blank' className='flex flex-row'><AiOutlineGithub size='1.5em' /> {github_username}</a>
                    <a href='https://joe-nas.github.io' target='_blank' className='flex flex-row'><CgWebsite size='1.5em' /> {website}</a>
                    <a href={`mailto:${email}`} className='flex flex-row'><AiOutlineMail size='1.5em' /> {email}</a>
                </div>
                <img src={`${process.env.PUBLIC_URL}/ppic_small5.png`} className='flex rounded-full max-w-fit' width="180" height="auto" />
            </div >
            <div className='text-justify pt-3' dangerouslySetInnerHTML={{ __html: about_content }} ></div>
        </div >
    )
}

export default AboutComponent