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
      action: "Schedule Visit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-6">
            CONTACT US
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your dream home? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-bold text-3xl text-secondary mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-card card-shadow hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-secondary mb-2">{info.title}</h4>
                    <p className="text-muted-foreground mb-3">{info.details}</p>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                      {info.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Brochure Section */}
            <div className="bg-gradient-card rounded-2xl p-8 card-shadow">
              <h4 className="font-heading font-bold text-2xl text-secondary mb-4">
                Download Project Brochure
              </h4>
              <p className="text-muted-foreground mb-6">
                Get detailed information about our premium projects with floor plans, amenities, and pricing.
              </p>
              
              {!showOtpField ? (
                <div className="space-y-4">
                  <Input
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary"
                  />
                  <Button 
                    onClick={handleSendOtp}
                    className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  >
                    Send OTP
                  </Button>
                </div>
              ) : !isOtpVerified ? (
                <div className="space-y-4">
                  <Input
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary"
                  />
                  <Button 
                    onClick={handleVerifyOtp}
                    className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  >
                    Verify OTP
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Phone number verified!</span>
                  </div>
                  <Button 
                    onClick={handleDownloadBrochure}
                    className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-3xl p-8 card-shadow">
              <h3 className="font-heading font-bold text-3xl text-secondary mb-8">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-primary/30 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-primary/30 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-secondary rounded-3xl p-12 text-white">
          <h3 className="font-heading font-bold text-4xl mb-4">
            IT'S NOW OR NEVER
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Don't miss out on the best investment opportunities in Bangalore
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary px-12 py-4 text-lg luxury-shadow hover:scale-105 transition-all duration-300"
          >
            TALK TO US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;