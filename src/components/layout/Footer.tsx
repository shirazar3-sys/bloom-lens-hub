import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-background" />
              </div>
              <span className="font-serif text-xl font-semibold">
                LensFlow
              </span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              The all-in-one platform for photographers to share, manage, and grow their business.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">Features</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="hover:text-background transition-colors">Gallery Demo</Link></li>
              <li><Link to="/calendar" className="hover:text-background transition-colors">Calendar</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">About</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/40">
          <p>© 2024 LensFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
