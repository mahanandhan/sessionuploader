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
        const res = await axios.get('http://localhost:5000/api/data/get-data'); // Replace with your backend endpoint
        if (res.data.success) {
          // Filter data items which have videoUrl defined
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

  if (loading) return <div className="p-6 text-center">Loading videos...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Video Sessions</h1>
      {videos.length === 0 ? (
        <p>No videos available.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map(video => (
            <div key={video._id} className="border rounded shadow p-4 bg-white">
              <img
                src={video.videoImageUrl || defaultVideoImage}
                alt={video.name}
                className="w-full h-40 object-cover rounded mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultVideoImage;
                }}
              />
              <h2 className="text-xl font-semibold mb-2">{video.name}</h2>
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videos;
