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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle"
      style={{
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      {/* Minimalist Grid Background */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      
      {/* Subtle Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-border/30 leo9-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-primary/5 leo9-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-primary/10 leo9-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Main heading with Leo9 style */}
          <div className="mb-12 leo9-text-reveal">
            <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 leading-tight">
              <span style={{ animationDelay: '0.1s' }}>Design</span>{' '}
              <span style={{ animationDelay: '0.2s' }}>Transform</span>{' '}
              <span style={{ animationDelay: '0.3s' }}>Elevate</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="leo9-reveal" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Redefining premium living through architectural excellence and strategic real estate investments in Bangalore
            </p>
          </div>

          {/* Clean CTA */}
          <div className="leo9-reveal mb-24" style={{ animationDelay: '0.7s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground px-12 py-6 text-lg font-medium minimal-shadow hover:elevated-shadow transition-all duration-300 leo9-scale group"
            >
              Explore Our Portfolio
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Minimalist Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 leo9-reveal" style={{ animationDelay: '0.9s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground leo9-float">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Brand mark */}
      <div className="absolute top-8 left-8 leo9-fade">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl text-foreground">VASTVIK</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">REALTY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;