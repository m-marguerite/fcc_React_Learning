# 📝 OTP Generator

Application web de génération de mot de passe à usage unique (OTP) avec compte à rebours automatique, construite avec React 18 via CDN.

## 🚀 Fonctionnalités

- Génération d'un code **OTP à 6 chiffres** aléatoires au clic d'un bouton
- **Compte à rebours de 5 secondes** mis à jour chaque seconde via `setInterval`
- **Désactivation automatique** du bouton (`disabled`) pendant la durée de validité du code
- **Nettoyage automatique** de l'interval (`clearInterval`) via la fonction de retour de `useEffect`, pour éviter toute fuite mémoire
- **Message d'expiration** affiché dès que le compteur atteint zéro
- Interface **accessible** grâce à l'attribut `aria-live="assertive"` sur le paragraphe timer

## ⚙️ Prérequis

- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Aucune installation requise — React, ReactDOM et Babel sont chargés via CDN

## 📂 Structure du projet

```
otp-generator/
│── index.html    # Point d'entrée HTML, chargement des CDN et montage du composant React
│── styles.css    # Styles visuels : layout Flexbox, carte centrée, bouton, timer
│── index.jsx     # Composant React OTPGenerator (logique useState / useEffect)
│── README.md     # Documentation du projet
```

## 🛠️ Technologies utilisées

- **React 18** (UMD via CDN) — Composant fonctionnel, gestion de l'état local et des effets de bord
- **JSX** — Syntaxe déclarative pour décrire l'interface utilisateur du composant
- **Babel Standalone** (via CDN) — Transpilation du JSX directement dans le navigateur, sans étape de build
- **HTML5** — Structure de la page et point de montage React (`<div id="root">`)
- **CSS3** — Mise en forme visuelle : centrage Flexbox, card avec `box-shadow`, transitions du bouton

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/m-marguerite/otp-generator.git

# 2. Accéder au dossier du projet
cd otp-generator

# 3. Ouvrir le fichier index.html dans votre navigateur
#    Sous Linux / macOS
open index.html

#    Sous Windows
start index.html
```

> ⚠️ **Important :** certains navigateurs bloquent les modules ES (`type="module"`) quand le fichier est ouvert directement depuis le système de fichiers (`file://`). Si le composant ne s'affiche pas, utilisez un serveur local :

```bash
# Avec l'extension VS Code "Live Server" → clic droit sur index.html → "Open with Live Server"

# Ou avec Python (si installé)
python -m http.server 8080
```

L'application sera accessible à l'adresse : `http://localhost:8080`

### Autres commandes disponibles

| Commande | Description |
|---|---|
| `python -m http.server 8080` | Lance un serveur local Python sur le port 8080 |
| `npx serve .` | Lance un serveur local avec Node.js (nécessite Node installé) |
| `npx http-server .` | Alternative légère à `serve` pour servir des fichiers statiques |

## 🎯 Objectif pédagogique

Ce projet illustre les bases fondamentales de React à travers un cas concret de génération de code temporaire :

- **`useState`** : gestion de deux états distincts — le code OTP généré (`otpCode`) et le compte à rebours (`count`) — pour déclencher un re-render à chaque changement
- **`useEffect`** : démarrage d'un `setInterval` en réaction aux changements d'état, avec `count` en dépendance du tableau `[count]` pour se relancer à chaque seconde
- **Nettoyage d'effets** : la fonction de retour `return () => clearInterval(id)` dans `useEffect` stoppe l'interval précédent avant d'en lancer un nouveau — notion clé pour éviter les fuites mémoire
- **Attribut `disabled`** : verrouillage conditionnel du bouton (`disabled={count > 0}`) pour bloquer les clics pendant la validité du code
- **Accessibilité** : usage de `aria-live="assertive"` sur le `<p>` du timer pour que les lecteurs d'écran annoncent les mises à jour en temps réel

## 📧 Contact

Auteur : **m-marguerite**  
Projet réalisé dans le cadre du cursus [Certified Full Stack Developer — FreeCodeCamp](https://www.freecodecamp.org/learn/full-stack-developer/)  
Lab source : [Build a One-Time Password Generator](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lab-one-time-password-generator/build-a-one-time-password-generator)
