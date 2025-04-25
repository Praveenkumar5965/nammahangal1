
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { MapPin, ShoppingBag, Utensils, Newspaper } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AddressDialog from '@/components/AddressDialog';
import SearchBar from '@/components/SearchBar';
import ShoppingSection from '@/components/home/ShoppingSection';
import ServicesSection from '@/components/home/ServicesSection';
import LocalNewsSection from '@/components/home/LocalNewsSection';
import { 
  shoppingCategories, 
  featuredProducts, 
  services, 
  localNews 
} from '@/data/homeData';

const Home = () => {
  const navigate = useNavigate();

  // Mock data for promotions/banners
  const promotions = [
    { id: '1', image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', title: 'Summer Sale' },
    { id: '2', image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', title: 'New Arrivals' },
    { id: '3', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', title: 'Special Offers' },
  ];
  
  // Quick action buttons
  const quickActions = [
    { id: 'offers', name: 'Offers', icon: '🏷️', path: '/offers' },
    { id: 'topDeals', name: 'Top Deals', icon: '🔥', path: '/deals' },
    { id: 'todaySurprise', name: 'Today Surprise', icon: '🎁', path: '/surprise' },
  ];

  // Main categories
  const mainCategories = [
    { id: 'shopping', name: 'Shopping', icon: <ShoppingBag className="text-primary" size={24} /> },
    { id: 'services', name: 'Services', icon: <Utensils className="text-primary" size={24} /> },
    { id: 'news', name: 'News', icon: <Newspaper className="text-primary" size={24} /> },
  ];

  // Get location from localStorage
  const district = localStorage.getItem('district');
  const subDistrict = localStorage.getItem('subDistrict');
  const userAddress = localStorage.getItem('userAddress');

  // Location name map
  const subDistrictMap: Record<string, { id: string; name: string }[]> = {
    haveri: [
      { id: 'hangal', name: 'Hangal' },
      { id: 'shiggaon', name: 'Shiggaon' },
    ],
    dharwad: [
      { id: 'hubli', name: 'Hubli' },
      { id: 'dharwad_city', name: 'Dharwad City' },
    ],
    bangalore: [
      { id: 'bangalore_north', name: 'Bangalore North' },
      { id: 'bangalore_south', name: 'Bangalore South' },
    ]
  };

  // Get current subdistrict display name (location_name)
  const getLocationDisplay = () => {
    if (subDistrict) {
      const subDistName = subDistrictMap[district || '']?.find(
        sd => sd.id === subDistrict
      )?.name;
      return subDistName || 'Your Location';
    }
    return 'Your Location';
  };

  // Get the "Namma*location*App" string
  const getNammaLocationAppName = () => {
    const location = getLocationDisplay();
    return `Namma${location.replace(/\s+/g, '')}App`;
  };

  const { translations } = useLanguage();

  const handleSearch = (query: string) => {
    navigate(`/categories?search=${encodeURIComponent(query)}`);
  };

  return (
    <MobileLayout>
      <div className="p-4 pb-20">
        {/* App Header */}
        <div className="text-center mb-6">
          {/* App name with Namaste images */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <img 
              src="/lovable-uploads/c7f52d88-f425-4c46-8820-2dca79645825.png" 
              alt="Namaste Left" 
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-4xl font-stylish font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NammaApp
            </h1>
            <img 
              src="/lovable-uploads/c7f52d88-f425-4c46-8820-2dca79645825.png" 
              alt="Namaste Right" 
              className="w-16 h-16 object-contain transform scale-x-[-1]"
            />
          </div>
          {/* Namma*location*App below App Name */}
          <div className="text-lg font-stylish font-semibold text-primary mb-1">
            {getNammaLocationAppName()}
          </div>
          {/* Location and Address BELOW "Namma*location*App" */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs font-stylish mb-2">
            <AddressDialog currentLocation={getLocationDisplay()}>
              <div className="flex items-center cursor-pointer hover:text-primary transition-colors max-w-xs">
                <MapPin size={16} className="text-primary mr-1" />
                <span className="font-medium">{getLocationDisplay()}</span>
                {userAddress && (
                  <>
                    <span className="mx-1">|</span>
                    <span className="truncate max-w-[140px]">{userAddress}</span>
                  </>
                )}
              </div>
            </AddressDialog>
          </div>
        </div>
        {/* Search bar below header and location/address */}
        <div className="mb-4">
          <div className="relative w-full">
            <SearchBar 
              placeholder={translations['search.placeholder']}
              onSearch={handleSearch}
            />
          </div>
        </div>
        {/* Promotional Carousel */}
        <div className="mb-6">
          <Carousel className="w-full">
            <CarouselContent>
              {promotions.map((promo) => (
                <CarouselItem key={promo.id}>
                  <div className="overflow-hidden rounded-lg h-36">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <h3 className="text-white font-medium">{promo.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Main Categories */}
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-4">
            {mainCategories.map((category) => (
              <button
                key={category.id}
                className="flex flex-col items-center justify-center p-4"
                onClick={() => {
                  if (category.id === "shopping") navigate("/shopping");
                  else if (category.id === "services") navigate("/services");
                  else if (category.id === "news") navigate("/news");
                }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  {category.icon}
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.id}
                className="flex flex-col items-center justify-center p-3 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                onClick={() => navigate(action.path)}
              >
                <span className="text-2xl mb-1">{action.icon}</span>
                <span className="text-xs font-medium">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
        <ShoppingSection 
          categories={shoppingCategories}
          featuredProducts={featuredProducts}
        />
        <ServicesSection services={services} />
        <LocalNewsSection newsItems={localNews} />
      </div>
    </MobileLayout>
  );
};

export default Home;

