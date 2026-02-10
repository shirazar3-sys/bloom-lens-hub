import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="block">
              <img src={logo} alt="LensFlow" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/60 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg mb-6">{t.footer.product}</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.features}</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">{t.footer.pricingLink}</Link></li>
              <li><Link to="/gallery" className="hover:text-background transition-colors">{t.footer.galleryDemo}</Link></li>
              <li><Link to="/calendar" className="hover:text-background transition-colors">{t.footer.calendar}</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg mb-6">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.about}</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.blog}</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.careers}</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.contact}</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg mb-6">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.privacyPolicy}</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.termsOfService}</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">{t.footer.cookiePolicy}</Link></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-10 border-t border-background/10 text-center text-sm text-background/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>{t.footer.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
