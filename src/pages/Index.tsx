import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Search, 
  Pill, 
  User, 
  Shield, 
  Clock, 
  HeartHandshake,
  Stethoscope,
  Activity,
  Award
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "AI Symptom Checker",
      description: "Get instant analysis of your symptoms with our advanced AI technology.",
      link: "/symptoms"
    },
    {
      icon: User,
      title: "Find Doctors",
      description: "Connect with qualified healthcare professionals near you.",
      link: "/doctors"
    },
    {
      icon: Pill,
      title: "Order Medicines",
      description: "Browse and order prescription and over-the-counter medications.",
      link: "/medicines"
    }
  ];

  const stats = [
    { icon: HeartHandshake, number: "50K+", label: "Patients Helped" },
    { icon: User, number: "2K+", label: "Verified Doctors" },
    { icon: Award, number: "98%", label: "Accuracy Rate" },
    { icon: Clock, number: "24/7", label: "Available Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold">DoctorAI</h1>
                <p className="text-white/90 text-lg">Your Personal Health Assistant</p>
              </div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-white/95 max-w-3xl mx-auto leading-relaxed">
              Your first step towards better health
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get instant symptom analysis, find qualified doctors, and access medicines - 
              all powered by advanced AI technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Link to="/symptoms">
                <Button className="btn-hero text-lg px-8 py-4 shadow-hover">
                  <Search className="w-5 h-5 mr-3" />
                  Start Symptom Check
                </Button>
              </Link>
              <Link to="/doctors">
                <Button className="btn-secondary-medical text-lg px-8 py-4">
                  <User className="w-5 h-5 mr-3" />
                  Find Doctors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Solutions
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for your health journey, powered by AI and backed by medical experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-gradient p-8 text-center group hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:shadow-hover transition-all">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <Button className="btn-ghost-medical group-hover:bg-primary group-hover:text-white transition-all">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-safety" />
                <h3 className="text-3xl font-bold text-foreground">
                  Your Privacy & Safety First
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the importance of your health data. All information is encrypted, 
                secure, and never shared without your consent. Our AI provides guidance based 
                on medical knowledge but always recommends consulting healthcare professionals 
                for diagnosis and treatment.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-safety" />
                  <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-safety" />
                  <span className="text-sm text-muted-foreground">Encrypted Data</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-medical p-6 text-center">
                <Award className="w-8 h-8 text-warning mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Certified</h4>
                <p className="text-sm text-muted-foreground">Medical-grade AI</p>
              </Card>
              <Card className="card-medical p-6 text-center">
                <Shield className="w-8 h-8 text-safety mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Secure</h4>
                <p className="text-sm text-muted-foreground">256-bit encryption</p>
              </Card>
              <Card className="card-medical p-6 text-center">
                <User className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Verified</h4>
                <p className="text-sm text-muted-foreground">Licensed doctors</p>
              </Card>
              <Card className="card-medical p-6 text-center">
                <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Available</h4>
                <p className="text-sm text-muted-foreground">24/7 support</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust DoctorAI for their health needs. 
            Start your journey towards better health today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/symptoms">
              <Button className="btn-hero text-lg px-8 py-4">
                <Search className="w-5 h-5 mr-3" />
                Check Symptoms Now
              </Button>
            </Link>
            <Link to="/medicines">
              <Button className="btn-secondary-medical text-lg px-8 py-4">
                <Pill className="w-5 h-5 mr-3" />
                Browse Medicines
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;