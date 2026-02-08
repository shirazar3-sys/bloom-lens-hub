import { motion } from "framer-motion";
import { Search, Shield, Lock, Eye, Users, Camera, Wand2, Share2 } from "lucide-react";

// Grid mockup for galleries
export const GalleryGridMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-3xl shadow-2xl p-6 max-w-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 row-span-2">
          <img 
            src={images[0]} 
            alt="Gallery preview" 
            className="w-full h-full object-cover rounded-2xl aspect-square"
          />
        </div>
        <img 
          src={images[1]} 
          alt="Gallery preview" 
          className="w-full object-cover rounded-2xl aspect-square"
        />
        <img 
          src={images[2]} 
          alt="Gallery preview" 
          className="w-full object-cover rounded-2xl aspect-square"
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-5 py-3 border-t border-border/30">
        {["heart", "share", "download"].map((icon) => (
          <button key={icon} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {icon === "heart" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
              {icon === "share" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />}
              {icon === "download" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />}
            </svg>
          </button>
        ))}
      </div>
    </motion.div>
    <motion.div 
      className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-xl p-5 w-52"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="text-sm font-medium text-foreground mb-2">Gallery Stats</div>
      <div className="flex gap-4 text-center">
        <div>
          <div className="text-2xl font-serif text-primary">248</div>
          <div className="text-xs text-muted-foreground">Photos</div>
        </div>
        <div>
          <div className="text-2xl font-serif text-primary">12</div>
          <div className="text-xs text-muted-foreground">Downloads</div>
        </div>
      </div>
    </motion.div>
  </div>
);

// AI Search mockup
export const AISearchMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-3xl shadow-2xl p-6 max-w-lg overflow-hidden"
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
            className="relative aspect-square rounded-xl overflow-hidden"
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
      className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-xl p-4"
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

// Calendar/Cards mockup for studio management
export const CardsMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <div className="space-y-4 max-w-sm">
      {["Wedding Shoot", "Portrait Session", "Contract Review"].map((event, i) => (
        <motion.div 
          key={i} 
          className="bg-card rounded-2xl shadow-xl p-5 flex items-center gap-5"
          style={{ transform: `translateX(${i * 25}px)` }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: i * 25 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
            <img src={images[i % images.length]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground">{event}</h4>
            <p className="text-sm text-muted-foreground">
              {["Jun 15, 2024", "Jun 18, 2024", "Jun 22, 2024"][i]}
            </p>
          </div>
          <span className={`w-3 h-3 rounded-full ${
            i === 0 ? "bg-green-500" : i === 1 ? "bg-amber-500" : "bg-primary"
          }`} />
        </motion.div>
      ))}
    </div>
    <motion.div 
      className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-xl p-5 w-60"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="text-sm font-medium text-foreground mb-4">June 2024</div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="text-muted-foreground py-1 font-medium">{d}</span>
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <span 
            key={i} 
            className={`py-1 rounded-full transition-colors ${
              [14, 17, 21].includes(i) 
                ? "bg-primary text-primary-foreground font-medium" 
                : "text-foreground hover:bg-muted"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
);

// Directory mockup
export const DirectoryMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <motion.div 
      className="bg-card rounded-3xl shadow-2xl p-6 max-w-lg overflow-hidden"
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
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors"
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
      className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3"
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
          className="bg-card rounded-2xl shadow-xl overflow-hidden"
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
      className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl p-4"
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
      className="bg-card rounded-3xl shadow-2xl overflow-hidden max-w-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img src={images[0]} alt="" className="w-full h-64 object-cover" />
        <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-3">
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
            className={`p-3 rounded-xl transition-colors ${
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
      className="bg-card rounded-3xl shadow-2xl p-6 max-w-lg overflow-hidden"
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
            className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
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
      className="absolute -bottom-6 -right-6 bg-green-500 text-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
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
      className="bg-card rounded-3xl shadow-2xl overflow-hidden max-w-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-muted/30 px-5 py-4 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-background/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
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
              className="w-full aspect-square object-cover rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div 
      className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="font-medium text-foreground">Gallery Shared!</p>
        <p className="text-sm text-muted-foreground">Client notified via email</p>
      </div>
    </motion.div>
  </div>
);

// Component to render the correct mockup based on type
export const FeatureMockup = ({ type, images }: { type: string; images: string[] }) => {
  switch (type) {
    case "grid":
      return <GalleryGridMockup images={images} />;
    case "search":
      return <AISearchMockup images={images} />;
    case "cards":
      return <CardsMockup images={images} />;
    case "directory":
      return <DirectoryMockup images={images} />;
    case "community":
      return <CommunityMockup images={images} />;
    case "edit":
      return <EditMockup images={images} />;
    case "security":
      return <SecurityMockup images={images} />;
    case "browser":
      return <BrowserMockup images={images} />;
    default:
      return <GalleryGridMockup images={images} />;
  }
};
