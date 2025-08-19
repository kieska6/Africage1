<a name="_24inth55w14p"></a>Conception

**Africage V1 : Fonctionnalités Essentielles (Envoi de Colis P2P)**

**Module 1 : Gestion des Comptes et Profils Utilisateurs**

1. **Inscription Utilisateur :**
   1. Via numéro de téléphone (avec vérification par code OTP SMS).
   1. Collecte : Nom, Prénom, Mot de passe.
   1. Acceptation des CGU et Politique de Confidentialité.
1. **Connexion Utilisateur :**
   1. Via numéro de téléphone et mot de passe.
   1. Option "Mot de passe oublié" (réinitialisation par SMS).
1. **Profil Utilisateur (Basique) :**
   1. Affichage : Nom, Prénom, Photo (optionnelle au début), Numéro de téléphone (non modifiable directement).
   1. Statut de vérification d'identité (Non vérifié / En cours / Vérifié).
   1. Note moyenne reçue (visible par les autres).
   1. Accès à l'historique de ses transactions (colis envoyés/transportés).
1. **Vérification d'Identité (KYC Niveau 1 - Simplifié pour V1) :**
   1. Possibilité pour l'utilisateur de soumettre une photo de sa pièce d'identité (CNI, Passeport).
   1. Processus de validation manuelle par un administrateur en backend.
   1. Affichage clair du statut de vérification sur le profil. *Objectif : Instaurer un premier niveau de confiance.*

**Module 2 : Fonctionnalités pour l'Expéditeur de Colis**

1. **Création d'une Annonce de Colis :**
   1. Champs obligatoires : Description du colis (texte libre), Catégorie simple (ex: Document, Petit objet, Moyen objet), Photo du colis (obligatoire pour la transparence).
   1. Lieu de départ (saisie ville/quartier, idéalement avec suggestion).
   1. Lieu d'arrivée (saisie ville/quartier, idéalement avec suggestion).
   1. Date souhaitée d'envoi (ou fourchette de dates).
   1. Proposition de prix par l'expéditeur (le voyageur pourra contre-proposer).
1. **Gestion de ses Annonces Colis :**
   1. Voir la liste de ses annonces (actives, en attente de voyageur, en cours de transport, terminées).
   1. Modifier une annonce active (si pas encore de réservation confirmée).
   1. Supprimer/Archiver une annonce.
1. **Recherche de Voyageurs / Trajets Disponibles :**
   1. Recherche par lieu de départ, lieu d'arrivée, date.
   1. Affichage des trajets correspondants publiés par les voyageurs.
   1. Accès au profil public du voyageur (nom, photo, note, statut vérifié).
1. **Faire une Demande à un Voyageur :**
   1. Possibilité d'envoyer une demande de transport pour son colis à un voyageur spécifique via la messagerie interne.

**Module 3 : Fonctionnalités pour le Voyageur (Transporteur de Colis)**

1. **Création d'une Annonce de Trajet :**
   1. Champs obligatoires : Lieu de départ, Lieu d'arrivée.
   1. Date du trajet.
   1. Description libre (ex: "Je voyage léger", "Place dans mon sac à dos").
1. **Gestion de ses Annonces Trajet :**
   1. Voir la liste de ses trajets (actifs, à venir, passés).
   1. Modifier un trajet (si pas encore de réservation confirmée).
   1. Supprimer un trajet.
1. **Recherche de Colis à Transporter :**
   1. Recherche par lieu de départ, lieu d'arrivée, date du trajet.
   1. Affichage des annonces de colis correspondantes.
   1. Accès au profil public de l'expéditeur.
1. **Proposer de Transporter un Colis :**
   1. Possibilité d'envoyer une proposition à un expéditeur pour transporter son colis via la messagerie interne (peut inclure une contre-proposition de prix).

**Module 4 : Gestion de la Transaction et Communication**

1. **Messagerie Interne Sécurisée :**
   1. Permettre la communication entre un expéditeur et un voyageur *uniquement* après une première mise en contact (demande ou proposition).
   1. Historique des messages lié à une transaction spécifique.
   1. Notifications de nouveaux messages.
1. **Système d'Accord / Réservation :**
   1. L'expéditeur peut accepter la proposition d'un voyageur.
   1. Le voyageur peut accepter la demande d'un expéditeur.
   1. Une fois l'accord mutuel, la transaction est "réservée".
1. **Paiement Sécurisé (via PSP intégré - Simulation pour Hackathon) :**
   1. Après accord, l'expéditeur est invité à payer le montant convenu + la commission Africage.
   1. Le paiement est "séquestré" (détenu par le PSP/Africage).
   1. Le voyageur est notifié que le paiement a été effectué et sécurisé.
1. **Confirmation de Prise en Charge :**
   1. Le voyageur confirme avoir physiquement récupéré le colis auprès de l'expéditeur.
   1. L'expéditeur confirme avoir remis le colis.
1. **Confirmation de Livraison :**
   1. L'expéditeur (ou le destinataire final via un code simple si possible en V1, sinon l'expéditeur) confirme que le colis a été livré avec succès.
   1. Cette action déclenche la libération du paiement au voyageur (moins la commission).
1. **Système de Notation et d'Avis (Simple) :**
   1. Après une transaction complétée, l'expéditeur et le voyageur sont invités à se noter mutuellement (ex: 1 à 5 étoiles) et à laisser un bref commentaire.
   1. Les notes sont visibles sur les profils.

**Module 5 : Support et Confiance**

1. **Notifications Push (Basiques) :**
   1. Pour les événements clés : nouveau message, proposition reçue/acceptée, paiement effectué, confirmation de prise en charge/livraison, rappel de notation.
1. **Page d'Aide / FAQ (Statique) :**
   1. Informations de base sur le fonctionnement, la sécurité, la résolution de problèmes courants.
1. **Signalement d'un Problème / Utilisateur (Basique) :**
   1. Possibilité pour un utilisateur de signaler un problème avec une transaction ou un autre utilisateur à l'administrateur (formulaire simple).

**Fonctionnalités Administrateur (Backend - Non visibles par l'utilisateur final mais essentielles) :**

1. **Gestion des Utilisateurs :** Voir la liste, statut KYC, bloquer/débloquer.
1. **Validation KYC :** Interface pour approuver/rejeter les soumissions de pièces d'identité.
1. **Gestion des Litiges (Basique) :** Voir les signalements, intervenir si nécessaire (communication hors app au début), et potentiellement arbitrer le déblocage des fonds.
1. **Configuration des Commissions.**

**Ce qui est DÉLIBÉRÉMENT EXCLU de la V1 (pour rester "Minimum Viable") :**

- Géolocalisation en temps réel du voyageur ou du colis.
- Suggestions de prix automatisées.
- Filtres de recherche avancés.
- Portefeuille (wallet) interne.
- Assurance colis intégrée.
- Fonctionnalités communautaires avancées (forums, groupes).
- Intégration biométrique poussée (prévue pour V2+).
- Toute fonctionnalité liée au transfert d'argent ou à la mobilité.

L'objectif de cette V1 est de valider le concept de base, de tester l'appétence du marché pour l'envoi de colis P2P, de construire une première communauté d'utilisateurs et de recueillir un maximum de feedback pour itérer rapidement.

<a name="_7363bzmfexz8"></a>Differentes pages de la V1

