'use client';
import { useEffect, useState } from "react";

const WeatherAndCricket = () => {
  const [weather, setWeather] = useState(null);
  const [cricket, setCricket] = useState(null);

  useEffect(() => {
    // Dummy data for now (Replace with API calls if needed)
    setWeather({
      city: "Hyderabad",
      temperature: "30°C",
      condition: "Sunny",
      humidity: "60%",
      windSpeed: "10 km/h",
    });

    setCricket({
      match: "India vs Australia",
      score: "India 250/3 (45 overs)",
      status: "India needs 50 runs to win in 30 balls",
    });
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Weather Card */}
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">🌤 Weather Forecast</h2>
        {weather ? (
          <div className="mt-2">
            <p className="text-xl">{weather.city}</p>
            <p className="text-3xl font-bold">{weather.temperature}</p>
            <p>{weather.condition}</p>
            <p>💧 Humidity: {weather.humidity}</p>
            <p>🌬 Wind: {weather.windSpeed}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>

      {/* Cricket Score Card */}
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">🏏Cricket Live</h2>
        {cricket ? (
          <div className="mt-2">
            <p className="text-xl font-bold">{cricket.match}</p>
            <p className="text-lg">{cricket.score}</p>
            <p className="italic">{cricket.status}</p>
          </div>
        ) : (
          <p>Loading cricket data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherAndCricket;
