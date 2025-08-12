import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [formData, setFormData] = useState({
    name: '',
    videoUrl: '',
    videoImageUrl: '',
    description: '',
    pdfUrl: '',
    pdfImageUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      setMessage('Name and Description are required!');
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const response = await axios.post('https://sessionuploader.onrender.com/api/data/upload', formData); // Replace '/api/data' with your backend URL if different

      if (response.data.success) {
        setMessage('Session added successfully!');
        setFormData({
          name: '',
          videoUrl: '',
          videoImageUrl: '',
          description: '',
          pdfUrl: '',
          pdfImageUrl: '',
        });
      } else {
        setMessage('Failed to add session.');
      }
    } catch (error) {
      console.error('Error adding session:', error);
      setMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Add New Session</h1>

      {message && (
        <div className="mb-4 text-center text-red-600">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name <span className="text-red-600">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Course name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Video URL <span className="text-red-600">*</span></label>
          <input
            type="url"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://example.com/video"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Video Image URL</label>
          <input
            type="url"
            name="videoImageUrl"
            value={formData.videoImageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://example.com/video-image.jpg"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description <span className="text-red-600">*</span></label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Course description"
            required
            rows={4}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">PDF URL <span className="text-red-600">*</span></label>
          <input
            type="url"
            name="pdfUrl"
            value={formData.pdfUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://example.com/guide.pdf"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">PDF Image URL</label>
          <input
            type="url"
            name="pdfImageUrl"
            value={formData.pdfImageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://example.com/pdf-thumbnail.jpg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          {loading ? 'Adding...' : 'Add Session'}
        </button>
      </form>
    </div>
  );
};

export default Add;
