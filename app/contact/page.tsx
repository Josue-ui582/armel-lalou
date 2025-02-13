"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="container px-4 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contactez-moi
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2
              variants={item}
              className="text-2xl font-semibold mb-6"
            >
              Informations de Contact
            </motion.h2>
            <div className="space-y-4">
              <motion.div
                variants={item}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:golffodogg@yahoo.fr" className="hover:underline">golffodogg@yahoo.fr</a>
              </motion.div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+2290196143289" className="hover:underline">002290196143289</a>
              </motion.div>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span>Cotonou, Bénin</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={item}>
              <Input
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="hover:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={item}>
              <Input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="hover:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={item}>
              <Input
                placeholder="Sujet"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="hover:border-primary transition-colors"
              />
            </motion.div>
            <motion.div variants={item}>
              <Textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="h-32 hover:border-primary transition-colors"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}