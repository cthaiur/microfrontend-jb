import React from 'react';

interface AdCategoryHeaderProps {
  classname?: string;
  title: string;
  description: string;
}

const AdCategoryHeader: React.FC<AdCategoryHeaderProps> = ({ classname, title, description }) => {
  return (
    <div className={`bg-zinc-700 p-6 rounded-lg text-center w-full mt-10 mb-10 ${classname}`}>
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
      <p className="text-gray-50 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default AdCategoryHeader;
