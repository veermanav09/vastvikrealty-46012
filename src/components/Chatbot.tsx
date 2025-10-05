import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, Phone, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    { role: "assistant", content: "Hello! I'm Vastvik AI assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const projects = [
    "Element - Villas",
    "High Rise Apartments",
    "Upcoming Projects",
    "Request a call"
  ];

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
    setMessages(prev => [...prev, 
      { role: "user", content: `I'm interested in ${project}` },
      { role: "assistant", content: `Great! I'd be happy to tell you more about ${project}. What would you like to know?` }
    ]);
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = message;
      setMessage("");
      setMessages(prev => [...prev, { role: "user", content: userMessage }]);
      setIsLoading(true);

      try {
        const { data, error } = await supabase.functions.invoke('chat', {
          body: { message: userMessage, selectedProject }
        });

        if (error) throw error;

        setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
      } catch (error) {
        console.error('Error sending message:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
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

            {/* Chat Messages */}
            <div className="p-6 pt-0 max-h-64 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-accent/50 text-foreground'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-accent/50 text-foreground p-3 rounded-2xl">
                    <p className="text-sm">Typing...</p>
                  </div>
                </div>
              )}
            </div>


            <div className="p-6 pt-0">
              {/* Project Selection */}
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-3 text-sm">Which project are you interested in?</p>
                <div className="grid grid-cols-2 gap-2">
                  {projects.map((project) => (
                    <Button
                      key={project}
                      variant={selectedProject === project ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleProjectSelect(project)}
                      className={`text-xs py-2 ${
                        selectedProject === project 
                          ? "bg-gradient-primary" 
                          : "border-primary/30 text-foreground hover:bg-primary/10"
                      }`}
                    >
                      {project}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary text-primary hover:bg-primary hover:text-white text-xs"
                  onClick={() => window.location.href = 'tel:+918884545404'}
                >
                  <Phone className="w-3 h-3 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary text-primary hover:bg-primary hover:text-white text-xs"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  <User className="w-3 h-3 mr-2" />
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
                  disabled={!message.trim() || isLoading}
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