# Guide d'utilisation & d'administration — Portfolio & Shop Roddy AGBO

Ce guide est spécialement rédigé pour vous, Roddy, pour vous permettre de gérer, enrichir et publier votre site en toute autonomie, sans aucune compétence en programmation.

---

## 1. Remplacer les images temporaires par vos vraies œuvres

Tous les visuels du site sont stockés dans le dossier `public/images/`.

### A. Où placer vos fichiers ?
* **Projet "L'art ou la rue"** : `public/images/projects/l-art-ou-la-rue/`
  * `cover.jpg` (visuel principal 16:9)
  * `storyboard.jpg` (planches d'animatic ou layout)
* **Projet "Carte AFIA"** : `public/images/projects/carte-afia/`
  * `cover.jpg` (visuel explicatif 16:9)
* **Projet "Illustration jeunesse"** : `public/images/projects/illustration-jeunesse/`
  * `cover.jpg` (couverture 3:4)
  * Vos planches intérieures
* **Boutique** : `public/images/products/`
  * Photos réelles ou aperçus HD de vos tirages, carnets, tote bag et artbook.

### B. Règles simples pour des images nettes et ultra-rapides
* **Poids conseillé** : Moins de 150 Ko par image.
* **Largeur conseillée** : 1600 px pour les grandes couvertures, 1200 px pour les planches intérieures.
* **Outil gratuit en ligne sans rien installer** :
  1. Allez sur **[squoosh.app](https://squoosh.app/)**
  2. Glissez votre image.
  3. Choisissez le format **WebP** ou **MozJPEG** avec une qualité de 80-85%.
  4. Téléchargez le fichier optimisé et remplacez le fichier dans votre dossier.

---

## 2. Modifier vos informations personnelles (e-mail, réseaux, signature)

Toutes vos coordonnées sont centralisées dans **un seul fichier** : `site.config.json` à la racine du projet.

1. Faites un clic droit sur `site.config.json` > **Ouvrir avec** > **Bloc-notes**.
2. Remplacez simplement les emplacements `[À REMPLIR]` entre les guillemets :
   ```json
   "contact": {
     "email": "votre-vrai-email@domaine.com",
     "whatsapp": "+22900000000",
     "social": {
       "linkedin": "https://linkedin.com/in/votre-profil",
       "instagram": "https://instagram.com/votre-compte",
       "artstation": "https://artstation.com/votre-profil",
       "behance": "https://behance.net/votre-profil"
     }
   }
   ```
3. Enregistrez avec `Ctrl + S`. Le site s'actualise instantanément !

---

## 3. Ajouter ou réordonner un projet

### Pour réordonner la galerie sur l'accueil :
Ouvrez le fichier du projet dans `src/content/projects/` avec le Bloc-notes et modifiez le chiffre :
* `"order": 1` sera le tout premier projet affiché en haut à gauche.
* `"order": 2` sera le deuxième, et ainsi de suite.

### Pour ajouter un nouveau projet (ex: un album de BD) :
1. Déposez vos images dans `public/images/projects/mon-nouveau-projet/`.
2. Dupliquez un fichier existant dans `src/content/projects/`, nommez-le `mon-nouveau-projet.json`, et ajustez les titres, votre rôle et le lien des images.
3. Le projet apparaît immédiatement sur le site !

---

## 4. Configurer les paiements FedaPay et la boutique

### A. Rendre un produit achetable
1. Connectez-vous sur votre compte marchand **FedaPay** ([fedapay.com](https://fedapay.com)).
2. Créez un lien de paiement pour votre tirage ou article avec son prix en Francs CFA (XOF).
3. Ouvrez le fichier du produit dans `src/content/products/` (ex: `tableau-art-personnel-1.json`) :
   * Passez `"availability": "available"` (au lieu de `"coming-soon"`).
   * Dans `"checkout"`, mettez :
     ```json
     "checkout": {
       "mode": "external",
       "url": "https://fedapay.com/pay/votre-lien-de-paiement"
     }
     ```
4. Votre bouton d'achat principal devient actif immédiatement !

### B. Configurer la redirection après paiement
Dans les réglages de votre lien FedaPay, indiquez comme URL de redirection après paiement :
`https://votre-site.com/fr/order-details`
Ainsi, dès que votre client a payé, il arrive directement sur la page où il renseigne son adresse de livraison. Vous recevez un e-mail ou WhatsApp avec son adresse et vous pouvez commander l'impression chez votre prestataire.

---

## 5. Mettre votre site en ligne gratuitement (Déploiement)

La méthode la plus rapide et 100% gratuite sans toucher à du code :

### Méthode 1 : Netlify Drop (La plus simple, sans compte GitHub)
1. Dans PowerShell, compilez votre site :
   ```powershell
   npm run build
   ```
   Cela crée un dossier `dist` dans votre projet.
2. Allez sur **[app.netlify.com/drop](https://app.netlify.com/drop)** (créez un compte gratuit).
3. Glissez-déposez simplement le dossier `dist` sur la page.
4. En 10 secondes, votre site est en ligne avec une adresse sécurisée en `https://` !

### Méthode 2 : Cloudflare Pages ou Vercel (Recommandée pour mise à jour automatique)
1. Créez un compte gratuit sur [GitHub.com](https://github.com) et déposez-y votre dossier de projet.
2. Connectez votre dépôt à **Cloudflare Pages** ou **Vercel** (offres gratuites).
3. Choisissez le preset **Astro** : à chaque fois que vous modifiez un fichier, votre site se republie automatiquement en ligne.

---

## 6. Connecter votre nom de domaine personnalisé (ex: roddyagbo.com)

1. Achetez votre nom de domaine chez le fournisseur de votre choix (Namecheap, OVH, Hostinger...).
2. Sur votre hébergeur (Netlify ou Cloudflare Pages), cliquez sur **Domain Management** > **Add custom domain**.
3. Saisissez votre domaine (ex: `roddyagbo.com`).
4. L'hébergeur vous donne deux lignes de DNS (enregistrements CNAME ou serveurs de noms). Copiez-les chez votre vendeur de domaine.
5. En quelques heures, votre nom de domaine pointe directement vers votre portfolio avec le cadenas vert SSL actif !
