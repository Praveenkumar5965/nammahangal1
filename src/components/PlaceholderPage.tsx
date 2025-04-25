
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  icon?: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  icon = '🚧', 
  description = 'This page is coming soon!' 
}) => {
  const navigate = useNavigate();
  
  return (
    <MobileLayout title={title}>
      <div className="flex flex-col items-center justify-center h-[70vh] p-6 text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Go Back
        </Button>
      </div>
    </MobileLayout>
  );
};

export default PlaceholderPage;
