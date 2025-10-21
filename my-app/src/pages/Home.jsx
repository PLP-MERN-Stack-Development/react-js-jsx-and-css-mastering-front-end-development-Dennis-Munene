import { useState } from "react";
import useFetchWeather from "../hooks/useFetchWeather";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const { data, loading, error } = useFetchWeather(city, apiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(search);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-2 mb-6"
      >
        <input
          type="text"
          placeholder="Enter city name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-red-500 dark:text-red-400">
          ⚠️ {error}. Please check the city name.
        </p>
      )}

      {data && !loading && !error && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full text-center">
          <h2 className="text-3xl font-semibold mb-2">{data.name}</h2>
          <p className="capitalize mb-2 text-gray-600 dark:text-gray-300">
            {data.weather[0].description}
          </p>
          <p className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {data.main.temp.toFixed(1)}°C
          </p>
          <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
            <p>💧 Humidity: {data.main.humidity}%</p>
            <p>🌬 Wind: {data.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}
