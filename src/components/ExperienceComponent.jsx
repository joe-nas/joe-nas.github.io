import React from 'react'
import experience from '../data/experience.json'
import Heading from './Heading'

const ExperienceComponent = () => {
    const { title, content } = { ...experience }
    return (
        <div className='mt-8'>
            <div className='text-xl font-bold text-center divider'>
                <Heading length={3} style={"text-slate-500"} title={title} />
            </div>
            {content.map((item, index) =>
                <Experience key={index} item={item} />
            )}
        </div>
    )
}

export default ExperienceComponent

const Experience = ({ item }) => {
    const { title, link, link_text, sub_title, caption, description, project } = { ...item }
    return (
        <div>
            <div className='text-lg font-bold'>{project}</div>
            <div className='flex justify-between sm:flew-row'>
                <div><a href={link} rel='noreferrer' target='_blank'>{title}</a></div>
                <div>{caption}</div>
            </div>
            <ul className='list-disc'>
                {description.map((item, index) =>
                    <li key={index} className='text-sm text-justify sm:mr-8'>{item}</li>
                )}
            </ul>
        </div>
    )

}