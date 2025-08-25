import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Card from '../../components/Card';
import AnimateOnScroll from '../../components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'รีวิวทั้งหมด - Dealsdee',
  description: 'รวมรีวิวสินค้า Home Office และ Ergonomic ทั้งหมดจากผู้เชี่ยวชาญ พร้อมคะแนนและข้อมูลละเอียด',
};

interface Review {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  score: number;
  featuredImage: string;
}

function getReviews(): Review[] {
  const reviewsDir = path.join(process.cwd(), 'app/content/reviews');
  
  try {
    const files = fs.readdirSync(reviewsDir);
    
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        try {
          const filePath = path.join(reviewsDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Extract frontmatter
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (!frontmatterMatch) return null;
          
          const frontmatter = frontmatterMatch[1];
          
          // Parse frontmatter fields
          const title = frontmatter.match(/title:\s*"([^"]+)"/)?.[1] || 'Untitled Review';
          const slug = frontmatter.match(/slug:\s*"([^"]+)"/)?.[1] || file.replace('.mdx', '');
          const date = frontmatter.match(/date:\s*"([^"]+)"/)?.[1] || new Date().toISOString().split('T')[0];
          const author = frontmatter.match(/author:\s*"([^"]+)"/)?.[1] || 'Dealsdee Team';
          const category = frontmatter.match(/category:\s*"([^"]+)"/)?.[1] || 'รีวิว';
          const scoreMatch = frontmatter.match(/score:\s*([\d.]+)/);
          const score = scoreMatch ? parseFloat(scoreMatch[1]) : 8.0;
          const featuredImage = frontmatter.match(/featuredImage:\s*"([^"]+)"/)?.[1] || '/images/placeholder.jpg';
          
          // Extract excerpt from content (first paragraph after frontmatter)
          const contentBody = content.replace(/^---[\s\S]*?---\n/, '');
          const firstParagraph = contentBody.split('\n').find(line => line.trim() && !line.startsWith('#'));
          const excerpt = firstParagraph || `รีวิว ${title} อย่างละเอียดพร้อมข้อดีข้อเสีย`;
          
          return {
            slug,
            title,
            description: excerpt,
            excerpt,
            date: new Date(date).toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }),
            author,
            category,
            score,
            featuredImage
          };
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      })
      .filter((review): review is Review => review !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading reviews directory:', error);
    return [];
  }
}

export default function ReviewsPage() {
  const reviews = getReviews();

  // If we don't have reviews from files, show placeholder data
  const displayReviews = reviews.length > 0 ? reviews : [
    {
      slug: 'sample-review',
      title: 'Herman Miller Aeron Chair Review: The Ultimate Ergonomic Office Chair',
      description: 'รีวิวเก้าอี้ ergonomic ระดับพรีเมียม ที่ได้รับการยอมรับจากผู้เชี่ยวชาญทั่วโลก',
      excerpt: 'รีวิวเก้าอี้ ergonomic ระดับพรีเมียม ที่ได้รับการยอมรับจากผู้เชี่ยวชาญทั่วโลก',
      date: '24 ส.ค. 2568',
      author: 'Dealsdee Team',
      category: 'Office Chairs',
      score: 9.2,
      featuredImage: '/images/placeholder-1.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">รีวิวทั้งหมด</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          รวมรีวิวสินค้า Home Office และ Ergonomic ทั้งหมดจากผู้เชี่ยวชาญ 
          พร้อมคะแนนและข้อมูลละเอียดเพื่อช่วยในการตัดสินใจ
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">{displayReviews.length}</div>
          <div className="text-text-secondary">รีวิวทั้งหมด</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">
            {displayReviews.reduce((acc, review) => acc + review.score, 0) / displayReviews.length}
          </div>
          <div className="text-text-secondary">คะแนนเฉลี่ย</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">100%</div>
          <div className="text-text-secondary">รีวิวจริง</div>
        </div>
      </div>

      {/* Filters - Placeholder for future */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium">
            ทั้งหมด
          </button>
          <button className="px-4 py-2 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 transition-colors">
            เก้าอี้สำนักงาน
          </button>
          <button className="px-4 py-2 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 transition-colors">
            จอคอมพิวเตอร์
          </button>
          <button className="px-4 py-2 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 transition-colors">
            โต๊ะทำงาน
          </button>
          <button className="px-4 py-2 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 transition-colors">
            อุปกรณ์เสริม
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayReviews.map(review => (
          <AnimateOnScroll key={review.slug}>
            <Card
              title={review.title}
              description={review.description}
              excerpt={review.excerpt}
              imageUrl={`https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=450&fit=crop`}
              href={`/reviews/${review.slug}`}
              date={review.date}
              score={review.score}
              badge={review.score >= 9.0 ? "Editor's Choice" : undefined}
            />
          </AnimateOnScroll>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          ไม่พบสินค้าที่คุณสนใจ?
        </h2>
        <p className="text-text-secondary mb-6">
          แจ้งให้เราทราบสินค้าที่คุณอยากให้เรารีวิว เราจะพิจารณานำมารีวิวให้คุณ
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          ติดต่อเรา
        </a>
      </div>
    </div>
  );
}