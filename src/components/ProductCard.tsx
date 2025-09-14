import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart, Star, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  inStock: boolean;
  prescription?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  rating,
  category,
  inStock,
  prescription = false
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${name} added to your cart`,
    });
  };

  const increaseQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <Card className="card-medical group overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 bg-accent/30 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {prescription && (
          <Badge className="absolute top-3 right-3 bg-emergency text-white">
            Prescription Required
          </Badge>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-1">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="text-sm text-muted-foreground">{rating}</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Pill className="w-4 h-4 text-secondary" />
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        {inStock && (
          <div className="flex items-center space-x-3">
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="p-2 h-8 w-8"
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="px-3 text-sm font-medium">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={increaseQuantity}
                disabled={quantity >= 10}
                className="p-2 h-8 w-8"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <Button 
              onClick={handleAddToCart}
              className="btn-hero flex-1 text-sm py-2"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        )}

        {!inStock && (
          <Button disabled className="w-full">
            Out of Stock
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;