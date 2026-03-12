# TimeTravel Agency — Webapp Interactive

## Présentation du projet

**TimeTravel Agency** est une webapp immersive simulant une agence de voyage temporel fictive.  
L'utilisateur peut explorer différentes destinations historiques et interagir avec un assistant conversationnel intelligent pour obtenir des conseils de voyage à travers les époques.

Ce projet a été réalisé dans le cadre d’un **travail supervisé sur l’intégration d’outils d’intelligence artificielle dans une application web interactive**.

L’objectif est de proposer une expérience immersive combinant :

- une interface visuelle dynamique
- des interactions utilisateur
- un assistant conversationnel alimenté par une intelligence artificielle

---

# Destinations disponibles

L’agence propose trois destinations temporelles principales.

## Paris 1889 — La Belle Époque

Immersion dans l’atmosphère de l’Exposition Universelle et de la naissance de la Tour Eiffel.

Cette période représente :
- l’innovation technologique
- l’effervescence culturelle
- l’élégance de la Belle Époque

---

## Florence 1504 — La Renaissance

Découverte de l’âge d’or artistique italien.

L'utilisateur peut explorer :
- l’environnement artistique de la Renaissance
- l’architecture florentine
- le contexte intellectuel de l’époque

---

## Crétacé — 65 millions d’années

Expédition immersive dans les derniers jours de l’ère des dinosaures.

Cette destination propose :
- une expérience de safari temporel
- l’observation de la faune préhistorique
- un environnement naturel spectaculaire

---

# Fonctionnalités principales

La webapp inclut plusieurs fonctionnalités interactives.

## Interface immersive

- design cinématographique
- animations visuelles
- transitions dynamiques
- ambiance futuriste

---

## Exploration des destinations

Les utilisateurs peuvent :

- consulter des cartes de destinations
- ouvrir des popups détaillées
- visualiser des images immersives

---

## Quiz interactif

Un quiz intégré permet de suggérer une destination adaptée au profil du visiteur.

Le système analyse les réponses pour proposer l’époque la plus cohérente avec les préférences de l’utilisateur.

---

## Assistant conversationnel IA

Un chatbot est intégré dans l’interface.

Il permet :

- de poser des questions sur les destinations
- de recevoir des recommandations personnalisées
- d’obtenir des informations historiques

Les réponses sont générées dynamiquement via un modèle d’intelligence artificielle.

---

## Responsive Design

L’interface est compatible avec plusieurs formats :

- ordinateur
- tablette
- smartphone

Le site s’adapte automatiquement à la taille de l’écran.

---

# Technologies utilisées

## Frontend

- HTML5
- CSS3
- JavaScript

Bibliothèques :

- **Three.js** pour certains effets visuels
- animations CSS personnalisées

---

## Backend

- **Node.js**
- **Express**

Le serveur backend permet de gérer la communication entre la webapp et l’API d’intelligence artificielle.

---

## Intelligence artificielle

Le chatbot utilise **OpenRouter API**, qui permet d'accéder à différents modèles d’IA conversationnels open source.

Fonctions du chatbot :

- recommandations de destinations
- réponses aux questions des utilisateurs
- interaction conversationnelle contextuelle

Les réponses sont volontairement limitées en longueur afin d'améliorer la lisibilité dans l’interface.

---

# Structure du projet
TimeTravel_Agency
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── .env
│
└── assets
│
├── images
│ ├── paris.jpg
│ ├── italie.jpg
│ └── prehistoire.jpg
│
└── js
├── timeagency-data.js
└── timeagency-quiz.js

---

# Installation du projet

## Prérequis

- Node.js installé
- npm installé

---

## Installation des dépendances

Dans le dossier du projet :
npm install

---

## Configuration de l'API

Créer un fichier `.env` à la racine du projet.

OPENROUTER_API_KEY=votre_cle_api

---

## Lancer le serveur
npm start

Le serveur du chatbot sera accessible à l’adresse suivante :
http://localhost:3000


---

## Lancer le site

Ouvrir le fichier `index.html` avec **Live Server** ou un serveur local.

Exemple :
http://localhost:5500


---

# Utilisation

L’utilisateur peut :

1. explorer les destinations temporelles
2. ouvrir les fiches détaillées
3. répondre au quiz interactif
4. interagir avec le concierge temporel
5. recevoir des recommandations personnalisées

---

# Utilisation de l’intelligence artificielle

L’intelligence artificielle a été utilisée pour :

- assistance à la génération de code
- génération de certaines images
- intégration d’un chatbot conversationnel

Le chatbot utilise un modèle accessible via **OpenRouter** et est configuré avec un prompt système afin de rester cohérent avec l’univers narratif de l’agence.

---

# Objectif pédagogique

Ce projet vise à démontrer :

- l’intégration d’une IA conversationnelle dans une webapp
- la création d’une interface interactive immersive
- l’utilisation combinée de technologies frontend et backend

---

# Auteur

Projet réalisé dans le cadre d’un travail académique sur l’intégration de l’intelligence artificielle dans les interfaces web interactives.