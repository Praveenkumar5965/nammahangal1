
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, List, ShoppingCart, User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ 
  children, 
  title,
  showBackButton = false 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Categories', path: '/categories', icon: List },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'More', path: '/settings', icon: Menu },
  ];
  
  return (
    <div className="mobile-screen bg-background flex flex-col">
      {title && (
        <header className="bg-primary text-white p-4 flex items-center">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)} 
              className="mr-2"
            >
              ←
            </button>
          )}
          <h1 className="text-xl font-bold">{title}</h1>
        </header>
      )}
      
      {/* Content Area */}
      <main className="flex-grow overflow-auto pb-16">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <nav className="bg-background border-t border-border h-16 fixed bottom-0 left-0 right-0 max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
          return (
            <button
              key={item.name}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => navigate(item.path)}
            >
              <IconComponent size={20} className={cn(isActive ? "animate-pulse-slow" : "")} />
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileLayout;
