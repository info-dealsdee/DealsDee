import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  excerpt: string;
  href: string;
  date?: string;
  score?: number;
  price?: string;
  badge?: string;
};

export default function Card({ imageUrl, title, description, excerpt, href, date, score, price, badge }: CardProps) {
  return (
    <Link href={href} className="block group h-full">
      <article className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-card dark:shadow-none dark:ring-1 dark:ring-gray-700 overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-card-hover dark:hover:ring-gray-600 hover:-translate-y-1 flex flex-col">
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {badge}
              </span>
            </div>
          )}
          {score && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                <span className="text-accent font-bold text-sm">{score}</span>
                <span className="text-text-secondary dark:text-gray-400 text-xs">/10</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 p-6 flex flex-col space-y-1">
          {(date || price) && (
            <div className="flex items-center justify-between text-sm mb-3">
              {date && (
                <span className="text-text-secondary dark:text-gray-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {date}
                </span>
              )}
              {price && (
                <span className="text-accent font-bold text-base">{price}</span>
              )}
            </div>
          )}
          <h3 className="text-xl font-bold text-text-primary dark:text-gray-100 line-clamp-2 group-hover:text-accent transition-colors duration-200 leading-tight">
            {title}
          </h3>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 flex-1">
            {description || excerpt}
          </p>
          <div className="mt-6 flex items-center text-accent font-semibold text-sm">
            <span>อ่านต่อ</span>
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}