"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 7 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. باترن شبكي هندسي أغمق وأكثر وضوحاً وبروزاً */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8B48A12_1px,transparent_1px),linear-gradient(to_bottom,#C8B48A12_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

      {/* 2. إضاءات خلفية عميقة وداكنة جداً */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#807A64]/15 blur-[160px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1E3B2F]/60 blur-[160px] rounded-full" />

      {/* 3. الكور والجسيمات المتحركة */}
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
            y: [0, -150, 0],
            x: [0, p.id % 2 === 0 ? 40 : -40, 0],
            opacity: [0.15, 0.9, 0.15],
            scale: [1, 1.4, 1],
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
  );
}