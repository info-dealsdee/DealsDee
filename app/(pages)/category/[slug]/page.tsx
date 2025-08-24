import { Metadata } from 'next';
import Card from '@/app/components/Card';
import Button from '@/app/components/Button';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const categories: Record<string, { name: string; description: string }> = {
  'office-chairs': {
    name: 'Office Chairs',
    description: 'Ergonomic office chairs for comfortable all-day work sessions'
  },
  'standing-desks': {
    name: 'Standing Desks',
    description: 'Height-adjustable desks for a healthier work posture'
  },
  'monitors': {
    name: 'Monitors',
    description: 'High-quality displays for productivity and eye comfort'
  },
  'keyboards': {
    name: 'Keyboards',
    description: 'Ergonomic keyboards to prevent repetitive strain injuries'
  },
  'mice': {
    name: 'Mice & Trackpads',
    description: 'Precision pointing devices designed for comfort'
  },
  'lighting': {
    name: 'Desk Lighting',
    description: 'Task lighting to reduce eye strain and improve focus'
  }
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categories[resolvedParams.slug];
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }
  
  return {
    title: `${category.name} Reviews & Comparisons | Dealsdee`,
    description: category.description,
    openGraph: {
      title: `Best ${category.name} for Home Office`,
      description: `Expert reviews and comparisons of ${category.name.toLowerCase()}. Find the perfect match for your workspace.`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = categories[resolvedParams.slug];
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-center mb-4">Category Not Found</h1>
        <p className="text-center text-text-secondary">
          The category you're looking for doesn't exist.
        </p>
        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="primary">Back to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Mock data for demonstration
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `${category.name} Product ${i + 1}`,
    excerpt: `High-quality ${category.name.toLowerCase()} with excellent features and ergonomic design for your home office setup.`,
    score: 8.5 + (i % 3) * 0.5,
    price: `$${299 + (i * 50)}`,
    date: `December ${i + 1}, 2024`,
    slug: `product-${i + 1}`
  }));
  
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <header className="text-center mb-12">
          <h1 className="mb-4">{category.name}</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {category.description}
          </p>
        </header>
        
        {/* Filter Bar (placeholder) */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                All Products
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary text-sm hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Top Rated
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary text-sm hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Budget Friendly
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary text-sm hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Premium
              </button>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-text-secondary">Sort by:</label>
              <select 
                id="sort"
                className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option>Latest Reviews</option>
                <option>Highest Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all duration-200">
              <article className="space-y-4">
                {/* Product Image Placeholder */}
                <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-text-secondary">
                  [Product Image]
                </div>
                
                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {product.score}/10
                    </span>
                    <span className="text-sm text-text-secondary">{product.price}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary line-clamp-3">
                    {product.excerpt}
                  </p>
                  
                  <div className="text-xs text-text-secondary">
                    {product.date}
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link href={`/reviews/${resolvedParams.slug}-${product.slug}`}>
                  <Button variant="secondary" className="w-full">
                    Read Review
                  </Button>
                </Link>
              </article>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        <nav className="mt-12 flex justify-center" aria-label="Pagination">
          <div className="flex gap-2">
            <button 
              className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Previous page"
            >
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-accent text-white font-semibold focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              3
            </button>
            <button 
              className="px-4 py-2 rounded-lg bg-gray-100 text-text-secondary hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}