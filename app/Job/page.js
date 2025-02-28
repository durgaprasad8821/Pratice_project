"use client";
import { useState } from "react";
import JobPost from "./JobPost"; // ✅ Import JobPost
import {jobListings} from '../Data/JobPost.js';

const JobFeed = () => {
  const [filter, setFilter] = useState("All");


  // Filtered Jobs
  const filteredJobs = filter === "All" ? jobListings : jobListings.filter((job) => job.role === filter);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex   justify-between items-center mb-4 gap-3">
        <h1 className="text-2xl font-bold">Trending Job Posts</h1>

        <select
          className="px-3 py-2 border rounded-lg shadow-sm bg-white text-gray-700 cursor-pointer"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Jobs</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
      </div>

      {/* ✅ Job List */}
      {filteredJobs.map((job) => (
        <JobPost key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobFeed;
