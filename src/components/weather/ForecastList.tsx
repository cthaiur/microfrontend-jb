import React from 'react';

type Forecast = {
  date: string;
  temperature: number;
  description: string;
};

interface ForecastListProps {
  forecast: Forecast[];
}

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {forecast.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center space-y-2"
        >
          <p className="text-lg font-semibold text-gray-800">{item.date}</p>
          <p className="text-2xl font-bold text-blue-500">{item.temperature}°C</p>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>

  );
};

export default ForecastList;
