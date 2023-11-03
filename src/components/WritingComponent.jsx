import React from 'react'
import writing from '../data/writing.json'

const WritingComponent = () => {
    const { title, content } = { ...writing }
    return (
        <div>
            <div className='text-xl font-bold text-center p-5 divider'>{title}</div>
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
    const { title, sub_title, caption, link } = { ...article }

    return (
        <div className='p-2'>
            <div className='font-semibold'><a href={link} target='_blank' rel="noreferrer">{title}</a></div>
            <div className='flex flex-row justify-between'>
                <div className='text-xs'>{caption}</div>
                <div className='text-xs'>{sub_title}</div>
            </div>
        </div >

    )

}
