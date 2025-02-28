"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct for Next.js
import { FaHeart, FaRegHeart } from "react-icons/fa";

const JobPost = ({ job }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter(); // ✅ Next.js router

  return (
    <div
      className="border p-4 rounded-xl shadow-md bg-white mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between cursor-pointer hover:shadow-lg transition"
      onClick={() => router.push(`/Job/${job.id}`)} // ✅ Next.js navigation
    >
      {/* ✅ Company Logo */}
      <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain rounded-md" />

      {/* ✅ Job Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-blue-600 font-medium">{job.company}</p>
        <p className="text-gray-600">{job.role}</p>
        <p className="text-sm text-gray-500">{job.description}</p>
        <p className="text-xs text-gray-400 mt-1">Posted {job.postTime}</p>
      </div>

      {/* ✅ Right Side Buttons (Favorite + Apply) */}
      <div className="flex flex-row sm:flex-col items-center gap-2 sm:mt-0 mt-4">
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // ✅ Prevent clicking on job post
            setIsFavorite(!isFavorite);
          }}
          className="text-red-500 text-xl"
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>

        {/* Apply Now Button */}
        <button className="px-4 py-2 bg-blue-600 md:ml-[0px] ml-[180px] md:mt-[50px] text-white rounded-lg hover:bg-blue-700 transition text-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobPost;
