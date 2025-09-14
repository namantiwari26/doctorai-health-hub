import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  Truck,
  Shield,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  type: "medicine" | "appointment";
  price: number;
  quantity: number;
  image: string;
  description?: string;
  prescription?: boolean;
}

const Cart = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Acetaminophen 500mg",
      type: "medicine",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop",
      description: "Pain reliever and fever reducer",
      prescription: false
    },
    {
      id: "2",
      name: "Dr. Sarah Johnson - Cardiology Consultation",
      type: "appointment",
      price: 250.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      description: "45-minute consultation session"
    },
    {
      id: "3",
      name: "Vitamin D3 1000 IU",
      type: "medicine",
      price: 16.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8917?w=100&h=100&fit=crop",
      description: "Essential vitamin supplement",
      prescription: false
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "Redirecting to secure payment...",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Your Cart
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Review your selected medicines and appointments before checkout
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 opacity-50">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">
              Start shopping for medicines or book a doctor appointment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Browse Medicines
              </Button>
              <Button className="btn-secondary-medical">
                Find Doctors
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 animate-slide-up">
              {cartItems.map((item) => (
                <Card key={item.id} className="card-medical p-4">
                  <div className="flex items-start space-x-4">
                    
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    {/* Item Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={item.type === "medicine" ? "secondary" : "outline"}>
                              {item.type === "medicine" ? "Medicine" : "Appointment"}
                            </Badge>
                            {item.prescription && (
                              <Badge variant="destructive" className="text-xs">
                                Prescription Required
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between">
                        {item.type === "medicine" ? (
                          <div className="flex items-center border border-border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 h-8 w-8"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 h-8 w-8"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </span>
                        )}
                        <div className="text-right">
                          <div className="font-semibold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-xs text-muted-foreground">
                              ${item.price.toFixed(2)} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6 animate-slide-up">
              
              {/* Summary Card */}
              <Card className="card-medical p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </Card>

              {/* Promo Code */}
              <Card className="card-medical p-6">
                <h4 className="font-semibold text-foreground mb-3">Promo Code</h4>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter promo code"
                    className="input-medical flex-1"
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </Card>

              {/* Delivery Info */}
              <Card className="card-medical p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Truck className="w-5 h-5 text-secondary" />
                  <h4 className="font-semibold text-foreground">Delivery Information</h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Estimated delivery: 2-3 business days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure packaging & handling</span>
                  </div>
                </div>
              </Card>

              {/* Checkout Button */}
              <Button 
                onClick={handleCheckout}
                className="btn-hero w-full text-lg py-6"
              >
                <CreditCard className="w-5 h-5 mr-3" />
                Proceed to Checkout
              </Button>

              {/* Security Notice */}
              <div className="text-center text-xs text-muted-foreground">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure 256-bit SSL encryption</span>
                </div>
                <p>Your payment information is protected</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;