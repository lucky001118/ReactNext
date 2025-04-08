import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const MySQLPage = () => {
  return (
    <div className="min-h-screen mt-10 px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 text-yellow-400"
      >
        MySQL Workshop
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-yellow-500 transition"
        >
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            MySQL Basics
          </h2>
          <p className="text-gray-300">
            Get introduced to relational databases and how to work with MySQL.
            This session includes understanding database schemas, tables,
            fields, and basic SQL syntax.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-yellow-500 transition"
        >
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            CRUD Operations & Node.js Integration
          </h2>
          <p className="text-gray-300">
            Learn how to perform Create, Read, Update, Delete operations and
            connect MySQL with a Node.js backend for real-world applications.
          </p>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <a
          href="/downloads/MySQL_Handwritten_Notes.pdf"
          download
          className="flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
        >
          <FaDownload /> Download Notes (PDF)
        </a>
      </motion.div>


      

      {/* mySQL basic */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mt-10 mx-auto"
      >
        <h1 className="text-4xl font-bold text-yellow-700 mb-8 text-center">📘 MySQL Introduction</h1>

        {/* What is MySQL */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔸 What is MySQL?</h2>
          <p className="text-white leading-relaxed">
            MySQL is an open-source relational database management system (RDBMS) that stores data in structured tables.
            It uses SQL (Structured Query Language) to access and manipulate data.
          </p>
        </div>

        {/* Demo Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📋 Demo Table: <code className="font-bold text-yellow-800">students</code></h2>
          <p className="text-white mb-2">We’ll use this table for all examples:</p>
          <pre className="bg-yellow-200 text-orange-600 p-4 rounded text-sm overflow-x-auto">
{`CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  age INT,
  grade VARCHAR(10)
);`}
          </pre>

          <ul className="list-disc pl-6 mt-2 text-sm text-white">
            <li><b>INT</b>: Integer number</li>
            <li><b>PRIMARY KEY</b>: Unique identifier for each record</li>
            <li><b>AUTO_INCREMENT</b>: Automatically increases the ID</li>
            <li><b>VARCHAR(n)</b>: Variable-length string with max n characters</li>
          </ul>
        </div>

        {/* CREATE */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🆕 1. Create Database and Table</h2>
          <p className="text-white mb-2">Create a database and a table in it:</p>
          <pre className="bg-yellow-200 text-orange-600 p-4 rounded text-sm overflow-x-auto mb-2">
{`CREATE DATABASE school;
USE school;

CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  age INT,
  grade VARCHAR(10)
);`}
          </pre>
        </div>

        {/* INSERT */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">➕ 2. Insert Data</h2>
          <p className="text-white mb-2">Add new student records into the table:</p>
          <pre className="bg-yellow-200  text-orange-600 p-4 rounded text-sm overflow-x-auto">
{`INSERT INTO students (name, age, grade)
VALUES ('Lucky Manikpur', 18, '12th');`}
          </pre>
        </div>

        {/* SELECT */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔍 3. Select Data (Read)</h2>
          <p className="text-white mb-2">Read all or specific student records:</p>
          <pre className="bg-yellow-200  text-orange-600 p-4 rounded text-sm overflow-x-auto mb-2">
{`-- All students
SELECT * FROM students;

-- Students in 12th grade
SELECT name FROM students WHERE grade = '12th';`}
          </pre>
        </div>

        {/* UPDATE */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">✏️ 4. Update Data</h2>
          <p className="text-white mb-2">Update a student's information:</p>
          <pre className="bg-yellow-200  text-orange-600 p-4 rounded text-sm overflow-x-auto">
{`UPDATE students
SET age = 19
WHERE name = 'Lucky Manikpur';`}
          </pre>
        </div>

        {/* DELETE */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🗑 5. Delete Data</h2>
          <p className="text-white mb-2">Delete a student record:</p>
          <pre className="bg-yellow-200  text-orange-600 p-4 rounded text-sm overflow-x-auto">
{`DELETE FROM students
WHERE name = 'Lucky Manikpur';`}
          </pre>
        </div>

        {/* Note */}
        <div className="bg-yellow-200 p-4 rounded-lg text-sm text-gray-700">
          ⚠️ <b>Note:</b> Always use <code className="text-yellow-900">WHERE</code> when updating or deleting to avoid affecting all rows!
        </div>
      </motion.div>
    </div>
  );
};

export default MySQLPage;
