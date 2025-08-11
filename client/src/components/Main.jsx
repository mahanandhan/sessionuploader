// ...existing code...

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const videoClasses = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React including components, props, and state.",
    videoUrl: "https://www.example.com/video1"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Dive deeper into hooks, context, and advanced component patterns.",
    videoUrl: "https://www.example.com/video2"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  },
  {
    id: 3,
    title: "Fullstack Integration",
    description: "Connect your React frontend to a backend API and manage data flow.",
    videoUrl: "https://www.example.com/video3"
  }
];

// ...existing code...
const Main = () => {
  return (
    <div className='flex flex-col min-h-screen bg-amber-200'>
        {/* Navbar */}
        <div className='sticky top-0 z-10'>
            <Navbar />
        </div>
        {/* Slidebar */}
        <div className='fixed gap-10'>
            <Sidebar />
        </div>
        {/* Video Classes */}
        <div className='ml-48 mt-8 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Video Classes</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {videoClasses.map(video => (
              <div key={video.id} className='bg-white rounded-lg shadow p-4'>
                <h3 className='text-lg font-semibold mb-2'>{video.title}</h3>
                <p className='mb-2'>{video.description}</p>
                <a
                  href={video.videoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

// ...existing
export default Main;