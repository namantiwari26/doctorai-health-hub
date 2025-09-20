import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ChatBox from "@/components/ChatBox";
import { 
  Brain, 
  AlertTriangle, 
  Activity,
  Clock,
  Shield,
  TrendingUp
} from "lucide-react";

const Symptoms = () => {
  const [analyzedSymptoms, setAnalyzedSymptoms] = useState<string[]>([]);

  const handleSymptomAnalysis = (symptoms: string[]) => {
    setAnalyzedSymptoms(symptoms);
  };

  const urgencyLevels = [
    {
      level: "Low",
      color: "bg-safety",
      description: "Monitor symptoms and consider routine care",
      icon: Activity
    },
    {
      level: "Medium", 
      color: "bg-warning",
      description: "Schedule appointment within 1-2 days",
      icon: Clock
    },
    {
      level: "High",
      color: "bg-emergency", 
      description: "Seek medical attention within 24 hours",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              AI Symptom Checker
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Describe your symptoms and get AI-powered insights. Remember, this tool 
            provides information only and is not a substitute for professional medical diagnosis.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2 animate-slide-up">
            <ChatBox onSymptomAnalysis={handleSymptomAnalysis} />
          </div>

          {/* Analysis Panel */}
          <div className="space-y-6 animate-slide-up">
            
            {/* Urgency Guide */}
            <Card className="card-medical p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Urgency Levels</h3>
              </div>
              <div className="space-y-3">
                {urgencyLevels.map((level, index) => {
                  const Icon = level.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 ${level.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{level.level} Priority</div>
                        <div className="text-sm text-muted-foreground">{level.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Analyzed Symptoms */}
            {analyzedSymptoms.length > 0 && (
              <Card className="card-medical p-6 animate-scale-in">
                <div className="flex items-center space-x-3 mb-4">
                  <Activity className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-semibold text-foreground">Detected Symptoms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {analyzedSymptoms.map((symptom, index) => (
                    <Badge key={index} variant="outline" className="capitalize">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            {/* Important Notice */}
            <Card className="card-medical p-6 border-l-4 border-l-warning">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This AI tool provides educational information and should not replace 
                    professional medical advice, diagnosis, or treatment. Always consult 
                    with qualified healthcare providers for medical concerns.
                  </p>
                </div>
              </div>
            </Card>

            {/* Emergency Notice */}
            <Card className="card-medical p-6 bg-emergency/5 border-l-4 border-l-emergency">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-emergency mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emergency mb-2">Emergency Symptoms</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you're experiencing chest pain, difficulty breathing, severe bleeding, 
                    loss of consciousness, or other emergency symptoms, call 112 immediately.
                  </p>
                </div>
              </div>
            </Card>

          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="card-medical p-6 text-center group hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Medical AI</h3>
            <p className="text-sm text-muted-foreground">
              Powered by advanced machine learning algorithms trained on medical knowledge
            </p>
          </Card>

          <Card className="card-medical p-6 text-center group hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Privacy First</h3>
            <p className="text-sm text-muted-foreground">
              Your health data is encrypted and secure, following strict privacy standards
            </p>
          </Card>

          <Card className="card-medical p-6 text-center group hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground">
              Our AI continuously improves with the latest medical research and data
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;