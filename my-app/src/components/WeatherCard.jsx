import React from 'react';

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: info, wind } = weather;
  const icon = info?.[0]?.icon;
  const description = info?.[0]?.description;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto"
      />
      <p className="capitalize text-gray-600 dark:text-gray-300">{description}</p>
      <p className="text-4xl font-semibold text-blue-500 mt-2">{main.temp}°C</p>
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} m/s</span>
      </div>
    </div>
  );
}
