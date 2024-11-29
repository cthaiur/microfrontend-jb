import React from 'react';

type NewsCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex border border-gray-300 bg-zinc-500 shadow-lg rounded-2xl">
      {/* Imagem */}
      <img className="w-1/3 h-full object-cover rounded-2xl" src={imageUrl} alt={title} />
      
      {/* Texto (Título e Descrição) */}
      <div className="flex-1 p-4">
        <h2 className="font-semibold text-zinc-100 text-xl m-5 mb-2">{title}</h2>
        <p className="text-zinc-50 m-5 text-base">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
