import React from 'react';

interface AdProps {
  ad: {
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  };
}

const AdCard: React.FC<AdProps> = ({ ad }) => {
  return (
    <div className="p-4 m-1 bg-zinc-500 shadow-lg rounded-lg">
      <img src={ad.imageUrl} alt={ad.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h2 className="text-lg m-4 text-gray-50 font-bold">{ad.title}</h2>
      <p className="text-sm m-4 text-gray-100">{ad.description}</p>
      <p className="text-xl m-4 font-bold text-green-700">{ad.price}</p>
    </div>
  );
};

export default AdCard;
