import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Zap, Shield, Globe } from "lucide-react";

const addons = [
  {
    icon: Palette,
    name: "Custom Branding",
    price: "15",
    description: "Remove LensFlow branding and use your own logo, colors, and domain.",
  },
  {
    icon: Zap,
    name: "AI Photo Culling",
    price: "25",
    description: "Let AI help you select the best shots from thousands of images.",
  },
  {
    icon: Shield,
    name: "Advanced Security",
    price: "10",
    description: "Watermarking, download protection, and advanced access controls.",
  },
  {
    icon: Globe,
    name: "Multi-language",
    price: "20",
    description: "Present galleries in multiple languages for international clients.",
  },
];

const AddonsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Power up with add-ons
          </h2>
          <p className="text-muted-foreground text-lg">
            Extend your platform with premium features tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {addons.map((addon) => (
            <Card key={addon.name} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <addon.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {addon.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 min-h-[3rem]">
                  {addon.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-serif font-bold text-foreground">${addon.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddonsSection;
