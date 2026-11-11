"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Wrench, 
  Globe, 
  Palette, 
  Layout 
} from "lucide-react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function SkillsPage() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-[#C8B48A]" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 text-[#C8B48A]" />,
      skills: ["React.js", "Next.js"],
    },
    {
      title: "CMS Platforms",
      icon: <Globe className="w-5 h-5 text-[#C8B48A]" />,
      skills: ["WordPress"],
    },
    {
      title: "Styling & UI",
      icon: <Layout className="w-5 h-5 text-[#C8B48A]" />,
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Web Design"],
    },
    {
      title: "Tools & Hosting",
      icon: <Wrench className="w-5 h-5 text-[#C8B48A]" />,
      skills: ["Git", "GitHub", "Vite", "Vercel"],
    },
    {
      title: "Design Skills",
      icon: <Palette className="w-5 h-5 text-[#C8B48A]" />,
      skills: ["Graphic Design", "Branding", "Visual Arts"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F1E17] text-[#F5F0E6] relative overflow-hidden py-20 px-6 md:px-12 flex flex-col justify-between items-center selection:bg-[#807A64] selection:text-white">
      
      {/* 1. باترن شبكي هندسي في الخلفية */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8B48A12_1px,transparent_1px),linear-gradient(to_bottom,#C8B48A12_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* 2. إضاءات خلفية نابضة ومتحركة */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#807A64]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#7F8C6A]/20 blur-[160px] rounded-full pointer-events-none" />

      {/* 3. الجسيمات والكوُر المتحركة في الخلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#C8B48A]/40 shadow-[0_0_8px_#C8B48A]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -130, 0],
              x: [0, (p.id % 2 === 0 ? 35 : -35), 0],
              opacity: [0.2, 0.85, 0.2],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* المحتوى الرئيسي */}
      <div className="max-w-5xl w-full z-10">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#807A64]/25 text-[#C8B48A] border border-[#807A64]/50 mb-4 inline-block tracking-widest uppercase shadow-lg backdrop-blur-md">
            EXPERTISE & STACK
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#F5F0E6]">
            Technical <span className="text-[#C8B48A]">Skills</span>
          </h1>
          <p className="text-[#F5F0E6]/70 mt-4 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            A comprehensive breakdown of the programming languages, frameworks, tools, and creative disciplines I work with.
          </p>
        </motion.div>

        {/* شبكة المهارات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-[#1E3B2F]/60 border border-[#807A64]/30 hover:border-[#807A64] transition-all duration-300 backdrop-blur-xl group shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-[#1E3B2F] border border-[#807A64]/40 group-hover:border-[#807A64] group-hover:bg-[#807A64]/10 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F5F0E6] group-hover:text-[#C8B48A] transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.08) + (skillIdx * 0.04) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#1E3B2F]/80 text-[#F5F0E6]/90 border border-[#807A64]/20 hover:border-[#807A64]/60 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* حقوق النشر السفلية */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full max-w-5xl z-10 mt-20 pt-6 border-t border-[#807A64]/20 text-center text-xs text-[#F5F0E6]/50"
      >
        © 2026 Salsabeel. All rights reserved.
      </motion.div>
    </main>
  );
}