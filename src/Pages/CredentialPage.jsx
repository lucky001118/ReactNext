import React from "react";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const topStudents = [
  { name: "Sanjay Sahu", score: 8, semester: "6th", rank: 1 },
  { name: "Aparna Parmar", score: 7, semester: "2nd", rank: 2 },
  { name: "Ankush Mishra", score: 5, semester: "2nd", rank: 3 },
  { name: "Aditya Singh", score: 4, semester: "4th", rank: 4 },
  { name: "Mitul Meshram", score: 4, semester: "4th", rank: 4 },
  { name: "Nimi Gautam", score: 4, semester: "4th", rank: 4 },
  { name: "Nishkarsh Verma", score: 4, semester: "4th", rank: 4 },
  { name: "Neelam Sahu", score: 3, semester: "2nd", rank: 5 },
  { name: "Shubham Vishwakarma", score: 3, semester: "2nd", rank: 5 },
  { name: "Anisha Priya", score: 3, semester: "4th", rank: 5 },
  { name: "Shreyas Anand Bakshi", score: 3, semester: "4th", rank: 5 },
  { name: "Shail Sahu", score: 2, semester: "2nd", rank: 6 },
  { name: "Ekta Sahu", score: 2, semester: "6th", rank: 6 },
  { name: "Omkar Dixit", score: 2, semester: "4th", rank: 6 },
  { name: "Prem Dilliwar", score: 2, semester: "2nd", rank: 6 },
  { name: "Nisha Gautam", score: 1, semester: "4th", rank: 7 },
  { name: "Kunal Kumar", score: 1, semester: "2nd", rank: 7 },
  { name: "Rahul Desai", score: 1, semester: "2nd", rank: 7 },
  { name: "Sumit Bhoge", score: 1, semester: "2nd", rank: 7 },
  { name: "Humanshu Mandavi", score: 1, semester: "4th", rank: 7 },
  { name: "Manas Gupta", score: 1, semester: "4th", rank: 7 },
  { name: "Nitesh Sahu", score: 1, semester: "4th", rank: 7 },
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
        🏅 Top Credentials – ReactNext Bootcamp
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
