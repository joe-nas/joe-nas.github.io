import React from 'react'
import education from '../data/education.json'
import Heading from './Heading'

const EducationComponent = () => {
    const { title, content } = { ...education }
    return (
        <div>
            <div className='text-xl font-bold text-center divider'>
                <Heading length={3} style={"text-slate-500"} title={title} />
            </div>
            {content.map((edu, index) =>
                <Education key={index} edu={edu} />
            )}
        </div>
    )
}

export default EducationComponent

const Education = ({ edu }) => {
    const { title, sub_title, caption } = { ...edu }
    return (
        <div className='flex flex-col p-3'>
            <div className='font-semibold'>{sub_title}</div>
            <div className=''>{title}</div>
            <div className=''>{caption}</div>
        </div>
    )
}