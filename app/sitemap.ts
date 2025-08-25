import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dealsdee.com';
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/value-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic routes - Reviews
  const reviewsDirectory = path.join(process.cwd(), 'app/content/reviews');
  let reviewRoutes: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: 'weekly';
    priority: number;
  }> = [];

  try {
    if (fs.existsSync(reviewsDirectory)) {
      const reviewFiles = fs.readdirSync(reviewsDirectory);
      reviewRoutes = reviewFiles
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
          const slug = file.replace('.mdx', '');
          const filePath = path.join(reviewsDirectory, file);
          const stats = fs.statSync(filePath);
          
          return {
            url: `${baseUrl}/reviews/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
          };
        });
    }
  } catch (error) {
    console.error('Error reading reviews directory for sitemap:', error);
  }

  // Category pages
  const categories = [
    'office-chairs',
    'monitors',
    'desks',
    'keyboards',
    'mouse',
    'accessories',
    'smart-home'
  ];

  const categoryRoutes = categories.map(category => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...reviewRoutes, ...categoryRoutes];
}