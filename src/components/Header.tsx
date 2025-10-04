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

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4 ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider font-medium"
              onClick={() => window.location.href = 'tel:+918884545404'}
            >
              <Phone className="w-4 h-4" />
              <span>8884545404</span>
            </Button>

            {/* Projects Menu - Extreme Right */}
            <DropdownMenu open={projectsOpen} onOpenChange={setProjectsOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  size="sm"
                  className="hidden md:flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm uppercase tracking-wider px-6"
                >
                  <Menu className="w-5 h-5" />
                  <span>Menu</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-6 bg-background border shadow-lg z-[100]">
                <div className="space-y-3">
                  <div className="font-bold text-sm uppercase tracking-wider text-primary mb-4 border-b pb-2">Projects</div>
                  <DropdownMenuItem asChild className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#projects">Ongoing Projects</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#projects">Upcoming Projects</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#projects">Completed Projects</a>
                  </DropdownMenuItem>
                  
                  <div className="border-t my-4"></div>
                  
                  <DropdownMenuItem className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#careers" className="w-full">Careers</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#referral" className="w-full">Referral</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#about">About Us</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-base py-3 hover:bg-accent rounded-md transition-colors">
                    <a href="#blogs" className="w-full">Blogs</a>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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