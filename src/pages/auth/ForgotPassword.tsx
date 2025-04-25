
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Display success message
    toast.success('Password reset instructions sent to your email');
    setIsSent(true);
  };

  return (
    <div className="h-screen bg-secondary p-6 flex flex-col">
      <div className="mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/login')}
          className="p-0"
        >
          <ArrowLeft size={20} />
        </Button>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-primary mb-2">Forgot Password</h1>
        <p className="text-muted-foreground">Enter your email to reset your password</p>
      </div>
      
      {!isSent ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Send Reset Link
          </Button>
        </form>
      ) : (
        <div className="text-center">
          <div className="mb-6">
            <div className="h-16 w-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
              ✓
            </div>
          </div>
          <p className="mb-6">Check your email for a link to reset your password.</p>
          <Button 
            onClick={() => navigate('/login')}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Back to Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
