/**
 * Script utilitaire pour optimiser et convertir vos originaux haute définition
 * en formats légers modernes (WebP / AVIF) adaptés au web.
 *
 * Utilisation (nécessite l'outil libre sharp) :
 * 1. npm install -D sharp
 * 2. node scripts/optimize-images.mjs
 */

import fs from 'fs';
import path from 'path';

console.log(`
===========================================================
Procédure d'optimisation d'images pour Roddy AGBO Portfolio
===========================================================
1. Vos fichiers originaux doivent être placés dans :
   public/images/projects/[nom-du-projet]/
   
2. Règles de dimensions recommandées :
   - Grande couverture (Film / Galerie) : largeur 1600px à 1920px (qualité 85%)
   - Vignettes et planches (Livres / BD) : largeur 1200px (qualité 85%)
   - Poids cible : < 150 Ko par image pour un chargement instantané sur mobile.

3. Si vous préférez un outil en ligne simple sans commande :
   - Utilisez le site gratuit https://squoosh.app/
   - Glissez vos JPG/PNG, choisissez "WebP", réglez la largeur, et téléchargez.
===========================================================
`);
