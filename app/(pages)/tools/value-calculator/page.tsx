import { Metadata } from 'next';
import ValueCalculator from '@/app/components/ValueCalculator';

export const metadata: Metadata = {
  title: 'เครื่องมือคำนวณความคุ้มค่า | เปรียบเทียบราคาสินค้า',
  description: 'เปรียบเทียบสินค้าหลายชิ้นเพื่อหาว่าชิ้นไหนคุ้มค่าที่สุด ด้วยการคำนวณราคาต่อหน่วย',
};

export default function ValueCalculatorPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-16 sm:py-24">
        <ValueCalculator />
      </div>
    </main>
  );
}