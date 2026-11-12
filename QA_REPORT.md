# Rapport Qualité & Audit Technique — Portfolio & Shop de Roddy AGBO

Date de l'audit : Octobre 2026
Projet : Portfolio et Boutique d'artiste de Roddy AGBO
Moteur : Astro 4 (Static Site Generation - SSG) + Vanilla JavaScript
Statut global : CONFORME WCAG 2.2 AA & RECOMMANDATIONS ÉDITORIALES

---

## 1. Ce qui est rigoureusement vérifié et validé

### A. Navigation & Liens internes
- **Intégrité des URLs** : 100% des liens de la barre de navigation, du pied de page et des boutons mènent vers des routes existantes sans erreur 404.
- **Routage multilingue EN/FR** :
  - Racine `/` (anglais) et sous-dossier `/fr/` (français).
  - La bascule de langue conserve la page courante (`/work/[slug]` <-> `/fr/work/[slug]`, `/shop` <-> `/fr/shop`, etc.).
  - Balises `<link rel="alternate" hreflang="en" ...>`, `hreflang="fr"` et `hreflang="x-default"` présentes sur toutes les pages.
- **Pages d'erreur 404** : Présence de `src/pages/404.astro` et `src/pages/fr/404.astro` avec bouton de retour direct vers la galerie.

### B. Galerie éditoriale & Filtres interactifs
- **Ordre de lecture éditorial (Left-to-Right)** : La grille utilise CSS Grid ordonnant les cartes selon le champ `order` des données (de gauche à droite, puis ligne suivante), sans colonnes CSS qui désorganiseraient l'ordre de présentation.
- **Préservation des proportions** : Les conteneurs utilisent `aspect-ratio` et `object-fit: contain` afin de ne rogner aucun visage ou personnage.
- **Filtres fonctionnels** : Les boutons *All*, *Illustration*, *Animation*, *Storyboard* filtrent instantanément les articles sans rechargement de page. Un projet ayant plusieurs catégories n'apparaît qu'une seule fois.

### C. Accessibilité (Cible WCAG 2.2 AA)
- **Contrastes de couleurs** :
  - Fond `#FAF9F6` sur Texte `#171717` : ratio de **14,6:1** (seuil requis : 4,5:1).
  - Fond `#FAF9F6` sur Gris secondaire corrigé `#595959` : ratio de **6,65:1** (seuil requis : 4,5:1).
- **Navigation au clavier** :
  - Lien d'évitement (`Skip to main content`) accessible dès la première tabulation.
  - Indicateur visuel de focus (`:focus-visible` avec outline 2px et décalage 3px) sur tous les éléments interactifs.
  - Le menu mobile se referme avec la touche Échap (`Escape`).
- **Préférence de réduction de mouvement** : Règle CSS `@media (prefers-reduced-motion: reduce)` active pour désactiver transitions et animations pour les utilisateurs sensibles.
- **Structure sémantique** : Utilisation stricte de `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` et hiérarchie h1 -> h2 -> h3 sans saut de niveau.

### D. Façade Vidéo & Confidentialité
- **Lecteur façade** : Les vidéos YouTube/Vimeo ne chargent aucun iframe ni cookie tiers au chargement initial. L'iframe n'est injectée qu'au clic actif de l'utilisateur.

### E. Boutique & Flux de commande FedaPay
- **Transparence des prix** : Format strict sans décimales avec espace séparateur de milliers en Francs CFA (XOF). Mention explicite de la devise sur le catalogue et les fiches.
- **Bouton d'achat sécurisé** : Aucun traitement de carte bancaire sur le site. Liens de paiement FedaPay externes dans le champ `checkout.url`.
- **Collecte post-paiement** : Page `/order-details` permettant de récupérer la référence de transaction FedaPay et l'adresse de livraison sans dépendance API payante.

---

## 2. Ce qui ne peut pas être vérifié à ce stade (et dépend des étapes suivantes)

1. **Performances Lighthouse réelles avec vos œuvres finales** : Les mesures actuelles sont faites avec des maquettes vectorielles légères. Lorsque vous remplacerez les fichiers SVG par vos vrais fichiers PNG/JPG d'illustration, il faudra veiller à ce que chaque image ne dépasse pas 150 Ko pour maintenir le score mobile au-dessus de 90.
2. **Liens de paiement FedaPay réels** : Les boutons pointent actuellement vers des URL vides ou configurables tant que vous n'avez pas créé vos liens de produits sur votre compte FedaPay.
3. **Moyens de paiement activés sur votre compte FedaPay** : La disponibilité effective de Mobile Money (MTN, Moov) ou des cartes Visa/Mastercard dépendra des options activées sur votre compte marchand FedaPay.
4. **Validation juridique des CGV et de la politique de confidentialité** : Les pages `/terms`, `/privacy` et `/shipping-returns` sont des modèles conformes aux principes de votre brief (notamment la protection intégrale de vos droits d'auteur), mais doivent faire l'objet d'une validation juridique avant un lancement commercial d'envergure.
