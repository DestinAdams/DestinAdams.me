"use client"
import React, { useEffect, useState } from 'react'
import projectsData from '../data/projects.json'
import * as ScrollArea from '@radix-ui/react-scroll-area' // import properly

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <div id="projects" className='p-6'>
            <div className="mb-12 text-center">
                <h1 className="text-8xl font-bold">Projects</h1>
            </div>

            <div className='grid gap-12 grid-col1 max-w-7xl mx-auto p-6'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='rounded-2xl shadow-lg h-full
                        transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl
                        md:max-h-[400px] md:rounded-b-none'
                    >
                        <div className="flex flex-col h-full xl:flex-row-reverse">
                            {/* Image */}
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                width={800}
                                height={400}
                                className='w-full xl:w-1/2 h-48 xl:h-auto object-cover rounded-t-2xl xl:rounded-r-2xl xl:rounded-tl-none '
                            />

                            {/* Info card */}
                            <div className='w-full xl:w-1/2 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-b-2xl xl:rounded-l-2xl xl:rounded-br-none p-10 flex flex-col justify-between'>
                                {/* Scrollable Title/Description */}
                                <h2 className='text-xl font-semibold mb-2 text-center xl:text-left'>{project.title}</h2>
                                <ScrollArea.Root className="h-32 overflow-hidden">
                                    <ScrollArea.Viewport className="h-full pr-4">
                                        
                                        <p className='text-gray-700 dark:text-gray-300'>
                                            {project.description}
                                        </p>
                                    </ScrollArea.Viewport>
                                    <ScrollArea.Scrollbar orientation="vertical" className="bg-gray-300 dark:bg-gray-700 w-2 rounded">
                                        <ScrollArea.Thumb className="bg-gray-500 dark:bg-gray-400 rounded" />
                                    </ScrollArea.Scrollbar>
                                </ScrollArea.Root>

                                {/* Tech Stack */}
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
                                                <span>Live</span>
                                            </a>
                                        )}
                                        {project.workInProgress && (
                                            <span className="bg-yellow-300 text-yellow-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                Work in Progress
                                            </span>
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
