import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="mb-6">
            <img src="nmlogo.jpg" alt="nm_courses" className="w-24 h-24 rounded-full shadow-lg" />
        </div>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Start</h1>
      <div className="space-x-4">
        <button onClick={() => navigate('/add')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white cursor-pointer">
          Add the Course
        </button>
        <button onClick={() => navigate('/get')} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white cursor-pointer">
          Get the Course
        </button>
      </div>
    </div>
  );
};

export default Start;
