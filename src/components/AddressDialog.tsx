
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { MapPin, Plus } from 'lucide-react';

interface AddressDialogProps {
  currentLocation: string;
  children: React.ReactNode;
}

const AddressDialog = ({ currentLocation, children }: AddressDialogProps) => {
  const navigate = useNavigate();
  
  const handleAddNewAddress = () => {
    navigate('/settings');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delivery Location</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg mb-3">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm font-medium">{currentLocation}</span>
          </div>
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2"
            onClick={handleAddNewAddress}
          >
            <Plus size={16} />
            Add New Address
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
