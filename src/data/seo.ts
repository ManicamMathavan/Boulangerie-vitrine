export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Boulangerie Dego",
  "alternateName": "Boulangerie Artisanale Dego",
  "description": "Boulangerie artisanale parisienne depuis 1954, spécialisée dans le pain traditionnel français, les viennoiseries et les pâtisseries artisanales. Savoir-faire familial transmis de génération en génération.",
  "url": "https://boulangerie-dego.fr",
  "logo": "https://boulangerie-dego.fr/src/assets/webp/logo.webp",
  "image": [
    "https://boulangerie-dego.fr/src/assets/webp/logo.webp",
    "https://boulangerie-dego.fr/src/assets/webp/interieur.webp",
    "https://boulangerie-dego.fr/src/assets/webp/pain_campagne.webp",
    "https://boulangerie-dego.fr/src/assets/webp/croissant_beurre.webp",
    "https://boulangerie-dego.fr/src/assets/webp/pain_complet.webp"
  ],
  "telephone": "+33 1 23 45 67 89",
  "email": "contact@boulangerie-dego.fr",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33 1 23 45 67 89",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rue de la Boulangerie",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.8566",
    "longitude": "2.3522"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:30",
      "closes": "19:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday"],
      "opens": null,
      "closes": null,
      "description": "Fermé"
    }
  ],
  "servesCuisine": "French",
  "priceRange": "€€",
  "foundingDate": "1954",
  "currenciesAccepted": "EUR",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "hasMenu": {
    "@type": "Menu",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Pains Traditionnels",
        "description": "Nos pains artisanaux cuits au feu de bois",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Pain de campagne",
            "description": "Pain traditionnel au levain, cuit au feu de bois selon la recette familiale",
            "offers": {
              "@type": "Offer",
              "price": "2.50",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Pain complet",
            "description": "Pain riche en fibres, idéal pour une alimentation équilibrée",
            "offers": {
              "@type": "Offer",
              "price": "2.80",
              "priceCurrency": "EUR"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Viennoiseries",
        "description": "Nos viennoiseries fraîches préparées chaque matin",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Croissant au beurre",
            "description": "Croissant traditionnel français au pur beurre",
            "offers": {
              "@type": "Offer",
              "price": "1.20",
              "priceCurrency": "EUR"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Pâtisseries",
        "description": "Nos créations sucrées artisanales",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Tarte aux fruits de saison",
            "description": "Pâte sablée maison garnie de fruits frais selon la saison"
          }
        ]
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marie Dubois"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Une boulangerie exceptionnelle ! Le pain de campagne est absolument délicieux et les croissants fondent en bouche."
    }
  ],
  "sameAs": [
    "https://www.instagram.com/boulangerie_dego",
    "https://twitter.com/boulangerie_dego",
    "https://www.facebook.com/boulangerie.dego"
  ],
  "keywords": "boulangerie artisanale Paris, pain traditionnel, croissants au beurre, pâtisserie française, boulanger artisan"
};

export const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://boulangerie-dego.fr/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "À propos",
      "item": "https://boulangerie-dego.fr/#a-propos"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Nos produits",
      "item": "https://boulangerie-dego.fr/#nos-produits"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://boulangerie-dego.fr/#contact"
    }
  ]
};

// Données structurées pour FAQ
export const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont vos horaires d'ouverture ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous sommes ouverts du mardi au vendredi de 6h30 à 19h30, et le samedi de 7h00 à 18h00. Nous sommes fermés le dimanche et le lundi."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous du pain sans gluten ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous proposons une gamme de pains sans gluten préparés dans un espace dédié pour éviter la contamination croisée. Contactez-nous pour connaître les variétés disponibles."
      }
    },
    {
      "@type": "Question",
      "name": "Faites-vous des gâteaux sur commande ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument ! Nous réalisons des gâteaux personnalisés pour toutes vos occasions spéciales. Nous recommandons de passer commande au moins 48h à l'avance."
      }
    },
    {
      "@type": "Question",
      "name": "Où vous situez-vous exactement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous sommes situés au 123 Rue de la Boulangerie, 75001 Paris, dans le 1er arrondissement, près du métro Châtelet-Les Halles."
      }
    }
  ]
};

// Données structurées pour l'entreprise locale
export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://boulangerie-dego.fr",
  "name": "Boulangerie Dego",
  "description": "Boulangerie artisanale familiale spécialisée dans la fabrication traditionnelle de pain, viennoiseries et pâtisseries depuis 1954.",
  "url": "https://boulangerie-dego.fr",
  "telephone": "+33 1 23 45 67 89",
  "email": "contact@boulangerie-dego.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rue de la Boulangerie",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "openingHours": [
    "Tu-Fr 06:30-19:30",
    "Sa 07:00-18:00"
  ],
  "speciality": ["Pain artisanal", "Viennoiseries", "Pâtisseries traditionnelles"],
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "EUR",
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  }
};
