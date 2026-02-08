import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            GOT QUESTIONS?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about LensFlow.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-0 rounded-2xl px-8 shadow-lg data-[state=open]:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-xl hover:no-underline py-7 [&[data-state=open]>svg]:rotate-45">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-7 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
