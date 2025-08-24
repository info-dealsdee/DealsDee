import { Metadata } from 'next';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Button from '@/app/components/Button';
import Link from 'next/link';

interface ReviewProps {
  params: Promise<{ slug: string }>;
}

interface ReviewFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  score: number;
  featuredImage: string;
  pros: string[];
  cons: string[];
  affiliate: {
    amazon?: string;
    manufacturer?: string;
  };
}

async function getReviewData(slug: string) {
  const reviewsDirectory = path.join(process.cwd(), 'app/content/reviews');
  const filePath = path.join(reviewsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      frontmatter: data as ReviewFrontmatter,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: ReviewProps): Promise<Metadata> {
  const resolvedParams = await params;
  const reviewData = await getReviewData(resolvedParams.slug);
  
  if (!reviewData) {
    return {
      title: 'Review Not Found',
      description: 'The requested review could not be found.',
    };
  }
  
  const { frontmatter } = reviewData;
  
  return {
    title: frontmatter.title,
    description: `Expert review of ${frontmatter.title.split(':')[0]}. Score: ${frontmatter.score}/10. Read our in-depth analysis with pros, cons, and buying advice.`,
    openGraph: {
      title: frontmatter.title,
      description: `Expert review with ${frontmatter.score}/10 rating. Discover the pros and cons before buying.`,
      images: [frontmatter.featuredImage],
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
  };
}

export default async function ReviewPage({ params }: ReviewProps) {
  const resolvedParams = await params;
  const reviewData = await getReviewData(resolvedParams.slug);
  
  if (!reviewData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-center mb-4">Review Not Found</h1>
        <p className="text-center text-text-secondary">
          The review you're looking for doesn't exist.
        </p>
      </div>
    );
  }
  
  const { frontmatter, content } = reviewData;
  
  return (
    <article className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <header className="mb-8">
            <h1 className="mb-4">{frontmatter.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <span>By {frontmatter.author}</span>
              <span>•</span>
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{frontmatter.category}</span>
            </div>
          </header>
          
          <div className="lg:flex lg:gap-8">
            {/* Main Content Column */}
            <div className="lg:flex-1 max-w-[800px]">
              {/* Mobile Magic Box */}
              <div className="lg:hidden mb-8">
                <MagicBox frontmatter={frontmatter} />
              </div>
              
              {/* Featured Image */}
              <div className="relative h-[400px] w-full mb-8 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                  [Featured Image Placeholder]
                </div>
                {/* Uncomment when you have actual images
                <Image
                  src={frontmatter.featuredImage}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
              
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-text-primary 
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-text-primary prose-p:leading-relaxed
                  prose-ul:text-text-primary prose-ol:text-text-primary
                  prose-li:marker:text-accent
                  prose-strong:text-text-primary prose-strong:font-semibold
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-table:border-collapse prose-table:w-full
                  prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-100
                  prose-td:border prose-td:border-gray-300 prose-td:p-2"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            
            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-[320px]">
              <div className="sticky top-24">
                <MagicBox frontmatter={frontmatter} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

function MagicBox({ frontmatter }: { frontmatter: ReviewFrontmatter }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-accent/20">
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-accent mb-2">
          {frontmatter.score}
        </div>
        <div className="text-text-secondary">out of 10</div>
      </div>
      
      {/* Featured Image in Magic Box */}
      <div className="relative h-48 w-full mb-6 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm">
          [Product Image]
        </div>
        {/* Uncomment when you have actual images
        <Image
          src={frontmatter.featuredImage}
          alt={frontmatter.title}
          fill
          className="object-cover"
        />
        */}
      </div>
      
      {/* Pros */}
      <div className="mb-4">
        <h3 className="font-semibold text-green-600 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Pros
        </h3>
        <ul className="space-y-1 text-sm">
          {frontmatter.pros.map((pro, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Cons */}
      <div className="mb-6">
        <h3 className="font-semibold text-red-600 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Cons
        </h3>
        <ul className="space-y-1 text-sm">
          {frontmatter.cons.map((con, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-600 mr-2">✗</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CTA Buttons */}
      <div className="space-y-3">
        {frontmatter.affiliate.amazon && (
          <Link href={frontmatter.affiliate.amazon} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="w-full">
              Check Price on Amazon
            </Button>
          </Link>
        )}
        {frontmatter.affiliate.manufacturer && (
          <Link href={frontmatter.affiliate.manufacturer} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="w-full">
              View on Manufacturer Site
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}