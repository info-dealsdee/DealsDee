import Button from '../components/Button';
import Card from '../components/Card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              Find the Perfect Home Office Setup
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Expert reviews and comparisons to help you create an ergonomic, productive workspace
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="search"
                placeholder="Search for products, reviews, or comparisons..."
                className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-text-secondary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                aria-label="Submit search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Featured Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="bg-gray-200 h-48 rounded-md animate-pulse"></div>
                  <h3 className="text-xl font-semibold">
                    Standing Desk Comparison {item}
                  </h3>
                  <p className="text-text-secondary">
                    Compare the top standing desks for your home office setup. Find the perfect balance of features and price.
                  </p>
                  <Link href={`/compare/standing-desks-${item}`}>
                    <Button variant="primary" className="w-full">
                      View Comparison
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Promotion */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-accent/10 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="mb-6">Ergonomics Calculator</h2>
              <p className="text-xl text-text-secondary mb-8">
                Calculate the perfect desk height, monitor distance, and chair settings for your body measurements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tools/ergonomics-calculator">
                  <Button variant="primary">
                    Try Calculator Now
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button variant="secondary">
                    View All Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="hover:shadow-xl transition-shadow">
                <article className="space-y-4">
                  <div className="bg-gray-200 h-48 rounded-md animate-pulse"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">December {item}, 2024</span>
                    <span className="bg-accent text-white text-sm px-3 py-1 rounded-full font-semibold">
                      9.{item}/10
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Herman Miller Aeron Review {item}
                  </h3>
                  <p className="text-text-secondary">
                    An in-depth review of the iconic ergonomic office chair. Is it worth the premium price?
                  </p>
                  <Link href={`/reviews/herman-miller-aeron-${item}`}>
                    <Button variant="secondary" className="w-full">
                      Read Review
                    </Button>
                  </Link>
                </article>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="primary">
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}