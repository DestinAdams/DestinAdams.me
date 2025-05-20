"use client"
import React, { useEffect, useState } from 'react'
import projectsData from '../data/projects.json'


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <div id="projects" className='p-6 min-h-screen'>
            <div className="mb-12 text-center">
                <h1 className="text-8xl font-bold">Projects</h1>
            </div>

            <div className='grid gap-12 xl:grid-cols-3 md:grid-cols-1 max-w-8xl mx-auto'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='rounded-2xl shadow-lg  h-full transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl'
                    >
                        <div className="flex flex-col h-full xl:flex-row-reverse">
                            {/* Image */}
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                width={800}
                                height={400}
                                className='w-full xl:w-1/2 h-48 xl:h-auto object-cover rounded-t-2xl xl:rounded-r-2xl xl:rounded-tl-none'
                            />

                            {/* Info card*/}
                            <div className='w-full xl:w-1/2 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-b-2xl xl:rounded-l-2xl xl:rounded-br-none p-6 flex flex-col justify-between'>
                                {/*Title/Descritption*/}
                                <h2 className='text-xl font-semibold mb-2 text-center xl:text-left'>{project.title}</h2>
                                <p className='text-gray-700 dark:text-gray-300'>{project.description}</p>
                                {/*Tech Stack*/}
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.languages.map((lang, i) => (
                                            <span
                                                key={i}
                                                className="bg-white/60 dark:bg-white/20 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm backdrop-blur-sm"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Links */}
                                <div className='text-center xl:text-left mt-4'>
                                    <div className="inline-flex space-x-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center"
                                            >
                                                <img src="/code.svg" alt="Code Icon" className="w-4 h-4 mr-2" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center"
                                            >
                                                <img src="/live-icon.svg" alt="Live Icon" className="w-4 h-4 mr-2" />
                                                <span>Live</span>
                                            </a>
                                        )}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Projects
