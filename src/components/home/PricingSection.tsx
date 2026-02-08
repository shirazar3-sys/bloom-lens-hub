import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    monthlyPrice: "0",
    yearlyPrice: "0",
    description: "Perfect to try and explore",
    popular: false,
    cta: "Start Free",
    features: [
      "3 active galleries",
      "5GB storage",
      "7 days retention",
      "Mobile-friendly galleries",
      "Password protection",
      "Basic watermark",
    ],
    notIncluded: [
      "Photo editing",
      "Custom branding",
      "AI features",
      "Priority support",
    ],
  },
  {
    name: "Starter",
    monthlyPrice: "69",
    yearlyPrice: "55",
    description: "For beginner photographers",
    popular: false,
    cta: "Choose Starter",
    features: [
      "5 active galleries",
      "30GB storage",
      "30 days retention",
      "Mobile-friendly galleries",
      "Password protection",
      "Basic watermark",
      "Photo editing tools",
      "Branding (logo & colors)",
      "Original JPG download",
    ],
    notIncluded: [
      "AI Search",
      "Face Recognition",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "119",
    yearlyPrice: "99",
    description: "Best value for most photographers",
    popular: true,
    cta: "Choose Pro",
    features: [
      "10 active galleries",
      "100GB storage",
      "90 days retention",
      "Everything in Starter",
      "AI Search (5,000/mo)",
      "Face Recognition",
      "Custom domain",
      "Team collaboration",
      "Export reports",
    ],
    notIncluded: [
      "24h priority support",
    ],
  },
  {
    name: "Studio",
    monthlyPrice: "199",
    yearlyPrice: "159",
    description: "For studios & professionals",
    popular: false,
    cta: "Choose Studio",
    features: [
      "Unlimited galleries",
      "500GB storage",
      "180 days retention",
      "Everything in Pro",
      "AI Search (10,000/mo)",
      "Client management (CRM)",
      "White-label solution",
      "API access",
      "24h priority support",
    ],
    notIncluded: [],
  },
];

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
            Plans That{" "}
            <span className="relative">
              <span className="relative z-10">Grow</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,8 Q25,0 50,8 T100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            {" "}With You
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get it all — client galleries, studio manager, print store — at a price that fits your business.
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-3xl overflow-hidden ${
                plan.popular 
                  ? 'bg-foreground text-background ring-4 ring-primary/20' 
                  : 'bg-background border border-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 py-2 bg-primary text-center">
                  <span className="text-xs font-bold tracking-wide text-primary-foreground uppercase flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`p-7 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Name */}
                <h3 className={`text-xl font-serif mb-1 ${plan.popular ? 'text-background' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-serif ${plan.popular ? 'text-background' : 'text-foreground'}`}>
                      ₪{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== "0" && (
                      <span className={`text-sm ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}>
                        /mo
                      </span>
                    )}
                  </div>
                  {isYearly && plan.monthlyPrice !== "0" && (
                    <p className={`text-xs mt-1 ${plan.popular ? 'text-background/50' : 'text-muted-foreground'}`}>
                      Billed ₪{parseInt(plan.yearlyPrice) * 12}/year
                    </p>
                  )}
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? "secondary" : "outline"}
                  className={`w-full rounded-xl py-5 mb-6 font-medium ${
                    plan.popular 
                      ? 'bg-background text-foreground hover:bg-background/90' 
                      : ''
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
                
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-background/20' : 'bg-primary/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-background' : 'text-primary'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-background/90' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-background/10' : 'bg-muted'
                      }`}>
                        <X className={`w-3 h-3 ${plan.popular ? 'text-background/40' : 'text-muted-foreground/40'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-background/40' : 'text-muted-foreground/50'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <Button variant="link" className="text-primary font-medium">
            Compare all features →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
