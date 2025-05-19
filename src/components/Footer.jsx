import React from 'react'

const Footer = () => {
    return (
        <footer className=" text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Destin Adams. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                    <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white">Email</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer