import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา - Dealsdee',
  description: 'ทำความรู้จักกับ Dealsdee ทีมงานผู้เชี่ยวชาญด้านการรีวิวสินค้า Home Office และ Ergonomic',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-text-primary mb-8">เกี่ยวกับเรา</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          ยินดีต้อนรับสู่ <strong>Dealsdee</strong> แหล่งรวมข้อมูลรีวิวและข้อเสนอที่ดีที่สุดสำหรับผลิตภัณฑ์ Home Office และ Ergonomic
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">ภารกิจของเรา</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          เราเชื่อว่าการทำงานจากบ้านและการดูแลสุขภาพในระหว่างการทำงานเป็นสิ่งสำคัญ ทีมงานของเรามุ่งมั่นที่จะนำเสนอ
          รีวิวที่ซื่อสัตย์ ข้อมูลที่ถูกต้อง และข้อเสนอที่คุ้มค่าที่สุดให้กับผู้อ่าน
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">ทีมงานของเรา</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          ทีม Dealsdee ประกอบด้วยผู้เชี่ยวชาญด้านเทคโนโลยี นักเขียนมากประสบการณ์ และนักรีวิวที่มีความรู้เฉพาะด้าน
          เพื่อให้มั่นใจว่าทุกรีวิวและข้อแนะนำของเราเป็นประโยชน์สูงสุดต่อผู้อ่าน
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">ความเชี่ยวชาญของเรา</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold text-text-primary mb-2">🪑 เก้าอี้เพื่อสุขภาพ</h3>
            <p className="text-text-secondary">การรีวิวและเปรียบเทียบเก้าอี้ ergonomic จากแบรนด์ชั้นนำ</p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-2">🖥️ จอคอมพิวเตอร์</h3>
            <p className="text-text-secondary">รีวิวจอมอนิเตอร์ 4K, Ultrawide, และจอเกมมิ่ง</p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-2">🏢 โต๊ะทำงาน</h3>
            <p className="text-text-secondary">โต๊ะปรับระดับ standing desk และโต๊ะทำงานเพื่อสุขภาพ</p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-2">⚙️ อุปกรณ์เสริม</h3>
            <p className="text-text-secondary">แกดเจ็ตและอุปกรณ์เสริมสำหรับ home office</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">ติดต่อเรา</h2>
        <p className="text-text-secondary leading-relaxed">
          หากคุณมีคำถาม ข้อเสนอแนะ หรือต้องการความช่วยเหลือใดๆ 
          <a href="/contact" className="text-accent hover:underline ml-1">สามารถติดต่อเราได้ที่นี่</a>
        </p>
      </div>
    </div>
  );
}