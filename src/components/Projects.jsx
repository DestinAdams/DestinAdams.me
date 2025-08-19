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
                <h1 className="text-8xl font-bold text-white">Projects</h1>
            </div>

            <div className='grid gap-12 grid-col1 max-w-7xl mx-auto p-6'>
                {projects.map((project, index) => (
                    <div key={index} className="mx-auto max-w-md overflow-hidden rounded-xl  shadow-md md:max-w-7xl backdrop-blur bg-white/10 transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl">
  <div  className="md:flex">
    {/* THUMBNAIL */}
  <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-98 "
        src={project.thumbnail}
        alt="Modern building architecture"
      />
    </div>
    {/* TEXT */}
    <div className="p-8">
        {/* TITLE OF PROJECT */}
      <div className="text-md font-semibold tracking-wide text-green-400 uppercase">{project.title}</div>
      {/* DESCRIPTION */}
      
        <ScrollArea.Root className="h-32 overflow-hidden">
            <ScrollArea.Viewport className="h-full pr-4"> 
                <p className='text-gray-300'>
                {project.description}
                </p>
                </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar orientation="vertical" className="bg-gray-700 w-2 rounded">
                    <ScrollArea.Thumb className="bg-gray-400 rounded" />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
        {/* Tech Stack */}
        <div className="mt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.languages.map((lang, i) => (
                                            <span
                                                key={i}
                                                className=" bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm backdrop-blur-sm"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Links */}
                                <div className=' xl:text-left mt-4'>
                                    <div className="inline-flex space-x-4">
                                    {project.page && (
                                            <a
                                                href={project.page}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center"
                                            >
                                                <span>Learn More</span>
                                            </a>
                                        )}
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
