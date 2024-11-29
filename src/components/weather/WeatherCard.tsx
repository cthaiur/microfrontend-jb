import React from 'react';

interface WeatherCardProps {
  temperature: string;
  condition: string;
  city: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, condition, city }) => {
  return (
    <div className="bg-blue-500 text-white  gap-4 p-4 rounded-md shadow-md">
      <h2 className="text-3xl font-bold">{city}</h2>
      <p className="text-xl">{temperature}°C</p>
      <p className="text-lg">{condition}</p>
    </div>
  );
};

export default WeatherCard;
