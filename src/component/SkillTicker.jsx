  "use client";

import Marquee from "react-fast-marquee";

const tips = [
  "🚀 New SkillSphere courses just dropped!",
  "🔥 Master Full Stack Development step by step",
  "💡 Tip: Code daily for faster growth",
  "🎯 Build real projects & boost your portfolio",
  "📢 Stay consistent & track your learning journey",
];

const SkillTicker = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-90 blur-xl"></div>

      {/* Main Bar */}
      <div className="relative backdrop-blur-md bg-white/10 border-y border-white/20 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4 px-4">

          {/* Badge */}
          <span className="bg-white text-indigo-600 px-4 py-1 rounded-full font-semibold shadow-md text-sm animate-pulse">
            🔥 LIVE
          </span>

          {/* Scrolling Content */}
          <Marquee pauseOnHover speed={70} gradient={false}>
            <div className="flex gap-12 text-white font-medium text-sm md:text-base tracking-wide">
              {tips.map((item, index) => (
                <span
                  key={index}
                  className="hover:scale-105 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SkillTicker;