import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const addonKeys = ["customBranding", "aiPhotoCulling", "advancedSecurity", "multiLanguage"] as const;
const addonIcons = [Palette, Zap, Shield, Globe];
const addonPrices = ["15", "25", "10", "20"];

const AddonsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            {t.addons.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            {t.addons.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.addons.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {addonKeys.map((key, index) => {
            const Icon = addonIcons[index];
            const addon = t.addons.items[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 bg-card rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-serif text-foreground mb-3">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">
                      {addon.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-serif text-foreground">${addonPrices[index]}</span>
                      <span className="text-muted-foreground">{t.pricing.perMonth}</span>
                    </div>
                    <Button variant="outline" className="w-full rounded-full">
                      {t.addons.addToPlan}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddonsSection;
