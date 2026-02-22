import React from "react";
import { motion } from "framer-motion";
import { Search, Shield, Lock, Eye, Users, Camera, Wand2, Share2, Calendar, FileText, User } from "lucide-react";

// Grid mockup for galleries
export const GalleryGridMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-sm shadow-2xl p-6 max-w-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 row-span-2">
          <img 
            src={images[0]} 
            alt="Gallery preview" 
            className="w-full h-full object-cover rounded-sm aspect-square"
          />
        </div>
        <img 
          src={images[1]} 
          alt="Gallery preview" 
          className="w-full object-cover rounded-sm aspect-square"
        />
        <img 
          src={images[2]} 
          alt="Gallery preview" 
          className="w-full object-cover rounded-sm aspect-square"
        />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Eye className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Share2 className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium">
          View gallery
        </button>
      </div>
    </motion.div>
    <motion.div 
      className="absolute -bottom-8 -left-8 bg-card rounded-sm shadow-xl p-5 w-52"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="text-sm font-medium text-foreground mb-2">
        352 photos
      </div>
      <div className="text-xs text-muted-foreground">
        Last updated June 8, 2024
      </div>
    </motion.div>
  </div>
);

// AI Search mockup
export const AISearchMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-sm shadow-2xl p-6 max-w-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 border border-border/50 rounded-full px-4 py-3 mb-5">
        <Search className="w-5 h-5 text-muted-foreground" />
        <span className="text-muted-foreground">bride laughing with father...</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            className="relative aspect-square rounded-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-2 left-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full">
              {["98%", "95%", "92%"][i]} match
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <motion.div 
      className="absolute -top-6 -right-6 bg-card rounded-sm shadow-xl p-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="text-sm font-medium text-foreground mb-3">Face Recognition</div>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-md">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

