import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCodeBranch, FaPuzzlePiece } from "react-icons/fa";

const topics = [
  {
    title: "Introduction to React",
    desc: "Understand what React is, why it's used, and how it fits into modern web development.",
    icon: <FaReact />,
  },
  {
    title: "JSX & Components",
    desc: "Learn JSX syntax and build reusable components, the building blocks of any React app.",
    icon: <FaPuzzlePiece />,
  },
  {
    title: "State & Props",
    desc: "Handle dynamic data and pass information between components using state and props.",
    icon: <FaCodeBranch />,
  },
  {
    title: "Hooks (useState, useEffect)",
    desc: "Make your components smarter with Hooks to manage state and side effects.",
    icon: <FaCodeBranch />,
  },
  {
    title: "Routing with React Router",
    desc: "Add multiple pages to your React app using React Router.",
    icon: <FaPuzzlePiece />,
  },
  {
    title: "Styling with Tailwind CSS",
    desc: "Style your components beautifully using utility-first Tailwind classes.",
    icon: <FaReact />,
  },
];

const ReactPage = () => {
  return (
    <section className="min-h-screen mt-10 px-6 py-16 bg-gradient-to-br from-pink-100 to-purple-200 text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-pink-700 mb-12"
      >
        🚀 React Module – ReactNext Bootcamp
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-3xl text-pink-600 mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReactPage;