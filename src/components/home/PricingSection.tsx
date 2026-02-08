import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for photographers just getting started",
    features: [
      "5 client galleries",
      "2GB storage",
      "Basic calendar",
      "Email support",
      "Branded sharing links",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing photography businesses",
    features: [
      "Unlimited galleries",
      "50GB storage",
      "Advanced calendar & booking",
      "Contract templates",
      "Invoice & payments",
      "Priority support",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Studio",
    price: "149",
    description: "For established studios and teams",
    features: [
      "Everything in Professional",
      "500GB storage",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "White-label solution",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            PRICING PLANS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`relative border-0 rounded-3xl overflow-hidden h-full ${
                  plan.popular 
                    ? "bg-foreground text-background shadow-2xl scale-105" 
                    : "bg-card shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-accent rounded-full flex items-center gap-1.5 text-sm font-medium text-accent-foreground shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-2 pt-10">
                  <h3 className={`text-2xl font-serif ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-2 ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}>
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="text-center px-8 pb-10">
                  <div className="my-8">
                    <span className={`text-6xl font-serif ${
                      plan.popular ? "text-background" : "text-foreground"
                    }`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                      /month
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-10 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? "bg-background/20" : "bg-primary/10"
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.popular ? "text-background" : "text-primary"
                          }`} />
                        </div>
                        <span className={`text-sm ${
                          plan.popular ? "text-background/90" : "text-foreground"
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "secondary" : "hero"}
                    className="w-full rounded-full py-6"
                    size="lg"
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
