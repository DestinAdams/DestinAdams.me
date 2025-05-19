"use client";
import React, { useEffect, useState } from 'react';
;

const ContactUs = () => {
    return (
        <div className="p-6 min-h-screen">
            <div className="mb-12 text-center">
                <h1 className="text-8xl font-bold">Contact Me!</h1>
            </div>
            <form className="max-w-screen   rounded-2xl shadow-lg p-6 bg-white/30 dark:bg-white/10 border border-black/20 space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Send"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer transition"
                    />
                </div>
            </form>
        </div>
    );
};
export default ContactUs;