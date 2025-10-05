import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Share2, Home, IndianRupee, ArrowRight, Copy, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Referral = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const referralCode = "VASTVIK2024";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: Share2,
      title: "Refer your friends and family",
      description: "Share your unique referral code with friends looking for their dream home"
    },
    {
      icon: Home,
      title: "They buy their dream home",
      description: "Your referral successfully books a property with Vastvik Realty"
    },
    {
      icon: IndianRupee,
      title: "You get up to 2% of home value for each referral",
      description: "Earn attractive rewards for every successful booking through your referral"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              Referral Program
            </Badge>
            <h1 className="font-heading font-bold text-6xl md:text-7xl mb-6">
              Refer & Earn{" "}
              <span className="text-primary">Up to 2%</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Invite your friends to explore Vastvik Realty projects and earn up to 2% on every successful booking
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden mb-20 card-shadow">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop" 
              alt="Referral Program"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                Invite your friends to explore Vastvik Realty projects and earn up to 2% on every successful booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              How referral program works?
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary/20 bg-background flex items-center justify-center card-shadow">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow">
            <div className="text-center mb-10">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Start Referring Today
              </h3>
              <p className="text-muted-foreground text-lg">
                Share your details and get your unique referral code
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base mb-2 block">Your Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name"
                  className="h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base mb-2 block">Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base mb-2 block">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="h-12 text-base"
                />
              </div>

              {/* Referral Code Display */}
              <div className="bg-gradient-card rounded-2xl p-6 border border-primary/20">
                <Label className="text-sm text-muted-foreground mb-3 block">Your Referral Code</Label>
                <div className="flex items-center justify-between gap-4">
                  <code className="text-2xl font-bold text-primary font-mono">
                    {referralCode}
                  </code>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:elevated-shadow transition-all duration-300 text-lg py-6"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-12">
              Why Join Our Referral Program?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Earn up to 2% of property value",
                "No limit on number of referrals",
                "Quick and transparent payouts",
                "Help friends find their dream home",
                "Exclusive referral bonuses",
                "Easy tracking of your referrals"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-2xl card-shadow hover:elevated-shadow transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium text-left">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referral;
