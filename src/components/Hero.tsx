import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Award, Users, Building, Star, Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden building-3d"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: Math.max(0.3, 1 - scrollY * 0.002)
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
          }}
        >
          {/* High-quality construction timelapse video */}
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3195440/3195440-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-secondary to-primary"></div>
        </video>
        
        {/* Video Controls */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Enhanced 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none building-3d">
        {/* Floating 3D Buildings */}
        <div className="absolute top-1/4 left-1/4 floating-3d">
          <div className="w-16 h-24 bg-primary/20 relative building-card-3d">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-primary/10 rounded-t-sm"></div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-primary/50 rounded-sm"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 rounded-sm"></div>
            <div className="absolute top-6 left-2 w-2 h-2 bg-primary/50 rounded-sm"></div>
            <div className="absolute top-6 right-2 w-2 h-2 bg-primary/50 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute top-3/4 right-1/4 floating-3d delay-1000">
          <div className="w-20 h-32 bg-primary-glow/20 relative building-card-3d">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-glow/30 to-primary-glow/10 rounded-t-sm"></div>
            {/* Windows */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex justify-between px-2" style={{ marginTop: `${4 + i * 4}px` }}>
                <div className="w-1.5 h-1.5 bg-primary-glow/60 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-primary-glow/60 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-3/4 floating-3d delay-500">
          <div className="w-12 h-20 bg-primary/15 relative building-card-3d">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-primary/10 rounded-t-sm"></div>
            <div className="absolute top-2 left-1.5 w-1.5 h-1.5 bg-primary/50 rounded-sm"></div>
            <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-primary/50 rounded-sm"></div>
            <div className="absolute top-5 left-1.5 w-1.5 h-1.5 bg-primary/50 rounded-sm"></div>
            <div className="absolute top-5 right-1.5 w-1.5 h-1.5 bg-primary/50 rounded-sm"></div>
          </div>
        </div>

        {/* Rotating 3D geometric elements */}
        <div className="absolute top-1/3 right-1/3 rotate-3d">
          <div className="w-24 h-24 border border-primary/30 rotate-45 building-card-3d"></div>
        </div>

        <div className="absolute bottom-1/3 left-1/3 floating-3d">
          <div className="w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Content with enhanced 3D positioning */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center parallax-3d">
        <div className="max-w-5xl mx-auto">
          {/* Logo watermark with 3D effect */}
          <div className="mb-8 floating-3d">
            <div className="w-24 h-24 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm building-card-3d">
              <span className="text-white font-heading font-bold text-4xl depth-layer-1">V</span>
            </div>
          </div>

          {/* Main heading with 3D depth */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight depth-layer-2">
            <span className="block mb-2">{heroSlides[currentSlide].title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed depth-layer-3">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons with 3D hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white px-8 py-4 text-lg font-semibold luxury-shadow building-card-3d transition-all duration-300"
            >
              {heroSlides[currentSlide].cta}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm building-card-3d transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Progress
            </Button>
          </div>

          {/* Stats with 3D cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 text-center building-card-3d">
                <div className="floating-3d">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator with 3D effect */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce floating-3d">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Slide indicators with 3D positioning */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 depth-layer-1">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 building-card-3d ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;