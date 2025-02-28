"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";



const HouseCard = ({ house }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  return (
    <div
      className="border p-4 rounded-xl shadow-md bg-white mb-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => router.push(`/Shelter/${house.id}`)}
    >
        <img
        src={house.image}
        alt={house.location}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="p-2">
        <p className="text-gray-600 text-sm">📍 {house.location}</p>
        <h2 className="text-lg font-semibold">{house.description}</h2>
        <p className="text-blue-600 font-medium">{house.price}</p>
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="text-red-500 text-xl"
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};



export default HouseCard;
