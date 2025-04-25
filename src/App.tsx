
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

// Auth Pages
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";

// Onboarding Pages
import Language from "./pages/onboarding/Language";
import Location from "./pages/onboarding/Location";

// Main App Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import ProductDetails from "./pages/ProductDetails";
import News from "./pages/News";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  
  // Check if user has completed onboarding
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem("hasCompletedOnboarding");
    if (hasCompletedOnboarding === "true") {
      setIsFirstLaunch(false);
    }
  }, []);

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="max-w-md mx-auto h-screen">
              <Routes>
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
                {/* Onboarding Routes */}
                <Route path="/language" element={<Language />} />
                <Route path="/location" element={<Location />} />
                
                {/* Main App Routes */}
                <Route path="/" element={isFirstLaunch ? <Language /> : <Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/news" element={<News />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<Services />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default App;
