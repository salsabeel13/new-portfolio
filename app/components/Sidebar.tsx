"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaBehance,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SKILLS", href: "/skills" },
  { label: "PORTFOLIOS", href: "/portfolios" },
  { label: "CONTACT", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* زر الموبايل للفتح والإغلاق */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-[#1E3B2F] text-[#F5F0E6] rounded-md border border-[#7F8C6A] shadow-lg"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
      </button>

      {/* الشريط الجانبي Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-[#1E3B2F] border-r border-[#7F8C6A]/30 flex flex-col justify-between z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* الجزء العلوي: الصورة الشخصية والدائرة المحيطة بها */}
        <div className="pt-8 pb-4 lg:pt-10 lg:pb-6 flex flex-col items-center justify-center border-b border-[#7F8C6A]/20">
          <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-[4px] lg:border-[5px] border-[#807A64] p-1.5 lg:p-2 shadow-2xl bg-[#1E3B2F]/80">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/photo/me2.jpeg"
                alt="Salsabeel Nour"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* 🌟 الشكل الرأسي الأول: يملأ الفراغ العلوي (فوق الروابط) في الموبايل فقط */}
        <div className="lg:hidden flex-1 flex flex-col items-center justify-center py-2 opacity-80">
          <div className="flex flex-col items-center justify-center gap-1.5 h-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8B48A]" />
            <span className="w-[1px] h-10 bg-gradient-to-b from-[#C8B48A] via-[#7F8C6A] to-transparent" />
            <span className="w-2.5 h-2.5 rotate-45 border border-[#C8B48A] bg-[#C8B48A]/20" />
            <span className="w-[1px] h-10 bg-gradient-to-t from-[#C8B48A] via-[#7F8C6A] to-transparent" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8B48A]" />
          </div>
        </div>

        {/* الجزء الأوسط: قائمة التنقل Navigation Links */}
        <nav className="my-2 flex flex-col justify-center">
          <ul className="w-full space-y-1.5 px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <li key={item.label} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center py-2.5 lg:py-3 text-xs tracking-[2px] font-bold transition-all duration-300 relative rounded-lg overflow-hidden ${
                      isActive
                        ? "bg-[#807A64] text-white shadow-md shadow-black/20 translate-x-1"
                        : "text-[#F5F0E6]/70 hover:text-white hover:bg-[#807A64]/20 hover:translate-x-1"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1.5 bg-[#C8B48A]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 🌟 الشكل الرأسي الثاني: يملأ الفراغ السفلي (تحت الروابط) في الموبايل فقط */}
        <div className="lg:hidden flex-1 flex flex-col items-center justify-center py-2 opacity-80">
          <div className="flex flex-col items-center justify-center gap-1.5 h-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8B48A]" />
            <span className="w-[1px] h-10 bg-gradient-to-b from-[#C8B48A] via-[#7F8C6A] to-transparent" />
            <span className="w-2.5 h-2.5 rounded-full border border-[#C8B48A] bg-[#C8B48A]/20" />
            <span className="w-[1px] h-10 bg-gradient-to-t from-[#C8B48A] via-[#7F8C6A] to-transparent" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8B48A]" />
          </div>
        </div>

        {/* الجزء السفلي: أيقونات التواصل */}
        <div className="pb-6 pt-4 border-t border-[#7F8C6A]/20 text-center flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/salsabeel13"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-9 h-9 rounded-full border border-[#7F8C6A]/50 flex items-center justify-center text-[#F5F0E6]/80 hover:text-white hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={14} />
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net/lolynourl"
              target="_blank"
              rel="noopener noreferrer"
              title="Behance"
              className="w-9 h-9 rounded-full border border-[#7F8C6A]/50 flex items-center justify-center text-[#F5F0E6]/80 hover:text-white hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300"
            >
              <FaBehance size={14} />
            </a>

            {/* Email */}
            <a
              href="mailto:nloly356@gmail.com"
              title="Email"
              className="w-9 h-9 rounded-full border border-[#7F8C6A]/50 flex items-center justify-center text-[#F5F0E6]/80 hover:text-white hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope size={14} />
            </a>
          </div>

          {/* نص الحقوق */}
          <p className="text-[11px] text-[#C8B48A]/70 tracking-wider">
            © 2026 <span className="text-[#F5F0E6]">Salsabeel</span>
          </p>
        </div>
      </aside>

      {/* خلفية معتمة عند فتح المكون في الشاشات الصغيرة */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
        />
      )}
    </>
  );
}