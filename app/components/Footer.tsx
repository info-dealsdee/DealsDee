import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">Dealsdee</div>
            <p className="text-sm text-gray-300">
              © {currentYear} Dealsdee. สงวนลิขสิทธิ์
            </p>
          </div>
          
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link 
                  href="/affiliate-disclosure" 
                  className="text-gray-300 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  นโยบาย Affiliate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}