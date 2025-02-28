"use client";
import { useParams,useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {jobListings} from '../../Data/JobPost';
import Loader from "@/app/Components/Loder";


 

const JobDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const [loader , setLoder] = useState(false);
  useEffect(() => {setLoder(true)} , [])
  setTimeout(() => {setLoder(false)} , 2000)
  const job =  jobListings.find((job) => job.id === Number(id));
    
  if (!job) {
    return <div className="p-4">Job not found</div>;
  }


  return (
    <>
    {
      loader ? <Loader/> : 
      <>
    <div className="max-w-3xl mx-auto pt-4 relative   md:left-[-40px]">
    {/* ✅ Back Button to return to Category Page */}
    <button
      onClick={() => router.push(`/Job`)}
      className="bg-gray-300 px-4 py-2 rounded mb-4"
    >
      Back
    </button>
  </div>
    <div className="p-4 max-w-3xl mx-auto">
      {/* ✅ Job Card */}
      <div className="border rounded-xl shadow-lg bg-white p-6 flex flex-col gap-4 relative">
        {/* ✅ Top Section */}
        <div className="flex items-center gap-4">
          <img src={job.logo} alt={job.company} className="w-14 h-14 object-contain rounded-md" />
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-blue-600 font-medium">{job.company}</p>
            <p className="text-gray-600">{job.role}</p>
            <p className="text-gray-500">📍 {job.address}</p>
          </div>
        </div>

        {/* ✅ About Job */}
        <div>
          <h3 className="text-lg font-semibold">About the Job</h3>
          <p className="text-gray-500 mt-2">{job.description}</p>
        </div>

        {/* ✅ Responsibilities */}
        <div>
          <h3 className="text-lg font-semibold">Job Responsibilities</h3>
          <ul className="list-disc pl-5 text-gray-500 mt-2">
            { job.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        {/* ✅ Experience */}
        <div>
          <h3 className="text-lg font-semibold">Experience Required</h3>
          <p className="text-gray-500 mt-2">{job.experience}</p>
        </div>

        {/* ✅ Required Skills */}
        <div>
          <h3 className="text-lg font-semibold">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ✅ Apply Button (Bottom-Right Corner) */}
        <button className="absolute bottom-[-60px] md:mt-[0px]  right-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
    </>
}
    </>
  );
};

export default JobDetails;
