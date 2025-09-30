import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Users, IndianRupee, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ELEMENT",
      type: "ONGOING",
      bedrooms: "1, 2 & 3 BHK",
      units: "60 UNITS",
      price: "38 LAKHS ONWARD",
      location: "MARSUR GATE",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      features: ["Premium Amenities", "Gated Community", "24/7 Security"],
      completion: "Dec 2024"
    },
    {
      id: 2,
      name: "HIGH RISE",
      type: "UPCOMING",
      bedrooms: "2 & 3 BHK",
      units: "120 UNITS",
      price: "60 LAKHS ONWARD",
      location: "CHANDAPURA MAIN ROAD",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      features: ["Sky Lounge", "Swimming Pool", "Gym & Spa"],
      completion: "Q2 2025"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-mesh building-3d">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 parallax-3d">
          <Badge variant="outline" className="mb-6 text-primary border-primary floating-3d">
            Our Portfolio
          </Badge>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-secondary mb-8 depth-layer-2">
            OUR PROJECTS
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto depth-layer-3">
            Discover our carefully crafted residential projects that blend luxury with modern living
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-16 building-3d">
          {projects.map((project, index) => (
            <div key={project.id} className="group floating-3d" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="card-shadow rounded-3xl overflow-hidden bg-card hover:shadow-3d transition-all duration-500 building-card-3d">
                {/* Project Image */}
                <div className="relative overflow-hidden h-96">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-8 left-8">
                    <Badge 
                      variant={project.type === "ONGOING" ? "default" : "secondary"}
                      className={`${project.type === "ONGOING" ? "bg-green-500" : "bg-primary"} text-white px-4 py-2 text-sm font-semibold`}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  {/* Price Tag */}
                  <div className="absolute top-8 right-8 glass-effect rounded-2xl px-6 py-3">
                    <div className="flex items-center text-white font-bold text-lg">
                      <IndianRupee className="w-5 h-5 mr-2" />
                      {project.price}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-bold text-4xl text-secondary">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span className="text-lg">{project.completion}</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center building-card-3d p-4 rounded-2xl bg-accent/50">
                      <Bed className="w-6 h-6 text-primary mr-4" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Configuration</p>
                        <p className="font-semibold text-secondary text-lg">{project.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center building-card-3d p-4 rounded-2xl bg-accent/50">
                      <Users className="w-6 h-6 text-primary mr-4" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Units</p>
                        <p className="font-semibold text-secondary text-lg">{project.units}</p>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center mb-8 p-4 rounded-2xl bg-gradient-card building-card-3d">
                    <MapPin className="w-6 h-6 text-primary mr-4" />
                    <p className="text-secondary font-medium text-lg">{project.location}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-primary border-primary/30 px-4 py-2 text-sm building-card-3d">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="flex-1 bg-gradient-primary hover:shadow-3d transition-all duration-300 building-card-3d text-lg py-6"
                      size="lg"
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 building-card-3d text-lg py-6"
                      size="lg"
                    >
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 parallax-3d">
          <p className="text-2xl text-muted-foreground mb-10 depth-layer-3">
            Interested in learning more about our projects?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary px-16 py-6 text-xl luxury-shadow hover:scale-105 transition-all duration-300 building-card-3d"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;