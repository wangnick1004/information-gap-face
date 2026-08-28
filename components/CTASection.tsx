"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";

interface CTASectionProps {
  onOpenQR: () => void;
}

export function CTASection({ onOpenQR }: CTASectionProps) {
  const handleCtaClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#06C755", "#10b981", "#3b82f6"],
      });
    } catch {
      // ignore
    }
    onOpenQR();
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-subtle-glow pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 sm:p-14 text-center backdrop-blur-xl shadow-xl relative overflow-hidden"
        >
          {/* Subtle top indicator line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#06C755] to-transparent" />

          <Badge variant="outline" className="text-xs mb-4 text-zinc-400 border-zinc-800">
            開始使用
          </Badge>

          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100 max-w-xl mx-auto">
            開啟你的日本拍賣底價挖寶之旅
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed text-balance">
            不用再被昂貴代購加價或在日文網頁迷航。
            現在就加入 LINE Bot，免費查找各大日拍真實底價！
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleCtaClick}
                variant="line"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-7 font-semibold h-11 flex items-center justify-center gap-2"
              >
                <span>免費加入 LINE 體驗</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#06C755]" />
              <span>完全免費使用</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#06C755]" />
              <span>直達 Buyee 代購下單</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#06C755]" />
              <span>隨時可解除好友</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
