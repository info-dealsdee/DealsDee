import Script from 'next/script';

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
}

export function OrganizationSchema({ name, url, logo, description }: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    "sameAs": [
      "https://facebook.com/dealsdee",
      "https://instagram.com/dealsdee",
      "https://twitter.com/dealsdee"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "TH",
      "availableLanguage": ["Thai", "English"]
    }
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }}
    />
  );
}

interface WebsiteSchemaProps {
  url: string;
  name: string;
  description: string;
}

export function WebsiteSchema({ url, name, description }: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema)
      }}
    />
  );
}

interface ReviewSchemaProps {
  name: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  rating: number;
  worstRating?: number;
  bestRating?: number;
  image: string;
  url: string;
}

export function ReviewSchema({
  name,
  description,
  author,
  datePublished,
  dateModified,
  rating,
  worstRating = 1,
  bestRating = 10,
  image,
  url
}: ReviewSchemaProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": name,
      "description": description,
      "image": image
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "worstRating": worstRating,
      "bestRating": bestRating
    },
    "name": name,
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewBody": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Dealsdee",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dealsdee.com/logo.png"
      }
    }
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewSchema)
      }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
}