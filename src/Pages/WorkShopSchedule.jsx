import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaProjectDiagram, FaComments } from "react-icons/fa";

const schedule = [
  {
    day: "Day 1",
    title: "Frontend Foundations & React.js",
    sessions: [
      {
        title: "JavaScript Basics",
        details: "ES6+ Features (Arrow Functions, Destructuring, Promises, Async/Await), DOM Manipulation & Event Handling.",
        time: "1.5 Hours",
        icon: <FaCode />,
      },
      {
        title: "React.js Essentials",
        details: "React Overview & Virtual DOM, Component-based Architecture, Props & State, Forms & Controlled Components.",
        time: "2 Hours",
        icon: <FaCode />,
      },
      {
        title: "React Advanced Concepts",
        details: "React Router, Context API, useState/useEffect/useContext, Styling with Tailwind CSS.",
        time: "2.5 Hours",
        icon: <FaCode />,
      },
    ],
  },
  {
    day: "Day 2",
    title: "Backend & Database Integration",
    sessions: [
      {
        title: "MySQL Basics",
        details: "Introduction to Relational Databases, CRUD Operations, Connecting MySQL with Node.js.",
        time: "1.5 Hours",
        icon: <FaDatabase />,
      },
      {
        title: "Firebase as a Backend",
        details: "Firestore, Firebase Authentication, Firebase Storage.",
        time: "2 Hours",
        icon: <FaDatabase />,
      },
      {
        title: "Next.js Introduction",
        details: "Why Next.js?, File-based Routing, API Routes, SSR vs SSG.",
        time: "2.5 Hours",
        icon: <FaCode />,
      },
    ],
  },
  {
    day: "Day 3",
    title: "Full Stack Integration & Deployment",
    sessions: [
      {
        title: "Next.js Advanced Concepts + Hands-on Project",
        details: "Data Fetching, Middleware, ShadCN UI, Full Stack Integration.",
        time: "4.5 Hours",
        icon: <FaProjectDiagram />,
      },
      {
        title: "GitHub & Deployment",
        details: "Git Basics, Hosting on Vercel & Firebase.",
        time: "1.5 Hours",
        icon: <FaProjectDiagram />,
      },
    ],
  },
  {
    day: "Day 4",
    title: "Handson Project Development",
    sessions: [
      {
        title: "Project Development",
        details: "Students develop modules, integrate and deploy project.",
        time: "5 Hours",
        icon: <FaProjectDiagram />,
      },
      {
        title: "QNA and Feedback Session",
        details: "QNA, Feedback, and Closing Session.",
        time: "1 Hour",
        icon: <FaComments />,
      },
    ],
  },
];

const WorkShopSchedule = () => {
  return (
    <div className="bg-gray-100 py-10 mt-10 px-4 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900"
      >
        Workshop Schedule
      </motion.h2>

      <div className="space-y-10">
        {schedule.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              {day.day}: {day.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {day.sessions.map((session, idx) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={idx}
                  className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3 text-blue-700 text-lg font-semibold mb-2">
                    <span className="text-xl">{session.icon}</span>
                    {session.title}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{session.details}</p>
                  <p className="text-xs text-gray-500 font-medium">Duration: {session.time}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkShopSchedule;
