import { useEffect } from 'react';
import { structuredData, breadcrumbData, faqData, localBusinessData } from '../../data/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Boulangerie Dego - Pain Artisanal et Pâtisseries à Paris | Depuis 1954",
  description = "Découvrez notre boulangerie artisanale parisienne et nos spécialités traditionnelles. Pain frais, croissants et pâtisseries faits avec passion depuis 1954. Ouvert du mardi au samedi à Paris 1er.",
  canonical = typeof window !== 'undefined' ? window.location.href : 'https://boulangerie-dego.fr',
  keywords = "boulangerie artisanale Paris, pain traditionnel, croissants au beurre, pâtisserie française, pain de campagne, boulanger artisan, tradition française, pain frais quotidien, viennoiseries, boulangerie 75001",
  ogImage = "https://boulangerie-dego.fr/src/assets/webp/logo.webp"
}) => {
  useEffect(() => {
    // Mise à jour du titre avec longueur optimisée (50-60 caractères)
    document.title = title;
    
    // Mise à jour de la description (150-160 caractères pour optimal)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Mise à jour des keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Ajout des données structurées complètes
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([
      structuredData, 
      breadcrumbData, 
      faqData, 
      localBusinessData
    ]);
    document.head.appendChild(script);
    
    // Ajout du lien canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Ajout des meta tags robots avancés
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Ajout des meta tags Open Graph optimisés
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Boulangerie Dego' },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Logo de la Boulangerie Dego, boulangerie artisanale parisienne' },
      { property: 'og:locale', content: 'fr_FR' }
    ];
    
    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('property', tag.property);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });
    
    // Ajout des meta tags Twitter optimisés
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@boulangerie_dego' },
      { name: 'twitter:creator', content: '@boulangerie_dego' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: 'Logo de la Boulangerie Dego' }
    ];
    
    twitterTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('name', tag.name);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

    // Ajout des meta tags géolocalisés
    const geoTags = [
      { name: 'geo.region', content: 'FR-75' },
      { name: 'geo.placename', content: 'Paris' },
      { name: 'geo.position', content: '48.8566;2.3522' },
      { name: 'ICBM', content: '48.8566, 2.3522' }
    ];

    geoTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('name', tag.name);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

  }, [title, description, canonical, keywords, ogImage]);

  return null; // Ce composant ne rend rien visuellement
};

export default SEOHead;
