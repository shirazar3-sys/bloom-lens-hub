import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect, useCallback } from "react";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const HeroSection = () => {
  const { t } = useLanguage();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  );

  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-28 pb-16">
      {/* Layered warm background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 30%, hsl(37 30% 90% / 0.9) 0%, transparent 70%),
                          radial-gradient(ellipse 50% 40% at 20% 60%, hsl(26 23% 88% / 0.5) 0%, transparent 60%),
                          radial-gradient(ellipse 50% 40% at 80% 50%, hsl(312 4% 90% / 0.4) 0%, transparent 60%)`
      }} />
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] tracking-tight text-foreground">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <Button variant="hero" size="lg" className="font-medium">
            {t.hero.cta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full"
        >
          <Carousel
            opts={{ align: "center", loop: true }}
            plugins={[autoplayPlugin.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {photos.map((photo, i) => (
                <CarouselItem
                  key={i}
                  className="pl-3 basis-[55%] sm:basis-[33%] md:basis-[22%] lg:basis-[18%]"
                >
                  <div className="relative overflow-hidden rounded group cursor-pointer">
                    <div className="aspect-[3/4]">
                      <img
                        src={photo}
                        alt={`Wedding photography ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-foreground"
                    : "w-2 bg-foreground/25 hover:bg-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default HeroSection;
