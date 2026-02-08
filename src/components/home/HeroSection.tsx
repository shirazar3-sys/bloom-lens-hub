import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-fade-up animation-delay-100">
              <span className="block">
                <span className="text-[#3B3129]">Create</span> <span className="text-[#D8CBB5]">moments</span>
              </span>
              <span className="block">
                <span className="text-[#3B3129]">Share</span> <span className="text-[#D8CBB5]">memories</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              The all-in-one platform for photographers to share galleries, manage events, handle contracts, and grow
              their business — all in one elegant space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                See How It Works
              </Button>
            </div>

            <p className="text-sm text-muted-foreground animate-fade-up animation-delay-400">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Right content - Photo Grid Collage */}
          <div>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* Top row - 2 larger images */}
              <div
                className="relative col-span-1 rounded-2xl overflow-hidden aspect-[4/3] opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards] translate-y-4 group cursor-pointer"
                style={{ animationFillMode: "forwards" }}
              >
                <img
                  src={photo1}
                  alt="Photography session"
                  className="w-full h-full object-cover transition-all duration-500 sepia-[.25] saturate-[.85] brightness-[1.02] contrast-[.95] group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div
                className="relative col-span-1 rounded-2xl overflow-hidden aspect-[4/3] opacity-0 animate-[fade-in_0.6s_ease-out_0.35s_forwards] translate-y-4 group cursor-pointer"
                style={{ animationFillMode: "forwards" }}
              >
                <img
                  src={photo2}
                  alt="Studio setup"
                  className="w-full h-full object-cover transition-all duration-500 sepia-[.25] saturate-[.85] brightness-[1.02] contrast-[.95] group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Bottom row - 3 smaller images */}
              <div className="col-span-2 grid grid-cols-3 gap-3 lg:gap-4">
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] opacity-0 animate-[fade-in_0.6s_ease-out_0.5s_forwards] translate-y-4 group cursor-pointer"
                  style={{ animationFillMode: "forwards" }}
                >
                  <img
                    src={photo3}
                    alt="Wedding photography"
                    className="w-full h-full object-cover transition-all duration-500 sepia-[.25] saturate-[.85] brightness-[1.02] contrast-[.95] group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] opacity-0 animate-[fade-in_0.6s_ease-out_0.65s_forwards] translate-y-4 group cursor-pointer"
                  style={{ animationFillMode: "forwards" }}
                >
                  <img
                    src={photo4}
                    alt="Portrait photography"
                    className="w-full h-full object-cover transition-all duration-500 sepia-[.25] saturate-[.85] brightness-[1.02] contrast-[.95] group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] opacity-0 animate-[fade-in_0.6s_ease-out_0.8s_forwards] translate-y-4 group cursor-pointer"
                  style={{ animationFillMode: "forwards" }}
                >
                  <img
                    src={photo5}
                    alt="Camera lens"
                    className="w-full h-full object-cover transition-all duration-500 sepia-[.25] saturate-[.85] brightness-[1.02] contrast-[.95] group-hover:scale-105 group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
