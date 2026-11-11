'use client';

import React from "react";
import { motion } from "framer-motion";
import BackgroundParticles from "../components/BackgroundParticles"; // تأكد من مطابقة المسار لمشروعك

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[#F5F0E6] relative overflow-hidden py-20 px-6 md:px-12 flex flex-col justify-center items-center bg-[#0F1E17]">
      
      {/* استدعاء الخلفية المتحركة الموحدة */}
      <BackgroundParticles />

      <div className="max-w-4xl w-full z-10 space-y-16">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#807A64]/25 text-[#C8B48A] border border-[#807A64]/50 mb-4 inline-block tracking-widest uppercase shadow-lg backdrop-blur-md">
            About Me
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#F5F0E6]">
            Education & <span className="text-[#C8B48A]">Experience</span>
          </h1>
        </motion.div>

        {/* SECTION 1: SUMMARY / BACKGROUND */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="p-8 md:p-10 rounded-3xl bg-[#1E3B2F]/60 border border-[#807A64]/40 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-[#807A64]/10 transition-all"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#807A64]" />
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0E6] flex items-center gap-3">
              <span className="text-[#C8B48A]">01.</span> Summary & Background
            </h2>
          </div>

          <div className="space-y-3">
            <p className="text-[#F5F0E6]/90 text-base md:text-lg leading-relaxed">
              I am Salsabeel, a Web Developer and Graphic Designer with 3 years of experience specializing in WordPress development, alongside growing expertise in React.js. Previously, I focused on graphic design before fully transitioning into web development, where I have significantly enhanced my technical skills. Currently, I am deeply invested in expanding my knowledge of modern front-end technologies, consistently building advanced projects with React and Next.js to deliver high-performance web applications.
            </p>
          </div>
        </motion.section>

        {/* SECTION 2: EDUCATION */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="p-8 md:p-10 rounded-3xl bg-[#1E3B2F]/60 border border-[#807A64]/40 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-[#807A64]/10 transition-all"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#807A64]" />
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0E6] flex items-center gap-3">
              <span className="text-[#C8B48A]">02.</span> Education
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#807A64]/20 text-[#C8B48A] border border-[#807A64]/30">
              2018 - 2022
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#F5F0E6]">
              Bachelor of Fine Arts (B.F.A.) in Sculpture
            </h3>
            <p className="text-sm font-medium text-[#7F8C6A]">
              Alexandria University — Faculty of Fine Arts
            </p>
            <p className="text-[#F5F0E6]/80 text-sm leading-relaxed pt-2">
              Developed a strong foundation in visual arts, spatial design, and composition, enhancing creative problem-solving and attention to detail—skills directly applied to web design and front-end development.
            </p>
          </div>
        </motion.section>

        {/* SECTION 3: WORK EXPERIENCE */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="p-8 md:p-10 rounded-3xl bg-[#1E3B2F]/60 border border-[#7F8C6A]/40 backdrop-blur-xl relative overflow-hidden shadow-xl transition-all"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#7F8C6A]" />

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0E6] flex items-center gap-3">
              <span className="text-[#C8B48A]">03.</span> Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            
            {/* Experience Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#807A64] pl-5 space-y-2 relative"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-[#F5F0E6]">
                  Freelance WordPress Developer <span className="text-[#C8B48A] font-normal">| Infinity</span>
                </h3>
                <span className="text-xs font-medium text-[#C8B48A]">
                  Oct 2023 – Present
                </span>
              </div>
              <ul className="list-disc list-inside text-[#F5F0E6]/80 text-sm space-y-1.5 leading-relaxed pt-1">
                <li>Developed, customized, and optimized functional WordPress websites and e-commerce stores for various clients.</li>
                <li>Implemented modern front-end updates using HTML5, CSS3, JavaScript, and Tailwind CSS to enhance user experience.</li>
                <li>Managed client communication, gathered project requirements, and delivered fully responsive web solutions independently.</li>
              </ul>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#7F8C6A]/50 pl-5 space-y-2 relative"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-[#F5F0E6]">
                  WordPress Developer Trainee <span className="text-[#7F8C6A] font-normal">| Ninja Way</span>
                </h3>
                <span className="text-xs font-medium text-[#7F8C6A]">
                  Sep 2024 – Feb 2025
                </span>
              </div>
              <ul className="list-disc list-inside text-[#F5F0E6]/80 text-sm space-y-1.5 leading-relaxed pt-1">
                <li>Assisted in building and maintaining WordPress sites, troubleshooting plugin conflicts, and ensuring site security.</li>
                <li>Worked on integrating clean layouts and themes while ensuring speed optimization and responsive design across all devices.</li>
                <li>Gained hands-on experience in adapting design files into clean, functional web layouts.</li>
              </ul>
            </motion.div>

            {/* Experience Item 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#7F8C6A]/50 pl-5 space-y-2 relative"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-[#F5F0E6]">
                  Graphic Designer <span className="text-[#7F8C6A] font-normal">| Graphic Company</span>
                </h3>
                <span className="text-xs font-medium text-[#7F8C6A]">
                  2022 – 2023
                </span>
              </div>
              <ul className="list-disc list-inside text-[#F5F0E6]/80 text-sm space-y-1.5 leading-relaxed pt-1">
                <li>Created high-quality visual designs, marketing materials, and branding assets tailored to client needs.</li>
                <li>Collaborated with teams to translate conceptual ideas into engaging layout designs and digital graphics.</li>
              </ul>
            </motion.div>

          </div>
        </motion.section>

      </div>
    </div>
  );
}