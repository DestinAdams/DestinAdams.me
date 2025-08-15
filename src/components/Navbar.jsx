'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen) {
                setIsScrolled(window.scrollY > 50)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isOpen])

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-md'
                    : 'bg-transparent'
            }`}
        >
            <nav className="flex justify-between items-center px-6 md:px-12 py-4">
                <Link href="/" className="text-xl font-bold text-green-500">
                    Destin Adams
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                    <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-green-500 transition">About</Link></li>
                    <li>
                        <Link
                            href="/assets/DestinAdamsResume copy.pdf"
                            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-105 transition font-medium shadow-md"
                        >
                            View Resume
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 dark:text-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Fullscreen Menu */}
{isOpen && (
    <div
        className="md:hidden fixed inset-0 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-md flex flex-col justify-center items-center gap-8 z-50"
        onClick={() => setIsOpen(false)} // click anywhere closes menu
    >
        <ul
            className="flex flex-col items-center gap-6 text-lg"
            onClick={(e) => e.stopPropagation()} // prevent background click from triggering
        >
            <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                    About
                </Link>
            </li>
            <li>
                <Link
                    href="/assets/DestinAdamsResume copy.pdf"
                    className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    onClick={() => setIsOpen(false)}
                >
                    View Resume
                </Link>
            </li>
        </ul>
    </div>
)}

        </header>
    )
}

export default Navbar
