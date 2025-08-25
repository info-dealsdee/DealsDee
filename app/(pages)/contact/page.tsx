import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ติดต่อเรา - Dealsdee',
  description: 'ติดต่อทีมงาน Dealsdee สำหรับคำถาม ข้อเสนอแนะ หรือความช่วยเหลือเกี่ยวกับรีวิวสินค้า',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-text-primary mb-8">ติดต่อเรา</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          เรายินดีรับฟังความคิดเห็น คำถาม และข้อเสนอแนะจากคุณ ไม่ว่าจะเป็นเรื่องรีวิวสินค้า ข้อสงสัยเกี่ยวกับผลิตภัณฑ์ 
          หรือข้อเสนอแนะเพื่อปรับปรุงเว็บไซต์ของเรา
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">ช่องทางติดต่อ</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-accent mr-3 mt-1">📧</div>
                <div>
                  <h3 className="font-semibold text-text-primary">Email</h3>
                  <p className="text-text-secondary">contact@dealsdee.com</p>
                  <p className="text-sm text-text-secondary">ตอบกลับภายใน 24 ชั่วโมง</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-accent mr-3 mt-1">💬</div>
                <div>
                  <h3 className="font-semibold text-text-primary">Social Media</h3>
                  <p className="text-text-secondary">@DealsdeeOfficial</p>
                  <p className="text-sm text-text-secondary">Facebook, Twitter, Instagram</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-accent mr-3 mt-1">⏰</div>
                <div>
                  <h3 className="font-semibold text-text-primary">เวลาทำการ</h3>
                  <p className="text-text-secondary">จันทร์ - ศุกร์: 9:00 - 18:00</p>
                  <p className="text-sm text-text-secondary">เขตเวลากรุงเทพฯ</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">หัวข้อที่เราสามารถช่วยได้</h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-secondary">คำถามเกี่ยวกับรีวิวสินค้า</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-secondary">ขอคำแนะนำในการเลือกซื้อสินค้า</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-secondary">เสนอสินค้าสำหรับรีวิว</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-secondary">ร่วมงานทางธุรกิจ</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-secondary">รายงานปัญหาเทคนิค</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-secondary">ข้อเสนอแนะทั่วไป</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-text-primary mb-4">💡 เคล็ดลับ: การติดต่อที่มีประสิทธิภาพ</h2>
          <ul className="text-text-secondary space-y-2">
            <li>• ระบุหัวข้อให้ชัดเจนในอีเมล</li>
            <li>• แนบรูปภาพหรือลิงก์ถ้าเกี่ยวข้องกับสินค้า</li>
            <li>• ใส่รายละเอียดเท่าที่จำเป็นเพื่อให้เราช่วยคุณได้ดีที่สุด</li>
            <li>• ตรวจสอบสแปมโฟลเดอร์หากไม่ได้รับการตอบกลับ</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-text-secondary">
            ขอบคุณที่เยี่ยมชม Dealsdee เรามุ่งมั่นที่จะให้บริการที่ดีที่สุดแก่คุณ! 🙏
          </p>
        </div>
      </div>
    </div>
  );
}