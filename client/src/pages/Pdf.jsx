import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/data/get-data'); // Replace with your backend API endpoint
        if (res.data.success) {
          // Filter only entries that have pdfUrl
          const filtered = res.data.data.filter(item => item.pdfUrl);
          setPdfs(filtered);
        } else {
          setError('Failed to fetch PDFs');
        }
      } catch (err) {
        setError('Server error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading PDFs...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>
      {pdfs.length === 0 ? (
        <p>No PDFs available.</p>
      ) : (
        <ul className="space-y-4">
          {pdfs.map((pdf, idx) => (
            <li key={pdf._id} className="border p-4 rounded shadow flex items-center space-x-4">
              <img
                src={pdf.pdfImageUrl || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'}
                alt={pdf.name + ' PDF'}
                className="w-20 h-28 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{pdf.name}</h2>
                <a
                  href={pdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View PDF
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pdf;
