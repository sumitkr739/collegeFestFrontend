import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const fetchStudent = async () => {
    try {
      setError("");
      setStudent(null);
      const response = await axios.get(
        `https://collegefestbackend-2.onrender.com/api/students/${enrollmentNo}`
      );
      setStudent(response.data);
    } catch (err) {
      setError("Student not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white p-6">
      <motion.div
        className="bg-white/5 backdrop-blur-lg shadow-2xl p-6 sm:p-10 rounded-3xl text-center max-w-lg w-full border border-white/10 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 blur-2xl opacity-30 animate-pulse"></div>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-wide text-purple-200 drop-shadow-md">
          Jawaharlal Institute of Technology
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide text-teal-100 drop-shadow-md">
          VIHANGAM 2025
        </h1>
        <p className="text-lg mb-6 text-purple-100">Clan Finder</p>
        <div className="relative w-full">
          <input
            type="text"
            value={enrollmentNo}
            onChange={(e) => setEnrollmentNo(e.target.value)}
            placeholder="Enter Enrollment No"
            className="w-full p-3 border-none rounded-md text-gray-800 focus:ring-2 focus:ring-teal-400 outline-none shadow-md placeholder-gray-500 bg-white/90 backdrop-blur-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchStudent}
            className="mt-4 w-full bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 transition-all duration-300 text-white font-bold py-3 rounded-md shadow-lg"
          >
            Search
          </motion.button>
        </div>
        {error && (
          <motion.p
            className="text-red-400 mt-4 font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}
        {student && (
          <motion.div
            className="mt-6 bg-gradient-to-br from-purple-600/20 to-teal-600/20 backdrop-blur-lg p-5 rounded-xl text-left border border-white/10 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 blur-2xl opacity-30 animate-pulse"></div>

            <h2 className="text-2xl font-semibold border-b border-white/10 pb-2 mb-3 text-teal-100">
              Student Details
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-purple-200">Name:</strong> {student.name}
              </p>
              <p>
                <strong className="text-purple-200">Enrollment No:</strong>{" "}
                {student.enrollmentNo}
              </p>
              <p>
                <strong className="text-purple-200">Gender:</strong>{" "}
                {student.gender}
              </p>
              <p>
                <strong className="text-purple-200">Course:</strong>{" "}
                {student.course}
              </p>
              <p>
                <strong className="text-purple-200">Branch:</strong>{" "}
                {student.branch}
              </p>
              <p>
                <strong className="text-purple-200">Year:</strong> {student.year}
              </p>
              <p>
                <strong className="text-purple-200">Semester:</strong>{" "}
                {student.semester}
              </p>
              <p className="text-xl mt-2 font-bold text-teal-200">
                <strong>Clan:</strong> {student.group}
              </p>
              <p className="text-xl mt-2 font-bold text-teal-200 relative z-20">
  <strong>WhatsApp Group:</strong>{" "}
  <a
    href={student.whatsappgroup}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-300 underline hover:text-blue-200 transition-colors"
  >
    Join Here
  </a>
</p>
            </div>
          </motion.div>
        )}
        <p className="mt-6 text-sm text-purple-100">
          Designed & Developed by{" "}
          <span className="text-teal-200 font-semibold">Sumit Kumar Sinha</span>
        </p>
      </motion.div>
    </div>
  );
}

export default App;
