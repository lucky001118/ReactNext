import React from "react";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const topStudents = [
  { name: "Student 1", score: 0, semester: "th", rank: 1 },
  { name: "Student 2", score: 0, semester: "th", rank: 2 },
  { name: "Student 3", score: 0, semester: "th", rank: 3 },
  { name: "Student 4", score: 0, semester: "th", rank: 4 },
  { name: "Student 5", score: 0, semester: "th", rank: 5 },
];

const CredentialPage = () => {
  return (
    <section className="min-h-screen mt-10 px-6 py-16 bg-gradient-to-br from-yellow-100 to-pink-100 text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-yellow-700 mb-12"
      >
        🏅 Top 5 Credentials – ReactNext Bootcamp
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topStudents.map((student, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                <FaMedal /> Rank #{student.rank}
              </div>
              <div className="text-sm text-gray-500">Semester: {student.semester}</div>
            </div>
            <h2 className="text-2xl font-semibold text-pink-700 mb-2">{student.name}</h2>
            <p className="text-lg text-gray-700">Score: <span className="font-bold">{student.score}</span></p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CredentialPage;
