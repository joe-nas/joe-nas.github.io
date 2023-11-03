import React from 'react'
import projects from '../data/projects.json'

const ProjectComponent = () => {
    const { title, content } = { ...projects }
    return (
        <div className='mt-8'>
            <div className='text-xl font-bold text-center p-5 divider'>{title}</div>
            {content.map((project, index) =>
                <Project key={index} item={project} />
            )}
        </div>
    )
}

export default ProjectComponent

const Project = ({ item }) => {
    const { title, description, link, link_text } = { ...item }

    return (
        <div className='mt-5'>
            <div className='flex flex-row justify-between'>
                <div className='text-lg font-bold pb-3'>{title}</div>
                <a href={link} target='_blank' rel='noreferrer'>{link_text} @ github</a>
            </div>
            <div className='text-md text-justify'>{description}</div>
        </div >
    )
}