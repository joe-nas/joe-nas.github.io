import React from 'react'
import extracurricular from '../data/extracurricular.json'
import Heading from './Heading'

const ExtracurricularComponent = () => {
    const { title, content } = { ...extracurricular }

    return (
        <div>
            <div className='text-xl font-bold text-center divider'>
                <Heading length={3} style={"text-slate-500"} title={title} />
            </div>
            {
                content.map((activity, index) =>

                    <Activity key={index} activity={activity} />

                )
            }
        </div>)
}

export default ExtracurricularComponent


const Activity = ({ key, activity }) => {
    const { link, link_text, sub_title, caption, description, issuer } = { ...activity }

    return (
        <div key={key} className='p-2'>
            <div className="flex flex-row justify-between">
                <div className='flex flex-col'>
                    <div className="font-semibold">{sub_title}</div>
                    <div className="text-sm mr-8">{description}</div>
                </div>
                <div className='flex flex-col text-right'>
                    <div className="">{caption}</div>
                    <div className="">{issuer}</div>
                </div>
            </div>
        </div >
    )
}