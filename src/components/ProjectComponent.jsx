import React from 'react'
import projects from '../data/projects.json'
import Heading from './Heading'

const ProjectComponent = () => {
    const { title, content } = { ...projects }
    return (
        <div className='mt-8'>
            <div className='text-xl font-bold text-center divider'>
                <Heading length={3} style={"text-slate-500"} title={title} />
            </div>
            {content.map((project, index) =>
                <Project key={index} item={project} />
            )}
        </div>
    )
}

export default ProjectComponent

const Project = ({ item }) => {
    const { title, description, link, link_text } = { ...item }
    const links = zip(link, link_text)
    return (
        <div className='mt-5'>
            <div className='flex flex-row justify-between'>
                <div className='text-lg font-bold pb-3'>{title}</div>
                <div className='flex flex-col justify-center pb-3'>
                    {links.map((link, index) =>
                        <a key={index} href={link[0]} target='_blank' rel='noreferrer'>{link[1]} @ github</a>
                    )}
                </div>
            </div>
            <div className='text-md text-justify'>{description}</div>
        </div >
    )
}

const zip = (a, b) => a.map((k, i) => [k, b[i]])