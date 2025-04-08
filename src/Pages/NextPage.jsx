import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaFolderOpen, FaRoute, FaCloudUploadAlt } from "react-icons/fa";

const nextTopics = [
  {
    title: "Introduction to Next.js",
    desc: "Learn what Next.js is, why it is used, and how it extends React with powerful features.",
    icon: <FaServer />,
  },
  {
    title: "File-based Routing",
    desc: "Create routes using files and folders, simplifying your navigation setup.",
    icon: <FaFolderOpen />,
  },
  {
    title: "API Routes",
    desc: "Build serverless backend APIs directly in your Next.js app using the API folder.",
    icon: <FaRoute />,
  },
  {
    title: "Data Fetching",
    desc: "Understand getStaticProps, getServerSideProps, and client-side data fetching.",
    icon: <FaServer />,
  },
  {
    title: "Deployment",
    desc: "Deploy your Next.js app on platforms like Vercel or Firebase hosting.",
    icon: <FaCloudUploadAlt />,
  }
];

const NextPage = () => {
  return (
    <section className="min-h-screen mt-10 px-6 py-16 bg-gradient-to-br from-blue-100 to-green-100 text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-700 mb-12"
      >
        ⚡ Next.js Module – ReactNext Bootcamp
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {nextTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-3xl text-blue-600 mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NextPage;