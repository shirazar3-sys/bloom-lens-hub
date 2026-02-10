import { Button } from "@/components/ui/button";
import { Check, Sparkles, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/i18n/LanguageContext";

type FeatureValue = boolean | string;

const planKeys = ["free", "starter", "pro", "studio"] as const;

const planPrices = {
  free: { monthly: "0", yearly: "0" },
  starter: { monthly: "69", yearly: "55" },
  pro: { monthly: "119", yearly: "99" },
  studio: { monthly: "199", yearly: "159" },
};

const popularPlan = "pro";

interface FeatureRow {
  nameKey: string;
  values: FeatureValue[];
  isAI?: boolean;
}

interface FeatureCategory {
  categoryKey: string;
  features: FeatureRow[];
}

const featureCategories: FeatureCategory[] = [
  {
    categoryKey: "resources",
    features: [
      { nameKey: "activeGalleries", values: ["3", "5", "10", "unlimited"] },
      { nameKey: "storage", values: ["5GB", "30GB", "100GB", "500GB"] },
      { nameKey: "monthlyTraffic", values: ["10GB", "50GB", "150GB", "500GB"] },
      { nameKey: "retentionPeriod", values: ["7 days", "30 days", "90 days", "180 days"] },
    ],
  },
  {
    categoryKey: "galleryFeatures",
    features: [
      { nameKey: "mobileFriendlyGallery", values: [true, true, true, true] },
      { nameKey: "publicGalleryLink", values: [true, true, true, true] },
      { nameKey: "passwordProtection", values: [true, true, true, true] },
      { nameKey: "downloadOptions", values: ["viewOnly", "regular", "originalJPG", "originalJPG"] },
      { nameKey: "photoEditingTools", values: [false, true, true, true] },
      { nameKey: "basicWatermark", values: [true, true, true, true] },
      { nameKey: "customWatermark", values: [false, false, true, true] },
    ],
  },
  {
    categoryKey: "brandingCustomization",
    features: [
      { nameKey: "customLogoColors", values: [false, true, true, true] },
      { nameKey: "customDomain", values: [false, false, true, true] },
      { nameKey: "whiteLabelSolution", values: [false, false, false, true] },
    ],
  },
  {
    categoryKey: "aiFeatures",
    features: [
      { nameKey: "aiSearch", values: [false, false, "5,000/mo", "10,000/mo"], isAI: true },
      { nameKey: "faceRecognition", values: [false, false, true, true], isAI: true },
    ],
  },
  {
    categoryKey: "teamManagement",
    features: [
      { nameKey: "teamMultipleUsers", values: [false, false, true, true] },
      { nameKey: "clientManagement", values: [false, false, false, true] },
      { nameKey: "exportReports", values: [false, false, true, true] },
    ],
  },
  {
    categoryKey: "support",
    features: [
      { nameKey: "emailSupport", values: [true, true, true, true] },
      { nameKey: "prioritySupport", values: [false, false, false, "24hResponse"] },
      { nameKey: "dedicatedAccountManager", values: [false, false, false, true] },
    ],
  },
];

const FeatureCell = ({ value, isAI, t }: { value: FeatureValue; isAI?: boolean; t: any }) => {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-primary" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <Minus className="w-4 h-4 text-muted-foreground/30" />
      </div>
    );
  }
  // Translate known string values
  const translatedValue = t.pricing.featureValues[value as string] ?? value;
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="text-sm font-medium text-foreground">{translatedValue}</span>
      {isAI && (
        <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-primary/10 text-primary">
          <Sparkles className="w-2.5 h-2.5" />
        </span>
      )}
    </div>
  );
};

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t.pricing.description}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {t.pricing.monthly}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {t.pricing.yearly}
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ms-1 px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
              >
                {t.pricing.save20}
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-lg">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-6 bg-muted/30 w-[240px] sticky start-0 z-10">
                    <span className="text-sm font-medium text-muted-foreground">{t.pricing.featuresLabel}</span>
                  </th>
                  {planKeys.map((key) => {
                    const plan = t.pricing.plans[key];
                    const prices = planPrices[key];
                    const isPopular = key === popularPlan;
                    return (
                      <th
                        key={key}
                        className={`p-6 text-center ${isPopular ? 'bg-primary text-primary-foreground' : 'bg-muted/30'}`}
                      >
                        {isPopular && (
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span className="text-xs font-semibold uppercase tracking-wide">{t.pricing.mostPopular}</span>
                          </div>
                        )}
                        <div className={`text-xl font-serif mb-1 ${isPopular ? 'text-primary-foreground' : 'text-foreground'}`}>
                          {plan.name}
                        </div>
                        <div className={`text-sm mb-3 ${isPopular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                          {plan.description}
                        </div>
                        <div className="mb-4">
                          <span className={`text-3xl font-serif ${isPopular ? 'text-primary-foreground' : 'text-foreground'}`}>
                            ₪{isYearly ? prices.yearly : prices.monthly}
                          </span>
                          {prices.monthly !== "0" && (
                            <span className={`text-sm ${isPopular ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                              {t.pricing.perMonth}
                            </span>
                          )}
                        </div>
                        <Button
                          variant={isPopular ? "secondary" : "outline"}
                          size="sm"
                          className={`w-full rounded-lg ${isPopular ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
                        >
                          {plan.cta}
                        </Button>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {featureCategories.map((category) => (
                  <>
                    <tr key={category.categoryKey} className="border-b border-border">
                      <td colSpan={5} className="p-4 bg-secondary/50 sticky start-0">
                        <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                          {t.pricing.categories[category.categoryKey as keyof typeof t.pricing.categories]}
                        </span>
                      </td>
                    </tr>

                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={feature.nameKey}
                        className={`border-b border-border/50 ${featureIndex % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
                      >
                        <td className="p-4 sticky start-0 bg-inherit">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-foreground">
                              {t.pricing.featureNames[feature.nameKey as keyof typeof t.pricing.featureNames]}
                            </span>
                            {feature.isAI && (
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary">
                                <Sparkles className="w-2.5 h-2.5 me-0.5" />
                                AI
                              </span>
                            )}
                          </div>
                        </td>
                        {feature.values.map((value, i) => (
                          <td
                            key={i}
                            className={`p-4 ${planKeys[i] === popularPlan ? 'bg-primary/5' : ''}`}
                          >
                            <FeatureCell value={value} isAI={feature.isAI} t={t} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>

              <tfoot>
                <tr className="border-t border-border">
                  <td className="p-6 bg-muted/30 sticky start-0"></td>
                  {planKeys.map((key) => {
                    const plan = t.pricing.plans[key];
                    const isPopular = key === popularPlan;
                    return (
                      <td key={key} className={`p-6 text-center ${isPopular ? 'bg-primary/5' : ''}`}>
                        <Button
                          variant={isPopular ? "hero" : "outline"}
                          className="w-full rounded-xl"
                        >
                          {plan.cta}
                        </Button>
                      </td>
                    );
                  })}
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-4 text-center xl:hidden">
            <span className="text-xs text-muted-foreground">
              {t.pricing.scrollHint}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
