import React from "react";
// import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link,Outlet } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const topStudents = [
  { name: "Sanjay Sahu", score: 12.25, semester: "6th", rank: 1 },
  { name: "Nimi Gautam ", score: 8.25, semester: "4th", rank: 2 },
  { name: "Aditya Singh ", score: 8, semester: "4th", rank: 3 },
  { name: "Nishkarsh Verma ", score: 7.5, semester: "4th", rank: 4 },
  { name: "Aparana Parmar", score: 7, semester: "2nd", rank: 5 },
  { name: "Ankush Mishra", score: 7, semester: "2nd", rank: 5 },
  { name: "Anisha Priya", score: 7, semester: "4th", rank: 5 },
  { name: "Shreyas Anand Bakshi ", score: 6, semester: "4th", rank: 6 },
  { name: "Ekta Sahu", score: 6, semester: "4th", rank: 6 },
  { name: "Nisha Gautam", score: 5.75, semester: "4th", rank: 7 },
  { name: "Shubham Vishwakarma ", score: 5.75, semester: "2nd", rank: 7 },
  { name: "Ritika Sahu", score: 5, semester: "8th", rank: 8 },
  { name: "Neelam Sahu", score: 5, semester: "2nd", rank: 8 },
  { name: "Mitul Meshram", score: 4, semester: "4th", rank: 9 },
  { name: "Himanshu Mandavi", score: 4, semester: "4th", rank: 9 },
  { name: "Shail Sahu", score: 3.5, semester: "2nd", rank: 10 },
  { name: "Nitesh Sahu", score: 3.5, semester: "2nd", rank: 10 },
  { name: "Kunal Kumar", score: 3, semester: "2nd", rank: 11 },
  { name: "Hrishi Mazumdar", score: 3, semester: "2nd", rank: 11 },
  { name: "Ankita Mishra", score: 3, semester: "4th", rank: 11 },
  { name: "Ayush Sharma", score: 3, semester: "4th", rank: 11 },
  { name: "Saurabh Kumar Hardel", score: 3, semester: "4th", rank: 11 },
  { name: "Bhavesh Yadav", score: 2.5, semester: "2nd", rank: 12 },
  { name: "Manas Gupta", score: 2.5, semester: "4th", rank: 12 },
  { name: "Parth Parihar", score: 2.5, semester: "4th", rank: 12 },
  { name: "Priyanshu Mahobia", score: 2.5, semester: "4th", rank: 12 },
  { name: "D Yash Kumar", score: 2.5, semester: "4th", rank: 12 },
  { name: "Laxmi Nishad", score: 2.5, semester: "6th", rank: 12 },
  { name: "Prem Dilliwar", score: 2, semester: "2nd", rank: 13 },
  { name: "Priyanka Chatterjee", score: 2, semester: "2nd", rank: 13 },
  { name: "Omkar Dixit", score: 2, semester: "4th", rank: 13 },
  { name: "Nagendra Sahu", score: 2, semester: "4th", rank: 13 },
  { name: "Rahul Desai", score: 1, semester: "2nd", rank: 14 },
  { name: "Sumit Bhoge", score: 1, semester: "2nd", rank: 14 },
  { name: "Himanshu Jadhav", score: 1, semester: "2nd", rank: 14 },
  { name: "pranav Sahu", score: 1, semester: "2nd", rank: 14 },
  { name: "Isha Chandrakar", score: 1, semester: "6th", rank: 14 },
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


      <motion.section
        id="register"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 px-6 mt-10 bg-blue-50 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">🎯 Top Credential Score.</h2>
        <p className="mb-4 text-gray-700">
          Check the Excellence Holders of credential score that you have score during the quize <strong>quize round and project phase</strong>.
        </p>
        <Link to="/winners">
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
        >
          Excellence Holders
          </motion.p>  </Link>
        <Outlet></Outlet>
      </motion.section>

    </section>
  );
};

export default CredentialPage;
