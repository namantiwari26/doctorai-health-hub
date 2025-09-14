import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Image as ImageIcon,
  AlertTriangle
} from "lucide-react";

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  image?: string;
}

interface ChatBoxProps {
  onSymptomAnalysis?: (symptoms: string[]) => void;
}

const ChatBox = ({ onSymptomAnalysis }: ChatBoxProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI health assistant. Please describe your symptoms, and I'll help you understand what might be causing them. Remember, this is not a substitute for professional medical advice.",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    }
  };

  const simulateAIResponse = (userMessage: string): string => {
    const symptoms = userMessage.toLowerCase();
    
    if (symptoms.includes('fever') || symptoms.includes('temperature')) {
      return "Based on your fever symptoms, this could indicate an infection. I recommend monitoring your temperature and staying hydrated. If fever exceeds 101°F (38.3°C) or persists for more than 3 days, please consult a healthcare provider immediately.";
    } else if (symptoms.includes('headache') || symptoms.includes('head')) {
      return "Headaches can have various causes including stress, dehydration, or tension. Try resting in a quiet, dark room and staying hydrated. If you experience severe headaches with vision changes, neck stiffness, or confusion, seek immediate medical attention.";
    } else if (symptoms.includes('cough') || symptoms.includes('throat')) {
      return "A cough or sore throat could indicate a respiratory infection. Try warm liquids, throat lozenges, and rest. If symptoms worsen, include fever, or persist beyond a week, consider seeing a healthcare provider.";
    } else if (symptoms.includes('stomach') || symptoms.includes('nausea')) {
      return "Stomach issues and nausea can result from various causes. Stay hydrated with small sips of clear fluids. If you experience severe abdominal pain, persistent vomiting, or signs of dehydration, consult a healthcare provider.";
    }
    
    return "Thank you for sharing your symptoms. Based on your description, I recommend monitoring your condition closely. If symptoms worsen or you're concerned, please consult with a qualified healthcare provider for proper diagnosis and treatment.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() && !selectedImage) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      image: selectedImage ? URL.createObjectURL(selectedImage) : undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: simulateAIResponse(inputMessage),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);

      // Extract symptoms for analysis (simplified)
      if (onSymptomAnalysis) {
        const symptoms = inputMessage.toLowerCase().split(' ').filter(word => 
          ['fever', 'headache', 'cough', 'nausea', 'pain'].some(symptom => 
            word.includes(symptom)
          )
        );
        onSymptomAnalysis(symptoms);
      }
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="card-medical flex flex-col h-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">AI Health Assistant</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <AlertTriangle className="w-4 h-4 mr-1" />
          Not medical advice
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${
              message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-primary' 
                  : 'bg-gradient-primary'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`${
                message.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'
              }`}>
                {message.image && (
                  <img 
                    src={message.image} 
                    alt="Uploaded"
                    className="w-full rounded-lg mb-2 max-w-[200px]"
                  />
                )}
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-white/70' : 'text-muted-foreground'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="chat-bubble-ai">
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Analyzing symptoms...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        {selectedImage && (
          <div className="mb-3 p-2 border border-border rounded-lg bg-accent/30">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{selectedImage.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedImage(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="p-1 h-6 w-6 ml-auto"
              >
                ×
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex items-end space-x-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="p-2"
          >
            <ImageIcon className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe your symptoms..."
              className="input-medical"
              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={(!inputMessage.trim() && !selectedImage) || isLoading}
            className="btn-hero p-2"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatBox;