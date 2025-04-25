
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Cart = () => {
  const navigate = useNavigate();
  
  // Mock cart data
  const [cartItems, setCartItems] = React.useState([
    { 
      id: '1', 
      name: 'Fresh Tomatoes', 
      price: 40, 
      quantity: 2, 
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww'
    },
    { 
      id: '2', 
      name: 'Rice (Premium)', 
      price: 60, 
      quantity: 1, 
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D'
    },
  ]);
  
  // Update quantity
  const updateQuantity = (id: string, action: 'add' | 'subtract') => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          if (action === 'add') {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item, quantity: Math.max(1, item.quantity - 1) };
          }
        }
        return item;
      })
    );
  };
  
  // Remove item
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };
  
  // Calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };
  
  // Handle checkout
  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    setCartItems([]);
    navigate('/');
  };

  return (
    <MobileLayout title="My Cart">
      <div className="p-4 pb-32">
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-3">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-md overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-primary font-bold mt-1">₹{item.price}/{item.unit}</p>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border border-border rounded-md">
                            <button 
                              className="p-1 px-2"
                              onClick={() => updateQuantity(item.id, 'subtract')}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button 
                              className="p-1 px-2"
                              onClick={() => updateQuantity(item.id, 'add')}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button 
                            className="text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-background border-t border-border fixed bottom-16 left-0 right-0 max-w-md mx-auto">
              <div className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹30</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{calculateTotal() + 30}</span>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="font-bold text-lg mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6 text-center">Add items to your cart from the product listings</p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary/90"
            >
              Browse Products
            </Button>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default Cart;
