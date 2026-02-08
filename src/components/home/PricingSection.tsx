import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

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
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative border-0 ${
                plan.popular 
                  ? "bg-foreground text-background shadow-xl scale-105" 
                  : "bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full flex items-center gap-1 text-sm font-medium text-accent-foreground">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <h3 className={`text-xl font-serif font-semibold ${
                  plan.popular ? "text-background" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.popular ? "text-background/70" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="my-6">
                  <span className={`text-5xl font-serif font-bold ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}>
                    ${plan.price}
                  </span>
                  <span className={plan.popular ? "text-background/70" : "text-muted-foreground"}>
                    /month
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-primary" : "bg-primary/10"
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? "text-primary-foreground" : "text-primary"
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
                  className="w-full"
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
