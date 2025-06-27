import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-20 px-6 py-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Blogify</h1>
        <p className="text-gray-700 text-lg mb-6">
          <span className="font-semibold">Blogify</span> is a personal project developed by me, Ashrith Varghese A — a passionate MERN stack developer and Computer Science undergraduate.
        </p>

        <div className="space-y-4 text-gray-600 text-md">
          <p>
            I created Blogify as a full-stack learning project to explore modern web development using the MERN stack (MongoDB, Express.js, React, and Node.js).
          </p>
          <p>
            Blogify is a simple, lightweight platform where users can create, view, and share blogs. It’s designed with performance, simplicity, and clarity in mind — all while helping me sharpen my skills across frontend and backend development.
          </p>
          <p>
            From authentication and API design to responsive UI and routing, every feature in Blogify was built from scratch as part of my hands-on learning.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-500">
            Built with ❤️ using React, Node, Express, and MongoDB. Feel free to reach out at
            <a href="mailto:ashrithvarghese@gmail.com" className="text-blue-500 underline ml-1">
              ashrithvarghese@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About