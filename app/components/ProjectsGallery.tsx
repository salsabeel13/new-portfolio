"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

export default function ProjectsGallery() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header & Navigation Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div className="text-center md:text-left">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#807A64]/25 text-[#C8B48A] border border-[#807A64]/50 mb-4 inline-block tracking-widest uppercase">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5F0E6]">
            Featured <span className="text-[#C8B48A]">Projects</span>
          </h2>
        </div>

        {/* Slider Controls */}
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="p-3 rounded-full bg-[#1E3B2F] border border-[#807A64]/40 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-all shadow-lg"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="p-3 rounded-full bg-[#1E3B2F] border border-[#807A64]/40 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-all shadow-lg"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Horizontal Slider Container */}
      <div 
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 pt-2 px-2 focus:outline-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative flex-shrink-0 w-[380px] md:w-[460px] bg-[#1E3B2F]/40 border border-[#807A64]/30 rounded-3xl overflow-hidden shadow-2xl hover:border-[#C8B48A] transition-all duration-500 snap-center"
          >
            {/* 1. Image Container (Wider & Full Display) */}
            <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden bg-black/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Category Badge */}
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium bg-[#1E3B2F]/90 text-[#C8B48A] border border-[#807A64]/50 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            {/* 2. Card Bottom Bar (Only external link, no title here) */}
            <div className="p-5 bg-[#1E3B2F]/60 border-t border-[#807A64]/20 flex justify-between items-center">
              <span className="text-xs text-[#C8B48A] font-medium tracking-widest">
                PROJECT #{project.id} / 23
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#807A64]/20 text-[#C8B48A] hover:bg-[#C8B48A] hover:text-[#1E3B2F] transition-colors"
                title="Visit Website"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* 3. Hover Overlay (Title appears ONLY here with Tool and Link) */}
            <div className="absolute inset-0 bg-[#0F1E17]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-8 z-20">
              <div>
                <span className="text-xs font-semibold text-[#C8B48A] uppercase tracking-wider block mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#F5F0E6] mb-4">
                  {project.title}
                </h3>
                <div className="text-[#F5F0E6]/80 text-sm">
                  <span className="text-[#C8B48A] block font-semibold mb-1 uppercase tracking-wide text-xs">
                    Tool / Tech:
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-[#807A64]/20 border border-[#807A64]/40 text-[#F5F0E6] inline-block font-medium">
                    {project.methodology}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#807A64]/30 flex items-center justify-between">
                <span className="text-xs text-[#C8B48A]">
                  Project {project.id} of 23
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8B48A] text-[#1E3B2F] text-sm font-semibold hover:bg-white transition-colors shadow-lg"
                >
                  Live Preview <ExternalLink size={16} />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}