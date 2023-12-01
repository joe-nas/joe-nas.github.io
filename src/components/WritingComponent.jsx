import React from 'react'
import writing from '../data/writing.json'
import Heading from './Heading'

const WritingComponent = () => {
    const { title, content } = { ...writing }
    return (
        <div>
            <div className='text-xl font-bold text-center divider'>
                <Heading length={3} style={"text-slate-500"} title={title} />
            </div>
            {
                content.map((article, index) =>
                    <Article key={index} article={article} />
                )
            }
        </div>

    )
}

export default WritingComponent

const Article = ({ article }) => {
    const { title, sub_title, caption, link, date } = { ...article }

    return (
        <div className='p-2'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-grow flex-col'>
                    <div className='font-semibold'><a href={link} target='_blank' rel="noreferrer">{title}</a></div>
                    <div className='text-xs'>{caption}</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-xs text-right'>{date}</div>
                    <div className='text-xs break-words w-16 flex-shrink sm:w-auto'>{sub_title}</div>
                </div>
            </div>
        </div >

    )

}
