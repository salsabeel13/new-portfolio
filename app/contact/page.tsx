"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaLocationDot, 
  FaWhatsapp, 
  FaFacebookF, 
  FaGithub, 
  FaBehance 
} from "react-icons/fa6";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function ContactPage() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const whatsappNumber = "201123193768";
  const defaultWhatsappMsg = encodeURIComponent("أهلاً سلسبييل، أود التواصل معكِ بشأن مشروع جديد!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsappMsg}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:nloly356@gmail.com?subject=${encodeURIComponent(
      formData.subject || "مشروع جديد"
    )}&body=${encodeURIComponent(
      `الاسم: ${formData.name}\nالبريد: ${formData.email}\n\nالرسالة:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main className="min-h-screen bg-[#0F1E17] text-[#F5F0E6] relative overflow-hidden py-24 px-6 lg:px-20 flex flex-col justify-center items-center selection:bg-[#807A64] selection:text-white">
      
      {/* 1. باترن شبكي هندسي في الخلفية */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8B48A12_1px,transparent_1px),linear-gradient(to_bottom,#C8B48A12_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* 2. إضاءات خلفية نابضة ومتحركة */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#807A64]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#1E3B2F]/60 blur-[160px] rounded-full pointer-events-none" />

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

      {/* Header الصفحة */}
      <motion.div 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-16"
      >
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#807A64]/25 text-[#C8B48A] border border-[#807A64]/50 mb-4 inline-block tracking-widest uppercase shadow-lg backdrop-blur-md">
          Contact Me
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#F5F0E6]">
          Let’s Work <span className="text-[#C8B48A] underline decoration-[#C8B48A]/50 underline-offset-8">Together</span>
        </h1>
        <p className="text-[#F5F0E6]/80 text-base md:text-lg">
          Have a project in mind or want to create something amazing? Feel free to reach out via message, WhatsApp, or email!
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto w-full items-start">
        
        {/* معلومات التواصل */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          
          {/* Email */}
          <a 
            href="mailto:nloly356@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-[#1E3B2F]/60 border border-[#7F8C6A]/30 hover:border-[#807A64] hover:bg-[#807A64]/10 transition-all duration-300 shadow-lg group backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[#807A64]/20 text-[#C8B48A] flex items-center justify-center text-xl group-hover:bg-[#807A64] group-hover:text-[#F5F0E6] transition-all">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs text-[#C8B48A] font-medium uppercase tracking-wider">Email Me</p>
              <p className="text-sm sm:text-base font-semibold text-[#F5F0E6]">nloly356@gmail.com</p>
            </div>
          </a>

          {/* WhatsApp / Phone */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-[#1E3B2F]/60 border border-[#7F8C6A]/30 hover:border-[#807A64] hover:bg-[#807A64]/10 transition-all duration-300 shadow-lg group backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[#807A64]/20 text-[#C8B48A] flex items-center justify-center text-xl group-hover:bg-[#807A64] group-hover:text-[#F5F0E6] transition-all">
              <FaWhatsapp />
            </div>
            <div>
              <p className="text-xs text-[#C8B48A] font-medium uppercase tracking-wider">WhatsApp / Phone</p>
              <p className="text-sm sm:text-base font-semibold text-[#F5F0E6]">+20 112 319 3768</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#1E3B2F]/60 border border-[#7F8C6A]/30 backdrop-blur-md">
            <div className="w-12 h-12 rounded-xl bg-[#807A64]/20 text-[#C8B48A] flex items-center justify-center text-xl">
              <FaLocationDot />
            </div>
            <div>
              <p className="text-xs text-[#C8B48A] font-medium uppercase tracking-wider">Location</p>
              <p className="text-sm sm:text-base font-semibold text-[#F5F0E6]">Alexandria, Egypt</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm text-[#C8B48A] font-medium mb-3">Connect with me:</p>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/loly.nour.79/", label: "Facebook" },
                { icon: <FaWhatsapp />, href: whatsappUrl, label: "WhatsApp" },
                { icon: <FaGithub />, href: "https://github.com/salsabeel13", label: "GitHub" },
                { icon: <FaBehance />, href: "https://www.behance.net/lolynourl", label: "Behance" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-[#7F8C6A]/40 flex items-center justify-center text-[#F5F0E6] hover:bg-[#807A64] hover:border-[#807A64] transition-all duration-300 shadow-md bg-[#1E3B2F]/60 backdrop-blur-md"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-7 bg-[#1E3B2F]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#7F8C6A]/30 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#C8B48A] tracking-wider uppercase">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F1E17]/80 border border-[#7F8C6A]/40 text-[#F5F0E6] placeholder-[#F5F0E6]/30 focus:outline-none focus:border-[#807A64] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#C8B48A] tracking-wider uppercase">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F1E17]/80 border border-[#7F8C6A]/40 text-[#F5F0E6] placeholder-[#F5F0E6]/30 focus:outline-none focus:border-[#807A64] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#C8B48A] tracking-wider uppercase">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F1E17]/80 border border-[#7F8C6A]/40 text-[#F5F0E6] placeholder-[#F5F0E6]/30 focus:outline-none focus:border-[#807A64] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#C8B48A] tracking-wider uppercase">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F1E17]/80 border border-[#7F8C6A]/40 text-[#F5F0E6] placeholder-[#F5F0E6]/30 focus:outline-none focus:border-[#807A64] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-4 rounded-xl bg-[#807A64] text-[#F5F0E6] font-bold text-base hover:bg-[#807A64]/80 transition-all duration-300 shadow-lg border border-[#C8B48A]/30 active:scale-[0.99]"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </main>
  );
}