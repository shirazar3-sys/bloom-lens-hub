import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/home/PricingSection";
import AddonsSection from "@/components/home/AddonsSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PricingSection />
        <AddonsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
