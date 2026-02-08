import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { features } from "@/components/home/features/FeatureData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navLinks = [
    { label: "Sample Galleries", href: "/gallery" },
    { label: "Pricing", href: "#pricing" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        window.location.href = "/" + href;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToFeature = (featureId: string) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    
    if (location.pathname !== "/") {
      window.location.href = "/#" + featureId;
      return;
    }
    
    const element = document.getElementById(featureId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Pixroll" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div 
              ref={productsRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-2">
                      {features.map((feature, index) => (
                        <motion.button
                          key={feature.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.2 }}
                          onClick={() => scrollToFeature(feature.id)}
                          className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors group"
                        >
                          <div className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                            {feature.shortTitle}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            {feature.description.split('.')[0]}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="hidden lg:flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground transition-colors px-3 py-2">
            <Globe className="w-4 h-4" />
            <span className="text-xs">EN</span>
          </button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex text-sm font-medium">
            Login
          </Button>
          <Button variant="hero" size="sm" className="text-sm font-medium">
            Start Free
          </Button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors ml-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border/30 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6">
              {/* Products section */}
              <div className="mb-4">
                <div className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase mb-3 px-2">
                  Products
                </div>
                <div className="space-y-1">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => scrollToFeature(feature.id)}
                      className="w-full text-left px-2 py-2.5 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      <div className="font-medium text-sm">{feature.shortTitle}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Other links */}
              <div className="border-t border-border/30 pt-4 space-y-1">
                {navLinks.map((link) =>
                  link.href.startsWith("#") ? (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left px-2 py-2.5 text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-2.5 text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
              
              {/* CTA */}
              <div className="pt-6 border-t border-border/30 mt-4 flex gap-3">
                <Button variant="ghost" className="flex-1">
                  Login
                </Button>
                <Button variant="hero" className="flex-1">
                  Start Free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
