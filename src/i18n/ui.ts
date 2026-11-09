import translations from './translations.json';



export type Lang = 'en' | 'fr';



export function useTranslations(lang: Lang) {
  
  return function t(key: string): string {
    
    const keys = key.split('.');
    
    let current: any = (translations as any)[lang] || translations.en;
    
    for (const k of keys) {
      
      if (current && typeof current === 'object' && k in current) {
        
        current = current[k];
        
      } else {
        
        let fallback: any = translations.en;
        
        for (const fk of keys) {
          
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            
            fallback = fallback[fk];
            
          } else {
            
            return key;
            
          }
          
        }
        
        return fallback;
        
      }
      
    }
    
    return typeof current === 'string' ? current : key;
    
  };
  
}



export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  
  let cleanPath = pathname || '/';
  

  
  // Astro.url.pathname includes the repository base on GitHub Pages.
  
  if (base && base !== '/' && (cleanPath === base || cleanPath.startsWith(`${base}/`))) {
    
    cleanPath = cleanPath.slice(base.length) || '/';
    
  }
  

  
  if (!cleanPath.startsWith('/')) {
    
    cleanPath = `/${cleanPath}`;
    
  }
  

  
  if (cleanPath === '/fr' || cleanPath.startsWith('/fr/')) {
    
    cleanPath = cleanPath.slice(3) || '/';
    
  }
  

  
  if (targetLang === 'fr') {
    
    return cleanPath === '/' ? '/fr' : `/fr${cleanPath}`;
    
  }
  

  
  return cleanPath;
  
}












































