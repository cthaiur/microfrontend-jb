import React from 'react';
import NewsCard from './NewsCard';

interface NewsItem {
  title: string;
  imageUrl: string;
  summary: string; // Atualizado para usar "summary" ao invés de "description"
}

interface NewsListProps {
  newsItems: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
  return (
    <div className="space-y-4">
      {newsItems.map((news, index) => (
        <NewsCard
          key={index}
          imageUrl={news.imageUrl}
          title={news.title}
          description={news.summary}
        />
      ))}
    </div>
  );
};

export default NewsList;
