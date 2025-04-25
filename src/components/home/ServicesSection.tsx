
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Car, Utensils, Stethoscope, Plug } from 'lucide-react';

interface ServiceProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

interface ServicesSectionProps {
  services: ServiceProps[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const navigate = useNavigate();

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'cab': return <Car size={18} />;
      case 'food': return <Utensils size={18} />;
      case 'electrician': return <Plug size={18} />;
      case 'mechanic': return <Wrench size={18} />;
      case 'doctor': return <Stethoscope size={18} />;
      default: return <Wrench size={18} />;
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg flex items-center">
          <Wrench className="mr-2 text-primary" size={20} />
          Services
        </h2>
        <button 
          className="text-primary text-sm"
          onClick={() => navigate('/services')}
        >
          View All
        </button>
      </div>

      <div className="space-y-3">
        {services.slice(0, 3).map((service) => (
          <Card 
            key={service.id}
            className="overflow-hidden border border-border hover:shadow-md transition-shadow"
            onClick={() => navigate(`/services/${service.id}`)}
          >
            <div className="flex">
              <div className="w-1/3 h-24 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="w-2/3 p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="font-medium">{service.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
                <button 
                  className="text-xs text-primary mt-2 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.id}`);
                  }}
                >
                  Book Now
                </button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
