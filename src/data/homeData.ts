import { ReactNode } from 'react';

// Shopping Categories
export const shoppingCategories = [
  { id: 'groceries', name: 'Groceries', icon: '🥫' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥦' },
  { id: 'fruits', name: 'Fruits', icon: '🍎' },
  { id: 'clothes', name: 'Clothes', icon: '👕' },
  { id: 'makeup', name: 'Makeup', icon: '💄' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'appliances', name: 'Appliances', icon: '🔌' },
  { id: 'furniture', name: 'Furniture', icon: '🛋️' },
];

// Featured products by category
export const featuredProducts = [
  { id: '1', name: 'Fresh Tomatoes', price: 40, unit: 'kg', image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww', rating: 4.5, ratingCount: 245, categoryId: 'vegetables' },
  { id: '2', name: 'Rice (Premium)', price: 60, unit: 'kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D', rating: 4.8, ratingCount: 120, categoryId: 'groceries' },
  { id: '3', name: 'Cotton T-Shirt', price: 299, unit: 'piece', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww', rating: 4.2, ratingCount: 89, categoryId: 'clothes' },
  { id: '4', name: 'Smartphone', price: 12999, unit: 'piece', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', rating: 4.7, ratingCount: 315, categoryId: 'electronics' },
];

// Services
export const services = [
  { 
    id: 'cab', 
    name: 'Cab Service', 
    icon: 'car',
    description: 'Book a cab for local and outstation travel with top-rated drivers.',
    image: 'https://images.unsplash.com/photo-1568844293986-8d0400809954?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  { 
    id: 'food', 
    name: 'Food Delivery', 
    icon: 'utensils',
    description: 'Order food from your favorite restaurants with quick delivery.',
    image: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  { 
    id: 'electrician', 
    name: 'Electrician', 
    icon: 'plug',
    description: 'Professional electricians for all your electrical repair needs.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  { 
    id: 'mechanic', 
    name: 'Mechanic', 
    icon: 'wrench',
    description: 'Vehicle repair and service at your doorstep by expert mechanics.',
    image: 'https://images.unsplash.com/photo-1580913231877-5ccdb57de14e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  { 
    id: 'doctor', 
    name: 'Doctor Consultation', 
    icon: 'stethoscope',
    description: 'Online and in-person doctor consultations for various health issues.',
    image: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
];

// Local News
export const localNews = [
  { 
    id: '1', 
    title: 'New Water Project Launched in Hangal to Improve Water Supply',
    source: 'Local News Network',
    date: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    url: 'https://news.google.com'
  },
  { 
    id: '2', 
    title: 'Weekly Farmers Market Updates: New Organic Produce Available This Week',
    source: 'Rural Herald',
    date: '5 hours ago',
    url: 'https://news.google.com'
  },
  { 
    id: '3', 
    title: 'Local Festival Preparations Begin: Cultural Events Scheduled Next Month',
    source: 'Daily Hunt',
    date: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    url: 'https://news.google.com'
  },
  { 
    id: '4', 
    title: 'Road Improvement Work to Start Next Week: Expect Diversions',
    source: 'Zee Local',
    date: '2 days ago',
    url: 'https://news.google.com'
  },
];
