import { Metadata } from 'next';
import Card from '../../components/Card';

export const metadata: Metadata = {
  title: 'บทความเปรียบเทียบทั้งหมด - Dealsdee',
  description: 'รวมบทความเปรียบเทียบสินค้า Home Office และ Ergonomic เพื่อช่วยให้คุณเลือกสินค้าที่เหมาะสมที่สุด',
};

export default function ComparePage() {
  // Placeholder comparison articles - will be replaced with real data later
  const comparisonArticles = [
    {
      id: 1,
      title: 'Herman Miller Aeron vs Steelcase Leap: เปรียบเทียบเก้าอี้ระดับพรีเมียม',
      description: 'เปรียบเทียบเก้าอี้ ergonomic 2 แบรนด์ชั้นนำ ความแตกต่างด้านการออกแบบ ความสบาย และราคา',
      excerpt: 'เปรียบเทียบเก้าอี้ ergonomic 2 แบรนด์ชั้นนำ ความแตกต่างด้านการออกแบบ ความสบาย และราคา',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=450&fit=crop',
      href: '/compare/aeron-vs-leap',
      date: '22 ส.ค. 2568',
      score: 9.0,
      badge: 'เปรียบเทียบแนะนำ'
    },
    {
      id: 2,
      title: '4K vs Ultrawide Monitor: จอไหนเหมาะกับการทำงานของคุณ',
      description: 'วิเคราะห์ข้อดีข้อเสียของจอ 4K และ Ultrawide สำหรับการทำงาน เกม และงานสร้างสรรค์',
      excerpt: 'วิเคราะห์ข้อดีข้อเสียของจอ 4K และ Ultrawide สำหรับการทำงาน เกม และงานสร้างสรรค์',
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=450&fit=crop',
      href: '/compare/4k-vs-ultrawide',
      date: '20 ส.ค. 2568',
      score: 8.8
    },
    {
      id: 3,
      title: 'Standing Desk vs Traditional Desk: ประโยชน์และข้อจำกัด',
      description: 'เปรียบเทียบโต๊ะปรับระดับกับโต๊ะแบบดั้งเดิม ผลกระทบต่อสุขภาพและประสิทธิภาพการทำงาน',
      excerpt: 'เปรียบเทียบโต๊ะปรับระดับกับโต๊ะแบบดั้งเดิม ผลกระทบต่อสุขภาพและประสิทธิภาพการทำงาน',
      imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=450&fit=crop',
      href: '/compare/standing-vs-traditional-desk',
      date: '18 ส.ค. 2568',
      score: 8.5
    },
    {
      id: 4,
      title: 'Mechanical vs Membrane Keyboard: เลือกคีย์บอร์ดให้เหมาะกับงาน',
      description: 'เปรียบเทียบความแตกต่างของคีย์บอร์ด Mechanical และ Membrane ด้านการพิมพ์และราคา',
      excerpt: 'เปรียบเทียบความแตกต่างของคีย์บอร์ด Mechanical และ Membrane ด้านการพิมพ์และราคา',
      imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=450&fit=crop',
      href: '/compare/mechanical-vs-membrane',
      date: '16 ส.ค. 2568',
      score: 8.2
    },
    {
      id: 5,
      title: 'Wireless vs Wired Mouse: ประสิทธิภาพและความสะดวกสบาย',
      description: 'เปรียบเทียบเมาส์ไร้สายและแบบมีสาย ด้านความแม่นยำ แบตเตอรี่ และความเหมาะสมต่อการใช้งาน',
      excerpt: 'เปรียบเทียบเมาส์ไร้สายและแบบมีสาย ด้านความแม่นยำ แบตเตอรี่ และความเหมาะสมต่อการใช้งาน',
      imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=450&fit=crop',
      href: '/compare/wireless-vs-wired-mouse',
      date: '14 ส.ค. 2568',
      score: 7.8
    },
    {
      id: 6,
      title: 'IPS vs VA vs TN Panel: เทคโนโลジีจอที่เหมาะกับคุณ',
      description: 'เปรียบเทียบเทคโนโลยีหน้าจอ IPS, VA, และ TN ด้านสี ความเร็ว และราคา',
      excerpt: 'เปรียบเทียบเทคโนโลยีหน้าจอ IPS, VA, และ TN ด้านสี ความเร็ว และราคา',
      imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=450&fit=crop',
      href: '/compare/ips-vs-va-vs-tn',
      date: '12 ส.ค. 2568',
      score: 8.6
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">บทความเปรียบเทียบทั้งหมด</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          รวมบทความเปรียบเทียบสินค้าและเทคโนโลยีต่างๆ เพื่อช่วยให้คุณตัดสินใจเลือกซื้อสินค้า
          ที่เหมาะสมกับความต้องการและงบประมาณของคุณ
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">{comparisonArticles.length}</div>
          <div className="text-text-secondary">บทความเปรียบเทียบ</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">
            {Math.round((comparisonArticles.reduce((acc, article) => acc + article.score, 0) / comparisonArticles.length) * 10) / 10}
          </div>
          <div className="text-text-secondary">คะแนนเฉลี่ย</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">15+</div>
          <div className="text-text-secondary">หมวดหมู่สินค้า</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">100%</div>
          <div className="text-text-secondary">ข้อมูลจริง</div>
        </div>
      </div>

      {/* Featured Comparison */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                🏆 เปรียบเทียบยอดนิยม
              </div>
              <h2 className="text-3xl font-bold mb-4">Herman Miller vs Steelcase</h2>
              <p className="text-lg text-white/90 mb-6">
                เปรียบเทียบเก้าอี้ ergonomic 2 แบรนด์ระดับโลก พร้อมข้อมูลละเอียดและคำแนะนำการเลือกซื้อ
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-2 rounded-lg text-sm">✓ เปรียบเทียบราคา</span>
                <span className="bg-white/20 px-3 py-2 rounded-lg text-sm">✓ ทดสอบการใช้งาน</span>
                <span className="bg-white/20 px-3 py-2 rounded-lg text-sm">✓ คำแนะนำผู้เชี่ยวชาญ</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors cursor-pointer">
                อ่านบทความ →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">หมวดหมู่เปรียบเทียบ</h3>
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
          <button className="px-4 py-2 bg-gray-100 text-text-secondary rounded-lg font-medium hover:bg-gray-200 transition-colors">
            เทคโนโลยี
          </button>
        </div>
      </div>

      {/* Comparison Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {comparisonArticles.map(article => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            href={article.href}
            date={article.date}
            score={article.score}
            badge={article.badge}
          />
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16">
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            📊 เปรียบเทียบสินค้าเพิ่มเติม
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            ใช้เครื่องมือ Value Calculator ของเราเพื่อเปรียบเทียบสินค้าที่คุณสนใจ
            พร้อมคำนวณความคุ้มค่าอย่างละเอียด
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tools/value-calculator"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              ใช้เครื่องมือเปรียบเทียบ
            </a>
            <a
              href="/contact"
              className="inline-block border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              ขอให้เปรียบเทียบสินค้า
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}