"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Check, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenQR: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Hero({ onOpenQR }: HeroProps) {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* Refined Subtle Radial Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-subtle-glow pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* 1. Polished Shadcn Badge with Pulsing Dot */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="px-3 py-1 text-xs font-normal text-zinc-300 border-zinc-800 bg-zinc-900/60 backdrop-blur-md rounded-full mb-6 hover:border-zinc-700 transition-colors cursor-default"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#06C755] mr-2 animate-pulse" />
              <span className="text-zinc-200 font-medium">個人獨立開源工具</span>
              <span className="mx-2 text-zinc-600">·</span>
              <span className="text-zinc-400">消彌日拍資訊落差</span>
            </Badge>
          </motion.div>

          {/* 2. Massive Tight Typography */}
          <motion.h1
            variants={itemVariants}
            className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-100 max-w-4xl leading-[1.15]"
          >
            一鍵破解日拍行情，
            <br />
            <span className="text-zinc-400">跟代購盤子價說掰掰</span>
          </motion.h1>

          {/* 3. Muted Secondary Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed text-balance"
          >
            專為日淘買家設計的免費 LINE 比價機器人。傳送一張商品照片或名稱，AI 自動搜尋日本各大拍賣底價、翻譯商品說明，並一鍵直達 Buyee 尋寶。
          </motion.p>

          {/* 4. Shadcn CTA Button Row */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                onClick={onOpenQR}
                variant="line"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-6 font-semibold flex items-center justify-center gap-2 h-11"
              >
                <span>免費加入 LINE 體驗</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a href="#features" className="block w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-5 h-11 border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900"
                >
                  <Eye className="w-4 h-4 mr-2 text-zinc-400" />
                  探索功能亮點
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* 5. Minimalist Guarantees */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#06C755]" />
              <span>完全免費使用</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#06C755]" />
              <span>免下載 App，LINE 即可對話</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#06C755]" />
              <span>串接 Buyee 官方代購</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 6. High-End App Preview Container (Overlapping Depth & Structure) */}
        <motion.div
          id="preview"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-14 sm:mt-16 -mb-16 sm:-mb-24 relative z-20 mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-2 sm:p-3 shadow-2xl shadow-black/90 backdrop-blur-xl group hover:border-zinc-700/80 transition-all duration-300">
            
            {/* macOS / App Titlebar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-900 text-xs text-zinc-500 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <span className="font-mono text-[11px] text-zinc-400">
                LINE Bot · 實時日拍對話展示
              </span>
              <div className="flex items-center gap-1 text-[11px] text-[#06C755]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06C755]" />
                <span>Online</span>
              </div>
            </div>

            {/* 
              ======================================================================================
              <!-- 請將 public/real-chat-demo.jpg 替換為你在手機上與 LINE Bot 實際對話的真實截圖 -->
              ======================================================================================
            */}
            <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/real-chat-demo.jpg"
                alt="LINE Bot 實際比價對話畫面"
                className="w-full h-full object-contain object-center"
              />

              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
            </div>

            {/* Quick footer helper */}
            <div className="px-3 py-2 text-center text-xs text-zinc-500">
              傳送照片或型號名稱，AI 秒出日拍底價與商品狀態
            </div>
          </div>
        </motion.div>

        {/* 7. Muted, Elegant Logo Cloud (Supported Platforms) */}
        <div className="pt-24 sm:pt-32 pb-4">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
            即時搜尋與比價平台
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { name: "Mercari", sub: "メルカリ" },
              { name: "Yahoo! 拍賣", sub: "ヤフオク" },
              { name: "駿河屋", sub: "Surugaya" },
              { name: "樂天 Rakuma", sub: "ラクマ" },
              { name: "Amazon JP", sub: "日本亞馬遜" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-xs text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors cursor-default"
              >
                <span className="font-semibold text-zinc-300">{item.name}</span>
                <span className="text-[10px] text-zinc-600 font-mono">({item.sub})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
