import React, { useEffect, useState } from "react";
import axios from "axios";

const Get = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://sessionuploader.onrender.com/api/data/get-data"); // Update with your API endpoint
        if (res.data.success) {
          setCourses(res.data.data);
        } else {
          setError("Failed to fetch courses");
        }
      } catch (err) {
        setError("Server error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading)
    return (
      <div className="text-center p-10 font-semibold text-gray-600">
        Loading courses...
      </div>
    );
  if (error)
    return (
      <div className="text-center p-10 font-semibold text-red-600">{error}</div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl font-bold mb-6">Courses List</h1>
      {courses.length === 0 ? (
        <p className="text-center">No courses found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Video Link</th>
                <th className="border border-gray-300 px-4 py-2">PDF Link</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course._id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    {course.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <img
                      src={course.videoImageUrl}
                      alt={course.name}
                      className="h-16 w-24 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 max-w-xs truncate">
                    {course.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {course.videoUrl ? (
                      <a
                        href={course.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Video
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {course.pdfUrl ? (
                      <a
                        href={course.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        PDF
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Get;
