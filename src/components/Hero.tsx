import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Award, Users, Building, Star } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSlides = [
    {
      title: "BUILDING DREAMS",
      subtitle: "We Specialize in Crafting Premium Homes that Reflect your Aspirations",
      cta: "Explore Projects"
    },
    {
      title: "SMART INVESTMENTS",
      subtitle: "Unlock the Best Opportunities in Bangalore's Real Estate Market",
      cta: "View Opportunities"
    },
    {
      title: "REDEFINING REAL ESTATE",
      subtitle: "Designed to Blend Aesthetic Beauty with Modern Functionality",
      cta: "Discover More"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Building, value: "200+", label: "Premium Homes" },
    { icon: Users, value: "500+", label: "Happy Families" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Star, value: "4.9", label: "Customer Rating" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: Math.max(0.3, 1 - scrollY * 0.002)
      }}
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBuilding})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating elements for 3D effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo watermark */}
          <div className="mb-8 opacity-20">
            <div className="w-24 h-24 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-heading font-bold text-4xl">V</span>
            </div>
          </div>

          {/* Main heading with typewriter effect */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            <span className="block mb-2">{heroSlides[currentSlide].title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white px-8 py-4 text-lg font-semibold luxury-shadow hover:scale-105 transition-all duration-300"
            >
              {heroSlides[currentSlide].cta}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;