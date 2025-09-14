import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DoctorCard from "@/components/DoctorCard";
import { Search, Filter, User, MapPin, Star } from "lucide-react";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Sample doctor data
  const doctors = [
    {
      id: "1",
      name: "Sarah Johnson",
      specialization: "Cardiologist",
      experience: 12,
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      location: "New York, NY",
      priceRange: "$200-300",
      availability: "Available today",
      languages: ["English", "Spanish"],
      qualifications: ["MD", "FACC", "Board Certified"],
      isVerified: true
    },
    {
      id: "2",
      name: "Michael Chen",
      specialization: "Dermatologist", 
      experience: 8,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      location: "Los Angeles, CA",
      priceRange: "$150-250",
      availability: "Next available: Tomorrow",
      languages: ["English", "Mandarin"],
      qualifications: ["MD", "Dermatology Board Certified"],
      isVerified: true
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      specialization: "Pediatrician",
      experience: 15,
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1594824475037-aa4c8e0e2b24?w=400&h=400&fit=crop&crop=face",
      location: "Chicago, IL",
      priceRange: "$120-200",
      availability: "Available today", 
      languages: ["English", "Spanish", "Portuguese"],
      qualifications: ["MD", "AAP Board Certified", "Pediatric Emergency Medicine"],
      isVerified: true
    },
    {
      id: "4",
      name: "David Thompson", 
      specialization: "Orthopedic Surgeon",
      experience: 20,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      location: "Houston, TX", 
      priceRange: "$300-500",
      availability: "Next available: 3 days",
      languages: ["English"],
      qualifications: ["MD", "Orthopedic Surgery Board Certified", "Fellowship Trained"],
      isVerified: true
    },
    {
      id: "5",
      name: "Lisa Park",
      specialization: "Family Medicine",
      experience: 6,
      rating: 4.6,
      reviews: 74,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face",
      location: "Seattle, WA",
      priceRange: "$100-180",
      availability: "Available today",
      languages: ["English", "Korean"],
      qualifications: ["MD", "Family Medicine Board Certified"],
      isVerified: false
    },
    {
      id: "6", 
      name: "James Wilson",
      specialization: "Neurologist",
      experience: 18,
      rating: 4.8,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      location: "Boston, MA",
      priceRange: "$250-400",
      availability: "Next available: Tomorrow",
      languages: ["English", "French"],
      qualifications: ["MD", "PhD", "Neurology Board Certified", "Epilepsy Specialist"],
      isVerified: true
    }
  ];

  const specialties = [
    "all",
    "Cardiologist",
    "Dermatologist", 
    "Pediatrician",
    "Orthopedic Surgeon",
    "Family Medicine",
    "Neurologist"
  ];

  const locations = [
    "all",
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL", 
    "Houston, TX",
    "Seattle, WA",
    "Boston, MA"
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialization === selectedSpecialty;
    const matchesLocation = selectedLocation === "all" || doctor.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Find Doctors
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with qualified healthcare professionals. Browse verified doctors by 
            specialty, location, and availability for your medical needs.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4 animate-slide-up">
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-medical pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            
            {/* Specialty Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Specialty:</span>
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 4).map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={selectedSpecialty === specialty ? "btn-hero" : ""}
                  >
                    {specialty === "all" ? "All Specialties" : specialty}
                  </Button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Location:</span>
              <div className="flex flex-wrap gap-2">
                {locations.slice(0, 4).map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location)}
                    className={selectedLocation === location ? "btn-hero" : ""}
                  >
                    {location === "all" ? "All Locations" : location.split(",")[0]}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="text-sm">
              {filteredDoctors.length} doctors found
            </Badge>
            {selectedSpecialty !== "all" && (
              <Badge variant="secondary">
                {selectedSpecialty}
              </Badge>
            )}
            {selectedLocation !== "all" && (
              <Badge variant="secondary">
                {selectedLocation.split(",")[0]}
              </Badge>
            )}
          </div>
          <Button variant="outline" size="sm" className="btn-ghost-medical">
            <Star className="w-4 h-4 mr-2" />
            Sort by Rating
          </Button>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              {...doctor}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No doctors found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria to find healthcare providers in your area.
            </p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-medical p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Verified Doctors</div>
          </div>
          <div className="card-medical p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Medical Specialties</div>
          </div>
          <div className="card-medical p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;