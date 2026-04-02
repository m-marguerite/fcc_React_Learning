# 📝 Event RSVP Form

Formulaire de confirmation de présence à un événement, construit avec **React 18** et le hook `useState`.  
L'utilisateur remplit ses informations (nom, e-mail, nombre de participants, préférences alimentaires, invités supplémentaires), soumet le formulaire, et voit immédiatement un récapitulatif de sa réservation s'afficher sur la page — sans rechargement.

---

## 🚀 Fonctionnalités

- **Formulaire contrôlé complet** — chaque champ (`text`, `email`, `number`, `checkbox`) est piloté par son propre état React via `useState`
- **Validation native HTML5** — les champs obligatoires (nom, e-mail, nombre de participants) sont marqués `required` et bloquent la soumission si vides
- **Soumission sans rechargement** — `e.preventDefault()` intercepte l'événement natif du navigateur ; React gère entièrement la mise à jour de l'interface
- **Affichage conditionnel du récapitulatif** — le résumé de réservation (`RSVP Submitted!`) n'apparaît qu'après une soumission valide, grâce au rendu conditionnel `submittedData && (...)`
- **Checkbox booléenne** — le champ *"Bringing additional guests"* utilise `e.target.checked` (et non `e.target.value`) pour mettre à jour un état de type `boolean`
- **Interface responsive et soignée** — mise en page centrée, effets de focus colorés, bouton avec retour visuel au survol et au clic

---

## ⚙️ Prérequis

- Un navigateur moderne (Chrome, Firefox, Edge, Safari) — aucune installation requise
- Une connexion internet active au premier chargement (les CDN React et Babel sont chargés depuis `cdnjs.cloudflare.com`)

---

## 📂 Structure du projet

```
event-rsvp/
│── index.html   # Point d'entrée HTML — charge les CDN et monte le composant React dans #root
│── index.jsx    # Composant React EventRSVPForm — logique d'état, JSX et gestion du formulaire
│── styles.css   # Feuille de styles — mise en forme du formulaire et du récapitulatif
│── README.md    # Documentation du projet
```

---

## 🛠️ Technologies utilisées

- **React 18** — Bibliothèque JavaScript pour la construction d'interfaces utilisateur basées sur des composants
- **JSX** — Syntaxe d'extension de JavaScript permettant d'écrire du HTML directement dans le code React, transpilée à la volée par Babel
- **Babel Standalone 7** — Transpileur JavaScript chargé via CDN ; convertit le JSX en JavaScript standard compréhensible par le navigateur, sans étape de build
- **HTML5** — Structure de la page et déclaration du point de montage React (`<div id="root">`)
- **CSS3** — Mise en forme moderne : flexbox, `box-sizing`, transitions sur `border-color` et `box-shadow`, pseudo-classes `:focus`, `:hover`, `:active`

---

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt sur ta machine locale
git clone https://github.com/m-marguerite/event-rsvp.git

# 2. Se déplacer dans le dossier du projet
cd event-rsvp

# 3. Ouvrir le projet dans VS Code (optionnel)
code .

# 4. Lancer le fichier index.html dans ton navigateur
#    Option A — double-cliquer sur index.html dans l'explorateur de fichiers
#    Option B — utiliser l'extension Live Server dans VS Code :
#               clic droit sur index.html > "Open with Live Server"
```

> ⚠️ **Important :** Ce projet utilise des modules ES (`type="module"` dans Babel).  
> Ouvrir `index.html` directement avec `file://` peut bloquer le chargement du fichier `index.jsx` à cause des restrictions CORS du navigateur.  
> **Il est fortement recommandé d'utiliser un serveur local** (Live Server, `npx serve`, etc.) pour éviter ce problème.

L'application sera accessible à l'adresse : `http://127.0.0.1:5500/index.html` *(avec Live Server)*

### Autres commandes disponibles

| Commande | Description |
|---|---|
| `npx serve .` | Lance un serveur HTTP local simple dans le dossier courant (nécessite Node.js) |
| `python -m http.server 8000` | Autre option de serveur local via Python 3 (accessible sur `http://localhost:8000`) |
| `code .` | Ouvre le projet dans Visual Studio Code |

---

## 🎯 Objectif pédagogique

Ce projet illustre les bases fondamentales de React à travers un cas concret et pratique :

- **`useState` avec plusieurs types de données** : le projet gère simultanément des états de type `string` (nom, e-mail, régime), `number` (nombre de participants) et `boolean` (invités supplémentaires), ce qui permet de comprendre que chaque état est indépendant et mis à jour avec sa propre fonction setter
- **Formulaire contrôlé (*controlled component*)** : chaque `<input>` possède un attribut `value` (ou `checked` pour la checkbox) lié à l'état React, et un `onChange` qui met à jour cet état en temps réel — React devient ainsi la **source unique de vérité** (*single source of truth*) pour les données du formulaire
- **Gestion de la soumission** : `handleSubmit` reçoit l'événement `e`, appelle `e.preventDefault()` pour empêcher le rechargement natif de la page, puis enregistre une copie des données dans un état `submittedData` — déclenchant ainsi un nouveau rendu de React
- **Rendu conditionnel** : `{submittedData && (<div>...</div>)}` est un pattern React classique ; le bloc JSX ne s'affiche que si `submittedData` est différent de `null`, ce qui permet de ne montrer le récapitulatif qu'après la première soumission valide
- **Architecture de composant React** : `EventRSVPForm` est un composant fonctionnel exporté (`export function`), monté dans le DOM via `ReactDOM.createRoot(...).render(...)` — c'est la manière moderne de démarrer une application React 18

---

## 📧 Contact

Auteur : **m-marguerite**  
Projet réalisé dans le cadre du cursus [Certified Full Stack Developer — freeCodeCamp](https://www.freecodecamp.org/learn/full-stack-developer/)  
Lab : [Build an Event RSVP — Front-End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lab-event-rsvp/build-an-event-rsvp)
