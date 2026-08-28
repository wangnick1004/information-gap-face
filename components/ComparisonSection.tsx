"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ComparisonSectionProps {
  onOpenQR: () => void;
}

export function ComparisonSection({ onOpenQR }: ComparisonSectionProps) {
  const comparisonItems = [
    {
      feature: "價格透明度",
      traditional: "代購隨意加價 20~40%，匯率黑箱",
      manual: "需花時間手動在各大日拍重複搜尋比價",
      bot: "快速整理出日本各大拍賣目前的一手行情底價",
    },
    {
      feature: "語言門檻",
      traditional: "需等待代購回覆翻譯與確認規格",
      manual: "需自行使用翻譯工具，容易漏看日文瑕疵說明",
      bot: "自動整理出繁體中文商品重點與狀態提示",
    },
    {
      feature: "搜尋效率",
      traditional: "詢問代購報價需等待數小時至數天",
      manual: "在多個網站之間手動切換複製貼上搜尋",
      bot: "傳送照片或品名，LINE 快速回傳結果卡片",
    },
    {
      feature: "下單與寄送",
      traditional: "代購收取額外手續費與高額匯差",
      manual: "自行研究日本集運與轉運地址",
      bot: "一鍵串接 Buyee 官方代購下單與寄送",
    },
    {
      feature: "使用費用",
      traditional: "代購抽成加價",
      manual: "耗費大量時間精神",
      bot: "小幫手永久免費加入使用",
    },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-28 relative overflow-hidden">
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
            方案比較
          </Badge>
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            告別繁瑣搜尋，
            <span className="text-[#06C755]"> 更透明的日淘體驗</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 text-balance">
            不用再被代購加價賺暴利，也不用在日文網頁迷航。
          </p>
        </motion.div>

        {/* Minimalist Shadcn Style Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/70 overflow-hidden shadow-sm backdrop-blur-md"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800/80 bg-zinc-900/40">
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/4">
                    比較項目
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/4">
                    傳統代購業者
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/4">
                    自行摸索搜尋
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-[#06C755] bg-[#06C755]/5 w-1/4 border-x border-[#06C755]/20">
                    🤖 日拍比價小幫手
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
                {comparisonItems.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-zinc-900/30 transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-semibold text-zinc-200">
                      {item.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                        <span>{item.manual}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-200 bg-[#06C755]/5 border-x border-[#06C755]/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#06C755] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#06C755]">
                          {item.bot}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button
            onClick={onOpenQR}
            variant="outline"
            size="lg"
            className="rounded-xl px-6 h-10 text-xs font-medium border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900"
          >
            <span>立即加 LINE 免費體驗</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
