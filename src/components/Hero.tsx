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
      title: "CRAFTING TOMORROW",
      subtitle: "Experience the Future of Premium Living with Vastvik Realty's Signature Developments",
      cta: "Explore Collection"
    },
    {
      title: "MODERN SANCTUARIES",
      subtitle: "Where Architectural Excellence Meets Contemporary Lifestyle in Bangalore's Prime Locations",
      cta: "Discover Homes"
    },
    {
      title: "INVESTMENT EVOLUTION",
      subtitle: "Secure Your Future with Strategic Real Estate Opportunities in Bangalore's Growth Corridors",
      cta: "View Portfolio"
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
    { icon: Building, value: "50+", label: "Premium Homes" },
    { icon: Users, value: "120+", label: "Happy Families" },
    { icon: Award, value: "5+", label: "Awards Won" },
    { icon: Star, value: "4.8", label: "Customer Rating" }
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
            transform: `translateY(${scrollY * 0.3}px) scale(1.05)`
          }}
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        >
          {/* Construction and architecture videos */}
          <source src="https://cdn.pixabay.com/video/2022/12/07/142940-777962202_large.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2021/08/03/83962-577586344_large.mp4" type="video/mp4" />
          <source src="https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4425413ce223d6228afe8&profile_id=175" type="video/mp4" />
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

      {/* Modern 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none building-3d">
        {/* Floating 3D Architectural Elements */}
        <div className="absolute top-1/4 left-1/6 floating-3d">
          <div className="w-20 h-28 bg-gradient-to-t from-primary/30 to-primary/10 relative building-card-3d rounded-lg backdrop-blur-sm">
            <div className="absolute inset-x-2 top-2 h-1 bg-primary/40 rounded"></div>
            <div className="absolute inset-x-2 top-5 h-1 bg-primary/40 rounded"></div>
            <div className="absolute inset-x-2 top-8 h-1 bg-primary/40 rounded"></div>
            <div className="grid grid-cols-2 gap-1 p-2 mt-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-primary/50 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/6 morph-3d">
          <div className="w-24 h-36 bg-gradient-to-br from-primary-glow/25 to-primary/15 relative building-card-3d rounded-xl">
            <div className="absolute inset-0 bg-gradient-mesh rounded-xl"></div>
            <div className="grid grid-cols-3 gap-1 p-3">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-2 bg-primary-glow/60 rounded-sm opacity-80"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/3 slide-3d">
          <div className="w-16 h-24 bg-gradient-to-t from-secondary/20 to-primary/15 relative building-card-3d rounded-lg">
            <div className="absolute top-2 left-2 right-2 h-0.5 bg-primary/50"></div>
            <div className="absolute top-4 left-2 right-2 h-0.5 bg-primary/50"></div>
            <div className="absolute bottom-4 left-2 right-2 grid grid-cols-2 gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-primary/60 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Abstract geometric elements */}
        <div className="absolute top-1/3 right-1/4 rotate-3d">
          <div className="w-32 h-32 border-2 border-primary/20 rotate-45 building-card-3d rounded-2xl backdrop-blur-sm"></div>
        </div>

        <div className="absolute top-2/3 left-1/4 pulse-3d">
          <div className="w-20 h-20 bg-gradient-to-r from-primary/15 to-primary-glow/15 rounded-full blur-lg"></div>
        </div>

        <div className="absolute bottom-1/3 right-1/3 floating-3d">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg building-card-3d"></div>
        </div>
      </div>

      {/* Content with enhanced 3D positioning */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center parallax-3d">
        <div className="max-w-5xl mx-auto">
          {/* Modern brand mark with 3D effect */}
          <div className="mb-12 floating-3d">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl flex items-center justify-center backdrop-blur-sm building-card-3d shadow-3d">
              <span className="text-white font-heading font-bold text-5xl depth-layer-1 tracking-tight">V</span>
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