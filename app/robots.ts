import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/admin.html',
          '/_next/',
          '/images/uploads/',
        ],
      },
    ],
    sitemap: 'https://dealsdee.com/sitemap.xml',
  };
}