"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      variants={container}
      className="bg-muted/50 mt-auto"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>email@example.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+229 01 96 14 32 89</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span>Cotonou, Bénin</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="space-y-2">
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/competences" className="hover:text-primary transition-colors">
                  Compétences
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/a-propos" className="hover:text-primary transition-colors">
                  À Propos
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold">Réseaux Sociaux</h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-primary text-primary-foreground p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-primary text-primary-foreground p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={item}
          className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Armel KOSSI LALOU. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}