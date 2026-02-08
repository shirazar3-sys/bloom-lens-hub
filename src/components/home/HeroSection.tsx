import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
const features = ["Galleries", "Print Store", "Marketing Automations", "Slideshows", "Blogs", "AI Search"];
const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Main headline */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] tracking-tight text-foreground">
            Creat mooments  Share memories
            <br />
            <span className="text-primary/80"></span>
          </h1>
        </motion.div>

        {/* Animated features ticker */}

        {/* CTA Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
          className="mb-20"
        >
          <Button variant="hero" size="lg" className="font-medium">
            Start Free
          </Button>
        </motion.div>

        {/* Photo collage */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.9 + i * 0.1,
                  duration: 0.5,
                }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 || i === 5 ? "col-span-1 md:col-span-1" : "col-span-1"}`}
              >
                <div className="aspect-[3/4]">
                  <img
                    src={photo}
                    alt={`Wedding photography ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
export default HeroSection;
