'use client';

import React from 'react';

export type ProductItem = {
  id: number;
  name: string;
  quantity: string;
  price: string;
};

type ProductRowProps = {
  item: ProductItem;
  isBestValue: boolean;
  onUpdate: (id: number, field: keyof ProductItem, value: string) => void;
  onDelete: (id: number) => void;
};

export default function ProductRow({ item, isBestValue, onUpdate, onDelete }: ProductRowProps) {
  const calculatePricePerUnit = () => {
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
      return null;
    }
    
    return price / quantity;
  };

  const pricePerUnit = calculatePricePerUnit();

  const isDataComplete = () => {
    return item.name.trim() !== '' && 
           item.quantity.trim() !== '' && 
           item.price.trim() !== '' &&
           !isNaN(parseFloat(item.quantity)) &&
           !isNaN(parseFloat(item.price)) &&
           parseFloat(item.quantity) > 0 &&
           parseFloat(item.price) > 0;
  };

  const handleShopeeSearch = () => {
    if (item.name.trim()) {
      const encodedKeyword = encodeURIComponent(item.name.trim());
      const url = `https://shopee.co.th/search?keyword=${encodedKeyword}&[YOUR_SHOPEE_AFFILIATE_TAGS]`;
      window.open(url, '_blank');
    }
  };

  const handleLazadaSearch = () => {
    if (item.name.trim()) {
      const encodedKeyword = encodeURIComponent(item.name.trim());
      const url = `https://www.lazada.co.th/catalog/?q=${encodedKeyword}&[YOUR_LAZADA_AFFILIATE_TAGS]`;
      window.open(url, '_blank');
    }
  };

  return (
    <div
      className={`p-4 rounded-xl border transition-all duration-200 ${
        isBestValue
          ? 'border-green-500 bg-green-50 shadow-lg'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">สินค้า #{item.id}</h3>
          {isBestValue && (
            <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
              คุ้มที่สุด!
            </span>
          )}
        </div>
        <button
          onClick={() => onDelete(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="ลบรายการ"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor={`name-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อสินค้า
          </label>
          <input
            type="text"
            id={`name-${item.id}`}
            value={item.name}
            onChange={(e) => onUpdate(item.id, 'name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="กรอกชื่อสินค้า"
          />
        </div>

        <div>
          <label htmlFor={`quantity-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            จำนวน/ปริมาณ
          </label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            onChange={(e) => onUpdate(item.id, 'quantity', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="เช่น 500"
            min="0"
            step="any"
          />
        </div>

        <div>
          <label htmlFor={`price-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            ราคา (บาท)
          </label>
          <input
            type="number"
            id={`price-${item.id}`}
            value={item.price}
            onChange={(e) => onUpdate(item.id, 'price', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="เช่น 299"
            min="0"
            step="any"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ราคาต่อหน่วย (บาท)
          </label>
          <div
            className={`w-full px-3 py-2 border rounded-md text-center font-semibold ${
              isBestValue
                ? 'border-green-300 bg-green-100 text-green-800'
                : 'border-gray-200 bg-gray-50 text-gray-700'
            }`}
          >
            {pricePerUnit !== null ? pricePerUnit.toFixed(2) : '-'}
          </div>
        </div>
      </div>

      {/* Search Buttons - Show only when all fields are complete */}
      {isDataComplete() && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleShopeeSearch}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              ค้นหาใน Shopee
            </button>
            <button
              onClick={handleLazadaSearch}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              ค้นหาใน Lazada
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            คลิกเพื่อค้นหา &ldquo;{item.name}&rdquo; ในแพลตฟอร์มที่ต้องการ
          </p>
        </div>
      )}
    </div>
  );
}