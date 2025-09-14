import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, Pill, SortAsc } from "lucide-react";

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample medicine data
  const medicines = [
    {
      id: "1",
      name: "Acetaminophen 500mg",
      description: "Pain reliever and fever reducer for headaches, muscle aches, and minor pain relief.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Pain Relief",
      inStock: true,
      prescription: false
    },
    {
      id: "2", 
      name: "Amoxicillin 250mg",
      description: "Antibiotic used to treat bacterial infections including pneumonia and ear infections.",
      price: 24.50,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Antibiotics",
      inStock: true,
      prescription: true
    },
    {
      id: "3",
      name: "Vitamin D3 1000 IU",
      description: "Essential vitamin supplement for bone health and immune system support.",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8917?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Vitamins",
      inStock: true,
      prescription: false
    },
    {
      id: "4",
      name: "Lisinopril 10mg",
      description: "ACE inhibitor used to treat high blood pressure and heart failure.",
      price: 18.75,
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Heart Health",
      inStock: false,
      prescription: true
    },
    {
      id: "5",
      name: "Ibuprofen 400mg",
      description: "Anti-inflammatory pain reliever for headaches, dental pain, and muscle soreness.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Pain Relief", 
      inStock: true,
      prescription: false
    },
    {
      id: "6",
      name: "Omeprazole 20mg",
      description: "Proton pump inhibitor for treating acid reflux and gastroesophageal reflux disease.",
      price: 22.30,
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Digestive Health",
      inStock: true,
      prescription: false
    },
    {
      id: "7",
      name: "Metformin 500mg",
      description: "Medication used to treat type 2 diabetes by controlling blood sugar levels.",
      price: 14.85,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Diabetes Care",
      inStock: true,
      prescription: true
    },
    {
      id: "8", 
      name: "Cetirizine 10mg",
      description: "Antihistamine for treating allergies, hay fever, and itchy skin conditions.",
      price: 11.40,
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8917?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Allergy Relief",
      inStock: true,
      prescription: false
    }
  ];

  const categories = [
    "all",
    "Pain Relief",
    "Antibiotics", 
    "Vitamins",
    "Heart Health",
    "Digestive Health",
    "Diabetes Care",
    "Allergy Relief"
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Medicines & Supplements
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our comprehensive selection of prescription medications, 
            over-the-counter medicines, and health supplements.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-medical pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "btn-hero" : ""}
                  >
                    {category === "all" ? "All" : category}
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
              {filteredMedicines.length} results found
            </Badge>
            {selectedCategory !== "all" && (
              <Badge variant="secondary">
                {selectedCategory}
              </Badge>
            )}
          </div>
          <Button variant="outline" size="sm" className="btn-ghost-medical">
            <SortAsc className="w-4 h-4 mr-2" />
            Sort by Price
          </Button>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredMedicines.map((medicine) => (
            <ProductCard
              key={medicine.id}
              {...medicine}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredMedicines.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No medicines found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}

        {/* Important Notice */}
        <div className="mt-16 bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-warning rounded-lg flex items-center justify-center flex-shrink-0">
              <Pill className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Important Medication Notice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prescription medications require a valid prescription from a licensed healthcare provider. 
                Please consult with your doctor before starting any new medication. This platform provides 
                information only and does not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicines;