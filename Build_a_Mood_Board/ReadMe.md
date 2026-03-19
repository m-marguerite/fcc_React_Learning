# 📝 Build a Mood Board

Une application React interactive qui affiche un tableau d'ambiance visuel (mood board) composé de cartes illustrées avec des images et des descriptions thématiques de destinations.

## 🚀 Fonctionnalités

- Affichage d'un mood board structuré en grille de 3 colonnes via CSS Grid
- Rendu dynamique de chaque carte grâce à un composant React réutilisable (`MoodBoardItem`)
- Personnalisation individuelle de chaque carte : couleur de fond, image et texte descriptif passés via des `props`
- Images chargées depuis une URL externe (CDN FreeCodeCamp)
- Mise en page responsive avec espacement et ombres CSS pour un rendu soigné

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- [npm](https://www.npmjs.com/) v9 ou supérieur (inclus avec Node.js)

## 📂 Structure du projet

```
build_a_mood_board/
│
├── index.html                  # Point d'entrée HTML — monte l'app React sur <div id="root">
│
├── vite.config.js              # Configuration de Vite avec le plugin React
├── eslint.config.js            # Règles ESLint pour les fichiers .js et .jsx
├── package.json                # Dépendances et scripts npm du projet
│
├── src/
│   ├── main.jsx                # Point d'entrée React — initialise le rendu avec StrictMode
│   ├── App.jsx                 # Composant racine — importe et rend <MoodBoard />
│   ├── index.css               # Styles globaux — fond de page, grille et cartes du mood board
│   ├── App.css                 # Styles du template Vite (non utilisés dans le projet final)
│   │
│   └── components/
│       ├── MoodBoard.jsx       # Composant principal — titre + grille des 3 cartes MoodBoardItem
│       └── MoodBoardItem.jsx   # Composant de carte — reçoit color, image et description en props
│
└── README.md                   # Documentation du projet
```

## 🛠️ Technologies utilisées

- **React 19** — Bibliothèque UI pour la création de composants déclaratifs
- **Vite 8** — Outil de build ultra-rapide avec Hot Module Replacement (HMR)
- **JSX** — Syntaxe d'extension JavaScript pour écrire du HTML dans les composants React
- **CSS3** — Mise en forme avec CSS Grid, Flexbox, box-shadow et object-fit
- **ESLint** — Linter pour garantir la qualité et la cohérence du code

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/m-marguerite/build_a_mood_board.git

# 2. Se déplacer dans le dossier du projet
cd build_a_mood_board

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:5173`

### Autres commandes disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement avec HMR |
| `npm run build` | Génère les fichiers de production dans `/dist` |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Analyse le code avec ESLint |

## 🎯 Objectif pédagogique

Ce projet illustre les bases fondamentales de React à travers un cas concret :

- **Création et composition de composants** : `App` orchestre `MoodBoard`, qui lui-même instancie plusieurs `MoodBoardItem`
- **Passage de données via les `props`** : chaque carte reçoit sa couleur, son image et sa description comme propriétés
- **Séparation des responsabilités** : chaque composant a un rôle unique et clairement défini
- **Styling dynamique inline** : la propriété `backgroundColor` est appliquée directement via l'attribut `style` de React
- **Mise en page CSS Grid** : organisation visuelle des cartes en grille responsive à 3 colonnes

## 📧 Contact

Auteur : **m-marguerite**  
Projet réalisé dans le cadre du cursus [Certified Full Stack Developer — FreeCodeCamp](https://www.freecodecamp.org/learn/full-stack-developer/)
