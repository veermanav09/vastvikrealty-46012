import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Bed, Users, IndianRupee, Calendar, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      completion: "Dec 2024",
      description: "ELEMENT brings modern luxury living with meticulously designed apartments featuring premium amenities and superior construction quality.",
      amenities: ["Swimming Pool", "Gym & Fitness Center", "Clubhouse", "Children's Play Area", "Landscaped Gardens", "24/7 Security"],
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
      ]
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
      completion: "Q2 2025",
      description: "HIGH RISE offers luxury high-rise living with stunning city views and world-class amenities in the heart of the city.",
      amenities: ["Sky Lounge", "Infinity Pool", "Spa & Wellness", "Co-working Space", "Multi-purpose Hall", "Reserved Parking"],
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "1"));

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleDownloadBrochure = () => {
    navigate(`/download-brochure/${project.id}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          {/* Hero Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <Badge className={`${project.type === "ONGOING" ? "bg-green-500" : "bg-primary"} text-white mb-4`}>
                {project.type}
              </Badge>
              <h1 className="font-heading font-bold text-5xl text-white mb-2">{project.name}</h1>
              <div className="flex items-center text-white/90 text-xl">
                <MapPin className="w-5 h-5 mr-2" />
                {project.location}
              </div>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card rounded-3xl p-8 card-shadow">
                <h2 className="font-heading font-bold text-3xl mb-4">About This Project</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="bg-card rounded-3xl p-8 card-shadow">
                <h2 className="font-heading font-bold text-3xl mb-6">Project Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center p-4 rounded-2xl bg-accent/50">
                    <Bed className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Configuration</p>
                      <p className="font-semibold text-foreground text-xl">{project.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 rounded-2xl bg-accent/50">
                    <Users className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total Units</p>
                      <p className="font-semibold text-foreground text-xl">{project.units}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 rounded-2xl bg-accent/50">
                    <IndianRupee className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Starting Price</p>
                      <p className="font-semibold text-foreground text-xl">{project.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 rounded-2xl bg-accent/50">
                    <Calendar className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Completion</p>
                      <p className="font-semibold text-foreground text-xl">{project.completion}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 card-shadow">
                <h2 className="font-heading font-bold text-3xl mb-6">Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center p-4 rounded-xl bg-gradient-card">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      <span className="text-foreground font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 card-shadow">
                <h2 className="font-heading font-bold text-3xl mb-6">Gallery</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-8 card-shadow sticky top-24">
                <h3 className="font-heading font-bold text-2xl mb-6">Interested?</h3>
                <div className="space-y-4">
                  <Button
                    onClick={handleDownloadBrochure}
                    className="w-full bg-primary hover:elevated-shadow transition-all duration-300"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                  <Button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
