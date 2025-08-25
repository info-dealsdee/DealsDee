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
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: ReviewProps): Promise<Metadata> {
  const resolvedParams = await params;
  const reviewData = await getReviewData(resolvedParams.slug);
  
  if (!reviewData) {
    return {
      title: 'ไม่พบรีวิว - Dealsdee',
      description: 'ไม่พบรีวิวที่คุณกำลังมองหา',
    };
  }
  
  const { frontmatter } = reviewData;
  
  return {
    title: `${frontmatter.title} - Dealsdee`,
    description: `รีวิวเชิงลึก ${frontmatter.title.split(':')[0]} คะแนน ${frontmatter.score}/10 พร้อมข้อดี ข้อเสีย และคำแนะนำการซื้อ`,
    openGraph: {
      title: frontmatter.title,
      description: `รีวิวเชิงลึกด้วยคะแนน ${frontmatter.score}/10 ค้นพบข้อดีและข้อเสียก่อนตัดสินใจซื้อ`,
      images: [frontmatter.featuredImage],
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: `รีวิวเชิงลึก - คะแนน ${frontmatter.score}/10`,
      images: [frontmatter.featuredImage],
    },
  };
}

export default async function ReviewPage({ params }: ReviewProps) {
  const resolvedParams = await params;
  const reviewData = await getReviewData(resolvedParams.slug);
  
  if (!reviewData) {
    return (
      <div>
        <div>
          <h1>ไม่พบรีวิว</h1>
          <p>
            ไม่พบรีวิวที่คุณกำลังมองหา
          </p>
          <Link href="/">
            <Button variant="primary">
              กลับไปหน้าหลัก
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const { frontmatter, content } = reviewData;
  
  return (
    <article>
      <div>
        {/* Article Header */}
        <header>
          <div>
            <h1>{frontmatter.title}</h1>
            <div>
              <span>โดย {frontmatter.author}</span>
              <span>•</span>
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{frontmatter.category}</span>
            </div>
          </div>
        </header>
        
        <div>
          {/* Main Content Column */}
          <div>
            {/* Mobile Magic Box */}
            <div>
              <MagicBox frontmatter={frontmatter} />
            </div>
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={frontmatter.featuredImage || "/images/placeholder.svg"}
                alt={frontmatter.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
            
            {/* Article Content */}
            <div 
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          
          {/* Desktop Sticky Sidebar - Magic Box */}
          <aside>
            <div>
              <MagicBox frontmatter={frontmatter} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

function MagicBox({ frontmatter }: { frontmatter: ReviewFrontmatter }) {
  return (
    <div>
      {/* Score */}
      <div>
        <div>
          {frontmatter.score}
        </div>
        <div>จาก 10</div>
      </div>
      
      {/* Featured Image in Magic Box */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
        <Image
          src={frontmatter.featuredImage || "/images/placeholder.svg"}
          alt={frontmatter.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      
      {/* Pros */}
      <div>
        <h3>
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          ข้อดี
        </h3>
        <ul>
          {frontmatter.pros.map((pro, index) => (
            <li key={index}>
              <span>✅</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Cons */}
      <div>
        <h3>
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          ข้อเสีย
        </h3>
        <ul>
          {frontmatter.cons.map((con, index) => (
            <li key={index}>
              <span>❌</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CTA Buttons */}
      <div>
        {frontmatter.affiliate.amazon && (
          <Link href={frontmatter.affiliate.amazon} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              ตรวจสอบราคาบน Amazon
            </Button>
          </Link>
        )}
        {frontmatter.affiliate.manufacturer && (
          <Link href={frontmatter.affiliate.manufacturer} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              ดูในเว็บไซต์ผู้ผลิต
            </Button>
          </Link>
        )}
        
        {!frontmatter.affiliate.amazon && !frontmatter.affiliate.manufacturer && (
          <Button variant="primary" disabled>
            ลิงก์ซื้อสินค้า (เร็วๆ นี้)
          </Button>
        )}
      </div>
    </div>
  );
}