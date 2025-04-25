import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { MapPin, Plus } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  
  // Mock saved addresses - in a real app, these would come from backend/storage
  const savedAddresses = [
    {
      id: '1',
      type: 'Home',
      address: '123 Main Street, Hangal, Karnataka 581104',
      isDefault: true
    },
    {
      id: '2',
      type: 'Work',
      address: '456 Market Road, Hangal, Karnataka 581104',
      isDefault: false
    }
  ];

  return (
    <MobileLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        {/* Addresses Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Saved Addresses</h2>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Plus size={16} />
              Add New
            </Button>
          </div>
          
          <div className="space-y-3">
            {savedAddresses.map((address) => (
              <div 
                key={address.id} 
                className="border rounded-lg p-3 bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{address.type}</span>
                        {address.isDefault && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {address.address}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other settings sections can go here */}
      </div>
    </MobileLayout>
  );
};

export default Settings;
