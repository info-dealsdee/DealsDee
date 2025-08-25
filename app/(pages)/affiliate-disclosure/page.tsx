import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'นโยบายการเปิดเผยข้อมูล Affiliate - Dealsdee',
  description: 'นโยบายความโปร่งใสเกี่ยวกับการใช้ลิงก์ affiliate และความสัมพันธ์ทางธุรกิจของ Dealsdee',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-text-primary mb-8">นโยบายการเปิดเผยข้อมูล Affiliate</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          เพื่อความโปร่งใสและความไว้วางใจของผู้อ่าน เราขอเปิดเผยข้อมูลเกี่ยวกับความสัมพันธ์ทางธุรกิจ
          และการใช้ลิงก์ affiliate ในเว็บไซต์ Dealsdee
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">🤝 ความสัมพันธ์ Affiliate</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Dealsdee เป็นสมาชิกของโปรแกรม affiliate จากร้านค้าและแบรนด์ต่างๆ เช่น Amazon, Shopee, Lazada 
          และแบรนด์สินค้าโดยตรง เมื่อคุณคลิกลิงก์และทำการซื้อสินค้า เราอาจได้รับค่าคอมมิชชั่นเล็กน้อย
          โดยที่ <strong>ไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับคุณ</strong>
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">💰 วิธีการทำงานของ Affiliate</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-text-primary mb-3">ตัวอย่างการทำงาน:</h3>
          <ol className="text-text-secondary space-y-2">
            <li>1. คุณอ่านรีวิวสินค้าในเว็บไซต์ของเรา</li>
            <li>2. คลิกลิงก์ &quot;ซื้อสินค้า&quot; หรือ &quot;ดูราคา&quot;</li>
            <li>3. เว็บไซต์จะพาคุณไปยังร้านค้าโดยตรง</li>
            <li>4. หากคุณซื้อสินค้า เราจะได้รับค่าคอมมิชชั่นเล็กน้อย (2-8%)</li>
            <li>5. <strong>ราคาสินค้าสำหรับคุณยังคงเท่าเดิม</strong></li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">🎯 ความเป็นกลางในการรีวิว</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          แม้ว่าเราจะได้รับค่าคอมมิชชั่น แต่:
        </p>
        <ul className="text-text-secondary space-y-2 mb-6">
          <li>• <strong>รีวิวของเราเป็นกลาง</strong> และใช้ข้อมูลจากการทดสอบจริง</li>
          <li>• เราจะแสดงทั้ง<strong>ข้อดีและข้อเสีย</strong>ของสินค้าอย่างซื่อสัตย์</li>
          <li>• ไม่มีการบิดเบือนข้อมูลเพื่อการขาย</li>
          <li>• เราจะ<strong>ไม่แนะนำสินค้าที่ไม่ดี</strong>แม้จะมีคอมมิชชั่นสูง</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">🔍 การระบุลิงก์ Affiliate</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          เพื่อความโปร่งใส เราจะระบุลิงก์ affiliate ด้วยวิธีต่างๆ:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-text-primary mb-2">✓ ลิงก์ที่เป็น Affiliate</h3>
            <p className="text-sm text-text-secondary">ปุ่ม &quot;ซื้อสินค้า&quot;, &quot;ดูราคา&quot;, &quot;ไปยังร้านค้า&quot;</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-text-primary mb-2">○ ลิงก์ทั่วไป</h3>
            <p className="text-sm text-text-secondary">ลิงก์ข้อมูลทั่วไป, สเปกสินค้า, เว็บไซต์อื่นๆ</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">🤖 เครื่องมือเปรียบเทียบราคา</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          เครื่องมือ <a href="/tools/value-calculator" className="text-accent hover:underline">Value Calculator</a> 
          ของเราช่วยคำนวณความคุ้มค่าอย่างเป็นกลาง โดยไม่มีอคติต่อร้านค้าใดร้านค้าหนึ่ง 
          เราแสดงผลจากหลายร้านค้าเพื่อให้คุณเลือกได้ตามความต้องการ
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">🌟 การสนับสนุนเว็บไซต์</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          รายได้จากโปรแกรม affiliate ช่วยให้เราสามารถ:
        </p>
        <ul className="text-text-secondary space-y-2 mb-6">
          <li>• ทำการทดสอบและรีวิวสินค้าใหม่ๆ ต่อไป</li>
          <li>• รักษาความเป็นอิสระทางการเงิน</li>
          <li>• พัฒนาเครื่องมือและเนื้อหาคุณภาพ</li>
          <li>• ให้บริการฟรีแก่ผู้อ่านต่อไป</li>
        </ul>

        <div className="bg-accent/10 border-l-4 border-accent p-6 mb-6">
          <h3 className="font-semibold text-text-primary mb-2">💡 หยายก่อนซื้อ</h3>
          <p className="text-text-secondary">
            เราแนะนำให้คุณเปรียบเทียบราคาและอ่านรีวิวจากหลายแหล่งก่อนตัดสินใจซื้อสินค้า 
            ไม่ว่าจะผ่านลิงก์ของเราหรือไม่ก็ตาม การตัดสินใจที่ดีที่สุดคือสิ่งสำคัญที่สุด!
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">📞 ติดต่อเรา</h2>
        <p className="text-text-secondary leading-relaxed">
          หากคุณมีคำถามเกี่ยวกับนโยบายนี้ หรือต้องการข้อมูลเพิ่มเติม 
          <a href="/contact" className="text-accent hover:underline ml-1">ติดต่อเราได้ที่นี่</a>
        </p>

        <div className="mt-10 text-sm text-text-secondary border-t pt-6">
          <p><strong>อัปเดตล่าสุด:</strong> 24 สิงหาคม 2568</p>
          <p>นโยบายนี้อาจมีการเปลี่ยนแปลงโดยจะแจ้งให้ทราบล่วงหน้าในเว็บไซต์</p>
        </div>
      </div>
    </div>
  );
}