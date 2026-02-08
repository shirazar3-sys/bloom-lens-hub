import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    monthlyPrice: "0",
    yearlyPrice: "0",
    description: "Try and explore",
    popular: false,
    cta: "Start Free",
  },
  {
    name: "Starter",
    monthlyPrice: "69",
    yearlyPrice: "55",
    description: "For beginners",
    popular: false,
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    monthlyPrice: "119",
    yearlyPrice: "99",
    description: "Best value",
    popular: true,
    cta: "Choose Pro",
  },
  {
    name: "Studio",
    monthlyPrice: "199",
    yearlyPrice: "159",
    description: "For professionals",
    popular: false,
    cta: "Choose Studio",
  },
];

type FeatureValue = boolean | string;

interface FeatureRow {
  name: string;
  values: FeatureValue[];
  isAI?: boolean;
}

interface FeatureCategory {
  category: string;
  features: FeatureRow[];
}

const featureCategories: FeatureCategory[] = [
  {
    category: "Resources",
    features: [
      { name: "Active galleries", values: ["3", "5", "10", "Unlimited"] },
      { name: "Storage", values: ["5GB", "30GB", "100GB", "500GB"] },
      { name: "Monthly traffic", values: ["10GB", "50GB", "150GB", "500GB"] },
      { name: "Retention period", values: ["7 days", "30 days", "90 days", "180 days"] },
    ],
  },
  {
    category: "Gallery Features",
    features: [
      { name: "Mobile-friendly gallery", values: [true, true, true, true] },
      { name: "Public gallery link", values: [true, true, true, true] },
      { name: "Password protection", values: [true, true, true, true] },
      { name: "Download options", values: ["View only", "Regular", "Original JPG", "Original JPG"] },
      { name: "Photo editing tools", values: [false, true, true, true] },
      { name: "Basic watermark", values: [true, true, true, true] },
      { name: "Custom watermark", values: [false, false, true, true] },
    ],
  },
  {
    category: "Branding & Customization",
    features: [
      { name: "Custom logo & colors", values: [false, true, true, true] },
      { name: "Custom domain", values: [false, false, true, true] },
      { name: "White-label solution", values: [false, false, false, true] },
    ],
  },
  {
    category: "AI Features",
    features: [
      { name: "AI Search", values: [false, false, "5,000/mo", "10,000/mo"], isAI: true },
      { name: "Face Recognition", values: [false, false, true, true], isAI: true },
    ],
  },
  {
    category: "Team & Management",
    features: [
      { name: "Team / multiple users", values: [false, false, true, true] },
      { name: "Client management (CRM)", values: [false, false, false, true] },
      { name: "Export reports", values: [false, false, true, true] },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", values: [true, true, true, true] },
      { name: "Priority support", values: [false, false, false, "24h response"] },
      { name: "Dedicated account manager", values: [false, false, false, true] },
    ],
  },
];

const FeatureCell = ({ value, isAI }: { value: FeatureValue; isAI?: boolean }) => {
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
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="text-sm font-medium text-foreground">{value}</span>
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
            Compare Plans
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Find the perfect plan for your photography business
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-1 px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
              >
                Save 20%
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
              {/* Header with Plans */}
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 bg-muted/30 w-[240px] sticky left-0 z-10">
                    <span className="text-sm font-medium text-muted-foreground">Features</span>
                  </th>
                  {plans.map((plan) => (
                    <th 
                      key={plan.name} 
                      className={`p-6 text-center ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted/30'}`}
                    >
                      {plan.popular && (
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="text-xs font-semibold uppercase tracking-wide">Most Popular</span>
                        </div>
                      )}
                      <div className={`text-xl font-serif mb-1 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {plan.name}
                      </div>
                      <div className={`text-sm mb-3 ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {plan.description}
                      </div>
                      <div className="mb-4">
                        <span className={`text-3xl font-serif ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                          ₪{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice !== "0" && (
                          <span className={`text-sm ${plan.popular ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                            /mo
                          </span>
                        )}
                      </div>
                      <Button 
                        variant={plan.popular ? "secondary" : "outline"}
                        size="sm"
                        className={`w-full rounded-lg ${plan.popular ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Feature Rows */}
              <tbody>
                {featureCategories.map((category, catIndex) => (
                  <>
                    {/* Category Header */}
                    <tr key={category.category} className="border-b border-border">
                      <td 
                        colSpan={5} 
                        className="p-4 bg-secondary/50 sticky left-0"
                      >
                        <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
                          {category.category}
                        </span>
                      </td>
                    </tr>
                    
                    {/* Features in Category */}
                    {category.features.map((feature, featureIndex) => (
                      <tr 
                        key={feature.name} 
                        className={`border-b border-border/50 ${
                          featureIndex % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                        }`}
                      >
                        <td className="p-4 sticky left-0 bg-inherit">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-foreground">{feature.name}</span>
                            {feature.isAI && (
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary">
                                <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                                AI
                              </span>
                            )}
                          </div>
                        </td>
                        {feature.values.map((value, i) => (
                          <td 
                            key={i} 
                            className={`p-4 ${plans[i]?.popular ? 'bg-primary/5' : ''}`}
                          >
                            <FeatureCell value={value} isAI={feature.isAI} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
              
              {/* Footer with CTAs */}
              <tfoot>
                <tr className="border-t border-border">
                  <td className="p-6 bg-muted/30 sticky left-0"></td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className={`p-6 text-center ${plan.popular ? 'bg-primary/5' : ''}`}
                    >
                      <Button 
                        variant={plan.popular ? "hero" : "outline"}
                        className="w-full rounded-xl"
                      >
                        {plan.cta}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          
          {/* Scroll hint for mobile */}
          <div className="mt-4 text-center xl:hidden">
            <span className="text-xs text-muted-foreground">
              ← Scroll horizontally to see all plans →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
