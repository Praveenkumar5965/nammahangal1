
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Star } from 'lucide-react';

interface ShoppingCategoryProps {
  id: string;
  name: string;
  icon: string;
}

interface ProductProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  rating: number;
  ratingCount: number;
}

interface ShoppingSectionProps {
  categories: ShoppingCategoryProps[];
  featuredProducts: ProductProps[];
}

const ShoppingSection: React.FC<ShoppingSectionProps> = ({ categories, featuredProducts }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg flex items-center">
          <ShoppingBag className="mr-2 text-primary" size={20} />
          Shopping
        </h2>
        <button 
          className="text-primary text-sm"
          onClick={() => navigate('/categories')}
        >
          View All
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {categories.slice(0, 8).map((category) => (
          <button 
            key={category.id}
            className="flex flex-col items-center justify-center bg-background border border-border rounded-lg p-2 hover:border-primary transition-colors"
            onClick={() => navigate(`/categories?category=${category.id}`)}
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-xs">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-2 gap-3">
        {featuredProducts.slice(0, 4).map((product) => (
          <Card 
            key={product.id} 
            className="overflow-hidden border border-border hover:shadow-md transition-shadow"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="h-32 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-sm truncate">{product.name}</h3>
              <div className="flex items-center mt-1 text-xs">
                <span className="bg-green-600 text-white px-1 rounded flex items-center mr-1">
                  <span>{product.rating}</span>
                  <Star size={10} className="ml-0.5" />
                </span>
                <span className="text-muted-foreground">{product.ratingCount} ratings</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-primary font-bold">₹{product.price}/{product.unit}</p>
                <button className="bg-background border border-primary rounded-full w-7 h-7 flex items-center justify-center text-primary">
                  <ShoppingBag size={14} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShoppingSection;
