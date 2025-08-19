"use client"
import React, { useEffect, useState } from 'react'
import skillsData from '../data/skills.json'

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        setSkills(skillsData)
    }, [])

    return (
        <div className='p-6' >
            <div className="mb-12 text-center">
                <h1 className="text-8xl font-bold text-white">Skills</h1>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-2 justify-center xl:max-w-6xl xl:items-center mx-auto'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='aspect-square w-full max-w-[200px] mx-auto rounded-2xl shadow-lg bg-white/10 border border-black/20 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center p-3'
                    >
                        <img
                            src={skill.logo}
                            alt={`${skill.skill} logo`}
                            className='w-20 h-20 object-contain mb-1'
                        />
                        <h1 className='text-center text-sm font-medium mt-2 text-white'><strong>{skill.skill}</strong></h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
