'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            onClick={closeMenu}
          >
            Dealsdee
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/reviews" 
                className="text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link 
                href="/compare" 
                className="text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
              >
                Compare
              </Link>
            </li>
            <li>
              <Link 
                href="/tools" 
                className="text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
              >
                Tools
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
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

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col space-y-2 pb-4">
            <li>
              <Link 
                href="/reviews" 
                className="block py-2 px-4 text-text-primary hover:bg-gray-100 hover:text-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                onClick={closeMenu}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link 
                href="/compare" 
                className="block py-2 px-4 text-text-primary hover:bg-gray-100 hover:text-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                onClick={closeMenu}
              >
                Compare
              </Link>
            </li>
            <li>
              <Link 
                href="/tools" 
                className="block py-2 px-4 text-text-primary hover:bg-gray-100 hover:text-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                onClick={closeMenu}
              >
                Tools
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;