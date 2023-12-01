import React from 'react'
import mySkills from '../data/skills.json'
import Heading from './Heading'

const SkillsComponent = () => {
    const { title, content } = { ...mySkills }
    return (

        <div className='mt-8'>
            <div className='text-xl font-bold text-center divider'>
                <Heading length={3} style={"text-slate-500"} title={title} />
            </div>
            {/* content block */}
            {content.map((subSkill, index) => {
                return (
                    <SubSkill key={index} subSkill={subSkill} />
                )
            })}

        </div>
    )
}

export default SkillsComponent


const SubSkill = ({ subSkill }) => {
    const { sub_title, skills } = { ...subSkill }

    return (
        <div>
            <h3 className='divider font-semibold italic'>{sub_title}</h3>
            <ul>
                {skills.map((skill, index) => {
                    return (
                        <Skill key={index} skill={skill} />
                    )
                })}
            </ul>
        </div >
    )

}


const Skill = ({ skill }) => {
    const { name, value } = { ...skill }

    return (
        <div className='flex flex-row p-1'>
            <div className='w-1/4 font-semibold'>{name}:</div>
            <div className='w-3/4 border-l-2'>
                <div className='ml-2'>
                    {value}
                </div>
            </div>
        </div>
    )
}