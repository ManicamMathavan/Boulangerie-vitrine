import React, { useState, useRef, useEffect } from 'react';
import style from './OptimizedImage.module.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Commence à charger 50px avant d'être visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={imgRef} className={`${style.imageContainer} ${className}`}>
      {!isLoaded && !hasError && (
        <div className={style.skeleton} style={{ width, height }}>
          <div className={style.skeletonShimmer}></div>
        </div>
      )}
      
      {hasError ? (
        <div className={style.errorPlaceholder} style={{ width, height }}>
          <span>Image non disponible</span>
        </div>
      ) : (
        shouldLoad && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`${style.image} ${isLoaded ? style.loaded : ''}`}
          />
        )
      )}
    </div>
  );
};

export default OptimizedImage;
