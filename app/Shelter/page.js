'use client';
import { useState } from "react";
import HouseCard from "./ShelterPost";
import {houseListings} from '../Data/ShelterPost.js'
 

  const allCities = ["All Cities", "Mumbai", "Bangalore", "Delhi", "Pune"];

const HouseList = () => {
    const [selectedCity, setSelectedCity] = useState("All Cities");
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">House Rentals</h1>
        <div className="relative p-1 max-w-5xl top-[-40px] mx-auto">
      <div className="flex justify-end mb-1">
        <select
            value={selectedCity}
          className="border p-2 rounded-lg"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {allCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        </div>
      </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {houseListings.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    );
  };
  
  export default HouseList;