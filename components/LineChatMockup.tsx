"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LineChatMockupProps {
  onOpenQR: () => void;
}

export function LineChatMockup({ onOpenQR }: LineChatMockupProps) {
  return (
    <section id="demo" className="py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background aura */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-radial-gradient pointer-events-none -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#06C755]/15 border border-[#06C755]/30 text-[#06C755] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>實際操作畫面</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            簡單直接，
            <span className="text-[#06C755]"> 就像在 LINE 跟朋友對話</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            傳送想找的日本商品照片或關鍵字，Bot 會整理出拍賣底價與繁中說明，並提供一鍵前往 Buyee 的專屬連結。
          </p>
        </motion.div>

        {/* Real Chat Screenshot Phone Mockup with Hover & Scroll Float */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="max-w-md sm:max-w-lg mx-auto"
        >
          <div className="rounded-[32px] border-4 border-slate-800 bg-[#151a23] shadow-2xl shadow-black/80 overflow-hidden relative group hover:border-[#06C755]/40 transition-colors duration-300">
            
            {/* Top Phone / App Status bar */}
            <div className="bg-[#242c3b] px-4 py-3 border-b border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#06C755] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  JP
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm">日拍比價小幫手</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LINE 官方帳號
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                免費使用中
              </span>
            </div>

            {/* 
              ======================================================================================
              <!-- 請將 public/real-chat-demo.jpg 替換為你在手機上與 LINE Bot 實際對話的真實截圖 -->
              ======================================================================================
            */}
            <div className="relative w-full aspect-[9/14] bg-[#151a23] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/real-chat-demo.jpg"
                alt="LINE Bot 實際對話截圖展示"
                className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

            {/* Bottom quick CTA strip */}
            <div className="p-4 bg-[#1e2533] border-t border-slate-800 text-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={onOpenQR}
                  variant="line"
                  size="default"
                  className="w-full font-bold text-sm rounded-xl py-3 flex items-center justify-center gap-2 shadow-md shadow-[#06C755]/20 hover:shadow-[#06C755]/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>立即加入 LINE 實際體驗</span>
                </Button>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
