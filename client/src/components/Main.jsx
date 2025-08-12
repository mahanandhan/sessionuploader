import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const videoClasses = [
  { id: 1, title: "React Basics", description: "Learn the fundamentals of React including components, props, and state.", videoUrl: "https://www.example.com/video1" },
  { id: 2, title: "Advanced React Patterns", description: "Dive deeper into hooks, context, and advanced component patterns.", videoUrl: "https://www.example.com/video2" },
  { id: 3, title: "Fullstack Integration", description: "Connect your React frontend to a backend API and manage data flow.", videoUrl: "https://www.example.com/video3" },
  { id: 4, title: "State Management with Redux", description: "Learn how to manage complex application state with Redux.", videoUrl: "https://www.example.com/video4" },
  { id: 5, title: "React Router Deep Dive", description: "Master navigation and routing in React applications.", videoUrl: "https://www.example.com/video5" },
  
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  { id: 6, title: "Optimizing Performance", description: "Techniques to make your React apps faster and more efficient.", videoUrl: "https://www.example.com/video6" },
  
];

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <Navbar />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="fixed h-screen shadow-lg transition-all duration-300">
          <Sidebar isExpanded={isSidebarOpen} setIsExpanded={setIsSidebarOpen} />
        </div>

        {/* Video Classes */}
        <div
          className={`flex-1 p-8 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
            Video Classes
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {videoClasses.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  {video.title}
                </h3>
                <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                  {video.description}
                </p>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  🎥 Watch Video
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
