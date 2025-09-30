import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, TrendingUp, Heart, Building2 } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "PERSONALIZED LIVING",
      description: "Vastvik Realty's Crafted Homes offer the opportunity for personalization, allowing residents to tailor their living spaces to suit their unique preferences and lifestyle."
    },
    {
      icon: Award,
      title: "INNOVATIVE DESIGN",
      description: "Our homes feature innovative design concepts, providing a living space that seamlessly blends modern amenities with classic sophistication."
    },
    {
      icon: TrendingUp,
      title: "ENDURING VALUE",
      description: "Investing in a Vastvik Realty's Crafted Home means investing in lasting value—properties that stand the test of time both in terms of construction and market appreciation."
    },
    {
      icon: Heart,
      title: "EXCEPTIONAL AMENITIES",
      description: "Crafted Homes come with an array of exceptional amenities, enhancing the overall living experience and providing residents with the ultimate in comfort and convenience."
    },
    {
      icon: Building2,
      title: "STRATEGIC LOCATIONS",
      description: "Each Vastvik Realty's Crafted Home is strategically located, offering not just a residence but a coveted address that reflects prestige and convenience."
    }
  ];

  const values = [
    {
      title: "CRAFTING PERFECTION WITH PRECISION",
      description: "Exceptional Construction Quality and Premium Craftsmanship for Enduring Elegance.",
      highlight: "Premium Quality"
    },
    {
      title: "CULTIVATING VALUE FOR A SECURE FUTURE",
      description: "Dive into Financial Wisdom where each Investment is a Strategic move towards Prosperous Tomorrow.",
      highlight: "Smart Investment"
    },
    {
      title: "ELEVATE YOUR LIFESTYLE",
      description: "Experience the Epitome of Sophistication and Opulent Living with Our Elite Neighborhoods.",
      highlight: "Luxury Living"
    }
  ];

  return (
    <section id="about" className="py-24 building-3d">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 parallax-3d">
          <Badge variant="outline" className="mb-6 text-primary border-primary floating-3d">
            About Us
          </Badge>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-secondary mb-8 depth-layer-2">
            WELCOME TO VASTVIK REALTY
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed depth-layer-3">
            YOUR GATEWAY TO PREMIUM HOMES AND EXCLUSIVE LIVING EXPERIENCES
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-12 building-3d">
            {values.map((value, index) => (
              <div key={index} className="text-center group floating-3d" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="building-card-3d">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 pulse-3d">
                    {value.highlight}
                  </Badge>
                  <h3 className="font-heading font-bold text-3xl text-secondary mb-6 leading-tight depth-layer-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crafted Homes Section */}
        <div className="mb-24">
          <div className="text-center mb-20 parallax-3d">
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-secondary mb-8 depth-layer-2">
              CRAFTED HOMES
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto depth-layer-3">
              DISCOVER LUXURY IN EVERY DETAIL AT VASTVIK REALTY'S CRAFTED HOMES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 building-3d">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="group floating-3d" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="card-shadow rounded-3xl p-10 bg-card hover:shadow-3d transition-all duration-500 building-card-3d h-full">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 morph-3d">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-secondary mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto building-3d">
            {features.slice(3).map((feature, index) => (
              <div key={index + 3} className="group floating-3d" style={{ animationDelay: `${(index + 3) * 0.3}s` }}>
                <div className="card-shadow rounded-3xl p-10 bg-card hover:shadow-3d transition-all duration-500 building-card-3d h-full">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 morph-3d">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-secondary mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gateway to Prestige */}
        <div className="text-center bg-gradient-card rounded-3xl p-16 card-shadow building-card-3d parallax-3d">
          <h2 className="font-heading font-bold text-5xl text-secondary mb-8 depth-layer-2">
            YOUR GATEWAY TO PRESTIGE
          </h2>
          <p className="text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto depth-layer-3">
            Explore Our Crafted Residences and Exclusive Estates Strategically Located in Prime Locations.
          </p>
          <p className="text-3xl font-bold text-secondary mb-10 depth-layer-1">
            DISCOVER BENGALURU'S FINEST AT VASTVIK REALTY
          </p>
          <p className="text-xl text-primary font-semibold mb-12">
            CRAFTED HOMES, SMART INVESTMENTS, AND ENDURING PROSPERITY.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary px-16 py-6 text-xl luxury-shadow hover:scale-105 transition-all duration-300 building-card-3d"
          >
            Explore Our Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;