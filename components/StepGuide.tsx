"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, ImageUp, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StepGuideProps {
  onOpenQR: () => void;
}

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "加入 LINE 好友",
    desc: "點擊按鈕或掃描 QR Code，直接在手機或電腦 LINE 加入「日拍比價小幫手」。",
    badge: "免安裝 App",
  },
  {
    step: "02",
    icon: ImageUp,
    title: "傳送照片或商品名稱",
    desc: "將想找的商品照片、截圖或中日英文品名，直接發送至 LINE 聊天室。",
    badge: "支援圖片與文字",
  },
  {
    step: "03",
    icon: ExternalLink,
    title: "獲取比價與 Buyee 連結",
    desc: "AI 自動整理各大日拍行情與繁中說明，並提供一鍵直達 Buyee 的現貨卡片。",
    badge: "一鍵下單",
  },
];

export function StepGuide({ onOpenQR }: StepGuideProps) {
  return (
    <section id="steps" className="py-20 sm:py-28 relative border-y border-zinc-800/80 bg-zinc-950/40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="text-xs mb-3 text-zinc-400 border-zinc-800">
            三步上手
          </Badge>
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            無需額外下載 App，
            <span className="text-[#06C755]"> LINE 就能完成</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 text-balance">
            就像跟朋友傳訊息一樣直覺，隨時隨地開啟日本拍賣挖寶。
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full border-zinc-800/80 bg-zinc-900/30 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300">
                        <Icon className="w-5 h-5 text-[#06C755]" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-zinc-500">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-900">
                    <span className="text-[11px] text-zinc-500 font-mono">
                      ✓ {item.badge}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
