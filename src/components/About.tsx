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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Us
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-6">
            WELCOME TO VASTVIK REALTY
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            YOUR GATEWAY TO PREMIUM HOMES AND EXCLUSIVE LIVING EXPERIENCES
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    {value.highlight}
                  </Badge>
                  <h3 className="font-heading font-bold text-2xl text-secondary mb-4 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crafted Homes Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-6">
              CRAFTED HOMES
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              DISCOVER LUXURY IN EVERY DETAIL AT VASTVIK REALTY'S CRAFTED HOMES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="group">
                <div className="card-shadow rounded-3xl p-8 bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-secondary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <div key={index + 3} className="group">
                <div className="card-shadow rounded-3xl p-8 bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-secondary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gateway to Prestige */}
        <div className="text-center bg-gradient-card rounded-3xl p-12 card-shadow">
          <h2 className="font-heading font-bold text-4xl text-secondary mb-6">
            YOUR GATEWAY TO PRESTIGE
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore Our Crafted Residences and Exclusive Estates Strategically Located in Prime Locations.
          </p>
          <p className="text-2xl font-bold text-secondary mb-8">
            DISCOVER BENGALURU'S FINEST AT VASTVIK REALTY
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            CRAFTED HOMES, SMART INVESTMENTS, AND ENDURING PROSPERITY.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary px-12 py-4 text-lg luxury-shadow hover:scale-105 transition-all duration-300"
          >
            Explore Our Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;