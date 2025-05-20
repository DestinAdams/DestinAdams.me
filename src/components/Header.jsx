'use client'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-6 px-4'>
            <div className='flex flex-col items-center'>
                <img src="DestinAdamsCartoonProfilePicture.png" className='rounded-full w-1/3 m-5'></img>
                <h3 className='text-lg md:text-xl text-gray-700 dark:text-gray-300'>Hi, I'm</h3>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400'>Destin Adams</h1>
                <h2 className='text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-100 mt-2'>
                    Computer Systems Engineering Student @ Arizona State University
                </h2>

                <p className='max-w-2xl mt-4 text-gray-600 dark:text-gray-300 leading-relaxed'>
                    I’m a <strong>software engineer</strong> passionate about building responsive web applications and solving real-world problems.
                    I thrive in collaborative environments and am actively seeking <strong>internship</strong> or <strong>co-op</strong> opportunities where I can contribute and grow.
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
                    <a
                        href="/DestinAdams_Resume.pdf"
                        className='px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-105 transition font-medium shadow-md'
                    >
                        View Resume
                    </a>

                    <a
                        href="#projects"
                        className='px-8 py-3 border border-green-400 text-green-700 rounded-full hover:bg-green-100 hover:scale-105 transition font-medium'
                    >
                        See Projects
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
