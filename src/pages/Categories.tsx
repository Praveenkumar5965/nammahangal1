import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import { useLanguage } from '@/contexts/LanguageContext';

const Categories = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { translations } = useLanguage();
  
  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All', icon: '🛒' },
    { id: 'groceries', name: 'Groceries', icon: '🥫' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥦' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'clothes', name: 'Clothes', icon: '👕' },
    { id: 'makeup', name: 'Makeup', icon: '💄' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
  ];
  
  // Mock data for products
  const allProducts = [
    // Groceries
    { id: '1', name: 'Rice (Premium)', price: 60, unit: 'kg', category: 'groceries', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: '2', name: 'Wheat Flour', price: 40, unit: 'kg', category: 'groceries', image: 'https://images.unsplash.com/photo-1604313802997-0a1bc55557a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXQlMjBmbG91cnxlbnwwfHwwfHx8MA%3D%3D' },
    
    // Vegetables
    { id: '3', name: 'Fresh Tomatoes', price: 40, unit: 'kg', category: 'vegetables', image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25pb258ZW58MHx8MHx8fDA%3D' },
    { id: '4', name: 'Onions', price: 35, unit: 'kg', category: 'vegetables', image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D' },
    
    // Fruits
    { id: '5', name: 'Apples', price: 120, unit: 'kg', category: 'fruits', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8fDA%3D' },
    { id: '6', name: 'Bananas', price: 50, unit: 'dozen', category: 'fruits', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww' },
    
    // Clothes
    { id: '7', name: 'Cotton T-Shirt', price: 299, unit: 'piece', category: 'clothes', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww' },
    { id: '8', name: 'Jeans', price: 599, unit: 'piece', category: 'clothes', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D' },
  ];
  
  // Filter products based on active category and search query
  useEffect(() => {
    let filtered = activeCategory === 'all' 
      ? allProducts 
      : allProducts.filter(product => product.category === activeCategory);
    
    // Apply search filter if there's a search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setSearchResults(filtered);
  }, [activeCategory, searchQuery]);

  const handleSearch = (query: string) => {
    navigate(`/categories?search=${encodeURIComponent(query)}${activeCategory !== 'all' ? `&category=${activeCategory}` : ''}`);
  };

  return (
    <MobileLayout title={searchQuery ? `Search: ${searchQuery}` : "Categories"}>
      <div className="p-4 pb-20">
        {/* Search */}
        <div className="relative mb-4">
          <SearchBar 
            placeholder={translations['search.placeholder']}
            onSearch={handleSearch}
          />
        </div>

        {/* Category Pills */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="px-3 py-1 h-auto"
                onClick={() => {
                  setActiveCategory(category.id);
                  navigate(`/categories?${searchQuery ? `search=${searchQuery}&` : ''}category=${category.id}`);
                }}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {searchResults.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden border border-border"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="h-28 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm truncate">{product.name}</h3>
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
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">{translations['no.results'] || 'No products found'}</p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default Categories;
