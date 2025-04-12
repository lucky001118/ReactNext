import { motion } from "framer-motion";

const certificateHolders = {
  "2nd Semester": [
    { name: "Ankush Mishra", sem: 2, quizScore: 7, projectScore: 4.29, description: "Excellent grasp of fundamentals and participation." },
    { name: "Neelam Sahu", sem: 2, quizScore: 5, projectScore: 4.86, description: "Consistently performed well in all tasks." },
    { name: "Shubham Vishvakarma", sem: 2, quizScore: 3, projectScore: 6.68, description: "Demonstrated strong problem-solving abilities." },
  ],
  "4th Semester": [
    { name: "Nimmi Gautam", sem: 4, quizScore: 8, projectScore: 8.89, description: "Delivered an outstanding project with precision." },
    { name: "Aditya Singh", sem: 4, quizScore: 8, projectScore: 7.93, description: "Exhibited creativity and technical skill." },
    { name: "Nisha Gautam", sem: 4, quizScore: 6, projectScore: 9.39, description: "Great collaboration and coding practices." },
  ],
  "6th Semester": [
    { name: "Sanjay Sahu", sem: 6, quizScore: 12, projectScore: 7.8, description: "Stood out with innovative problem-solving." },
    { name: "Ekta Sahu", sem: 6, quizScore: 5, projectScore: 8.07, description: "Strong project execution and quiz performance." },
  ],
  "8th Semester": [
    { name: "Ritika Sahu", sem: 8, quizScore:0, projectScore: 9.29, description: "Led by example with top-level excellence." },
  ],
};

const cardVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
    },
  },
};

const ExcellenceCertificatePage = () => {
  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-blue-50 to-white py-10 px-4 sm:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-blue-800 mb-12"
      >
        🏆 Excellence Certificate Holders
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {Object.entries(certificateHolders).map(([level, students], index) => (
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-6 border-t-4 border-blue-500 hover:border-indigo-600"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center underline">{level}</h2>
            <div className="grid gap-6">
              {students.map((student, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-blue-100 to-indigo-50 rounded-xl p-5 shadow-sm transform transition-transform duration-300"
                >
                  <div className="text-lg font-semibold text-gray-800">🎓 {student.name}</div>
                  <div className="text-sm text-gray-600 mb-2">Semester: {student.sem}</div>

                  <div className="flex flex-col gap-1 text-sm">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex justify-between">
                      <span className="font-medium text-blue-700">Quiz Score:</span>
                      <span className="text-right font-bold text-blue-900">{student.quizScore}</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="flex justify-between">
                      <span className="font-medium text-blue-700">Project Score:</span>
                      <span className="text-right font-bold text-blue-900">{student.projectScore}</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="flex justify-between border-t border-gray-300 pt-1">
                      <span className="font-semibold text-indigo-800">Total Score:</span>
                      <span className="text-right font-extrabold text-indigo-900">{student.quizScore + student.projectScore}</span>
                    </motion.div>
                  </div>

                  <p className="text-sm text-gray-700 mt-3 italic border-l-4 border-blue-400 pl-3">
                    {student.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceCertificatePage;