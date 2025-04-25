
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Simple validation
      if (!name || !email || !phone || !password) {
        toast.error('Please fill all fields');
        return;
      }
      
      // Phone validation (Indian format)
      if (!/^[6-9]\d{9}$/.test(phone)) {
        toast.error('Please enter a valid 10-digit mobile number');
        return;
      }
      
      // Password validation
      if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
      }
      
      // Simulate OTP send
      toast.success('OTP sent to your mobile number');
      setStep(2);
    } else {
      // Validate OTP
      if (otp.length !== 4) {
        toast.error('Please enter a valid 4-digit OTP');
        return;
      }
      
      // For demo purpose - simulate successful signup
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/language');
    }
  };

  return (
    <div className="h-screen bg-secondary p-6 flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-primary mb-2">Namma Hangal</h1>
        <p className="text-muted-foreground">Create your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Mobile Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Enter your 10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password (min 6 characters)"
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
          </>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP sent to {phone}</Label>
            <Input 
              id="otp" 
              type="text" 
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
              maxLength={4}
              className="text-center text-xl letter-spacing-4"
            />
            <div className="text-right mt-2">
              <Button 
                type="button" 
                variant="link" 
                className="p-0 text-primary"
              >
                Resend OTP
              </Button>
            </div>
          </div>
        )}
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          {step === 1 ? 'Continue' : 'Verify & Sign Up'}
        </Button>
      </form>
      
      <div className="text-center mt-6">
        <Button 
          variant="link" 
          onClick={() => navigate('/login')}
          className="text-primary"
        >
          Already have an account? Log In
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
