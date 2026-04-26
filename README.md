# Rental Catalog - Real Estate Catalog UI

![React](https://img.shields.io/badge/React-18-61dafb)
![Vite](https://img.shields.io/badge/Vite-8-646cff)
![Router](https://img.shields.io/badge/React_Router-6-ca4245)
![Status](https://img.shields.io/badge/Status-Portfolio_MVP-lightgrey)

## Présentation

Rental Catalog est une application React/Vite de catalogue immobilier. Elle présente une liste d’annonces, une page détail par logement, une page À propos et une page 404.

Le projet reste volontairement simple : il met en avant la structuration d’une interface React, l’usage de React Router, des composants réutilisables et un chargement de données JSON locales.

## Objectif

L’objectif est de transformer une ancienne application d’apprentissage React en projet portfolio lisible, sans changer le concept général ni ajouter de backend artificiel.

Ce dépôt démontre :

- la création d’une SPA React avec Vite ;
- la navigation avec React Router ;
- la composition de composants UI réutilisables ;
- la gestion d’un catalogue local en JSON ;
- la correction d’un flux détail avec loading, erreur et 404 propre ;
- une base saine pour prototyper ensuite des interfaces plus orientées data.

## Aperçu

![Aperçu de l’application](docs/screenshots/app-preview.png)

## Fonctionnalités

- Liste d’annonces immobilières.
- Cartes de logement cliquables.
- Page détail avec galerie, hôte, note, tags, description et équipements.
- Page À propos avec sections déroulantes.
- Page 404 pour les routes invalides et les annonces introuvables.
- Chargement centralisé des données depuis `public/data.json`.

## Stack technique

- React 18
- Vite
- JSX
- React Router DOM
- Font Awesome
- ESLint
- Données JSON locales

## Architecture

```text
.
|-- public/
|   `-- data.json              # Données locales des annonces
|-- src/
|   |-- components/            # Composants UI réutilisables
|   |-- pages/                 # Pages principales
|   |-- pictures/              # Assets visuels
|   |-- services/
|   |   `-- listings.js        # Chargement centralisé des annonces
|   |-- App.jsx                # Routes React
|   `-- App.css                # Styles globaux
|-- docs/screenshots/          # Captures portfolio
|-- package.json
`-- README.md
```

## Données JSON

Les annonces sont chargées depuis :

```text
public/data.json
```

Le service `src/services/listings.js` expose :

- `getListings()`
- `getListingById(id)`

Cette séparation évite de dupliquer la logique de `fetch` dans les pages.

## Installation

```bash
npm install
```

## Commandes

Lancer l’application :

```bash
npm run dev
```

Vérifier le lint :

```bash
npm run lint
```

Créer un build de production :

```bash
npm run build
```

Prévisualiser le build :

```bash
npm run preview
```

## CI

Le workflow GitHub Actions lance :

- `npm ci`
- `npm run lint`
- `npm run build`

## Limites actuelles

- Pas de backend.
- Pas d’authentification.
- Pas de recherche, filtre ou pagination.
- Données statiques, chargées depuis un fichier JSON local.
- Design conservé proche du projet original, avec seulement un nettoyage ciblé.

## Lien avec le prototypage d’interfaces data

Même si ce projet n’est pas une application data, il consolide des bases utiles pour construire des interfaces analytiques : routing, découpage en composants, chargement centralisé des données, états de chargement et gestion propre des erreurs.
