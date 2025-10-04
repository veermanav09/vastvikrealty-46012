import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    otp: ""
  });
  const [showOtpField, setShowOtpField] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendOtp = () => {
    if (!formData.phone) {
      toast({
        title: "Phone Number Required",
        description: "Please enter your phone number to receive OTP",
        variant: "destructive"
      });
      return;
    }
    
    setShowOtpField(true);
    toast({
      title: "OTP Sent",
      description: `OTP has been sent to ${formData.phone}`,
    });
  };

  const handleVerifyOtp = () => {
    if (formData.otp === "123456") { // Mock OTP verification
      setIsOtpVerified(true);
      toast({
        title: "OTP Verified",
        description: "Your phone number has been verified successfully",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct OTP",
        variant: "destructive"
      });
    }
  };

  const handleDownloadBrochure = () => {
    if (!isOtpVerified) {
      toast({
        title: "Verification Required",
        description: "Please verify your phone number to download brochure",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Download Started",
      description: "Your brochure is being downloaded",
    });
  };

  const handleContactAction = (index: number) => {
    switch(index) {
      case 0: // Phone
        window.location.href = 'tel:8884545404';
        break;
      case 1: // Email
        window.location.href = 'mailto:info@vastvikrealty.com';
        break;
      case 2: // Address
        window.open('https://maps.google.com/?q=Marsur Gate, Chandapura-Anekal Main Road, Bengaluru-562106', '_blank');
        break;
      case 3: // Schedule Visit via WhatsApp
        const message = encodeURIComponent("Hi, I am interested to know more");
        window.open(`https://wa.me/918884545404?text=${message}`, '_blank');
        break;
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "8884545404",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@vastvikrealty.com",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "#340, Marsur Gate, Opp M Trees School, Chandapura-Anekal Main Road, Bengaluru-562106",
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      action: "Schedule Visit via WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-mesh building-3d">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-8">
            CONTACT US
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto depth-layer-3 leading-relaxed">
            Ready to find your dream home? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes more space */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-3xl p-12 elevated-shadow premium-lift">
              <h3 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-16">
                Send us a Message
              </h3>
              
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-primary/30 focus:border-primary py-6 text-lg rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-primary/30 focus:border-primary py-6 text-lg rounded-2xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary py-6 text-lg rounded-2xl"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary resize-none text-lg rounded-2xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:elevated-shadow transition-all duration-300 py-7 text-xl"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-10 elevated-shadow sticky top-24">
              <h3 className="font-heading font-bold text-3xl text-foreground mb-8">
                Let's Connect
              </h3>
              
              <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-card">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-3 text-xl">Office Hours</h4>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      const message = encodeURIComponent("Hi, I am interested to know more");
                      window.open(`https://wa.me/918884545404?text=${message}`, '_blank');
                    }}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Schedule Visit via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;