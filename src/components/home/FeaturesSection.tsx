import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import gallery images for mockups
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";

const features = [
  {
    title: "Beautiful Galleries",
    subtitle: "THE NEXT GENERATION OF GALLERY DELIVERY",
    description: "Create stunning, branded galleries that showcase your work and delight your clients with an exceptional viewing experience.",
    cta: "Explore Galleries",
    images: [photo1, photo2, photo3, photo4],
    mockupType: "grid" as const,
  },
  {
    title: "Smart Calendar",
    subtitle: "EFFORTLESS SCHEDULING",
    description: "Manage your shoots, sessions, and deadlines with an intuitive calendar system. Never miss a booking and keep your schedule organized effortlessly.",
    cta: "View Calendar",
    images: [photo5, photo6, photo1],
    mockupType: "cards" as const,
  },
  {
    title: "Client Portal",
    subtitle: "SEAMLESS CLIENT EXPERIENCE",
    description: "Keep all client information organized with detailed profiles and communication history. Build stronger relationships with a seamless client experience.",
    cta: "Learn More",
    images: [photo2, photo3, photo4, photo5],
    mockupType: "browser" as const,
  },
];

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const GalleryGridMockup = ({ images }: { images: string[] }) => (
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
      <div className="flex items-center gap-2 border border-border/50 rounded-full px-4 py-2 mb-4">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm text-muted-foreground">Search faces...</span>
      </div>
      <div className="flex gap-2">
        {[photo1, photo2, photo3].map((img, i) => (
          <div key={i} className="w-11 h-11 rounded-full overflow-hidden border-2 border-background shadow-md">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const CardsMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    <div className="space-y-4 max-w-sm">
      {["Wedding Shoot", "Portrait Session", "Engagement"].map((event, i) => (
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

const BrowserMockup = ({ images }: { images: string[] }) => (
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

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      {features.map((feature, index) => {
        const isReversed = index % 2 === 1;
        
        return (
          <div 
            key={feature.title}
            className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-secondary/20" : "bg-background"}`}
          >
            <div className="container mx-auto px-6">
              <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-24`}>
                {/* Text content */}
                <AnimatedSection className="flex-1 max-w-xl text-center lg:text-left">
                  <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                    {feature.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-[1.1]">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {feature.description}
                  </p>
                  <Button 
                    variant="hero"
                    size="lg" 
                    className="rounded-full px-10 py-6 text-base font-medium group"
                  >
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </AnimatedSection>
                
                {/* Visual mockup */}
                <AnimatedSection className="flex-1 flex justify-center">
                  <div className="relative">
                    {feature.mockupType === "grid" && (
                      <GalleryGridMockup images={feature.images} />
                    )}
                    {feature.mockupType === "cards" && (
                      <CardsMockup images={feature.images} />
                    )}
                    {feature.mockupType === "browser" && (
                      <BrowserMockup images={feature.images} />
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturesSection;
