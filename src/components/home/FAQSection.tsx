import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
            {t.faq.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.faq.description}
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-0 rounded-2xl px-8 shadow-lg data-[state=open]:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="text-start font-serif text-xl hover:no-underline py-7 [&[data-state=open]>svg]:rotate-45">
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
