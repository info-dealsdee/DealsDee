'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/reviews', label: 'รีวิว' },
    { href: '/compare', label: 'เปรียบเทียบ' },
    { href: '/tools/value-calculator', label: 'เครื่องมือ' },
  ];

  return (
    <header className="bg-surface dark:bg-gray-900 border-b border-border dark:border-gray-700 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
      <nav className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 xs:h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            onClick={closeMenu}
          >
            Dealsdee
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-text-primary hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-3 py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="เปิด/ปิดเมนู"
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="block py-4 px-4 rounded-lg font-medium text-text-primary dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-lg active:bg-gray-100 dark:active:bg-gray-700"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}