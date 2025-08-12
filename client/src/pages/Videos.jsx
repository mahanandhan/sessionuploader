import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultVideoImage = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('https://sessionuploader.onrender.com/api/data/get-data');
        if (res.data.success) {
          const videoData = res.data.data.filter(item => item.videoUrl);
          setVideos(videoData);
        } else {
          setError('Failed to fetch videos');
        }
      } catch (err) {
        setError('Server error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="text-center p-6 text-amber-300">Loading videos...</div>;
  if (error) return <div className="text-center p-6 text-red-600">{error}</div>;

  return (
    <div className="relative min-h-screen bg-gray-900 p-6 overflow-hidden">
      {/* Animated warm stars background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-amber-400 drop-shadow-xl">
          Video Sessions
        </h1>

        {videos.length === 0 ? (
          <p className="text-center text-amber-300 text-lg">No videos available.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {videos.map(video => (
              <div
                key={video._id}
                className="bg-white bg-opacity-10 backdrop-blur-lg border border-amber-400 border-opacity-30 rounded-2xl shadow-xl p-6 flex flex-col cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                title={video.name}
              >
                <img
                  src={video.videoImageUrl || defaultVideoImage}
                  alt={video.name}
                  className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg select-none"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = defaultVideoImage;
                  }}
                  draggable={false}
                />
                <h2 className="text-3xl font-semibold text-amber-300 drop-shadow-md mb-4">{video.name}</h2>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-amber-400 hover:text-amber-200 font-semibold underline"
                  onClick={e => e.stopPropagation()}
                >
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .star {
          position: absolute;
          background: #f59e0b; /* amber-400 */
          border-radius: 50%;
          opacity: 0.8;
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          filter: drop-shadow(0 0 4px #fbbf24);
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Videos;