// Studio management dashboard mockup with calendar, clients & invoices
export const CardsMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div
      className="bg-card rounded-sm shadow-2xl p-5 max-w-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mini calendar */}
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-foreground">June 2024</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center mb-5">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="text-muted-foreground py-0.5 font-medium">{d}</span>
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <span
            key={i}
            className={`py-0.5 rounded-full text-[11px] ${
              [14, 17, 21].includes(i)
                ? "bg-primary text-primary-foreground font-medium"
                : i === 9
                ? "bg-accent text-accent-foreground"
                : "text-foreground"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>

      {/* Upcoming events */}
      <div className="space-y-2 mb-5">
        {[
          { name: "Wedding – Lior & Noa", date: "Jun 15", color: "bg-primary" },
          { name: "Portrait – Cohen Family", date: "Jun 18", color: "bg-accent" },
        ].map((ev, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <span className={`w-2 h-8 rounded-full ${ev.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{ev.name}</p>
              <p className="text-xs text-muted-foreground">{ev.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clients row */}
      <div className="flex items-center gap-3 mb-5">
        <User className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs font-medium text-foreground">Recent Clients</span>
        <div className="flex -space-x-2 ms-auto">
          {images.slice(0, 3).map((img, i) => (
            <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-card">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-card">
            +5
          </div>
        </div>
      </div>

      {/* Invoices */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-medium text-foreground">Recent Invoices</span>
        </div>
        <div className="space-y-2">
          {[
            { client: "Lior & Noa", amount: "₪4,200", status: "Paid" },
            { client: "Cohen Family", amount: "₪1,800", status: "Pending" },
          ].map((inv, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between p-2.5 bg-muted/20 rounded-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
            >
              <div>
                <p className="text-sm text-foreground">{inv.client}</p>
                <p className="text-xs text-muted-foreground">{inv.amount}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                inv.status === "Paid"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent text-accent-foreground"
              }`}>
                {inv.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

// Directory mockup
export const DirectoryMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-sm shadow-2xl p-6 max-w-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 bg-muted/30 rounded-full px-4 py-2.5 text-sm text-muted-foreground">
          Search photographers in New York...
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-medium">
          Search
        </button>
      </div>
      <div className="space-y-4">
        {["Sarah Mitchell", "James Chen", "Elena Rodriguez"].map((name, i) => (
          <motion.div 
            key={i}
            className="flex items-center gap-4 p-3 rounded-sm hover:bg-muted/30 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img src={images[i % images.length]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{name}</h4>
              <p className="text-sm text-muted-foreground">
                {["Wedding • Portrait", "Fashion • Editorial", "Nature • Wildlife"][i]}
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <span>★</span>
              <span className="text-sm font-medium">{["4.9", "4.8", "5.0"][i]}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <motion.div 
      className="absolute -bottom-6 -left-6 bg-card rounded-sm shadow-xl p-4 flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Users className="w-8 h-8 text-primary" />
      <div>
        <div className="text-xl font-serif text-foreground">2,500+</div>
        <div className="text-xs text-muted-foreground">Active photographers</div>
      </div>
    </motion.div>
  </div>
);

// Community mockup
export const CommunityMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <div className="grid grid-cols-2 gap-4 max-w-md">
      {[
        { label: "Wedding", icon: "💒" },
        { label: "Fashion", icon: "👗" },
        { label: "Nature", icon: "🌿" },
        { label: "Portraits", icon: "👤" },
      ].map((cat, i) => (
        <motion.div 
          key={i}
          className="bg-card rounded-sm shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative h-28">
            <img 
              src={images[i % images.length]} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="text-xl">{cat.icon}</span>
              <span className="text-white font-medium text-sm">{cat.label}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div 
      className="absolute -bottom-4 -right-4 bg-card rounded-sm shadow-xl p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <Camera className="w-6 h-6 text-primary" />
        <div>
          <div className="text-sm font-medium text-foreground">Every specialty</div>
          <div className="text-xs text-muted-foreground">Business, animals & more</div>
        </div>
      </div>
    </motion.div>
  </div>
);

// Photo editing mockup
export const EditMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-sm shadow-2xl overflow-hidden max-w-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img src={images[0]} alt="" className="w-full h-64 object-cover" />
        <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-sm p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-foreground">Brightness</span>
            <span className="text-xs text-muted-foreground">+15</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-primary rounded-full" />
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center gap-4">
        {[
          { Icon: Wand2, key: "wand" },
          { Icon: null, key: "contrast" },
          { Icon: null, key: "saturation" },
          { Icon: Share2, key: "share" },
        ].map((item, i) => (
          <button 
            key={item.key} 
            className={`p-3 rounded-sm transition-colors ${
              i === 0 ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.Icon ? (
              <item.Icon className="w-5 h-5" />
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                <path strokeLinecap="round" strokeWidth={1.5} d="M12 2v20M2 12h20" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </motion.div>
    <motion.div 
      className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
    >
      <Share2 className="w-5 h-5" />
    </motion.div>
  </div>
);

// Security mockup
export const SecurityMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-sm shadow-2xl p-6 max-w-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-foreground">Gallery Access Control</h4>
          <p className="text-sm text-muted-foreground">Manage who can view your photos</p>
        </div>
      </div>
      <div className="space-y-3">
        {[
          { label: "Password Protected", icon: Lock, enabled: true },
          { label: "Private Link Only", icon: Eye, enabled: true },
          { label: "Download Restricted", icon: Shield, enabled: false },
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="flex items-center justify-between p-4 bg-muted/30 rounded-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <div className={`w-10 h-6 rounded-full p-1 transition-colors ${
              item.enabled ? "bg-primary" : "bg-muted"
            }`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                item.enabled ? "translate-x-4" : "translate-x-0"
              }`} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <motion.div 
      className="absolute -bottom-6 -right-6 bg-green-500 text-white rounded-sm shadow-xl p-4 flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Lock className="w-5 h-5" />
      <span className="text-sm font-medium">256-bit encryption</span>
    </motion.div>
  </div>
);

// Browser mockup for client portal
export const BrowserMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-sm shadow-2xl overflow-hidden max-w-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-muted/30 px-5 py-4 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-background/50 rounded-sm px-4 py-2 text-sm text-muted-foreground">
          gallery.yourbrand.com
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-5 mb-6 pb-5 border-b border-border/30">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src={images[0]} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground">Sarah & James</h4>
            <p className="text-sm text-muted-foreground">Wedding Collection</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.img 
              key={i} 
              src={img} 
              alt="" 
              className="w-full aspect-square object-cover rounded-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div 
      className="absolute -bottom-6 -left-6 bg-card rounded-sm shadow-xl p-4 flex items-center gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Camera className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">Your Brand</div>
        <div className="text-xs text-muted-foreground">Custom domain ready</div>
      </div>
    </motion.div>
  </div>
);

// Dispatcher component
export const FeatureMockup = ({ type, images }: { type: string; images: string[] }) => {
  const mockups: Record<string, React.ComponentType<{ images: string[] }>> = {
    gallery: GalleryGridMockup,
    aiSearch: AISearchMockup,
    cards: CardsMockup,
    directory: DirectoryMockup,
    community: CommunityMockup,
    edit: EditMockup,
    security: SecurityMockup,
    browser: BrowserMockup,
  };
  const Component = mockups[type] || GalleryGridMockup;
  return <Component images={images} />;
};
