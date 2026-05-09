
"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden w-[320px] gap-auto ">
      
      
      <div className="relative w-full h-[200px] overflow-hidden rounded-t-xl">
  <Image
    src={course.image}
    alt={course.title}
    fill
    className="object-cover hover:scale-105 transition duration-300"
  />
</div>
<section id="courses" className="py-16">
  
</section>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        
        <div>
          <h2 className="text-sm font-semibold line-clamp-2">
            {course.title}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {course.instructor}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">
            <FaStar />
            <span className="text-gray-700 text-xs">
              {course.rating} (2.3K)
            </span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/courses/${course.id}`}>
          <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:scale-105 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;