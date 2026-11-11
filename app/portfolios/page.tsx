'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundParticles from "../components/BackgroundParticles"; // تأكدي من مسار المكون حسب مشروعك
import { projectsData } from "../data/projectsData"; // استيراد بيانات المشاريع

export default function PortfoliosPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // دالة الانتقال للعنصر التالي (للأسفل)
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  // دالة الانتقال للعنصر السابق (للأعلى)
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  // دعم السحب (Drag / Swipe) بسلاسة فائقة
  const handleDragEnd = (_e: any, info: { offset: { y: number } }) => {
    const threshold = 30; 
    if (info.offset.y < -threshold) {
      nextProject(); 
    } else if (info.offset.y > threshold) {
      prevProject(); 
    }
  };

  // جلب العناصر المراد عرضها مع تأثير المنظور
  const getVisibleProjects = () => {
    const total = projectsData.length;
    return [
      { project: projectsData[(currentIndex - 2 + total) % total], position: 'far-top' },
      { project: projectsData[(currentIndex - 1 + total) % total], position: 'near-top' },
      { project: projectsData[currentIndex], position: 'center' },
      { project: projectsData[(currentIndex + 1) % total], position: 'near-bottom' },
      { project: projectsData[(currentIndex + 2) % total], position: 'far-bottom' },
    ];
  };

  const visibleItems = getVisibleProjects();

  return (
    <div className="min-h-screen text-[#F5F0E6] relative overflow-hidden py-10 px-4 md:px-12 flex flex-col items-center justify-center bg-[#0F1E17] select-none">
      
      {/* Background Particles */}
      <BackgroundParticles />

      <div className="max-w-5xl w-full z-10 flex flex-col items-center space-y-6">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#807A64]/25 text-[#C8B48A] border border-[#807A64]/50 mb-2 inline-block tracking-widest uppercase shadow-lg backdrop-blur-md">
            My Creative Space
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#F5F0E6]">
            PORT<span className="text-[#C8B48A]">FOLIOS</span>
          </h1>
          <p className="text-[#F5F0E6]/70 max-w-md mx-auto mt-1 text-xs md:text-sm">
            Explore my selected works featuring custom WordPress platforms, Next.js applications, and creative UI/UX designs.
          </p>
        </motion.div>

        {/* Container with Side Navigation Arrows and Vertical Wheel */}
        <div className="relative w-full flex items-center justify-center px-6 md:px-16">
          
          {/* Left Arrow Button */}
          <button 
            onClick={prevProject}
            className="absolute left-0 md:left-4 z-40 p-3.5 rounded-full bg-[#1E3B2F]/90 border border-[#807A64]/50 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Vertical 3D Perspective Wheel with Drag Support */}
          <motion.div 
            className="relative w-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing py-4"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <div className="flex flex-col items-center justify-center -space-y-14 md:-space-y-20 w-full py-2 relative perspective-[1400px]">
              
              <AnimatePresence mode="popLayout">
                {visibleItems.map(({ project, position }) => {
                  const isCenter = position === 'center';
                  const isNear = position === 'near-top' || position === 'near-bottom';

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isCenter ? 1 : isNear ? 0.7 : 0.25,
                        scale: isCenter ? 1 : isNear ? 0.88 : 0.75,
                        y: 0,
                        rotateX: position === 'far-top' ? 25 : position === 'near-top' ? 12 : position === 'near-bottom' ? -12 : position === 'far-bottom' ? -25 : 0,
                        z: isCenter ? 80 : isNear ? 20 : -60,
                        zIndex: isCenter ? 30 : isNear ? 20 : 10
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 26, 
                        mass: 0.8 
                      }}
                      className={`group relative flex-shrink-0 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all bg-[#1E3B2F]/60 border ${
                        isCenter 
                          ? "w-[340px] md:w-[540px] h-[260px] md:h-[320px] border-[#C8B48A] shadow-[#807A64]/50" 
                          : isNear
                          ? "w-[300px] md:w-[460px] h-[160px] md:h-[190px] border-[#807A64]/40 opacity-75"
                          : "w-[260px] md:w-[380px] h-[110px] md:h-[130px] border-[#807A64]/20 opacity-30 pointer-events-none"
                      }`}
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#807A64]" />

                      {/* Image Container (Takes full height now) */}
                      <div className="relative w-full h-full overflow-hidden bg-black/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                        />
                        
                        {/* Category Badge (Only for center) */}
                        {isCenter && (
                          <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium bg-[#1E3B2F]/90 text-[#C8B48A] border border-[#807A64]/50 backdrop-blur-md">
                            {project.category}
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay (Appears ONLY on hover for the center card with Title, Tool & Link) */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-[#0F1E17]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-20 text-left">
                          <div>
                            <span className="text-xs font-semibold text-[#C8B48A] uppercase tracking-wider block mb-2">
                              {project.category}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-[#F5F0E6] mb-2">
                              {project.title}
                            </h3>
                            <div className="text-[#F5F0E6]/80 text-sm">
                              <span className="text-[#C8B48A] block font-semibold mb-1 uppercase tracking-wide text-xs">
                                Tool / Tech:
                              </span>
                              <span className="px-3 py-1 rounded-xl bg-[#807A64]/20 border border-[#807A64]/40 text-[#F5F0E6] inline-block font-medium text-xs">
                                {project.methodology}
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-[#807A64]/30 flex items-center justify-end">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C8B48A] text-[#1E3B2F] text-xs md:text-sm font-semibold hover:bg-white transition-colors shadow-lg"
                            >
                              Live Preview <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>
          </motion.div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextProject}
            className="absolute right-0 md:right-4 z-40 p-3.5 rounded-full bg-[#1E3B2F]/90 border border-[#807A64]/50 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>

        </div>

      </div>
    </div>
  );
}