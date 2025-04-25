
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper, ExternalLink } from 'lucide-react';

interface NewsItemProps {
  id: string;
  title: string;
  source: string;
  date: string;
  image?: string;
  url: string;
}

interface LocalNewsSectionProps {
  newsItems: NewsItemProps[];
}

const LocalNewsSection: React.FC<LocalNewsSectionProps> = ({ newsItems }) => {
  const navigate = useNavigate();
  
  const handleNewsClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Open in a new tab using Google as a referrer
    window.open(url, '_blank');
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg flex items-center">
          <Newspaper className="mr-2 text-primary" size={20} />
          Local News
        </h2>
        <button 
          className="text-primary text-sm"
          onClick={() => navigate('/news')}
        >
          More News
        </button>
      </div>
      
      <div className="space-y-3">
        {newsItems.map((news) => (
          <Card 
            key={news.id} 
            className="border border-border hover:shadow-sm transition-shadow"
            onClick={(e) => handleNewsClick(news.url, e)}
          >
            <div className="flex">
              {news.image && (
                <div className="w-1/4 h-20 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className={`p-3 ${news.image ? 'w-3/4' : 'w-full'}`}>
                <h3 className="font-medium text-sm line-clamp-2">{news.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-muted-foreground">{news.source}</span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    {news.date}
                    <ExternalLink size={12} className="ml-1" />
                  </span>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Ad Banner */}
      <div className="mt-4 p-2 bg-gray-100 rounded-md text-center text-xs text-muted-foreground">
        Sponsored Advertisement
      </div>
    </div>
  );
};

export default LocalNewsSection;
