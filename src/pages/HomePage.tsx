import React from 'react';
import Layout from '../components/layout/Layout';

// Section "Hero" avec le formulaire de suivi
const HeroSection = () => (
  <section className="bg-accent text-white">
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Envoyez vos colis partout en Afrique, en toute confiance.
      </h1>
      <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
        Suivez votre colis en temps réel avec votre numéro de suivi.
      </p>
      <form className="flex justify-center max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Entrez votre code de suivi (ex: AFR12345)"
          className="w-full px-6 py-3 rounded-l-button text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 px-8 rounded-r-button hover:bg-primary-dark transition-colors"
        >
          Suivre
        </button>
      </form>
    </div>
  </section>
);

// Une carte pour la section "Comment ça marche"
const HowItWorksCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-8 rounded-card shadow-subtle text-center">
    <div className="bg-accent/10 w-16 h-16 rounded-full mx-auto mb-6"></div>
    <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

// Section "Comment ça marche ?"
const HowItWorksSection = () => (
  <section className="bg-neutral-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
        Comment ça marche ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HowItWorksCard
          title="1. Publiez votre annonce"
          description="Décrivez votre colis, ajoutez une photo et proposez un prix. C'est simple et rapide."
        />
        <HowItWorksCard
          title="2. Choisissez un voyageur"
          description="Recevez des propositions de voyageurs vérifiés et choisissez celle qui vous convient le mieux."
        />
        <HowItWorksCard
          title="3. Suivez et confirmez"
          description="Payez en toute sécurité, suivez votre colis et confirmez la réception pour libérer le paiement."
        />
      </div>
    </div>
  </section>
);

// Une carte pour une annonce de colis
const ShipmentCard = ({ from, to, price }: { from: string; to: string; price: number }) => (
    <div className="bg-white rounded-card shadow-subtle overflow-hidden group">
        <div className="bg-neutral-200 h-40 w-full"></div>
        <div className="p-4">
            <h4 className="font-bold text-neutral-900 truncate group-hover:text-primary">Colis de {from} à {to}</h4>
            <p className="text-sm text-neutral-400">Proposé par un utilisateur vérifié</p>
            <p className="text-right font-extrabold text-lg text-primary mt-2">{price} FCFA</p>
        </div>
    </div>
);

// Section "Annonces Récentes"
const RecentShipmentsSection = () => (
    <section className="bg-white py-20">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
                Dernières annonces de colis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ShipmentCard from="Dakar" to="Abidjan" price={15000} />
                <ShipmentCard from="Cotonou" to="Lomé" price={5000} />
                <ShipmentCard from="Yaoundé" to="Douala" price={3000} />
                <ShipmentCard from="Bamako" to="Ouaga" price={8000} />
            </div>
         </div>
    </section>
);


export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <RecentShipmentsSection />
    </Layout>
  );
};

export default HomePage;
