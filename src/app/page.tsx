import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col justify-between items-center text-white">
            <div className="mt-10 text-center">
                <h1 className="text-5xl font-bold mb-2">Welcome to</h1>
                <h2 className="text-7xl font-extrabold neon-text">
                    QuikInfo AI
                </h2>
            </div>

            <div className="text-center mt-16 animate-bounce">
                <p className="text-2xl text-zinc-200 bg-zinc-800 p-4 rounded-lg shadow-lg hover:bg-zinc-700 transition duration-300 ease-in-out">
                    Add my website link in front of the desired website URL and press enter.
                </p>
            </div>

            <div className="mb-10 text-center">
                <p className="text-sm italic text-zinc-500 mb-4">
                    * Errors can occur when generating information.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://linkedin.com/in/your-linkedin" className="text-zinc-200 hover:text-white transition duration-300">
                        LinkedIn
                    </a>
                    <a href="https://github.com/your-github" className="text-zinc-200 hover:text-white transition duration-300">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page;
