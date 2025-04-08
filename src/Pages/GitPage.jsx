import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaCodeBranch, FaCloudUploadAlt, FaTerminal } from "react-icons/fa";

const gitTopics = [
  {
    title: "Introduction to Git",
    desc: "Understand what Git is, why it's important, and how it helps in version control.",
    icon: <FaGitAlt />,
  },
  {
    title: "Git Basic Commands",
    desc: "Learn essential commands like git init, git add, git commit, and git status.",
    icon: <FaTerminal />,
  },
  {
    title: "Branching & Merging",
    desc: "Master git branch, git checkout, git merge for collaborative workflows.",
    icon: <FaCodeBranch />,
  },
  {
    title: "Working with GitHub",
    desc: "Push code to GitHub using git remote, git push, and clone repositories.",
    icon: <FaCloudUploadAlt />,
  },
  {
    title: "Best Practices",
    desc: "Follow commit message standards, .gitignore usage, and efficient workflows.",
    icon: <FaGitAlt />,
  }
];

const GitPage = () => {
  return (
    <section className="min-h-screen mt-10 px-6 py-16 bg-gradient-to-br from-green-100 to-gray-200 text-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-green-700 mb-12"
      >
        🌱 Git Module – ReactNext Bootcamp
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {gitTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-3xl text-green-600 mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-sm text-gray-700">{topic.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitPage;