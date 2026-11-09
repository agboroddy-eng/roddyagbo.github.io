/**
 * Préfixe les chemins d'assets publics avec la base Astro.
 * Compatible avec GitHub Pages (/roddyagbo.github.io/) et un domaine personnalisé.
 */
export function assetUrl(path?: string): string | undefined {
  if (!path || path.startsWith('//') || /^https?:\/\//.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base === '/' ? '' : base.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
