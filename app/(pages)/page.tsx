import { Metadata } from 'next';
import Link from 'next/link';
import Card from '../components/Card';

export const metadata: Metadata = {
  title: 'Dealsdee: ค้นหาดีลและรีวิวที่ดีที่สุด',
  description: 'พบกับรีวิวและการเปรียบเทียบผลิตภัณฑ์ที่เชื่อถือได้โดยผู้เชี่ยวชาญ เพื่อการตัดสินใจซื้อที่ดีที่สุด',
  openGraph: {
    title: 'Dealsdee: ค้นหาดีลและรีวิวที่ดีที่สุด',
    description: 'รีวิวและการเปรียบเทียบผลิตภัณฑ์โดยผู้เชี่ยวชาญ',
    type: 'website',
  },
};

export default function HomePage() {
  // Placeholder data - in the future, this will come from an API or files
  const featuredArticles = [
    { 
      id: 1, 
      title: "เปรียบเทียบเก้าอี้ Ergonomic ยี่ห้อไหนดีที่สุด", 
      description: "สรุปจบในที่เดียวสำหรับคนรักสุขภาพและการทำงาน พร้อมคำแนะนำการเลือกซื้อ", 
      excerpt: "สรุปจบในที่เดียวสำหรับคนรักสุขภาพและการทำงาน พร้อมคำแนะนำการเลือกซื้อ",
      imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=450&fit=crop", 
      href: "/reviews/sample-review",
      date: "24 ส.ค. 2568",
      score: 8.5,
      badge: "Editor's Choice"
    },
    { 
      id: 2, 
      title: "จอ 4K vs Ultrawide: เลือกอะไรให้เหมาะกับงานของคุณ", 
      description: "วิเคราะห์ข้อดีข้อเสียระหว่างจอสองประเภทที่นิยมที่สุด พร้อมแนะนำรุ่นเด่น", 
      excerpt: "วิเคราะห์ข้อดีข้อเสียระหว่างจอสองประเภทที่นิยมที่สุด พร้อมแนะนำรุ่นเด่น",
      imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=450&fit=crop", 
      href: "/reviews/4k-vs-ultrawide",
      date: "23 ส.ค. 2568",
      score: 9.0
    },
    { 
      id: 3, 
      title: "รีวิวโต๊ะปรับระดับไฟฟ้า: คุ้มค่าการลงทุนหรือไม่?", 
      description: "สุขภาพดีขึ้นจริงไหม? มาดูผลการทดสอบใช้งานจริง 30 วัน", 
      excerpt: "สุขภาพดีขึ้นจริงไหม? มาดูผลการทดสอบใช้งานจริง 30 วัน",
      imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=450&fit=crop", 
      href: "/reviews/standing-desk",
      date: "22 ส.ค. 2568",
      price: "฿15,900"
    },
  ];

  const categories = [
    { name: "เก้าอี้สำนักงาน", icon: "🪑", count: 45 },
    { name: "จอคอมพิวเตอร์", icon: "🖥️", count: 38 },
    { name: "โต๊ะทำงาน", icon: "🏢", count: 27 },
    { name: "อุปกรณ์เสริม", icon: "⚙️", count: 62 },
    { name: "แกดเจ็ต", icon: "📱", count: 54 },
    { name: "Smart Home", icon: "🏠", count: 31 }
  ];

  return (
    <main className="w-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="animate-pulse">🔥</span>
              <span>รีวิวจากผู้ใช้งานจริง 100%</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              ค้นหา<span className="text-accent">ดีล</span>และ<span className="text-accent">รีวิว</span>ที่ดีที่สุด
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              พบกับบทวิเคราะห์เจาะลึก เปรียบเทียบสเปก และรีวิวจากผู้ใช้งานจริง 
              <br className="hidden sm:block" />
              เพื่อช่วยให้คุณตัดสินใจเลือกอุปกรณ์ที่คุ้มค่าที่สุด
            </p>
            <div className="mt-10 flex flex-col gap-3 xs:gap-4 sm:flex-row sm:justify-center">
              <Link href="/reviews" className="rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl text-center">
                ดูรีวิวทั้งหมด
              </Link>
              <Link href="/compare" className="rounded-lg bg-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30 text-center">
                เปรียบเทียบสินค้า
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 py-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">หมวดหมู่สินค้า</h2>
            <p className="mt-3 text-lg text-text-secondary">เลือกดูรีวิวตามประเภทสินค้าที่คุณสนใจ</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <div 
                key={category.name} 
                className="group cursor-pointer animate-slideUp stagger-animation hover-lift"
                style={{ '--stagger-delay': index } as React.CSSProperties}
              >
                <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 text-center shadow-sm dark:shadow-none dark:ring-1 dark:ring-gray-700 transition-all hover:shadow-lg dark:hover:ring-gray-600 hover:-translate-y-1">
                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce-slow">{category.icon}</div>
                  <h3 className="font-semibold text-text-primary dark:text-gray-100 group-hover:text-accent transition-colors duration-300">{category.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary dark:text-gray-400">{category.count} รีวิว</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-white px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">บทความยอดนิยม</h2>
              <p className="mt-2 text-lg text-text-secondary">รีวิวและบทความที่ผู้อ่านให้ความสนใจมากที่สุด</p>
            </div>
            <Link href="/reviews" className="hidden sm:block text-accent font-semibold hover:underline">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <div 
                key={article.id}
                className="animate-slideUp stagger-animation"
                style={{ '--stagger-delay': index + 3 } as React.CSSProperties}
              >
                <Card {...article} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/reviews" className="text-accent font-semibold hover:underline">
              ดูบทความทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* Tool Promotion Section */}
      <section className="bg-gray-50 px-6 py-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/tools/value-calculator" className="block group">
            <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 text-white shadow-lg transition-all hover:shadow-xl hover:shadow-accent/25 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer animate-scaleIn">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-bold mb-4">🧮 Value Calculator</h2>
                  <p className="text-lg text-white/90 mb-4">
                    เครื่องมือคำนวณความคุ้มค่าของสินค้า เปรียบเทียบราคาและคุณสมบัติได้อย่างง่ายดาย
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">เปรียบเทียบราคา</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">คำนวณคะแนน</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">แนะนำสินค้า</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-6 group-hover:bg-white/30 transition-colors">
                    <div className="text-4xl">📊</div>
                  </div>
                  <div className="mt-4 bg-white text-accent px-6 py-3 rounded-lg font-semibold group-hover:bg-white/90 transition-colors">
                    ใช้เครื่องมือ →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-primary to-accent px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">อย่าพลาดดีลดีๆ</h2>
          <p className="mt-4 text-lg text-white/90">
            รับข้อมูลโปรโมชั่นและรีวิวใหม่ๆ ส่งตรงถึงอีเมลคุณ
          </p>
          <form className="mt-8 flex flex-col gap-3 xs:gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="rounded-lg px-6 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-80"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-all hover:bg-white/90"
            >
              สมัครรับข่าวสาร
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}