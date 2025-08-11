import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-8 
                      bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-blue-100">
        
        {/* Logo */}
        <img 
          src="nmlogo.jpg" 
          alt="nm_logo" 
          className="rounded-full w-28 sm:w-36 md:w-48 lg:w-56 shadow-md border-4 border-blue-100"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
          Welcome to <span className="text-blue-600">Session Uploader</span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
          Your all-in-one learning hub for accessing PDFs and videos from our sessions. 
          Review, learn, and excel — anytime, anywhere.
        </p>

        {/* Button */}
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md 
                     transform hover:scale-105 transition-all duration-300 ease-in-out active:scale-95 text-base sm:text-lg"
        >
          🚀 Start Learning
        </button>

        {/* Subtext */}
        <p className="text-xs text-gray-500">
          Your journey to better learning starts here.
        </p>
      </div>
    </div>
  );
};

export default Start;
