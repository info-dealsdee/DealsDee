import Link from 'next/link';
import Button from './components/Button';

export default function NotFound() {
  return (
    <main>
      <div>
        <div>
          <h1>
            404
          </h1>
          <div></div>
        </div>
        
        <h2>
          ไม่พบหน้านี้
        </h2>
        
        <p>
          ขออภัย เราไม่สามารถพบหน้าที่คุณกำลังมองหาได้ 
          อาจถูกย้ายไปแล้วหรือไม่มีอยู่จริง
        </p>
        
        <div>
          <Link href="/">
            <Button variant="primary">
              กลับไปหน้าหลัก
            </Button>
          </Link>
          
          <div>
            <Link href="/reviews">
              รีวิว
            </Link>
            <Link href="/compare">
              เปรียบเทียบ
            </Link>
            <Link href="/tools">
              เครื่องมือ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}