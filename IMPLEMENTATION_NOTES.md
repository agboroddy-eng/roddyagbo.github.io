# Implémentation du portfolio — Roddy AGBO

## Intégrations réalisées

- Nouvelle page `Services` en français et en anglais.
- Navigation mise à jour : Projets, Boutique, Services, À propos, Contact.
- Hero enrichi avec disponibilité, CTA vers les projets et CTA contact.
- Catégories séparées : Illustration, Animation 2D, Storyboard & Visual Development, Direction artistique.
- `L'art ou la rue` et `Carte AFIA` classés en Animation 2D.
- `L'art ou la rue` classé aussi en Direction artistique et Storyboard & Visual Development.
- Projet `ESCAPE` ajouté dans `src/content/projects/escape.json` en brouillon, en attente de visuel/vidéo.
- Dona et Tom et Le 1er Extraterrestre regroupés dans la fiche éditoriale Armand Dan Éditions.
- Références éditoriales ajoutées pour Holyca Group / Cyrille AMETEPE et Maceo Ouitona.
- Adresse e-mail, WhatsApp, LinkedIn, Instagram et Facebook configurés.
- Logiciels ajoutés : Clip Studio Paint, TVPaint, Photoshop, After Effects, Premiere Pro.
- Boutique passée en mode pré-lancement : les produits incomplets ne sont plus publiés et la page explique que les visuels et informations sont en préparation.
- Sitemap statique ajouté dans `public/sitemap.xml`.
- Image Open Graph de secours corrigée vers le portrait existant.
- Ancien projet storyboard avec visuel de remplacement passé en brouillon.

## Publier ESCAPE

Quand le visuel est disponible :

1. Ajouter les images dans `public/images/projects/escape/`.
2. Modifier `src/content/projects/escape.json`.
3. Passer `"status": "draft"` à `"status": "published"`.
4. Ajouter le teaser MP4 dans `public/videos/projects/escape/` si nécessaire.
5. Relancer `npm run build`.

## Ouvrir la boutique

Quand les visuels, tarifs, prestataire, délais et liens de paiement sont prêts :

1. Renseigner les fichiers de `src/content/products/`.
2. Passer `published` à `true` pour les produits prêts.
3. Ajouter les vrais visuels dans `public/images/products/`.
4. Configurer les liens FedaPay.
5. Vérifier livraison, retours et conditions avant publication commerciale.
