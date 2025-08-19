import React from 'react';

// Pour l'instant, le logo est du texte, mais il pourrait être remplacé par un composant SVG.
const Logo = () => (
  <a href="/" className="text-2xl font-bold text-accent">
    Africage
  </a>
);

// Liens de navigation principaux
const NavLinks = () => (
  <nav className="hidden md:flex items-center gap-8">
    <a href="#" className="text-neutral-700 hover:text-primary transition-colors">
      Envoyer un colis
    </a>
    <a href="#" className="text-neutral-700 hover:text-primary transition-colors">
      Transporter un colis
    </a>
    <a href="#" className="text-neutral-700 hover:text-primary transition-colors">
      Aide
    </a>
  </nav>
);

// Boutons d'action pour la connexion et l'inscription
const ActionButtons = () => (
  <div className="flex items-center gap-4">
    <button className="text-neutral-700 font-medium hover:text-primary transition-colors">
      Connexion
    </button>
    <button className="bg-primary text-white font-bold py-2 px-4 rounded-button hover:bg-primary-dark transition-colors shadow-sm">
      S'inscrire
    </button>
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <NavLinks />
          <ActionButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
