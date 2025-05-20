'use client'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='w-full absolute py-5 flex justify-end px-12 z-50'>
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li>
                        <a
                            href="/DestinAdams_Resume.pdf"
                            className='px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-105 transition font-medium shadow-md'
                        >
                            View Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
