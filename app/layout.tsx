import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar"; // تأكدي أن مسار استدعاء Sidebar صحيح حسب مجلداتك

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salsabeel Nour | Portfolio",
  description: "Web Developer & Graphic Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`}>
        <div className="min-h-screen flex">
          {/* الـ Sidebar يظهر ثابتاً في جميع الصفحات */}
          <Sidebar />

          {/* محتوى الصفحات المختلفة (Children) مع ترك مساحة عرض للسايدبار في الشاشات الكبيرة */}
          <main className="flex-1 lg:pl-72 min-h-screen flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}