'use client';

import { useState, useMemo } from 'react';
import ProductRow, { type ProductItem } from './ProductRow';

export default function ValueCalculator() {
  const [products, setProducts] = useState<ProductItem[]>([
    { id: 1, name: '', quantity: '', price: '' },
    { id: 2, name: '', quantity: '', price: '' },
    { id: 3, name: '', quantity: '', price: '' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [nextId, setNextId] = useState(4);

  const updateProduct = (id: number, field: keyof ProductItem, value: string) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    if (products.length > 1) {
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    }
  };

  const addProduct = () => {
    setProducts(prevProducts => [
      ...prevProducts,
      { id: nextId, name: '', quantity: '', price: '' }
    ]);
    setNextId(prevId => prevId + 1);
  };

  const bestValueId = useMemo(() => {
    let bestId: number | null = null;
    let lowestPricePerUnit = Infinity;

    products.forEach(product => {
      const price = parseFloat(product.price);
      const quantity = parseFloat(product.quantity);
      
      if (!isNaN(price) && !isNaN(quantity) && price > 0 && quantity > 0) {
        const pricePerUnit = price / quantity;
        if (pricePerUnit < lowestPricePerUnit) {
          lowestPricePerUnit = pricePerUnit;
          bestId = product.id;
        }
      }
    });

    return bestId;
  }, [products]);

  const handleShopeeSearch = () => {
    if (searchTerm.trim()) {
      const encodedKeyword = encodeURIComponent(searchTerm.trim());
      const url = `https://shopee.co.th/search?keyword=${encodedKeyword}&[YOUR_SHOPEE_AFFILIATE_TAGS]`;
      window.open(url, '_blank');
    }
  };

  const handleLazadaSearch = () => {
    if (searchTerm.trim()) {
      const encodedKeyword = encodeURIComponent(searchTerm.trim());
      const url = `https://www.lazada.co.th/catalog/?q=${encodedKeyword}&[YOUR_LAZADA_AFFILIATE_TAGS]`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">เครื่องมือคำนวณความคุ้มค่า</h1>
        <p className="mt-4 text-lg text-text-secondary text-center">เปรียบเทียบสินค้าหลายชิ้นเพื่อหาว่าชิ้นไหนคุ้มค่าที่สุด (ราคาต่อหน่วยต่ำที่สุด)</p>
      </div>

      {/* Affiliate Search Section */}
      <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">ค้นหาสินค้าเพื่อเปรียบเทียบ</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="กรอกชื่อสินค้าที่ต้องการค้นหา เช่น นมผงเด็ก"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <div className="flex gap-3">
            <button
              onClick={handleShopeeSearch}
              disabled={!searchTerm.trim()}
              className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            >
              ค้นหาใน Shopee
            </button>
            <button
              onClick={handleLazadaSearch}
              disabled={!searchTerm.trim()}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            >
              ค้นหาใน Lazada
            </button>
          </div>
        </div>
      </div>

      {/* Product Comparison Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">เปรียบเทียบสินค้า</h2>
        {products.map(product => (
          <ProductRow
            key={product.id}
            item={product}
            isBestValue={product.id === bestValueId}
            onUpdate={updateProduct}
            onDelete={deleteProduct}
          />
        ))}
      </div>

      {/* Add Row Button */}
      <div className="text-center">
        <button
          onClick={addProduct}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          เพิ่มสินค้าเพื่อเปรียบเทียบ
        </button>
      </div>

      {/* Instructions */}
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">วิธีใช้งาน:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• กรอกข้อมูลสินค้าในแต่ละรายการ: ชื่อ จำนวน/ปริมาณ และราคา</li>
          <li>• ระบบจะคำนวณราคาต่อหน่วยโดยอัตโนมัติ</li>
          <li>• สินค้าที่มีราคาต่อหน่วยต่ำที่สุดจะแสดงเป็นสีเขียว พร้อมป้าย &ldquo;คุ้มที่สุด!&rdquo;</li>
          <li>• สามารถเพิ่มหรือลบรายการสินค้าได้ตามต้องการ</li>
        </ul>
      </div>
    </div>
  );
}