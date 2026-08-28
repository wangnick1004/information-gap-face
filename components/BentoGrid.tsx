"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Camera, 
  Languages, 
  ShoppingBag, 
  Search, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BentoGridProps {
  onOpenQR: () => void;
}

export function BentoGrid({ onOpenQR }: BentoGridProps) {
  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="text-xs mb-3 text-zinc-400 border-zinc-800">
            特色功能
          </Badge>
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            消彌資訊落差，
            <span className="text-[#06C755]"> 買日拍像在逛本地商城</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 text-balance">
            為台灣買家量身定制的日淘輔助工具，解決日語門檻、搜尋不易與代購加價問題。
          </p>
        </motion.div>

        {/* Asymmetric Bento Box Layout (12-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: 📸 AI 視覺辨識 (Asymmetric 7-Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="md:col-span-7"
          >
            <Card className="h-full border-zinc-800/90 bg-zinc-950/70 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-200">
                    <Camera className="w-5 h-5 text-[#06C755]" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-mono border-zinc-800 text-zinc-400">
                    Image-to-Text
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                  📸 實用的 AI 視覺辨識
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  在 IG 或社團看到想買的商品卻不知道日文型號？直接把照片傳進聊天室，AI 會自動辨識並轉換為精準的日文品名與關鍵字。
                </p>
              </div>

              {/* Interactive Demo Preview Widget */}
              <div className="mt-6 p-3.5 rounded-xl border border-zinc-800/90 bg-zinc-900/60 text-xs space-y-2">
                <div className="flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Search className="w-3 h-3 text-[#06C755]" />
                    傳送照片 ➔ 自動轉換日文品名
                  </span>
                  <span className="text-[#06C755]">AI Match</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/70 text-zinc-400 text-[11px]">
                    <p className="text-zinc-500 mb-0.5">輸入檔案：</p>
                    <p className="text-zinc-200 font-mono truncate">gshock_watch.jpg</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/70 text-[11px]">
                    <p className="text-zinc-500 mb-0.5">辨識日文：</p>
                    <p className="text-[#06C755] font-mono font-medium truncate">カシオ GM-B2100BD</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: ⚡ 快速日文翻譯與說明 (Asymmetric 5-Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="md:col-span-5"
          >
            <Card className="h-full border-zinc-800/90 bg-zinc-950/70 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-200">
                    <Languages className="w-5 h-5 text-amber-400" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-mono border-zinc-800 text-zinc-400">
                    繁體中文化
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                  ⚡ 快速日文翻譯與說明
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  將賣家複雜的日文描述整理成易懂的重點說明，快速掌握配件與成色狀況，避免買錯規格。
                </p>
              </div>

              {/* Translation snippet widget */}
              <div className="mt-6 p-3.5 rounded-xl border border-zinc-800/90 bg-zinc-900/60 text-xs space-y-2 font-mono">
                <div className="text-[11px] text-zinc-500">
                  🇯🇵 「動作確認済み、元箱・説明書あり」
                </div>
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/70 text-zinc-200 text-xs">
                  <span className="text-[#06C755] font-semibold">繁中：</span> 已測試功能正常，附原廠盒裝與說明書
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: 🛒 無縫串接 Buyee 尋寶 (Asymmetric 6-Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="md:col-span-6"
          >
            <Card className="h-full border-zinc-800/90 bg-zinc-950/70 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-200">
                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-mono border-zinc-800 text-zinc-400">
                    Buyee Direct
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                  🛒 無縫串接 Buyee 尋寶
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  自動將商品轉換為精準的日文搜尋連結，點擊卡片一鍵前往 Buyee 查看最新現貨，省去繁瑣的跨網頁搜尋時間。
                </p>
              </div>

              {/* Buyee action preview */}
              <div className="mt-6 p-3 rounded-xl border border-zinc-800/90 bg-zinc-900/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">直達 Buyee 日本代購頁面</span>
                </div>
                <span className="text-[10px] text-blue-400 font-mono bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">
                  一鍵下單
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Card 4: 🔍 跨平台即時全網搜尋 (Asymmetric 6-Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="md:col-span-6"
          >
            <Card className="h-full border-zinc-800/90 bg-zinc-950/70 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-200">
                    <Layers className="w-5 h-5 text-purple-400" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-mono border-zinc-800 text-zinc-400">
                    Multi-Platform
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                  🔍 跨平台即時全網搜尋
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  不再需要在 Mercari、Yahoo! 拍賣與駿河屋之間來回切換比價。一次為你整理各大日本中古市場目前的行情底價。
                </p>
              </div>

              {/* Platforms matrix badge */}
              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {["Mercari", "Yahoo! 拍賣", "駿河屋", "樂天 Rakuma"].map((p) => (
                  <span
                    key={p}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono"
                  >
                    ✓ {p}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
