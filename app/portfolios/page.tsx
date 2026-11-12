'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundParticles from "../components/BackgroundParticles";
import { projectsData } from "../data/projectsData";

export default function PortfoliosPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // دالة الانتقال للعنصر التالي
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  // دالة الانتقال للعنصر السابق
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  // دعم السحب (Drag / Swipe)
  const handleDragEnd = (_e: any, info: { offset: { y: number } }) => {
    const threshold = 30; 
    if (info.offset.y < -threshold) {
      nextProject(); 
    } else if (info.offset.y > threshold) {
      prevProject(); 
    }
  };

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

        {/* =========================================
            نسخة الموبايل (Mobile View): عرض سلس وواضح 
           ========================================= */}
        <div className="w-full flex flex-col md:hidden space-y-4 mt-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#1E3B2F]/80 border border-[#807A64]/40 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md p-4 flex flex-col space-y-3"
            >
              {/* صورة المشروع */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#1E3B2F]/90 text-[#C8B48A] border border-[#807A64]/50 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* تفاصيل المشروع */}
              <div className="flex flex-col space-y-1">
                <h3 className="text-lg font-bold text-[#F5F0E6]">
                  {project.title}
                </h3>
                <div className="text-xs text-[#F5F0E6]/80 flex items-center justify-between">
                  <span>
                    <strong className="text-[#C8B48A]">Tech:</strong> {project.methodology}
                  </span>
                  <span className="text-[#807A64]">#{project.id}</span>
                </div>
              </div>

              {/* زر المعاينة الحية */}
              <div className="pt-2 border-t border-[#807A64]/30 flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C8B48A] text-[#1E3B2F] text-xs font-semibold hover:bg-white transition-colors shadow-md w-full justify-center"
                >
                  Live Preview <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>


        {/* =========================================
            نسخة الديسكتوب (Desktop View): عجلة الـ 3D كما هي
           ========================================= */}
        <div className="relative w-full hidden md:flex items-center justify-center px-16">
          
          {/* Left Arrow Button */}
          <button 
            onClick={prevProject}
            className="absolute left-4 z-40 p-3.5 rounded-full bg-[#1E3B2F]/90 border border-[#807A64]/50 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Vertical 3D Perspective Wheel */}
          <motion.div 
            className="relative w-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing py-4"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <div className="flex flex-col items-center justify-center -space-y-20 w-full py-2 relative perspective-[1400px]">
              
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
                          ? "w-[540px] h-[320px] border-[#C8B48A] shadow-[#807A64]/50" 
                          : isNear
                          ? "w-[460px] h-[190px] border-[#807A64]/40 opacity-75"
                          : "w-[380px] h-[130px] border-[#807A64]/20 opacity-30 pointer-events-none"
                      }`}
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#807A64]" />

                      {/* Image Container */}
                      <div className="relative w-full h-full overflow-hidden bg-black/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                        />
                        
                        {isCenter && (
                          <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-medium bg-[#1E3B2F]/90 text-[#C8B48A] border border-[#807A64]/50 backdrop-blur-md">
                            {project.category}
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay for Center Card */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-[#0F1E17]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-20 text-left">
                          <div>
                            <span className="text-xs font-semibold text-[#C8B48A] uppercase tracking-wider block mb-2">
                              {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-[#F5F0E6] mb-2">
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
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C8B48A] text-[#1E3B2F] text-sm font-semibold hover:bg-white transition-colors shadow-lg"
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
            className="absolute right-4 z-40 p-3.5 rounded-full bg-[#1E3B2F]/90 border border-[#807A64]/50 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>

        </div>

      </div>
    </div>
  );
}