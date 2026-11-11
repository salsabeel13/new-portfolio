'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // توليد الجسيمات المتحركة عشوائياً في خلفية البريلودر
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 6 + 3,
      delay: Math.random() * 3,
    }));
    setParticles(generated);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1410] text-[#F5F0E6] overflow-hidden pointer-events-none"
        >
          {/* ستارة علوية تنفتح للأعلى مع الخلفية المظلمة */}
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#0A1410] z-20 flex items-center justify-center overflow-hidden"
          >
            {/* 1. باترن شبكي هندسي فخم في الخلفية */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8B48A10_1px,transparent_1px),linear-gradient(to_bottom,#C8B48A10_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

            {/* 2. إضاءات محيطية ناعمة */}
            <div className="absolute w-[500px] h-[500px] bg-[#807A64]/15 blur-[160px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute w-[400px] h-[400px] bg-[#1E3B2F]/60 blur-[140px] rounded-full pointer-events-none" />

            {/* 3. الكور والجسيمات المتحركة بكثرة في كل الخلفية */}
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
                  y: [0, -120, 0],
                  x: [0, (p.id % 2 === 0 ? 30 : -30), 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* محتوى النسبة المئوية الضخمة في المنتصف */}
            <div className="relative z-30 flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C8B48A] mb-2 font-mono">
                Loading Experience
              </span>
              
              <motion.h1 className="text-7xl md:text-9xl font-black tracking-tighter text-[#F5F0E6] font-mono">
                {Math.min(progress, 100)}
                <span className="text-[#C8B48A] text-4xl md:text-6xl">%</span>
              </motion.h1>
              
              {/* شريط دقيق في الأسفل */}
              <div className="w-32 h-[2px] bg-[#807A64]/30 mt-6 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-[#C8B48A]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}