
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Star, Clock, Heart, Share2, Calendar, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { getDestinationById } from '@/data/destinations';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const destination = getDestinationById(id || '');
  
  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-semibold">Destination not found</h2>
        <Button className="mt-4" onClick={() => navigate('/')}>
          Return Home
        </Button>
      </div>
    );
  }
  
  const handleSave = () => {
    toast({
      title: "Saved to favorites",
      description: `${destination.name} has been added to your saved list.`
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Sharing",
      description: "Sharing options opened"
    });
  };
  
  const handleAddToItinerary = () => {
    toast({
      title: "Added to itinerary",
      description: `${destination.name} has been added to your travel plans.`
    });
    navigate('/itinerary');
  };
  
  return (
    <div className="mobile-screen bg-background flex flex-col">
      {/* Header Image */}
      <div className="relative h-64 w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        <Button 
          variant="outline" 
          size="icon"
          className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-full"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
        </Button>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-white text-2xl font-bold drop-shadow-md">{destination.name}</h1>
          <div className="flex items-center mt-1">
            <MapPin size={16} className="text-white mr-1" />
            <span className="text-white text-sm">{destination.location}</span>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="flex justify-around py-4 border-b">
        <Button variant="ghost" size="sm" onClick={handleSave}>
          <Heart size={18} className="mr-1" />
          Save
        </Button>
        <Button variant="ghost" size="sm" onClick={handleShare}>
          <Share2 size={18} className="mr-1" />
          Share
        </Button>
        <Button variant="ghost" size="sm" onClick={() => navigate('/gallery')}>
          <ImageIcon size={18} className="mr-1" />
          Photos
        </Button>
      </div>
      
      {/* Content Tabs */}
      <div className="p-4 pb-24 flex-grow overflow-y-auto">
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-1" size={18} />
                <span className="font-medium">{destination.rating}</span>
                <span className="text-muted-foreground ml-1">(120 reviews)</span>
              </div>
              <Badge>{destination.price}</Badge>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">{destination.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {destination.category.map(cat => (
                  <Badge key={cat} variant="secondary">{cat}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <MapPin className="mr-2" />
                <span>Map View - {destination.coordinates.lat}, {destination.coordinates.lng}</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activities" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">Popular Activities</h3>
            <div className="space-y-3">
              {destination.activities.map((activity, index) => (
                <div key={index} className="flex items-center p-3 bg-secondary/20 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{activity}</p>
                    <p className="text-sm text-muted-foreground">Recommended experience</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4 mt-4">
            <div className="text-center p-8">
              <h3 className="text-lg font-semibold">Reviews Coming Soon</h3>
              <p className="text-muted-foreground mt-2">
                We're working on gathering authentic reviews for this destination.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
        <Button 
          className="w-full" 
          onClick={handleAddToItinerary}
        >
          <Calendar className="mr-2" size={18} />
          Add to Itinerary
        </Button>
      </div>
    </div>
  );
};

export default DestinationDetail;
