
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = {
  id: string;
  name: string;
  label: string;
};

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
};

const languages: Language[] = [
  { id: 'kannada', name: 'ಕನ್ನಡ', label: 'Kannada' },
  { id: 'english', name: 'English', label: 'English' },
  { id: 'hindi', name: 'हिंदी', label: 'Hindi' },
];

// Expanded translations for more pages and features
const translationData: Record<string, Record<string, string>> = {
  kannada: {
    // Language page
    'choose.language': 'ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ',
    'select.preferred': 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ',
    'continue': 'ಮುಂದುವರಿಸಿ',
    
    // Location page
    'select.location': 'ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆರಿಸಿ',
    'choose.location.subtitle': 'ನಿಮ್ಮ ರಾಜ್ಯ, ಜಿಲ್ಲೆ ಮತ್ತು ಉಪ-ಜಿಲ್ಲೆಗಳನ್ನು ಆರಿಸಿ',
    'state': 'ರಾಜ್ಯ',
    'district': 'ಜಿಲ್ಲೆ',
    'sub.district': 'ಉಪ-ಜಿಲ್ಲೆ',
    'select.state': 'ರಾಜ್ಯವನ್ನು ಆರಿಸಿ',
    'select.district': 'ಜಿಲ್ಲೆಯನ್ನು ಆರಿಸಿ',
    'select.sub.district': 'ಉಪ-ಜಿಲ್ಲೆಯನ್ನು ಆರಿಸಿ',
    'select.all.locations': 'ದಯವಿಟ್ಟು ರಾಜ್ಯ, ಜಿಲ್ಲೆ ಮತ್ತು ಉಪ-ಜಿಲ್ಲೆ ಆಯ್ಕೆ ಮಾಡಿ',
    'no.districts': 'ಈ ರಾಜ್ಯಕ್ಕೆ ಯಾವುದೇ ಜಿಲ್ಲೆಗಳು ಲಭ್ಯವಿಲ್ಲ',
    'no.subdistricts': 'ಈ ಜಿಲ್ಲೆಗೆ ಯಾವುದೇ ಉಪ-ಜಿಲ್ಲೆಗಳು ಲಭ್ಯವಿಲ್ಲ',
    
    // Search related
    'search.placeholder': 'ಹುಡುಕಿ...',
    'search.suggestions': 'ಸಲಹೆಗಳು',
    'search.recent': 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳು',
    'no.results': 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
    
    // Home page
    'delivery.location': 'ವಿತರಣಾ ಸ್ಥಳ',
    'add.new.address': 'ಹೊಸ ವಿಳಾಸವನ್ನು ಸೇರಿಸಿ',
    'offers': 'ಆಫರ್‌ಗಳು',
    'top.deals': 'ಉತ್ತಮ ಡೀಲ್‌ಗಳು',
    'supermarket': 'ಸೂಪರ್‌ಮಾರ್ಕೆಟ್',
    'services': 'ಸೇವೆಗಳು',
    'shopping': 'ಶಾಪಿಂಗ್',
    'view.all': 'ಎಲ್ಲವನ್ನು ನೋಡಿ',
    'local.news': 'ಸ್ಥಳೀಯ ಸುದ್ದಿ',
    'more.news': 'ಇನ್ನಷ್ಟು ಸುದ್ದಿಗಳು',
    
    // Categories
    'groceries': 'ದಿನಸಿ ಸಾಮಗ್ರಿಗಳು',
    'vegetables': 'ತರಕಾರಿಗಳು',
    'fruits': 'ಹಣ್ಣುಗಳು',
    'electronics': 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್',
    'fashion': 'ಫ್ಯಾಷನ್',
    
    // Services
    'cab': 'ಕ್ಯಾಬ್',
    'food': 'ಆಹಾರ',
    'electrician': 'ವಿದ್ಯುತ್ ತಂತ್ರಿ',
    'doctor': 'ವೈದ್ಯ',
    'mechanic': 'ಮೆಕ್ಯಾನಿಕ್',
    
    // Address
    'your.location': 'ನಿಮ್ಮ ಸ್ಥಳ',
    'sponsored': 'ಪ್ರಾಯೋಜಿತ ಜಾಹೀರಾತು'
  },
  english: {
    // Language page
    'choose.language': 'Choose Language',
    'select.preferred': 'Select your preferred language',
    'continue': 'Continue',
    
    // Location page
    'select.location': 'Select Your Location',
    'choose.location.subtitle': 'Choose your state, district and sub-district',
    'state': 'State',
    'district': 'District',
    'sub.district': 'Sub-District',
    'select.state': 'Select state',
    'select.district': 'Select district',
    'select.sub.district': 'Select sub-district',
    'select.all.locations': 'Please select state, district and sub-district',
    'no.districts': 'No districts available for this state',
    'no.subdistricts': 'No sub-districts available for this district',
    
    // Search related
    'search.placeholder': 'Search for products...',
    'search.suggestions': 'Suggestions',
    'search.recent': 'Recent Searches',
    'no.results': 'No results found',
    
    // Home page
    'delivery.location': 'Delivery Location',
    'add.new.address': 'Add New Address',
    'offers': 'Offers',
    'top.deals': 'Top Deals',
    'supermarket': 'Supermarket',
    'services': 'Services',
    'shopping': 'Shopping',
    'view.all': 'View All',
    'local.news': 'Local News',
    'more.news': 'More News',
    
    // Categories
    'groceries': 'Groceries',
    'vegetables': 'Vegetables',
    'fruits': 'Fruits',
    'electronics': 'Electronics',
    'fashion': 'Fashion',
    
    // Services
    'cab': 'Cab',
    'food': 'Food',
    'electrician': 'Electrician',
    'doctor': 'Doctor',
    'mechanic': 'Mechanic',
    
    // Address
    'your.location': 'Your Location',
    'sponsored': 'Sponsored Advertisement'
  },
  hindi: {
    // Language page
    'choose.language': 'भाषा चुनें',
    'select.preferred': 'अपनी पसंदीदा भाषा चुनें',
    'continue': 'जारी रखें',
    
    // Location page
    'select.location': 'अपना स्थान चुनें',
    'choose.location.subtitle': 'अपना राज्य, जिला और उप-जिला चुनें',
    'state': 'राज्य',
    'district': 'जिला',
    'sub.district': 'उप-जिला',
    'select.state': 'राज्य चुनें',
    'select.district': 'जिला चुनें',
    'select.sub.district': 'उप-जिला चुनें',
    'select.all.locations': 'कृपया राज्य, जिला और उप-जिला चुनें',
    'no.districts': 'इस राज्य के लिए कोई जिला उपलब्ध नहीं है',
    'no.subdistricts': 'इस जिले के लिए कोई उप-जिला उपलब्ध नहीं है',
    
    // Search related
    'search.placeholder': 'उत्पादों के लिए खोजें...',
    'search.suggestions': 'सुझाव',
    'search.recent': 'हाल की खोजें',
    'no.results': 'कोई परिणाम नहीं मिला',
    
    // Home page
    'delivery.location': 'डिलीवरी स्थान',
    'add.new.address': 'नया पता जोड़ें',
    'offers': 'ऑफर',
    'top.deals': 'टॉप डील्स',
    'supermarket': 'सुपरमार्केट',
    'services': 'सेवाएं',
    'shopping': 'शॉपिंग',
    'view.all': 'सभी देखें',
    'local.news': 'स्थानीय समाचार',
    'more.news': 'अधिक समाचार',
    
    // Categories
    'groceries': 'किराना सामान',
    'vegetables': 'सब्जियां',
    'fruits': 'फल',
    'electronics': 'इलेक्ट्रॉनिक्स',
    'fashion': 'फैशन',
    
    // Services
    'cab': 'कैब',
    'food': 'खाना',
    'electrician': 'इलेक्ट्रीशियन',
    'doctor': 'डॉक्टर',
    'mechanic': 'मैकेनिक',
    
    // Address
    'your.location': 'आपका स्थान',
    'sponsored': 'प्रायोजित विज्ञापन'
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Fixed: Using React's useState hook properly
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('language');
      return languages.find(lang => lang.id === savedLang) || languages[1]; // Default to English
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return languages[1]; // Default to English
    }
  });

  const setLanguage = (lang: Language) => {
    try {
      setCurrentLanguage(lang);
      localStorage.setItem('language', lang.id);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translations: translationData[currentLanguage.id] || translationData.english,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
