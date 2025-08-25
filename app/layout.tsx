import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { OrganizationSchema, WebsiteSchema } from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://dealsdee.com'),
  title: "Dealsdee: รีวิวและดีลที่ดีที่สุดสำหรับ Home Office",
  description: "ค้นหาเก้าอี้เพื่อสุขภาพ โต๊ะปรับระดับ และอุปกรณ์ทำงานที่คุ้มค่าที่สุด พร้อมรีวิวจากผู้เชี่ยวชาญและข้อเสนอพิเศษ",
  keywords: "รีวิวเก้าอี้, เก้าอี้เพื่อสุขภาพ, โต๊ะปรับระดับ, home office, ergonomic, ดีลเด็ด, อุปกรณ์ทำงาน",
  authors: [{ name: "Dealsdee Team" }],
  creator: "Dealsdee",
  publisher: "Dealsdee",
  openGraph: {
    title: "Dealsdee: รีวิวและดีลที่ดีที่สุดสำหรับ Home Office",
    description: "ค้นหาเก้าอี้เพื่อสุขภาพ โต๊ะปรับระดับ และอุปกรณ์ทำงานที่คุ้มค่าที่สุด",
    url: "https://dealsdee.com",
    siteName: "Dealsdee",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Dealsdee - รีวิวและดีลที่ดีที่สุดสำหรับ Home Office"
      }
    ],
    locale: "th_TH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealsdee: รีวิวและดีลที่ดีที่สุดสำหรับ Home Office",
    description: "ค้นหาเก้าอี้เพื่อสุขภาพ โต๊ะปรับระดับ และอุปกรณ์ทำงานที่คุ้มค่าที่สุด",
    images: ["/og-default.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here", // Add your actual verification code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <OrganizationSchema 
          name="Dealsdee"
          url="https://dealsdee.com"
          logo="https://dealsdee.com/logo.png"
          description="รีวิวและดีลที่ดีที่สุดสำหรับ Home Office เก้าอี้เพื่อสุขภาพ โต๊ะปรับระดับ และอุปกรณ์ทำงาน"
        />
        <WebsiteSchema 
          url="https://dealsdee.com"
          name="Dealsdee"
          description="ค้นหาเก้าอี้เพื่อสุขภาพ โต๊ะปรับระดับ และอุปกรณ์ทำงานที่คุ้มค่าที่สุด พร้อมรีวิวจากผู้เชี่ยวชาญ"
        />
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
