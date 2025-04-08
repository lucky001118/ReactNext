import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaUserShield, FaCloudUploadAlt } from "react-icons/fa";

const firebaseTopics = [
  {
    title: "Introduction to Firebase",
    desc: "Learn what Firebase is and how it can be used as a Backend-as-a-Service (BaaS) solution.",
    icon: <FaFire />,
  },
  {
    title: "Firestore Database",
    desc: "Understand how to perform CRUD operations in a NoSQL Firestore database.",
    icon: <FaFire />,
  },
  {
    title: "Firebase Authentication",
    desc: "Enable Email/Password and Google Sign-in authentication in your apps.",
    icon: <FaUserShield />,
  },
  {
    title: "Firebase Storage",
    desc: "Upload and retrieve files (images, PDFs, etc.) using Firebase Storage.",
    icon: <FaCloudUploadAlt />,
  },
  {
    title: "Firebase Hosting",
    desc: "Deploy your web application using Firebase’s free hosting service.",
    icon: <FaFire />,
  }
];

const FirebasePage = () => {
  return (
    <section className="min-h-screen mt-10 px-6 py-16 bg-gradient-to-br from-orange-100 to-red-200 text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-orange-700 mb-12"
      >
        🔥 Firebase Module – ReactNext Bootcamp
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {firebaseTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-3xl text-orange-600 mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FirebasePage;