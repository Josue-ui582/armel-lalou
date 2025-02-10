'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <div className="flex items-center gap-6">
      {/* Menu mobile */}
      <div
        className={`fixed inset-0 bg-black text-white gap-5 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          <X className="h-6 w-6" />
        </button>

        <Link href="/" className="block text-2xl hover:text-primary transition-colors">
          Accueil
        </Link>
        <Link href="/competences" className="block text-2xl hover:text-primary transition-colors">
          Compétences
        </Link>
        <Link href="/a-propos" className="block text-2xl hover:text-primary transition-colors">
          À Propos
        </Link>
        <Link href="/contact" className="block text-2xl hover:text-primary transition-colors">
          Contact
        </Link>
      </div>

      {/* Bouton de menu mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-xl"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Menu desktop */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-primary transition-colors">
          Accueil
        </Link>
        <Link href="/competences" className="hover:text-primary transition-colors">
          Compétences
        </Link>
        <Link href="/a-propos" className="hover:text-primary transition-colors">
          À Propos
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    </div>
  );
};