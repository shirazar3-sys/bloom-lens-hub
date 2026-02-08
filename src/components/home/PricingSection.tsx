import { Button } from "@/components/ui/button";
import { Check, X, Eye, Camera, Zap, Crown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Free",
    subtitle: "First Experience",
    price: "0",
    bestFor: "Try and explore galleries",
    icon: Eye,
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
    popular: false,
    resources: [
      { name: "3 active galleries", included: true },
      { name: "5GB storage", included: true },
      { name: "10GB monthly traffic", included: true },
      { name: "7 days retention", included: true },
    ],
    features: [
      { name: "Mobile-friendly gallery", included: true },
      { name: "Public gallery link", included: true },
      { name: "Password protection", included: true },
      { name: "View only", included: true },
      { name: "Regular quality download", included: true },
      { name: "Basic watermark", included: true },
      { name: "Original JPG download", included: false },
      { name: "Photo editing", included: false },
      { name: "Custom watermark", included: false },
      { name: "Branding (logo & colors)", included: false },
      { name: "AI Search", included: false },
      { name: "Face Recognition", included: false },
      { name: "Custom domain", included: false },
      { name: "Team / multiple users", included: false },
      { name: "Client management (CRM)", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Starter",
    subtitle: "For beginner photographers",
    price: "69",
    bestFor: "A few events per month",
    icon: Camera,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    popular: false,
    resources: [
      { name: "3 active galleries", included: true },
      { name: "30GB storage", included: true },
      { name: "50GB monthly traffic", included: true },
      { name: "30 days retention", included: true },
    ],
    features: [
      { name: "Mobile-friendly gallery", included: true },
      { name: "Public gallery link", included: true },
      { name: "Password protection", included: true },
      { name: "Regular quality download", included: true },
      { name: "Photo editing", included: true },
      { name: "Branding (logo & colors)", included: true },
      { name: "Basic watermark", included: true },
      { name: "Original JPG download", included: true },
      { name: "Custom watermark", included: false },
      { name: "AI Search", included: false },
      { name: "Face Recognition", included: false },
      { name: "Custom domain", included: false },
      { name: "Team / multiple users", included: false },
      { name: "Client management (CRM)", included: false },
      { name: "Export reports", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    subtitle: "Best value for most photographers",
    price: "119",
    bestFor: "Large events and high views",
    icon: Zap,
    iconBg: "bg-primary",
    iconColor: "text-primary-foreground",
    popular: true,
    resources: [
      { name: "8 active galleries", included: true },
      { name: "80GB storage", included: true },
      { name: "120GB monthly traffic", included: true },
      { name: "90 days retention", included: true },
    ],
    features: [
      { name: "Mobile-friendly gallery", included: true },
      { name: "Public gallery link", included: true },
      { name: "Password protection", included: true },
      { name: "Basic watermark", included: true },
      { name: "Regular quality download", included: true },
      { name: "Photo editing", included: true },
      { name: "Original JPG download", included: true },
      { name: "Branding (logo & colors)", included: true },
      { name: "AI Search (up to 5,000/month)", included: true, ai: true },
      { name: "Face Recognition", included: true, ai: true },
      { name: "Team / multiple users", included: true },
      { name: "Custom domain", included: false },
      { name: "Client management (CRM)", included: false },
      { name: "Export reports", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Studio",
    subtitle: "For studios & professionals",
    price: "199",
    bestFor: "Business & team management",
    icon: Crown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    popular: false,
    resources: [
      { name: "15 active galleries", included: true },
      { name: "150GB storage", included: true },
      { name: "200GB monthly traffic", included: true },
      { name: "180 days retention", included: true },
    ],
    features: [
      { name: "Mobile-friendly gallery", included: true },
      { name: "Public gallery link", included: true },
      { name: "Password protection", included: true },
      { name: "Basic watermark", included: true },
      { name: "Regular quality download", included: true },
      { name: "Photo editing", included: true },
      { name: "Original JPG download", included: true },
      { name: "Branding (logo & colors)", included: true },
      { name: "AI Search (up to 10,000/month)", included: true, ai: true },
      { name: "Face Recognition", included: true, ai: true },
      { name: "Custom domain", included: true },
      { name: "Team / multiple users", included: true },
      { name: "Client management (CRM)", included: true },
      { name: "Export reports", included: true },
      { name: "Priority support (24h response)", included: true },
    ],
  },
];

interface FeatureItem {
  name: string;
  included: boolean;
  ai?: boolean;
}

const FeatureRow = ({ feature }: { feature: FeatureItem }) => (
  <div className="flex items-start gap-2.5 py-1.5">
    {feature.included ? (
      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
    ) : (
      <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
    )}
    <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/60"}`}>
      {feature.name}
      {feature.ai && (
        <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary">
          <Sparkles className="w-2.5 h-2.5 mr-0.5" />
          AI
        </span>
      )}
    </span>
  </div>
);

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            PRICING PLANS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Choose your perfect plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible pricing for every photographer. Start free, upgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5">
                      <Crown className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`h-full bg-background rounded-2xl border ${plan.popular ? 'border-primary shadow-xl' : 'border-border shadow-md'} overflow-hidden`}>
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${plan.iconBg} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${plan.iconColor}`} />
                    </div>
                    
                    {/* Plan name & subtitle */}
                    <h3 className="text-2xl font-serif text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-primary mb-4">{plan.subtitle}</p>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-4xl font-serif text-foreground">₪{plan.price}</span>
                      {plan.price !== "0" && <span className="text-muted-foreground">/ month</span>}
                    </div>
                    
                    {/* Best for */}
                    <p className="text-sm text-muted-foreground mb-6">
                      Best for: {plan.bestFor}
                    </p>
                    
                    {/* Resources */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-muted flex items-center justify-center">
                          <div className="w-2 h-2 rounded-sm bg-muted-foreground/40" />
                        </div>
                        <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Resources</span>
                      </div>
                      <div className="space-y-0.5">
                        {plan.resources.map((resource) => (
                          <FeatureRow key={resource.name} feature={resource} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-muted-foreground/60" />
                        <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Features</span>
                      </div>
                      <div className="space-y-0.5">
                        {plan.features.map((feature) => (
                          <FeatureRow key={feature.name} feature={feature} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="px-6 pb-6">
                    <Button 
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full rounded-xl py-5"
                      size="lg"
                    >
                      {plan.price === "0" ? "Start Free" : `Choose ${plan.name}`}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
