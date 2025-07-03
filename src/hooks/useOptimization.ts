import { useState, useEffect, useCallback } from 'react';

interface UseImageOptimizationProps {
  src: string;
  priority?: boolean;
}

export const useImageOptimization = ({ src, priority = false }: UseImageOptimizationProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const preloadImage = useCallback((imageSrc: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = imageSrc;
    });
  }, []);

  useEffect(() => {
    if (priority) {
      // Préchargement immédiat pour les images prioritaires
      preloadImage(src)
        .then(() => {
          setIsLoaded(true);
          setIsLoading(false);
        })
        .catch(() => {
          setHasError(true);
          setIsLoading(false);
        });
    } else {
      // Lazy loading pour les autres images
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            preloadImage(src)
              .then(() => {
                setIsLoaded(true);
                setIsLoading(false);
              })
              .catch(() => {
                setHasError(true);
                setIsLoading(false);
              });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const target = document.createElement('div');
      observer.observe(target);

      return () => {
        observer.disconnect();
      };
    }
  }, [src, priority, preloadImage]);

  return { isLoaded, isLoading, hasError };
};

// Hook pour optimiser les performances générales
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Préconnection aux domaines externes
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch pour d'autres domaines
    const dnsPrefetchDomains = [
      'https://boulangerie-dego.fr'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Optimisation du viewport pour mobile
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }

    // Preload des ressources critiques avec priorité
    const criticalResources = [
      { href: '/src/assets/webp/logo.webp', type: 'image/webp' },
      { href: '/src/assets/webp/interieur.webp', type: 'image/webp' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource.href;
      link.type = resource.type;
      document.head.appendChild(link);
    });

    // Optimisation de l'événement scroll
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Logique de scroll optimisée
          ticking = false;
        });
        ticking = true;
      }
    };

    // Service Worker pour la mise en cache (si disponible)
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker non disponible
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default { useImageOptimization, usePerformanceOptimization };
