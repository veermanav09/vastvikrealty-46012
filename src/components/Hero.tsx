import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Building, Users, Award, Star } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: Building, value: "50+", label: "Premium Homes" },
    { icon: Users, value: "120+", label: "Happy Families" },
    { icon: Award, value: "5+", label: "Awards Won" },
    { icon: Star, value: "4.8", label: "Customer Rating" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20"
    >
      {/* Minimalist Grid Background */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      
      {/* Subtle Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-border/30"></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-primary/5"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-primary/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Main heading with Leo9 style */}
          <div className="mb-12 leo9-slide-up">
            <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 leading-tight tracking-tight">
              Design Transform Elevate
            </h1>
          </div>

          {/* Subtitle */}
          <div className="leo9-reveal">
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              Redefining premium living through architectural excellence and strategic real estate investments in Bangalore
            </p>
          </div>

          {/* Clean CTA */}
          <div className="leo9-reveal mb-24">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground px-12 py-6 text-lg font-medium minimal-shadow hover:elevated-shadow transition-all duration-300 group"
            >
              Explore Our Portfolio
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Minimalist Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 leo9-reveal">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;