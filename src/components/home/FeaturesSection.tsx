import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    description: "The next generation of professional gallery delivery! Create stunning, branded galleries that showcase your work and delight your clients with an exceptional viewing experience.",
    cta: "Explore Galleries",
    images: [photo1, photo2, photo3, photo4],
    mockupType: "grid" as const,
  },
  {
    title: "Smart Calendar",
    description: "Manage your shoots, sessions, and deadlines with an intuitive calendar system. Never miss a booking and keep your schedule organized effortlessly.",
    cta: "View Calendar",
    images: [photo5, photo6, photo1],
    mockupType: "cards" as const,
  },
  {
    title: "Client Portal",
    description: "Keep all client information organized with detailed profiles and communication history. Build stronger relationships with a seamless client experience.",
    cta: "Learn More",
    images: [photo2, photo3, photo4, photo5],
    mockupType: "browser" as const,
  },
];

const GalleryGridMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    {/* Main gallery grid mockup */}
    <div className="bg-card rounded-2xl shadow-xl p-4 max-w-lg">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 row-span-2">
          <img 
            src={images[0]} 
            alt="Gallery preview" 
            className="w-full h-full object-cover rounded-xl aspect-square"
          />
        </div>
        <img 
          src={images[1]} 
          alt="Gallery preview" 
          className="w-full object-cover rounded-xl aspect-square"
        />
        <img 
          src={images[2]} 
          alt="Gallery preview" 
          className="w-full object-cover rounded-xl aspect-square"
        />
      </div>
      {/* Action bar */}
      <div className="flex items-center justify-center gap-4 mt-4 py-2 border-t border-border/50">
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      </div>
    </div>
    {/* Floating search card */}
    <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 w-48">
      <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1.5 mb-3">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-xs text-muted-foreground">Search faces...</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[photo1, photo2, photo3].map((img, i) => (
          <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-background shadow-sm">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CardsMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    {/* Stacked event cards */}
    <div className="space-y-3 max-w-sm">
      {["Wedding Shoot", "Portrait Session", "Engagement"].map((event, i) => (
        <div 
          key={i} 
          className="bg-card rounded-xl shadow-lg p-4 flex items-center gap-4"
          style={{ transform: `translateX(${i * 20}px)` }}
        >
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
            <img src={images[i % images.length]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground text-sm">{event}</h4>
            <p className="text-xs text-muted-foreground">
              {["Jun 15, 2024", "Jun 18, 2024", "Jun 22, 2024"][i]}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-green-500" : i === 1 ? "bg-amber-500" : "bg-primary"
            }`} />
          </div>
        </div>
      ))}
    </div>
    {/* Floating calendar widget */}
    <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-xl p-4 w-56">
      <div className="text-sm font-medium text-foreground mb-3">June 2024</div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="text-muted-foreground py-1">{d}</span>
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <span 
            key={i} 
            className={`py-1 rounded-full ${
              [14, 17, 21].includes(i) 
                ? "bg-primary text-primary-foreground" 
                : "text-foreground"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BrowserMockup = ({ images }: { images: string[] }) => (
  <div className="relative">
    {/* Browser window mockup */}
    <div className="bg-card rounded-2xl shadow-xl overflow-hidden max-w-lg">
      {/* Browser header */}
      <div className="bg-muted/50 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground">
          gallery.yourbrand.com
        </div>
      </div>
      {/* Browser content */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border/50">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={images[0]} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground">Sarah & James</h4>
            <p className="text-xs text-muted-foreground">Wedding Collection</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt="" 
              className="w-full aspect-square object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
    {/* Floating notification */}
    <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">Gallery Shared!</p>
        <p className="text-xs text-muted-foreground">Client notified via email</p>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32">
      {features.map((feature, index) => {
        const isReversed = index % 2 === 1;
        
        return (
          <div 
            key={feature.title}
            className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-secondary/20" : "bg-background"}`}
          >
            <div className="container mx-auto px-6">
              <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
                {/* Text content */}
                <div className="flex-1 max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 py-6 text-base font-medium group"
                  >
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Visual mockup */}
                <div className="flex-1 flex justify-center">
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturesSection;
