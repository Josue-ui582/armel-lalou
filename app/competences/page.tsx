"use client";

import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Competences() {
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

  const competences = {
    transit: [
      "Déclaration en douane",
      "Gestion des véhicules neufs et d'occasion",
      "Export et réexportation de marchandises",
      "Suivi complet des opérations douanières",
      "Coordination d'activités de transit",
      "Régularisation des documents",
    ],
    psychologie: [
      "Accompagnement psychologique",
      "Soutien et écoute active",
      "Gestion des conflits",
      "Orientation professionnelle",
      "Médiation en entreprise",
      "Développement personnel",
    ],
    gestion: [
      "Coordination d'équipe",
      "Suivi des opérations",
      "Gestion de projets",
      "Relations clients",
      "Documentation administrative",
      "Formation du personnel",
    ],
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
          Mes Compétences
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6">Transit & Douane</h2>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-3">
                {competences.transit.map((comp, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </motion.div>
                    <span>{comp}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6">Psychologie</h2>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-3">
                {competences.psychologie.map((comp, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </motion.div>
                    <span>{comp}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6">Gestion & Administration</h2>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-3">
                {competences.gestion.map((comp, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </motion.div>
                    <span>{comp}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}