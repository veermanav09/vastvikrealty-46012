import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, Phone, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const projects = [
    "Element - Villas",
    "High Rise Apartments", 
    "Upcoming Projects",
    "Request a call"
  ];

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="w-16 h-16 rounded-full bg-gradient-primary shadow-2xl hover:scale-110 transition-all duration-300 glow-effect"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] z-50">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden card-shadow">
            {/* Header */}
            <div className="bg-gradient-primary p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="font-heading font-bold text-lg">V</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Vastvik Realty</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">We are online to assist you</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Project Image */}
            <div className="p-6 pb-0">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Vastvik Project" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <Badge className="bg-primary mb-2">New Launch</Badge>
                  <p className="font-bold text-sm">Premium Residences Now Available</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-0">
              {/* Project Info */}
              <div className="mb-4">
                <div className="flex items-center text-primary mb-2">
                  <span className="text-lg">♦</span>
                  <span className="ml-2 font-semibold">ELEMENT is now open with Model Apartments & Experience Center ready to explore!</span>
                </div>
                <div className="flex items-center text-secondary mb-4">
                  <span className="text-lg">♦</span>
                  <span className="ml-2">Please call to <span className="text-primary font-bold">8884545404</span> now to Book a Site Visit</span>
                </div>
              </div>

              {/* Project Selection */}
              <div className="mb-6">
                <p className="font-semibold text-secondary mb-3">Which project are you interested in?</p>
                <div className="grid grid-cols-2 gap-2">
                  {projects.map((project) => (
                    <Button
                      key={project}
                      variant={selectedProject === project ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleProjectSelect(project)}
                      className={`text-sm py-3 ${
                        selectedProject === project 
                          ? "bg-gradient-primary" 
                          : "border-primary/30 text-secondary hover:bg-primary/10"
                      }`}
                    >
                      {project}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <User className="w-4 h-4 mr-2" />
                  Site Visit
                </Button>
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 border-primary/30 focus:border-primary rounded-full"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-primary rounded-full w-10 h-10 p-0"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Powered by */}
              <div className="text-center mt-4">
                <p className="text-xs text-muted-foreground">
                  ⚡ Powered by <span className="text-primary font-semibold">Vastvik AI</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;