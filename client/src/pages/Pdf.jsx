import React, { useEffect, useState } from "react";
import axios from "axios";

const Pdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get(
          "https://sessionuploader.onrender.com/api/data/get-data"
        );
        if (res.data.success) {
          const filtered = res.data.data.filter((item) => item.pdfUrl);
          setPdfs(filtered);
        } else {
          setError("Failed to fetch PDFs");
        }
      } catch (err) {
        setError("Server error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  if (loading)
    return <div className="text-center p-6">Loading PDFs...</div>;
  if (error)
    return <div className="text-center p-6 text-red-600">{error}</div>;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white p-6">
      {/* Snow container */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="snowflake" style={{ '--i': i }} />
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center relative z-10">PDF Viewer</h1>

      {pdfs.length === 0 ? (
        <p className="text-center text-gray-300 relative z-10">No PDFs available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
          {pdfs.map((pdf) => (
            <div
              key={pdf._id}
              className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-xl transition"
              onClick={() => window.open(pdf.pdfUrl, "_blank")}
              title={`Open ${pdf.name}`}
            >
              <img
                src={
                  pdf.pdfImageUrl ||
                  "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                }
                alt={`${pdf.name} PDF`}
                className="w-40 h-56 object-cover rounded-md mb-4 shadow-md"
                draggable={false}
              />
              <h2 className="text-lg font-semibold text-center mb-2 text-white drop-shadow-md">{pdf.name}</h2>
              <a
                href={pdf.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Snow CSS */}
      <style>{`
        .snowflake {
          --size: calc(10px + (var(--i) * 1.2px)); /* Bigger size */
          position: absolute;
          top: -10px;
          left: calc((var(--i) * 4%) + 3%);
          width: var(--size);
          height: var(--size);
          background: white;
          border-radius: 50%;
          opacity: 0.8; /* More opaque */
          filter: drop-shadow(0 0 2px white);
          animation-name: fall, sway;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: calc(6s + (var(--i) * 1.2s)), calc(3s + (var(--i) * 1.0s));
          animation-delay: calc(var(--i) * -1.2s), calc(var(--i) * -0.7s);
          will-change: transform;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Pdf;
