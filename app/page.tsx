"use client";

import { ArrowRight, Truck, Users, Brain, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import lalou from '../images/lalou.jpg'
import Image from 'next/image';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-10 flex md:flex-row gap-8 flex-col md:gap-0 items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-center break-words"
          >
            Transit & Psychologie Professionnelle
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-primary"
          >
            Armel KOSSI LALOU
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Expert en transit international et accompagnement psychologique professionnel
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/contact" className="z-40">
                <Button size="sm">
                  Contactez-moi <ArrowRight className="ml-2 h-4 w-4 animate-slide" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/competences" className="z-40">
                <Button variant="outline" size="sm">
                  Mes Compétences
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Image
          src={lalou}
          alt="Hero Image"
          className="rounded-lg "
        />
        </motion.div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Mes Services
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <Truck className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Transit International</h3>
              <p className="text-muted-foreground">
                Gestion complète des opérations douanières et transit international
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Psychologie Professionnelle</h3>
              <p className="text-muted-foreground">
                Accompagnement et soutien psychologique en milieu professionnel
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Gestion des Conflits</h3>
              <p className="text-muted-foreground">
                Résolution de conflits et orientation professionnelle
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}