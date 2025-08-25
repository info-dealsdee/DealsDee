import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="th">
      <body>
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ไม่พบหน้านี้
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              ขออภัย เราไม่สามารถพบหน้าที่คุณกำลังมองหาได้ 
              อาจถูกย้ายไปแล้วหรือไม่มีอยู่จริง
            </p>
            
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <div className="px-6 py-3 font-semibold rounded-lg shadow-sm transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] relative overflow-hidden bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5">
                  กลับไปหน้าหลัก
                </div>
              </Link>
              
              <div className="flex justify-center space-x-6">
                <Link href="/reviews" className="text-orange-500 hover:text-orange-600 font-medium">
                  รีวิว
                </Link>
                <Link href="/compare" className="text-orange-500 hover:text-orange-600 font-medium">
                  เปรียบเทียบ
                </Link>
                <Link href="/tools" className="text-orange-500 hover:text-orange-600 font-medium">
                  เครื่องมือ
                </Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}