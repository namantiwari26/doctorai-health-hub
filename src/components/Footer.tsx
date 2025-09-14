import { Link } from "react-router-dom";
import { Stethoscope, Mail, Phone, MapPin, Shield, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">DoctorAI</h1>
                <p className="text-xs text-white/80">Health Assistant</p>
              </div>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Your trusted AI-powered health companion. Get instant symptom analysis, 
              find qualified doctors, and access medicines - all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/symptoms" className="text-white/80 hover:text-white transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/medicines" className="text-white/80 hover:text-white transition-colors">
                  Medicines
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-white/80 hover:text-white transition-colors">
                  Find Doctors
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about#privacy" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/about#terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80">support@doctorai.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80">1-800-DOCTOR</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} DoctorAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/60 text-xs flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Not a substitute for professional medical advice</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;