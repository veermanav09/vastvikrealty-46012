import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const opacity = Math.max(0.3, 1 - scrollY / 600);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ opacity }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
        >
          <source src="https://cdn.pixabay.com/video/2023/05/06/161329-823901002_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Minimalist Grid Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Main heading with Leo9 style */}
          <div className="mb-12 leo9-slide-up">
            <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Design Transform Elevate
            </h1>
          </div>

          {/* Subtitle */}
          <div className="leo9-reveal">
            <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Redefining premium living through architectural excellence and strategic real estate investments in Bangalore
            </p>
          </div>

          {/* Clean CTA */}
          <div className="leo9-reveal">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-white text-primary px-12 py-6 text-lg font-medium minimal-shadow hover:elevated-shadow transition-all duration-300 group"
            >
              Explore Our Portfolio
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
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