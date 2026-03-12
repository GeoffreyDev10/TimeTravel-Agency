Documentation Technique — TimeTravel Agency
1. Architecture du projet

Le projet TimeTravel Agency est une webapp interactive composée de deux parties principales :

Frontend : interface utilisateur et interactions

Backend : serveur permettant de communiquer avec l’API d’intelligence artificielle

Architecture générale
Utilisateur
     │
     ▼
Interface Web (HTML / CSS / JavaScript)
     │
     ▼
Requête HTTP
     │
     ▼
Serveur Node.js (Express)
     │
     ▼
API OpenRouter (modèle IA)
     │
     ▼
Réponse IA générée
     │
     ▼
Affichage dans le chatbot

Le frontend envoie les messages de l’utilisateur au serveur Node.js.
Le serveur transmet ensuite la requête à l’API d’intelligence artificielle et renvoie la réponse générée à l’interface utilisateur.

2. Organisation du code

La structure du projet est organisée de la manière suivante :

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
    │   ├── paris.jpg
    │   ├── italie.jpg
    │   └── prehistoire.jpg
    │
    └── js
        ├── timeagency-data.js
        └── timeagency-quiz.js
Rôle des fichiers

index.html
Structure principale du site.

style.css
Gestion du design, des animations et du responsive design.

script.js
Logique principale du site :

animations

interactions utilisateur

gestion du chatbot

appels au backend

server.js
Serveur Node.js permettant :

de recevoir les messages du chatbot

de communiquer avec l’API OpenRouter

de renvoyer les réponses générées par l’IA

timeagency-data.js
Contient les données liées aux destinations temporelles.

timeagency-quiz.js
Gère la logique du quiz interactif.

3. Fonctionnement du chatbot

Le chatbot est conçu comme un assistant conversationnel spécialisé dans les voyages temporels.

Étapes de fonctionnement

L’utilisateur écrit un message dans l’interface du chatbot.

Le message est envoyé au serveur via une requête HTTP.

Le serveur transmet la requête à l’API OpenRouter.

Le modèle d’intelligence artificielle génère une réponse.

La réponse est renvoyée au site et affichée dans le chatbot.

Limitation des réponses

Pour éviter des réponses trop longues :

une limite de tokens maximum est appliquée

le prompt système demande des réponses courtes (3–4 phrases)

Cela permet de conserver une interface lisible.

4. Prompt système utilisé

Le chatbot est configuré avec un prompt système permettant de définir son comportement.

Exemple de prompt utilisé :

Tu es le Concierge Temporel de TimeTravel Agency.

Tu aides les visiteurs à choisir une destination parmi :

- Paris 1889
- Florence 1504
- Crétacé -65 millions d'années

Règles :

- Réponds toujours en français
- Réponses courtes (3 à 4 phrases maximum)
- Ton immersif et professionnel
- Conseille les destinations selon les préférences de l'utilisateur
- Reste cohérent avec l'univers de l'agence de voyage temporel

Ce prompt permet au modèle de rester cohérent avec l’univers narratif du projet.

5. Technologies utilisées
Frontend

HTML5

CSS3

JavaScript

Bibliothèques utilisées :

Three.js pour certains effets visuels

animations CSS

Backend

Node.js

Express

Le serveur agit comme une passerelle entre l’interface et l’IA.

Intelligence artificielle

L’agent conversationnel utilise :

OpenRouter API

Cette API permet d’accéder à différents modèles d’IA conversationnels open source.

Fonctions principales du chatbot :

répondre aux questions

recommander des destinations

simuler un concierge de voyage temporel

6. Utilisation de l’IA dans le projet

L’intelligence artificielle a été utilisée pour :

assistance au développement du code

génération de certaines images du site

intégration du chatbot conversationnel

amélioration de l’expérience utilisateur

L’IA n’est pas utilisée pour remplacer la logique du projet, mais comme outil d’assistance et d’interaction.

7. Limites du projet

Certaines limitations existent :

les destinations sont fictives

le chatbot ne possède pas de mémoire longue

aucune réservation réelle n’est possible

Le projet est une démonstration interactive.

8. Objectifs pédagogiques

Ce projet permet de démontrer :

l’intégration d’une intelligence artificielle dans une application web

la création d’une interface interactive immersive

la communication entre frontend et backend

l’utilisation d’API externes dans un projet web

9. Conclusion

TimeTravel Agency combine :

design immersif

interactions utilisateur

intelligence artificielle conversationnelle

Le projet illustre comment une IA peut être intégrée dans une webapp pour améliorer l’expérience utilisateur et proposer des interactions personnalisées.

Sources et outils utilisés

OpenRouter API

Node.js

Express

JavaScript

CSS

HTML

assistance IA pour le développement

génération d’images par IA


---