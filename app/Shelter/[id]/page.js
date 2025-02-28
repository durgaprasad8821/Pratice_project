"use client";
import { useParams,useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {houseListings} from '../../Data/ShelterPost.js'



const HouseDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const house = houseListings.find((house) => house.id === Number(id));
  const similar = houseListings.slice(1,5);
  console.log(similar);

  if (!house) {
    return <div className="p-4 text-center text-red-500">House not found</div>;
  }

  return (
    <>
    <div className="max-w-3xl mx-auto pt-4 relative   md:left-[-40px]">
    {/* ✅ Back Button to return to Category Page */}
    <button
      onClick={() => router.push(`/Shelter`)}
      className="bg-gray-300 px-4 py-2 rounded mb-4"
    >
      Back
    </button>
    </div>
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* ✅ Full-width Image */}
      <img src={house.image} alt="House Image" className="w-full h-64 object-cover rounded-lg shadow-lg" />
      
      {/* ✅ Location & Address */}
      <div>
        <h1 className="text-2xl font-bold">{house.location}</h1>
        <p className="text-gray-600">📍 {house.address}</p>
      </div>
      
      {/* ✅ Rental Details */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-lg font-semibold">{house.price}</p>
        <p className="text-gray-700">{house.description}</p>
        <p className="text-gray-500">🔹 {house.conditions}</p>
      </div>
      
      {/* ✅ Contact Us Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Contact Us
      </button>
      
      {/* ✅ Similar Listings */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Similar Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {similar.filter(h => h.id !== house.id).map((similar) => (
            <div key={similar.id} className="border p-4 rounded-lg shadow-sm">
              <img src={similar.image} alt={similar.location} className="w-full h-40 object-cover rounded-md" />
              <p className="font-semibold mt-2">{similar.location}</p>
              <p className="text-sm text-gray-500">{similar.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default HouseDetails;