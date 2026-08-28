"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { ComparisonSection } from "@/components/ComparisonSection";
import { StepGuide } from "@/components/StepGuide";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { QRCodeModal } from "@/components/QRCodeModal";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const openQRModal = () => setIsQRModalOpen(true);
  const closeQRModal = () => setIsQRModalOpen(false);

  return (
    <main className="min-h-screen bg-[#07090e] text-zinc-100 bg-dot-pattern relative selection:bg-[#06C755]/20 selection:text-white">
      {/* 1. Sticky Minimalist Navbar */}
      <Navbar onOpenQR={openQRModal} />

      {/* 2. Hero Section with App Preview Depth & Logo Cloud */}
      <Hero onOpenQR={openQRModal} />

      {/* 3. Feature Section: Asymmetric Modern Bento Grid */}
      <BentoGrid onOpenQR={openQRModal} />

      {/* 4. Value Comparison Table */}
      <ComparisonSection onOpenQR={openQRModal} />

      {/* 5. 3-Step Simple Guide */}
      <StepGuide onOpenQR={openQRModal} />

      {/* 6. Authentic Shadcn Interactive FAQ Accordion */}
      <FAQSection />

      {/* 7. Bottom Minimalist CTA */}
      <CTASection onOpenQR={openQRModal} />

      {/* 8. Footer */}
      <Footer />

      {/* Conversion QR Code Modal */}
      <QRCodeModal isOpen={isQRModalOpen} onClose={closeQRModal} />

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          onClick={openQRModal}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-100 font-medium text-xs shadow-lg shadow-black/60 hover:border-[#06C755]/60 hover:text-white transition-all cursor-pointer"
          aria-label="打開 LINE 加入好友"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 text-[#06C755]" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#06C755] rounded-full animate-ping" />
          </div>
          <span>免費加入 LINE</span>
        </motion.button>
      </motion.div>
    </main>
  );
}
