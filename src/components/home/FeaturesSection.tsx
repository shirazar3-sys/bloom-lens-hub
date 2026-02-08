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

        );
      })}
    </section>
  );
};

export default FeaturesSection;
