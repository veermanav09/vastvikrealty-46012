import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blogs = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Top 10 Tips for First-Time Home Buyers in Bangalore",
      excerpt: "Buying your first home can be overwhelming. Here are essential tips to make your journey smooth and successful.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      category: "Buying Guide",
      author: "Vastvik Team",
      date: "Oct 1, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Real Estate Investment Returns",
      excerpt: "Learn how to calculate and maximize your returns on real estate investments in the current market.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "Investment",
      author: "Vastvik Team",
      date: "Sep 28, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Future of Sustainable Living in Urban Areas",
      excerpt: "Explore how modern apartments are incorporating eco-friendly features for sustainable living.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      category: "Lifestyle",
      author: "Vastvik Team",
      date: "Sep 25, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Navigating Home Loan Process: A Complete Guide",
      excerpt: "Everything you need to know about securing a home loan, from documentation to approval.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      category: "Finance",
      author: "Vastvik Team",
      date: "Sep 20, 2025",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Smart Home Technology in Modern Apartments",
      excerpt: "Discover how smart home features are revolutionizing the way we live in modern residences.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
      category: "Technology",
      author: "Vastvik Team",
      date: "Sep 15, 2025",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Choosing the Right Location for Your Dream Home",
      excerpt: "Key factors to consider when selecting the perfect location for your new home.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
      category: "Location Guide",
      author: "Vastvik Team",
      date: "Sep 10, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              Latest Insights
            </Badge>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              Real Estate Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, market trends, and helpful guides for your real estate journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-card rounded-3xl overflow-hidden card-shadow hover:shadow-3d transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blog.author}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{blog.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
