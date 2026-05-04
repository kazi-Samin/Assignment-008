
import React from 'react';
import CourseCard from './CourseCard';
import Link from 'next/link';


const GetCard = async() => {
    const res = await fetch("https://ph-assessment-8.vercel.app/data.json");
    const data =await res.json();
     const final =data.sort((a, b) => b.rating - a.rating).slice(0, 3); // first 3
     console.log(final)
    return (
      <div className="max-w-7xl mx-auto py-10 px-4">
  
  <div className="relative max-w-6xl mx-auto mb-8 flex items-center justify-center">

    {/* Title center */}
    <h1 className="font-bold text-2xl sm:text-3xl text-center">
      Trending Courses
    </h1>

    {/* View All right side */}
    <Link href="/courses">
      <p className="absolute right-0 text-sm sm:text-base font-semibold text-indigo-600 hover:underline cursor-pointer">
        View All
      </p>
    </Link>

  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {final.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default GetCard;