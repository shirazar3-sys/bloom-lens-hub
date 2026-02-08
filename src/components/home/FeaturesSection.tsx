import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { features } from "./features/FeatureData";
import { FeatureMockup } from "./features/FeatureMockups";

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

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      {features.map((feature, index) => {
        const isReversed = index % 2 === 1;
        
        return (
          <div 
            key={feature.id}
            id={feature.id}
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
                    <FeatureMockup type={feature.mockupType} images={feature.images} />
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
