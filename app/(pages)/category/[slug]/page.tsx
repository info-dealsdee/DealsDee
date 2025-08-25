import { Metadata } from 'next';
import Card from '@/app/components/Card';
import Button from '@/app/components/Button';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const categories: Record<string, { name: string; description: string }> = {
  'office-chairs': {
    name: 'เก้าอี้สำนักงาน',
    description: 'เก้าอี้เพื่อสุขภาพสำหรับการทำงานแบบสบายตลอดทั้งวัน'
  },
  'standing-desks': {
    name: 'โต๊ะยืน',
    description: 'โต๊ะปรับความสูงได้สำหรับท่าทางการทำงานที่ดีต่อสุขภาพ'
  },
  'monitors': {
    name: 'จอภาพ',
    description: 'จอภาพคุณภาพสูงสำหรับผลิตภาพและความสบายของดวงตา'
  },
  'keyboards': {
    name: 'คีย์บอร์ด',
    description: 'คีย์บอร์ดเพื่อสุขภาพเพื่อป้องกันการบาดเจ็บจากการใช้งานซ้ำ'
  },
  'mice': {
    name: 'เมาส์และแทร็กแพด',
    description: 'อุปกรณ์ชี้จุดความแม่นยำสูงที่ออกแบบมาเพื่อความสบาย'
  },
  'lighting': {
    name: 'ไฟโต๊ะทำงาน',
    description: 'ไฟส่องสว่างเพื่อลดความเมื่อยล้าของดวงตาและเพิ่มความตั้งใจ'
  }
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categories[resolvedParams.slug];
  
  if (!category) {
    return {
      title: 'ไม่พบหมวดหมู่',
      description: 'ไม่พบหมวดหมู่ที่คุณกำลังมองหา',
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
      <div>
        <h1>ไม่พบหมวดหมู่</h1>
        <p>
          The category you&apos;re looking for doesn&apos;t exist.
        </p>
        <div>
          <Link href="/">
            <Button variant="primary">กลับไปหน้าหลัก</Button>
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
    <div>
      <div>
        {/* Category Header */}
        <header>
          <h1>{category.name}</h1>
          <p>
            {category.description}
          </p>
        </header>
        
        {/* Filter Bar (placeholder) */}
        <div>
          <div>
            <div>
              <button>
                สินค้าทั้งหมด
              </button>
              <button>
                คะแนนสูงสุด
              </button>
              <button>
                ราคาเอื้อมถึง
              </button>
              <button>
                พรีเมี่ยม
              </button>
            </div>
            <div>
              <label htmlFor="sort">เรียงตาม:</label>
              <select 
                id="sort"
              >
                <option>รีวิวล่าสุด</option>
                <option>คะแนนสูงสุด</option>
                <option>ราคา: ต่ำไปสูง</option>
                <option>ราคา: สูงไปต่ำ</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div>
          {products.map((product) => (
            <Card 
              key={product.id}
              title={product.title}
              description={product.excerpt}
              excerpt={product.excerpt}
              imageUrl="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=450&fit=crop"
              href={`/reviews/${resolvedParams.slug}-${product.slug}`}
              date={product.date}
              score={product.score}
              price={product.price}
            />
          ))}
        </div>
        
        {/* Pagination */}
        <nav aria-label="Pagination">
          <div>
            <button 
              aria-label="Previous page"
            >
              ก่อนหน้า
            </button>
            <button>
              1
            </button>
            <button>
              2
            </button>
            <button>
              3
            </button>
            <button 
              aria-label="Next page"
            >
              ถัดไป
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}