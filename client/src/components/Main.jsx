import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | videos | pdfs

  const defaultVideoImage =
    "https://www.freeiconspng.com/uploads/no-image-icon-4.png";
  const defaultPdfImage =
    "https://www.freeiconspng.com/uploads/no-image-icon-4.png";

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data/get-data");
        if (res.data.success) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Separate videos and PDFs
  const videoCards = data
    .filter((item) => !!item.videoUrl)
    .map((item) => ({
      _id: item._id + "-video",
      type: "video",
      name: item.name,
      description: item.description,
      image: item.videoImageUrl || defaultVideoImage,
      url: item.videoUrl,
    }));

  const pdfCards = data
    .filter((item) => !!item.pdfUrl)
    .map((item) => ({
      _id: item._id + "-pdf",
      type: "pdf",
      name: item.name,
      description: item.description,
      image: item.pdfImageUrl || defaultPdfImage,
      url: item.pdfUrl,
    }));

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
          <Sidebar
            isExpanded={isSidebarOpen}
            setIsExpanded={setIsSidebarOpen}
          />
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 p-8 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          {/* Filter Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("videos")}
              className={`px-4 py-2 rounded ${
                filter === "videos" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setFilter("pdfs")}
              className={`px-4 py-2 rounded ${
                filter === "pdfs" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              PDFs
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {/* ALL Section */}
              {filter === "all" && (
                <>
                  {/* Videos in All */}
                  <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
                    🎥 Video Classes
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
                    {videoCards.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <h3 className="text-lg font-medium mb-2 text-gray-800">
                          {item.name}
                        </h3>
                        <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <img
                          src={item.image}
                          alt="Video Thumbnail"
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Watch Video
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* PDFs in All */}
                  <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
                    📄 PDF Resources
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {pdfCards.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <h3 className="text-lg font-medium mb-2 text-gray-800">
                          {item.name}
                        </h3>
                        <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <img
                          src={item.image}
                          alt="PDF Thumbnail"
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          View PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Only Videos */}
              {filter === "videos" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
                    🎥 Video Classes
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {videoCards.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <h3 className="text-lg font-medium mb-2 text-gray-800">
                          {item.name}
                        </h3>
                        <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <img
                          src={item.image}
                          alt="Video Thumbnail"
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Watch Video
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Only PDFs */}
              {filter === "pdfs" && (
                <>
                  <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
                    📄 PDF Resources
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {pdfCards.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <h3 className="text-lg font-medium mb-2 text-gray-800">
                          {item.name}
                        </h3>
                        <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <img
                          src={item.image}
                          alt="PDF Thumbnail"
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          View PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
