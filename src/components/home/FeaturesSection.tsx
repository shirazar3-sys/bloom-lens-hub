import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { features } from "./features/FeatureData";
import { FeatureMockup } from "./features/FeatureMockups";
import { useLanguage } from "@/i18n/LanguageContext";

const featureKeys = [
  "galleries", "aiSearch", "studioManagement", "photographerIndex",
  "photographerCommunity", "photoEditing", "security",
] as const;

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
  const { t, isRTL } = useLanguage();

  return (
    <section id="features">
      {features.map((feature, index) => {
        const isReversed = index % 2 === 1;
        const bgColor = index % 2 === 0 ? 'bg-background' : 'bg-secondary';
        const ft = t.features[featureKeys[index] as keyof typeof t.features];

        return (
          <div key={feature.id} className={`${bgColor} py-24 md:py-32`}>
            <AnimatedSection className="container mx-auto px-6">
              <div id={feature.id} className="scroll-mt-24">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                  {/* Content */}
                  <div className={`flex-1 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                      {ft?.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                      {ft?.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                      {ft?.description}
                    </p>
                    <Button variant="outline" className="group">
                      {ft?.cta}
                      <ArrowRight className={`ms-2 w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>

                  {/* Mockup */}
                  <div className="flex-1 w-full max-w-lg lg:max-w-none">
                    <FeatureMockup type={feature.mockupType} images={feature.images} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturesSection;
