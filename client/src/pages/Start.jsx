import React from 'react'
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-200 p-4">
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-6">
        
        {/* Logo */}
        <img 
          src="nmlogo.jpg" 
          alt="nm_logo" 
          className="rounded-full w-32 sm:w-40 md:w-56 lg:w-64"
        />

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome To The Session Uploader
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
          This application is designed to help you learn from the PDFs and videos 
          we upload and discuss in the classes.
        </p>

        {/* Button */}
        <button 
            onClick={() => navigate('/dashboard')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                     py-2 px-6 rounded cursor-pointer transition duration-200 
                     active:bg-blue-800 text-sm sm:text-base md:text-lg"
        >
          Start Learning
        </button>
      </div>
    </div>
  )
}

export default Start
