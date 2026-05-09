

import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl shadow mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Upgrade Your Skills 
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Learn from industry experts and advance your career with practical courses.
          </p>

          <div className="mt-6 flex gap-4">
             <Link href="#courses">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
  Browse Courses
</button>
</Link>
            <Link href="/register">
            <button className="px-6 py-3 border border-indigo-500 text-indigo-600 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition duration-300">
  Get Started
</button>
</Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center w-full mt-6 md:mt-0">
          <div className="relative w-full h-[280px] md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hero.jpg"
              alt="Learning student"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;