# BASH – Site e-commerce d'outillage

Bienvenue sur **BASH**, un site e-commerce moderne de vente d'outillage, d'accessoires et de pièces détachées.

## 🔧 Fonctionnalités principales
- Présentation des produits avec images
- Panier d'achat avec ajout/suppression de produits
- Espace professionnel (inscription avec numéro SIRET)
- Page de conditions générales de vente (CGV)
- Formulaire de réclamation client

## 🚀 Démarrage local

1. Cloner le dépôt :
```bash
git clone https://github.com/MTLCI-2/bash.git
cd bash
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

## 🌐 Déploiement GitHub Pages

1. Construire le site :
```bash
npm run build
```

2. Déployer :
```bash
npm run deploy
```

Le site sera disponible à : [https://mtlci-2.github.io/bash](https://mtlci-2.github.io/bash)

## 📁 Structure des dossiers
```
projet-flavio/
├── public/
│   └── images/         # Images des produits (ex: perceuse.jpg, cle-choc.jpg...)
├── src/
│   ├── App.jsx         # Composant principal React
│   └── ...             # Autres composants ou pages
├── vite.config.js
├── package.json
└── README.md
```

## 📸 Images
Place les images des produits dans `public/images/`.

## 📫 Contact / Support
Pour toute réclamation, utilise la page dédiée dans le menu de navigation du site.

---
© BASH - 2025
