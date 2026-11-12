# Mise à jour basée sur le dernier ZIP fourni

Cette archive est basée sur `portfolio-roddy-agbo-implemented.zip` fourni le 12 novembre 2026. Les modifications locales présentes dans ce ZIP ont été conservées.

## Vidéos à ajouter manuellement

Ajouter les fichiers suivants avant le déploiement :

- `public/assets/videos/escape.mp4`
- `public/assets/videos/demo-reel.mp4`

La page ESCAPE référence déjà `public/assets/videos/escape.mp4`.

Pour remplacer le lecteur actuel de L’Art ou la Rue par le Demo Reel, modifier le premier objet de `videos` dans `src/content/projects/l-art-ou-la-rue.json` :

```json
"id": "/assets/videos/demo-reel.mp4"
```

## Déploiement

```powershell
npm install
npm run build
git add .
git commit -m "Update portfolio projects and assets"
git pull --rebase origin main
git push origin main
```

Ne pas utiliser `git push --force`.
