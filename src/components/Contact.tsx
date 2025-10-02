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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="building-3d">
            <h3 className="font-heading font-bold text-4xl text-foreground mb-12 depth-layer-1">
              Let's Connect
            </h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-6 p-8 rounded-3xl bg-card elevated-shadow card-tilt hover:bg-accent/50 transition-all duration-500">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 float-3d" style={{ animationDelay: `${index * 0.15}s` }}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-3 text-xl">{info.title}</h4>
                    <p className="text-muted-foreground mb-4 text-lg leading-relaxed">{info.details}</p>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      {info.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Brochure Section */}
            <div className="bg-gradient-card rounded-3xl p-10 card-shadow">
              <h4 className="font-heading font-bold text-3xl text-foreground mb-6">
                Download Project Brochure
              </h4>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Get detailed information about our premium projects with floor plans, amenities, and pricing.
              </p>
              
              {!showOtpField ? (
                <div className="space-y-6">
                  <Input
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary py-6 text-lg rounded-2xl"
                  />
                  <Button 
                    onClick={handleSendOtp}
                    className="w-full bg-primary text-primary-foreground hover:elevated-shadow transition-all duration-300 py-6 text-lg"
                  >
                    Send OTP
                  </Button>
                </div>
              ) : !isOtpVerified ? (
                <div className="space-y-6">
                  <Input
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary py-6 text-lg rounded-2xl"
                  />
                  <Button 
                    onClick={handleVerifyOtp}
                    className="w-full bg-primary text-primary-foreground hover:elevated-shadow transition-all duration-300 py-6 text-lg"
                  >
                    Verify OTP
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-green-600 p-4 rounded-2xl bg-green-50">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold text-lg">Phone number verified!</span>
                  </div>
                  <Button 
                    onClick={handleDownloadBrochure}
                    className="w-full bg-primary text-primary-foreground hover:elevated-shadow transition-all duration-300 py-6 text-lg"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Brochure
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-3xl p-10 elevated-shadow premium-lift">
              <h3 className="font-heading font-bold text-4xl text-foreground mb-12">
                Send us a Message
              </h3>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
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
                  className="w-full bg-primary text-primary-foreground hover:elevated-shadow transition-all duration-300 py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-primary rounded-3xl p-16 text-primary-foreground elevated-shadow premium-lift">
          <h3 className="font-heading font-bold text-5xl mb-6">
            IT'S NOW OR NEVER
          </h3>
          <p className="text-2xl mb-10 opacity-90 leading-relaxed">
            Don't miss out on the best investment opportunities in Bangalore
          </p>
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary px-16 py-6 text-xl elevated-shadow hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            TALK TO US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;