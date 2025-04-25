
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/sonner';
import { states, getDistricts, getSubDistricts } from '@/utils/locationData';
import { useLanguage } from '@/contexts/LanguageContext';

const Location = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [districts, setDistricts] = useState<{id: string; name: string}[]>([]);
  const [subDistricts, setSubDistricts] = useState<{id: string; name: string}[]>([]);
  const navigate = useNavigate();
  const { translations, currentLanguage } = useLanguage();
  
  // Update districts when state changes
  useEffect(() => {
    if (state) {
      const stateDistricts = getDistricts(state);
      setDistricts(stateDistricts);
      setDistrict('');
      setSubDistrict('');
      
      // Show toast if no districts available
      if (stateDistricts.length === 0) {
        toast.error(translations['no.districts'] || 'No districts available for this state');
      }
    }
  }, [state, translations]);
  
  // Update sub-districts when district changes
  useEffect(() => {
    if (state && district) {
      const districtSubDistricts = getSubDistricts(state, district);
      setSubDistricts(districtSubDistricts);
      setSubDistrict('');
      
      // Show toast if no sub-districts available
      if (districtSubDistricts.length === 0) {
        toast.error(translations['no.subdistricts'] || 'No sub-districts available for this district');
      }
    }
  }, [state, district, translations]);

  const handleContinue = () => {
    if (!state || !district || !subDistrict) {
      toast.error(translations['select.all.locations'] || 'Please select state, district and sub-district');
      return;
    }
    
    // Save location selections
    localStorage.setItem('state', state);
    localStorage.setItem('district', district);
    localStorage.setItem('subDistrict', subDistrict);
    localStorage.setItem('hasCompletedOnboarding', 'true');
    
    navigate('/');
  };

  return (
    <div className="h-screen bg-secondary p-6 flex flex-col">
      <div className="flex-grow flex flex-col justify-center">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-primary mb-2">
            {translations['select.location'] || 'Select Your Location'}
          </h1>
          <p className="text-muted-foreground">
            {translations['choose.location.subtitle'] || 'Choose your state, district and sub-district'}
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="state">{translations['state'] || 'State'}</Label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger>
                <SelectValue placeholder={translations['select.state'] || 'Select state'} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {states.map((stateOption) => (
                  <SelectItem key={stateOption.id} value={stateOption.id}>
                    {stateOption.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="district">{translations['district'] || 'District'}</Label>
            <Select 
              value={district} 
              onValueChange={setDistrict}
              disabled={!state}
            >
              <SelectTrigger>
                <SelectValue placeholder={translations['select.district'] || 'Select district'} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {districts.map((dist) => (
                  <SelectItem key={dist.id} value={dist.id}>
                    {dist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state && districts.length === 0 && (
              <p className="text-sm text-red-500">
                {translations['no.districts'] || 'No districts available for this state'}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subdistrict">{translations['sub.district'] || 'Sub-District'}</Label>
            <Select 
              value={subDistrict} 
              onValueChange={setSubDistrict}
              disabled={!district}
            >
              <SelectTrigger>
                <SelectValue placeholder={translations['select.sub.district'] || 'Select sub-district'} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {subDistricts.map((subDist) => (
                  <SelectItem key={subDist.id} value={subDist.id}>
                    {subDist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {district && subDistricts.length === 0 && (
              <p className="text-sm text-red-500">
                {translations['no.subdistricts'] || 'No sub-districts available for this district'}
              </p>
            )}
          </div>
        </div>
      </div>
      
      <Button
        onClick={handleContinue}
        className="mt-6 w-full bg-primary hover:bg-primary/90"
      >
        {translations['continue'] || 'Get Started'}
      </Button>
    </div>
  );
};

export default Location;
