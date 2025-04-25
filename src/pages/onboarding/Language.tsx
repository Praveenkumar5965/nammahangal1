
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Language = () => {
  const navigate = useNavigate();
  const { currentLanguage, setLanguage, translations } = useLanguage();
  
  const languages = [
    { id: 'kannada', name: 'ಕನ್ನಡ', label: 'Kannada' },
    { id: 'english', name: 'English', label: 'English' },
    { id: 'hindi', name: 'हिंदी', label: 'Hindi' },
  ];

  const handleContinue = () => {
    localStorage.setItem('language', currentLanguage.id);
    navigate('/location');
  };

  return (
    <div className="h-screen bg-secondary p-6 flex flex-col">
      <div className="flex-grow flex flex-col justify-center">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-primary mb-2">
            {translations['choose.language']}
          </h1>
          <p className="text-muted-foreground">
            {translations['select.preferred']}
          </p>
        </div>
        
        <div className="space-y-4">
          {languages.map((language) => (
            <button
              key={language.id}
              className={`w-full p-4 rounded-lg border-2 flex items-center justify-between
                ${currentLanguage.id === language.id 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border bg-background'
                }`
              }
              onClick={() => setLanguage(language)}
            >
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">{language.name}</span>
                <span className="text-sm text-muted-foreground">{language.label}</span>
              </div>
              {currentLanguage.id === language.id && (
                <Check className="text-primary" size={20} />
              )}
            </button>
          ))}
        </div>
      </div>
      
      <Button
        onClick={handleContinue}
        className="mt-6 w-full bg-primary hover:bg-primary/90"
      >
        {translations['continue']}
      </Button>
    </div>
  );
};

export default Language;
