import React from 'react'
import experience from '../data/experience.json'

const ExperienceComponent = () => {
    const { title, content } = { ...experience }
    return (
        <div className='mt-8'>
            <div className='text-xl font-bold text-center p-5 divider'>{title}</div>
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
            <div className='flex flew-row justify-between'>
                <div><a href={link} rel='noreferrer' target='_blank'>{title}</a></div>
                <div>{caption}</div>
            </div>
            <ul className='list-disc'>
                {description.map((item, index) =>
                    <li key={index} className='text-sm text-justify'>{item}</li>
                )}
            </ul>
        </div>
    )

}