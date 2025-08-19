
# Spécifications des Services Tiers et Clés d'API - Africage

## 1. Introduction

Ce document a pour objectif de lister tous les services externes (tiers) dont l'application Africage dépend pour fonctionner. Il spécifie le rôle de chaque service et les clés d'API ou variables d'environnement nécessaires pour s'y connecter.

La gestion sécurisée de ces clés est de la plus haute importance. **Aucune clé secrète ne doit jamais être commitée dans le dépôt de code source (Git).**

## 2. Principes de Gestion des Clés d'API

1.  **Variables d'Environnement :** Toutes les clés d'API, URL de services et autres configurations sensibles seront gérées via des variables d'environnement.
2.  **Fichier `.env` local :** Pour le développement local, chaque développeur maintiendra un fichier `.env` à la racine du projet. Ce fichier est personnel et ne doit pas être partagé ou versionné.
3.  **Fichier `.env.example` :** Un fichier `Africage/.env.example` sera maintenu dans le dépôt de code. Il servira de modèle pour la création du fichier `.env` et listera toutes les variables requises, mais avec des valeurs vides ou fictives.
4.  **Environnements de Production/Staging :** Dans les environnements de déploiement (staging, production), ces variables seront configurées directement au niveau de la plateforme d'hébergement (ex: Vercel, Netlify, Heroku, AWS).

## 3. Liste des Services Tiers et Variables Requises

### Service 1 : Supabase
*   **Rôle :** Fournisseur principal pour le "Backend-as-a-Service" (BaaS).
    *   **Authentification :** Gestion complète des utilisateurs (inscription, connexion, gestion de session via JWT, connexion via des fournisseurs tiers comme Google/Facebook).
    *   **Base de Données :** Hébergement de notre base de données PostgreSQL, sur laquelle s'appuie notre schéma détaillé.
    *   **Storage :** Stockage sécurisé des fichiers uploadés par les utilisateurs (photos de profil, photos des colis, documents KYC).
*   **Variables d'Environnement Requises :**
    *   `SUPABASE_URL`: L'URL unique de votre projet Supabase.
    *   `SUPABASE_ANON_KEY`: La clé publique ("anonymous key") utilisée côté client (navigateur, application mobile) pour interagir avec l'API de Supabase en toute sécurité.

*   **Clé Secrète (Backend Uniquement) :**
    *   `SUPABASE_SERVICE_ROLE_KEY`: La clé de service ("service role key"). **Cette clé est extrêmement sensible.** Elle permet de contourner toutes les règles de sécurité (Row Level Security) de la base de données. Elle ne doit être utilisée que dans un environnement backend sécurisé pour des tâches administratives spécifiques et ne jamais être exposée côté client.

### Service 2 : Service d'Envoi de SMS (pour la vérification et les notifications)
*   **Rôle :** Essentiel pour la confiance et la communication.
    *   Vérification du numéro de téléphone lors de l'inscription via un code à usage unique (OTP - One-Time Password).
    *   Envoi de notifications critiques par SMS (ex: "Votre colis a été accepté", "Votre colis est en transit").
*   **Fournisseur Recommandé :** Twilio
*   **Variables d'Environnement Requises :**
    *   `TWILIO_ACCOUNT_SID`: L'identifiant de votre compte Twilio.
    *   `TWILIO_AUTH_TOKEN`: Le jeton d'authentification de votre compte Twilio (clé secrète).
    *   `TWILIO_PHONE_NUMBER`: Le numéro de téléphone Twilio que vous utiliserez pour envoyer les SMS.

### Service 3 : Service d'Envoi d'Emails Transactionnels
*   **Rôle :** Communication formelle et automatisée avec les utilisateurs.
    *   Email de bienvenue.
    *   Procédure de réinitialisation de mot de passe.
    *   Notifications importantes et récapitulatifs de transaction.
*   **Note :** Supabase peut s'intégrer avec des fournisseurs SMTP. Il est recommandé d'utiliser un service dédié pour une meilleure délivrabilité.
*   **Fournisseur Recommandé :** SendGrid
*   **Variables d'Environnement Requises :**
    *   `SENDGRID_API_KEY`: Votre clé d'API SendGrid (clé secrète).
    *   `FROM_EMAIL`: L'adresse email qui apparaîtra comme expéditeur (ex: `no-reply@africage.com`).

### Service 4 (Optionnel au lancement) : Service de Géocodage et Cartographie
*   **Rôle :** Améliorer l'expérience utilisateur pour la gestion des adresses.
    *   Autocomplétion des adresses de départ et de destination.
    *   Convertir une adresse en coordonnées GPS (latitude, longitude).
    *   Afficher une carte pour visualiser le trajet.
*   **Fournisseur Recommandé :** Google Maps Platform ou Mapbox
*   **Variables d'Environnement Requises (si Google Maps) :**
    *   `GOOGLE_MAPS_API_KEY`: Votre clé d'API pour la plateforme Google Maps.

## 4. Fichier `.env.example` de Référence

Voici à quoi ressemblera le fichier `Africage/.env.example` à la racine du projet.

```plaintext
# Supabase Configuration
# Get these from your Supabase project settings
SUPABASE_URL=
SUPABASE_ANON_KEY=

# This key is for backend admin tasks ONLY. Do not expose it in the client.
SUPABASE_SERVICE_ROLE_KEY=

# Twilio for SMS notifications
# Get these from your Twilio console
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# SendGrid for transactional emails
# Get this from your SendGrid settings
SENDGRID_API_KEY=
FROM_EMAIL=no-reply@africage.com

# Google Maps for Geocoding and Maps (Optional)
# Get this from Google Cloud Console
GOOGLE_MAPS_API_KEY=
```
