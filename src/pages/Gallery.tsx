
import React from 'react';
import { Search, Grid3X3, Image } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MobileLayout from '@/components/layout/MobileLayout';

const GalleryPage = () => {
  // Mock gallery data
  const galleryItems = [
    {
      id: "img1",
      url: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Bali, Indonesia",
      category: "Beach"
    },
    {
      id: "img2",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Paris, France",
      category: "Urban"
    },
    {
      id: "img3",
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Tokyo, Japan",
      category: "Street"
    },
    {
      id: "img4",
      url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Iceland",
      category: "Nature"
    },
    {
      id: "img5",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Norway",
      category: "Mountain"
    },
    {
      id: "img6",
      url: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "New Zealand",
      category: "Landscape"
    }
  ];
  
  const categories = ["All", "Beach", "Urban", "Nature", "Food", "Culture"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  const filteredImages = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  return (
    <MobileLayout>
      <div className="px-4 py-6 pb-24 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gallery</h1>
          <Grid3X3 size={22} />
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search photos"
            className="pl-10 bg-muted/30"
          />
        </div>
        
        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
          {categories.map(category => (
            <Badge 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredImages.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={item.url} 
                  alt={item.location} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <span className="text-white font-medium">{item.location}</span>
                  <span className="text-white/80 text-xs">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8">
            <Image size={48} className="mx-auto text-muted-foreground mb-2" />
            <h3 className="font-medium">No images found</h3>
            <p className="text-sm text-muted-foreground">
              Try changing your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default GalleryPage;
