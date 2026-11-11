"use client";

import { motion } from "framer-motion";
import { FaGithub, FaBehance, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import BackgroundParticles from "./BackgroundParticles"; // استدعاء مكون الخلفية

export default function HomeSection() {
  const whatsappNumber = "201123193768";
  const whatsappMessage = encodeURIComponent("أهلاً سلسبييل، أود التواصل معكِ بشأن مشروع جديد!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden bg-[#0F1E17]">
      
      {/* استدعاء الخلفية المتحركة */}
      <BackgroundParticles />

      {/* المحتوى والنصوص */}
      <div className="relative z-10 max-w-3xl text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#807A64]/25 text-[#C8B48A] border border-[#807A64]/50 mb-6 tracking-widest uppercase backdrop-blur-md shadow-lg inline-block">
            Front-End & WordPress Developer
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F0E6] mb-6 leading-tight"
        >
          Hi, I am <span className="text-[#cec290] underline decoration-[#C8B48A]/60 underline-offset-8">Salsabeel</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-[#F5F0E6]/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-light"
        >
          I am a Web Developer with 3 years of experience specializing in WordPress development. I am actively expanding my expertise by building advanced projects with React.js and Next.js, bridging the gap between clean code and high-performance web applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://www.facebook.com/loly.nour.79/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="w-11 h-11 rounded-full border border-[#7F8C6A]/60 flex items-center justify-center text-[#F5F0E6] hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300 shadow-md bg-[#0F1E17]/60 backdrop-blur-md"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-11 h-11 rounded-full border border-[#7F8C6A]/60 flex items-center justify-center text-[#F5F0E6] hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300 shadow-md bg-[#0F1E17]/60 backdrop-blur-md"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="https://github.com/salsabeel13"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-11 h-11 rounded-full border border-[#7F8C6A]/60 flex items-center justify-center text-[#F5F0E6] hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300 shadow-md bg-[#0F1E17]/60 backdrop-blur-md"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.behance.net/lolynourl"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance"
            className="w-11 h-11 rounded-full border border-[#7F8C6A]/60 flex items-center justify-center text-[#F5F0E6] hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300 shadow-md bg-[#0F1E17]/60 backdrop-blur-md"
          >
            <FaBehance size={18} />
          </a>

          <a
            href="mailto:nloly356@gmail.com"
            title="Email"
            className="w-11 h-11 rounded-full border border-[#7F8C6A]/60 flex items-center justify-center text-[#F5F0E6] hover:bg-[#807A64] hover:border-[#807A64] hover:scale-110 transition-all duration-300 shadow-md bg-[#0F1E17]/60 backdrop-blur-md"
          >
            <FaEnvelope size={18} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}