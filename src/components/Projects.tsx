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
      image: "/api/placeholder/600/400",
      features: ["Premium Amenities", "Gated Community", "24/7 Security"],
      completion: "Dec 2024"
    },
    {
      id: 2,
      name: "HIGH RISE",
      type: "UPCOMING",
      bedrooms: "2 & 3 BHK",
      units: "209 UNITS",
      price: "60 LAKHS ONWARD",
      location: "CHANDAPURA MAIN ROAD",
      image: "/api/placeholder/600/400",
      features: ["Sky Lounge", "Swimming Pool", "Gym & Spa"],
      completion: "Q2 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Portfolio
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-6">
            OUR PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully crafted residential projects that blend luxury with modern living
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="card-shadow rounded-3xl overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge 
                      variant={project.type === "ONGOING" ? "default" : "secondary"}
                      className={project.type === "ONGOING" ? "bg-green-500" : "bg-primary"}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  {/* Price Tag */}
                  <div className="absolute top-6 right-6 glass-effect rounded-xl px-4 py-2">
                    <div className="flex items-center text-white font-bold">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      {project.price}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-3xl text-secondary">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.completion}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Configuration</p>
                        <p className="font-semibold text-secondary">{project.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Units</p>
                        <p className="font-semibold text-secondary">{project.units}</p>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center mb-6">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <p className="text-secondary font-medium">{project.location}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-primary border-primary/30">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-gradient-primary hover:shadow-lg transition-all duration-300"
                      size="lg"
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
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
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-8">
            Interested in learning more about our projects?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary px-12 py-4 text-lg luxury-shadow hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;