"use client";

import { motion } from "framer-motion";

export default function About() {
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
          À Propos
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.section variants={item}>
            <h2 className="text-2xl font-semibold mb-4">Parcours Professionnel</h2>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold">Responsable Transit et Douane</h3>
                <p className="text-muted-foreground">PORTEO BENIN | Février 2024 - Présent</p>
                <p className="mt-2">
                  Chargé du suivi des opérations de Transit et de Douane du groupe.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold">Chef Transit</h3>
                <p className="text-muted-foreground">Elohim Transit</p>
                <p className="mt-2">
                  Gestion des opérations de transit et coordination d'équipe.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold">Stagiaire Assistant</h3>
                <p className="text-muted-foreground">ATRAL BENIN</p>
                <p className="mt-2">
                  Service de régularisation Transit.
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section variants={item}>
            <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-lg leading-relaxed bg-card p-6 rounded-lg hover:shadow-lg transition-all"
            >
              Fort d'une double expertise en transit international et en psychologie sociale,
              je propose une approche unique combinant gestion logistique et accompagnement humain.
              Ma compréhension approfondie des enjeux douaniers et ma capacité à gérer les aspects
              psychologiques du monde professionnel me permettent d'offrir un service complet
              et personnalisé à mes clients.
            </motion.p>
          </motion.section>

          <motion.section variants={item}>
            <h2 className="text-2xl font-semibold mb-4">Vision</h2>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-lg leading-relaxed bg-card p-6 rounded-lg hover:shadow-lg transition-all"
            >
              Mon objectif est d'apporter une valeur ajoutée significative aux entreprises
              en combinant expertise technique en transit et approche humaine. Je m'engage
              à faciliter les opérations internationales tout en veillant au bien-être
              et au développement professionnel des équipes.
            </motion.p>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
}