import React from "react";

const Timeline = () => {
    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Timeline</h2>
            <div className="relative border-l border-gray-300">
                <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full transform -translate-x-2/4 translate-y-1/2"></div>
                <div className="mb-8 ml-6">
                    <h3 className="text-xl font-semibold">2021</h3>
                    <p>Started my journey in Computer Systems Engineering.</p>
                </div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full transform -translate-x-2/4 translate-y-1/2"></div>
                <div className="mb-8 ml-6">
                    <h3 className="text-xl font-semibold">2022</h3>
                    <p>Completed my first internship at XYZ Company.</p>
                </div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full transform -translate-x-2/4 translate-y-1/2"></div>
                <div className="mb-8 ml-6">
                    <h3 className="text-xl font-semibold">2023</h3>
                    <p>Started working on personal projects and contributing to open source.</p>
                </div>
            </div>
        </div>
    );
}
export default Timeline;