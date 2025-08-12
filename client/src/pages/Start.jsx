import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Snow falling container */}
      <div className="snow-container" />

      <div className="flex items-center justify-center min-h-screen bg-darkblue relative p-4">
        <div className="glass max-w-3xl w-full flex flex-col items-center text-center gap-8 
                        rounded-2xl shadow-xl p-8 sm:p-10 border border-blue-100 relative z-10">
          
          {/* Logo */}
          <img 
            src="nmlogo.jpg" 
            alt="nm_logo" 
            className="rounded-full w-28 sm:w-36 md:w-48 lg:w-56 shadow-md border-4 border-blue-100"
          />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-200 leading-tight">
            Welcome to <span className="text-blue-400">Session Uploader</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-blue-300 leading-relaxed max-w-2xl">
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
          <p className="text-xs text-blue-400">
            Your journey to better learning starts here.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Dark blue background */
        .bg-darkblue {
          background: #0a1f44; /* deep dark blue */
          overflow: hidden;
        }

        /* Glass effect */
        .glass {
          background: rgba(10, 31, 68, 0.6);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Snow falling animation */
        .snow-container {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 5;
          overflow: hidden;
          background: transparent;
        }

        .snow-container::before, .snow-container::after {
          content: '';
          position: absolute;
          top: -10px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background-image: 
            radial-gradient(white 2px, transparent 3px),
            radial-gradient(white 2px, transparent 3px),
            radial-gradient(white 2px, transparent 3px);
          background-repeat: repeat;
          background-size: 30px 30px, 40px 40px, 50px 50px;
          animation: snowFall 20s linear infinite;
          opacity: 0.8;
          left: 0;
        }

        .snow-container::after {
          background-position: 15px 15px, 20px 20px, 25px 25px;
          animation-duration: 30s;
          opacity: 0.6;
        }

        @keyframes snowFall {
          0% {
            background-position: 0 0, 0 0, 0 0;
          }
          100% {
            background-position: 0 100vh, 0 100vh, 0 100vh;
          }
        }
      `}</style>
    </>
  );
};

export default Start;
