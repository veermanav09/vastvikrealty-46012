import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import vastwikLogo from "@/assets/vastvik-logo.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl minimal-shadow border-b border-border transition-all duration-500">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center z-50">
            <img 
              src={vastwikLogo} 
              alt="Vastvik Realty" 
              className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Projects Menu - Top Right */}
          <DropdownMenu open={projectsOpen} onOpenChange={setProjectsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hidden md:flex items-center space-x-2 text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-4">
              <div className="space-y-2">
                <div className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Projects</div>
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  Ongoing Projects
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  Upcoming Projects
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  Completed Projects
                </DropdownMenuItem>
                
                <div className="border-t my-3"></div>
                
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  Careers
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  Referral
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  About Us
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-base py-3">
                  Blogs
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-medium"
              onClick={() => window.location.href = 'tel:+918884545404'}
            >
              <Phone className="w-4 h-4" />
              <span>8884545404</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border minimal-shadow">
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider py-2 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-medium self-start"
                onClick={() => window.location.href = 'tel:+918884545404'}
              >
                <Phone className="w-4 h-4 mr-2" />
                8884545404
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;