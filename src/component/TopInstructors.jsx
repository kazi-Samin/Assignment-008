"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "John Carter",
    role: "Senior Web Instructor",
    rating: 4.9,
    students: "3.2K",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    id: 2,
    name: "Emily Watson",
    role: "UI/UX Expert",
    rating: 4.8,
    students: "2.7K",
   img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Data Science Mentor",
    rating: 4.9,
    students: "2.5K",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Frontend Developer",
    rating: 4.8,
    students: "2.1K",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

const TopInstructors = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-12">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          🌟 Top Instructors
        </h2>

        <button className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 transition">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {instructors.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            
            {/* Image */}
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-indigo-500 font-medium">
              {item.role}
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mt-3">
              <FaStar className="text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">
                {item.rating}
              </span>
              <span className="text-gray-400 text-sm">
                ({item.students})
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;