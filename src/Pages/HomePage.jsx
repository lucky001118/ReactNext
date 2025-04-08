import React from "react";
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

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white mt-10">
      {/* Hero Section */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-blue-950 text-white py-20 px-4 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">🚀 ReactNext Bootcamp 2025</h1>
        <p className="text-xl mb-6">
          Code, Connect & Deploy ......
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#register"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Register Now – ₹50 only
        </motion.a>
      </motion.header>

      {/* Workshop Info */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 px-6 bg-gray-50 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">📅 Workshop Schedule</h2>
        <p className="text-lg text-gray-700 mb-4">
          April 7, 9, 11, and 12, 2025 | Time: 4:00 PM - 6:00 PM
        </p>
        <p className="text-md text-gray-600">
          Interactive sessions with quizzes, prizes, and certification!
        </p>
      </motion.section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">🔥 Why Attend?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Hands-on Learning", "Quizzes & Prizes", "Certification"].map((title, i) => (
            <motion.div
              key={i}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer"
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>
                {title === "Hands-on Learning"
                  ? "Build real-world projects with React and Next.js."
                  : title === "Quizzes & Prizes"
                  ? "Win exciting rewards and the Prize of Excellence! 🏆"
                  : "Get a recognized certificate after completion."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Register CTA */}
      <motion.section
        id="register"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 px-6 bg-blue-50 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">🎯 Ready to Learn?</h2>
        <p className="mb-4 text-gray-700">
          Limited seats available. Register before <strong>April 6</strong>.
        </p>
        <Link to="/schedule">
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
        >
          Schedules
        </motion.p> </Link>
        <Outlet></Outlet>
      </motion.section>
    </div>
  );
};

export default HomePage;
