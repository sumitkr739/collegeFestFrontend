import { useState } from "react";
import axios from "axios";

function App() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const fetchStudent = async () => {
    try {
      setError("");
      setStudent(null);
      const response = await axios.get(
        `https://collegefestbackend-1.onrender.com`
      );
      setStudent(response.data);
    } catch (err) {
      setError("Student not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="bg-gray-800 bg-opacity-95 backdrop-blur-xl shadow-2xl p-10 rounded-xl text-center max-w-lg w-full border border-gray-600">
        <h1 className="text-4xl font-extrabold mb-2 tracking-wide text-yellow-400">
          Jawaharlal Institute of Technology
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-yellow-400">
          VIHANGAM 2025
        </h1>
        <p className="text-lg mb-4 text-gray-300">Clan Finder</p>
        <input
          type="text"
          value={enrollmentNo}
          onChange={(e) => setEnrollmentNo(e.target.value)}
          placeholder="Enter Enrollment No"
          className="w-full p-3 border-none rounded-md mb-3 text-black focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <button
          onClick={fetchStudent}
          className="w-full bg-yellow-500 hover:bg-yellow-600 transition duration-300 text-black font-bold py-2 rounded-md shadow-lg"
        >
          Search
        </button>

        {error && <p className="text-red-400 mt-3 font-semibold">{error}</p>}

        {student && (
          <div className="mt-6 bg-gray-700 bg-opacity-90 p-5 rounded-xl text-left border border-gray-600">
            <h2 className="text-2xl font-semibold border-b border-gray-500 pb-2 mb-3 text-yellow-300">
              Student Details
            </h2>
            <p>
              <strong className="text-yellow-400">Name:</strong> {student.name}
            </p>
            <p>
              <strong className="text-yellow-400">Enrollment No:</strong>{" "}
              {student.enrollmentNo}
            </p>
            <p>
              <strong className="text-yellow-400">Gender:</strong>{" "}
              {student.gender}
            </p>
            <p>
              <strong className="text-yellow-400">Course:</strong>{" "}
              {student.course}
            </p>
            <p>
              <strong className="text-yellow-400">Branch:</strong>{" "}
              {student.branch}
            </p>
            <p>
              <strong className="text-yellow-400">Year:</strong> {student.year}
            </p>
            <p>
              <strong className="text-yellow-400">Semester:</strong>{" "}
              {student.semester}
            </p>
            <p className="text-xl mt-2 font-bold text-yellow-400">
              <strong>Clan:</strong> {student.group}
            </p>
          </div>
        )}
        <p className="mt-6 text-sm text-gray-400">
          Designed & Developed by{" "}
          <span className="text-yellow-400 font-semibold">
            Sumit Kumar Sinha
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
