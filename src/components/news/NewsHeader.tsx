import React from 'react';

interface NewsHeaderProps {
  title: string;
  imageUrl: string;
  className?: string;
}

const NewsHeader: React.FC<NewsHeaderProps> = ({ className, title, imageUrl }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${className}`}>
      <img className="h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default NewsHeader;
