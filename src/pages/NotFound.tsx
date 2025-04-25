
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">The page you are looking for doesn't exist or has been moved.</p>
      <Button 
        onClick={() => navigate('/')}
        className="bg-primary hover:bg-primary/90"
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
