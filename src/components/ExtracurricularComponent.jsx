import React from 'react'
import extracurricular from '../data/extracurricular.json'

const ExtracurricularComponent = () => {
    const { title, content } = { ...extracurricular }

    return (
        <div>
            <div className='text-xl font-bold text-center p-5 divider'>{title}</div>
            {
                content.map((activity, index) =>

                    <Activity key={index} activity={activity} />

                )
            }
        </div>)
}

export default ExtracurricularComponent


const Activity = ({ key, activity }) => {
    const { link, link_text, sub_title, caption, description } = { ...activity }

    return (
        <div key={key} className='p-2'>
            <div className="flex flex-row justify-between">
                <div className="font-semibold">{sub_title}
                    <a href={link} className='italic' target='_blank'> {link_text}</a></div>
                <div className='flex flex-row'>
                    <div className="">{caption}</div>
                </div>
            </div>
        </div>
    )
}