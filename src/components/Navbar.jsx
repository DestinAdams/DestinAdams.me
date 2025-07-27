'use client'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <div className='pb-20'>
                <nav className='w-full absolute py-5 flex justify-end px-12 z-50'>
                    <ul className='md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        {/* <li><Link href="/photography">Media Work</Link></li> */}
                        <li>
                            <Link
                                href="public/assets/DestinAdamsResume copy.pdf"
                                className='px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-105 transition font-medium shadow-md'
                            >
                                View Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
