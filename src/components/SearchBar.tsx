
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder, 
  className,
  onSearch 
}) => {
  const { translations } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Recent searches stored in localStorage
  const getRecentSearches = (): string[] => {
    const searches = localStorage.getItem('recentSearches');
    return searches ? JSON.parse(searches) : [];
  };

  const saveRecentSearch = (search: string) => {
    const searches = getRecentSearches();
    // Add to beginning and remove duplicates
    const newSearches = [search, ...searches.filter(s => s !== search)].slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(newSearches));
  };

  // Mock suggestions based on query (replace with real data)
  const getSuggestions = (input: string): string[] => {
    const products = [
      'Rice', 'Wheat Flour', 'Tomatoes', 'Onions', 'Apples', 
      'Bananas', 'T-shirt', 'Jeans', 'Smartphone', 'Electronics',
      'Vegetables', 'Fruits', 'Groceries', 'Clothes', 'Makeup'
    ];
    
    if (!input.trim()) {
      return getRecentSearches();
    }
    
    return products.filter(product => 
      product.toLowerCase().includes(input.toLowerCase())
    );
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      const newSuggestions = getSuggestions(value);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions(getRecentSearches());
      setShowSuggestions(!!getRecentSearches().length);
    }
  };

  // Handle search submission
  const handleSearch = (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;
    
    setShowSuggestions(false);
    saveRecentSearch(searchQuery);
    
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      // Default behavior: navigate to search results
      navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle clicking on a suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Show recent searches when focusing on empty input
  const handleFocus = () => {
    if (!query.trim()) {
      const recentSearches = getRecentSearches();
      if (recentSearches.length > 0) {
        setSuggestions(recentSearches);
        setShowSuggestions(true);
      }
    } else if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input 
          type="text" 
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder || translations['search.placeholder'] || "Search..."}
          className={`pl-9 h-9 text-sm ${className}`}
        />
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute z-50 w-full mt-1 border shadow-md max-h-60 overflow-auto">
          <div className="p-2">
            <p className="text-xs text-muted-foreground mb-2">
              {query.trim() ? translations['search.suggestions'] || "Suggestions" : translations['search.recent'] || "Recent Searches"}
            </p>
            {suggestions.map((suggestion, index) => (
              <div 
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-2 py-1.5 hover:bg-muted rounded-md cursor-pointer flex items-center"
              >
                <Search size={14} className="mr-2 text-muted-foreground" />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
