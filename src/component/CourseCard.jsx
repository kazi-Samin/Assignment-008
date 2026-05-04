"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
      
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
          Trending
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        
        <div>
          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 h-[48px]">
            {course.title}
          </h2>

          {/* Instructor */}
          <p className="text-sm text-gray-500 mt-1">
            {course.instructor}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="font-medium text-gray-700 text-sm">
              {course.rating}
            </span>
            <span className="text-gray-400 text-sm">(2.3K)</span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/courses/${course.id}`} className="mt-5">
          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:scale-105 transition duration-300 shadow">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;