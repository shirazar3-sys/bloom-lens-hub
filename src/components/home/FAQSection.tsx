import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You get full access to all features in your chosen plan for 14 days without entering any payment information. At the end of the trial, you can choose to subscribe or your account will be paused.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to new features. When downgrading, changes take effect at your next billing cycle.",
  },
  {
    question: "How do client galleries work?",
    answer: "You can create beautiful, password-protected galleries for each client or event. Clients receive a unique link to view, favorite, and download their photos. You control download permissions, watermarks, and expiration dates.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes! We use enterprise-grade encryption for all data in transit and at rest. Your photos are stored on secure, redundant servers with 99.99% uptime guarantee. We never access or use your photos without permission.",
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes, with our Custom Branding add-on, you can connect your own domain (like gallery.yourname.com) and have clients access galleries under your brand.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for annual plans, bank transfers. All payments are processed securely through Stripe.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about LensFlow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
