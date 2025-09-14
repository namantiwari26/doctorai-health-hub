import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Calendar,
  User,
  GraduationCap,
  Award
} from "lucide-react";

interface DoctorCardProps {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  reviews: number;
  image: string;
  location: string;
  priceRange: string;
  availability: string;
  languages: string[];
  qualifications: string[];
  isVerified: boolean;
}

const DoctorCard = ({
  id,
  name,
  specialization,
  experience,
  rating,
  reviews,
  image,
  location,
  priceRange,
  availability,
  languages,
  qualifications,
  isVerified
}: DoctorCardProps) => {
  
  const handleBookNow = () => {
    // In a real app, this would navigate to booking page
    console.log("Booking doctor:", id);
  };

  return (
    <Card className="card-medical group overflow-hidden">
      {/* Header with Image */}
      <div className="relative">
        <div className="h-32 bg-gradient-hero"></div>
        <div className="absolute -bottom-8 left-4 right-4">
          <div className="flex items-end space-x-4">
            <div className="relative">
              <img 
                src={image} 
                alt={`Dr. ${name}`}
                className="w-16 h-16 rounded-full border-4 border-white shadow-medical object-cover"
              />
              {isVerified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-safety rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="font-medium">{rating}</span>
                <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 p-4 space-y-4">
        {/* Doctor Info */}
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            Dr. {name}
          </h3>
          <p className="text-secondary font-medium">{specialization}</p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
            <div className="flex items-center space-x-1">
              <GraduationCap className="w-4 h-4" />
              <span>{experience} years exp.</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="flex flex-wrap gap-1">
          {qualifications.slice(0, 2).map((qual, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {qual}
            </Badge>
          ))}
          {qualifications.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{qualifications.length - 2} more
            </Badge>
          )}
        </div>

        {/* Languages */}
        <div>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Languages:</span> {languages.join(", ")}
          </p>
        </div>

        {/* Availability & Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-safety">
              <Clock className="w-4 h-4" />
              <span>{availability}</span>
            </div>
            <span className="font-semibold text-primary">{priceRange}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          <Button variant="outline" className="flex-1" size="sm">
            View Profile
          </Button>
          <Button 
            onClick={handleBookNow}
            className="btn-hero flex-1"
            size="sm"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;