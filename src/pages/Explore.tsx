
import React from 'react';
import { Search, Filter, Map as MapIcon, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MobileLayout from '@/components/layout/MobileLayout';

const ExplorePage = () => {
  return (
    <MobileLayout>
      <div className="px-4 py-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Explore</h1>
          <Button variant="outline" size="icon">
            <Filter size={18} />
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search locations"
            className="pl-10 bg-muted/30"
          />
        </div>
        
        <Tabs defaultValue="map">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="map">
              <MapIcon size={16} className="mr-2" />
              Map
            </TabsTrigger>
            <TabsTrigger value="list">
              <List size={16} className="mr-2" />
              List
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="map" className="mt-4">
            <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
              <div className="text-center p-4">
                <MapIcon size={48} className="mx-auto text-muted-foreground mb-2" />
                <h3 className="font-medium">Interactive Map</h3>
                <p className="text-sm text-muted-foreground">
                  Explore destinations around the world
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-24 bg-muted rounded-md animate-pulse" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default ExplorePage;
