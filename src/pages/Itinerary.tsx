
import React from 'react';
import { Calendar as CalendarIcon, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import MobileLayout from '@/components/layout/MobileLayout';
import { useToast } from '@/components/ui/use-toast';

const ItineraryPage = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Mock itinerary data
  const itineraryItems = [
    { 
      id: 1, 
      title: "Flight to Bali", 
      time: "10:30 AM", 
      type: "transportation",
      details: "Flight QZ7551"
    },
    { 
      id: 2, 
      title: "Check-in at Resort", 
      time: "2:00 PM", 
      type: "accommodation",
      details: "Ocean View Villa"
    },
    { 
      id: 3, 
      title: "Sunset Dinner", 
      time: "7:00 PM", 
      type: "activity",
      details: "Jimbaran Bay Beach"
    }
  ];
  
  const handleAddActivity = () => {
    toast({
      title: "Feature coming soon",
      description: "Adding new activities will be available in the next update"
    });
  };
  
  return (
    <MobileLayout>
      <div className="px-4 py-6 pb-24 space-y-6">
        <h1 className="text-2xl font-bold">Your Itinerary</h1>
        
        <div className="bg-muted/30 p-4 rounded-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">
              {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h2>
          </div>
          <Button size="sm" onClick={handleAddActivity}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
        
        <div className="space-y-4">
          {itineraryItems.length > 0 ? (
            itineraryItems.map((item) => (
              <div key={item.id} className="bg-card border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <Badge variant={
                    item.type === "transportation" ? "default" : 
                    item.type === "accommodation" ? "secondary" : 
                    "outline"
                  }>
                    {item.time}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </div>
            ))
          ) : (
            <div className="text-center p-8">
              <h3 className="text-muted-foreground">No activities planned</h3>
              <Button className="mt-4" onClick={handleAddActivity}>
                Add Activity
              </Button>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default ItineraryPage;
