
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    // For demo purpose - simulate login
    localStorage.setItem('isLoggedIn', 'true');
    
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
    
    if (hasCompletedOnboarding === 'true') {
      navigate('/');
    } else {
      navigate('/language');
    }
  };

  return (
    <div className="h-screen bg-secondary p-6 flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-primary mb-2">Namma Hangal</h1>
        <p className="text-muted-foreground">Login to your account</p>
      </div>
      
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Username/Email</Label>
          <Input 
            id="email" 
            type="text" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Login
        </Button>
      </form>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="link" 
          onClick={() => navigate('/forgot-password')}
          className="text-primary p-0"
        >
          Forgot Password?
        </Button>
        <Button 
          variant="link" 
          onClick={() => navigate('/signup')}
          className="text-primary p-0"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
