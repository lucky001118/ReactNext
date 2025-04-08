import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const jsTopics = [
  "Introduction to JavaScript",
  "Variables and Data Types",
  "Functions and Scope",
  "DOM Manipulation",
  "Events and Event Handling",
  "ES6 Features (let, const, arrow functions, etc.)",
  "Promises and Async/Await",
  "Fetch API & AJAX",
  "Error Handling",
  "JavaScript in React"
];

const JavaScript = () => {
  return (
    <div className=" bg-gray-900 text-white py-10 mt-10 px-4 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-yellow-400"
      >
        JavaScript Module – ReactNext Bootcamp
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {jsTopics.map((topic, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-lg font-semibold text-yellow-300">{topic}</h2>
            <p className="mt-2 text-sm text-gray-300">
              Learn the fundamentals and real-world usage of "{topic}" in modern web development.
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <a
          href="JavaScript.pdf"
          download
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
        >
          <FaDownload /> Download Notes
        </a>
      </div>
    </div>
  );
};

export default JavaScript;
