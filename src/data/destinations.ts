
export interface Destination {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  rating: number;
  price: string;
  category: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  activities: string[];
}

export const popularDestinations: Destination[] = [
  {
    id: "dest-001",
    name: "Bali, Indonesia",
    description: "A tropical paradise known for its lush landscapes, stunning beaches, and vibrant culture.",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: "$$$",
    category: ["Beach", "Cultural", "Adventure"],
    coordinates: {
      lat: -8.4095,
      lng: 115.1889
    },
    activities: ["Surfing", "Temple Visit", "Hiking", "Snorkeling"]
  },
  {
    id: "dest-002",
    name: "Santorini, Greece",
    description: "Famous for its stunning white-washed buildings and breathtaking sunsets over the Aegean Sea.",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d3a6fd89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: "$$$$",
    category: ["Romantic", "Beach", "Luxury"],
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    },
    activities: ["Wine Tasting", "Sailing", "Beach Relaxation", "Photography"]
  },
  {
    id: "dest-003",
    name: "Kyoto, Japan",
    description: "Ancient capital of Japan filled with temples, shrines, and traditional Japanese gardens.",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    price: "$$$",
    category: ["Cultural", "Historical", "Scenic"],
    coordinates: {
      lat: 35.0116,
      lng: 135.7681
    },
    activities: ["Temple Tours", "Tea Ceremony", "Garden Visits", "Kimono Experience"]
  },
  {
    id: "dest-004",
    name: "Machu Picchu, Peru",
    description: "The iconic Incan citadel set high in the Andes Mountains, offering breathtaking views.",
    location: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: "$$$",
    category: ["Historical", "Adventure", "UNESCO"],
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    },
    activities: ["Hiking", "Archaeological Tour", "Photography", "Mountain Climbing"]
  },
  {
    id: "dest-005",
    name: "New York City, USA",
    description: "The vibrant city that never sleeps, filled with iconic landmarks, culture, and entertainment.",
    location: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    price: "$$$$",
    category: ["Urban", "Culture", "Shopping"],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    activities: ["Broadway Shows", "Museum Visits", "Shopping", "Skyline Views"]
  },
  {
    id: "dest-006",
    name: "Barcelona, Spain",
    description: "Famous for its art, architecture, and vibrant street life with beaches and mountains nearby.",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    price: "$$$",
    category: ["Cultural", "Beach", "Urban"],
    coordinates: {
      lat: 41.3851,
      lng: 2.1734
    },
    activities: ["Sagrada Familia", "Tapas Tour", "Beach Day", "Gothic Quarter"]
  }
];

export const getDestinationById = (id: string): Destination | undefined => {
  return popularDestinations.find(destination => destination.id === id);
};

export const getDestinationsByCategory = (category: string): Destination[] => {
  return popularDestinations.filter(destination => 
    destination.category.includes(category)
  );
};
