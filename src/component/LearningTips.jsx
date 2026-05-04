// import Marquee from "react-fast-marquee";
// import { FaCalendarAlt, FaCheckCircle, FaCode, FaCoffee } from "react-icons/fa";

// const tips = [
//   {
//     id: 1,
//     title: "Set a Schedule",
//     desc: "Make a daily study plan and stick to it.",
//     icon: <FaCalendarAlt />,
//   },
//   {
//     id: 2,
//     title: "Stay Consistent",
//     desc: "Consistency is the key to success.",
//     icon: <FaCheckCircle />,
//   },
//   {
//     id: 3,
//     title: "Practice Projects",
//     desc: "Build projects to strengthen skills.",
//     icon: <FaCode />,
//   },
//   {
//     id: 4,
//     title: "Take Breaks",
//     desc: "Take short breaks to stay productive.",
//     icon: <FaCoffee />,
//   },
// ];

// const LearningTips = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 md:px-12 mb-10 ">
//       <h2 className="animate__animated animate__slideInDown animate__infinite text-2xl font-bold mb-6 text-center">
//         Learning Tips
//       </h2>
//       <Marquee>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {tips.map((item) => (
//             <div
//               key={item.id}
//               className="p-6 rounded-xl shadow-md bg-blue-100 cursor-pointer hover:border-blue-500 hover:border hover:shadow-xl transition"
//             >
//               <div className="text-3xl text-purple-600 mb-3">{item.icon}</div>

//               <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

//               <p className="text-gray-500 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </Marquee>
//     </section>
//   );
// };

// export default LearningTips;
"use client";

import { FaCalendarAlt, FaCheckCircle, FaCode, FaCoffee } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Set a Schedule",
    desc: "Plan your day and stay disciplined.",
    icon: <FaCalendarAlt />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Stay Consistent",
    desc: "Small progress every day matters.",
    icon: <FaCheckCircle />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Build Projects",
    desc: "Practice by creating real projects.",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Take Breaks",
    desc: "Refresh your mind for better focus.",
    icon: <FaCoffee />,
    color: "from-orange-500 to-pink-500",
  },
];

const LearningTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-16">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        🚀 Smart Learning Tips
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tips.map((item) => (
          <div
            key={item.id}
            className="group relative p-[2px] rounded-2xl bg-gradient-to-r hover:scale-105 transition duration-300"
          >
            {/* Gradient Border */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} blur opacity-30 group-hover:opacity-60`}
            ></div>

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 shadow-md h-full">
              
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center text-white rounded-xl mb-4 bg-gradient-to-r ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningTips;