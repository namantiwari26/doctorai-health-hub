import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope,
  Shield,
  Award,
  Users,
  Heart,
  Mail,
  Phone,
  MapPin,
  FileText,
  Lock,
  AlertTriangle
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Jennifer Adams",
      role: "Chief Medical Officer", 
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      credentials: "MD, Internal Medicine"
    },
    {
      name: "Alex Thompson",
      role: "AI Research Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      credentials: "PhD, Machine Learning"
    },
    {
      name: "Sarah Kim",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face",
      credentials: "MS, Healthcare Technology"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make prioritizes patient safety, privacy, and well-being."
    },
    {
      icon: Shield,
      title: "Trust & Transparency", 
      description: "We maintain the highest standards of data security and transparent communication."
    },
    {
      icon: Award,
      title: "Medical Excellence",
      description: "Our platform is built with medical professionals and follows clinical guidelines."
    },
    {
      icon: Users,
      title: "Accessible Healthcare",
      description: "Making quality healthcare guidance available to everyone, everywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">About DoctorAI</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing healthcare through AI-powered symptom analysis, 
            connecting patients with qualified doctors, and providing access 
            to essential medications.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                DoctorAI was founded with a simple yet ambitious goal: to make healthcare 
                more accessible, efficient, and personalized through the power of artificial 
                intelligence. We believe that everyone deserves timely access to quality 
                healthcare guidance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform combines cutting-edge AI technology with medical expertise 
                to provide instant symptom analysis, connect patients with qualified 
                healthcare professionals, and ensure access to essential medications.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-medical p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Patients Helped</div>
              </Card>
              <Card className="card-medical p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2K+</div>
                <div className="text-sm text-muted-foreground">Healthcare Partners</div>
              </Card>
              <Card className="card-medical p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </Card>
              <Card className="card-medical p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do in healthcare innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-gradient p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Medical experts and technology leaders working together to transform healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-medical text-center overflow-hidden">
                <div className="h-48 bg-gradient-hero"></div>
                <div className="relative px-6 pb-6">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-medical object-cover"
                    />
                  </div>
                  <div className="pt-16">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.credentials}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our platform or need support? We're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Support</h4>
                    <p className="text-muted-foreground">support@doctorai.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone Support</h4>
                    <p className="text-muted-foreground">1-800-DOCTOR (24/7)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Headquarters</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Info */}
            <div className="space-y-8">
              <Card className="card-medical p-6">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <h3 id="privacy" className="text-lg font-semibold text-foreground mb-3">
                      Privacy Policy
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      We take your privacy seriously. All health data is encrypted with 
                      256-bit SSL encryption and stored securely. We never share your 
                      personal information without explicit consent.
                    </p>
                    <Button variant="outline" size="sm">
                      Read Full Privacy Policy
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="card-medical p-6">
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-secondary mt-0.5" />
                  <div>
                    <h3 id="terms" className="text-lg font-semibold text-foreground mb-3">
                      Terms of Service
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      By using DoctorAI, you agree to our terms of service. Please read 
                      them carefully to understand your rights and responsibilities.
                    </p>
                    <Button variant="outline" size="sm">
                      View Terms of Service
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="card-medical p-6 border-l-4 border-l-warning">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-warning mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Medical Disclaimer
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      DoctorAI provides health information and AI-powered symptom analysis 
                      for educational purposes only. This is not a substitute for professional 
                      medical advice, diagnosis, or treatment. Always seek the advice of 
                      qualified healthcare providers.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;