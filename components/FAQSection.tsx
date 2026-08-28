"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function FAQSection() {
  const faqs = [
    {
      id: "item-1",
      q: "使用「日拍比價小幫手」需要付費嗎？",
      a: "完全免費！這是個人獨立開發的開源實用小工具，加入 LINE 好友即可免費使用圖片辨識、日拍比價與商品說明翻譯，希望能幫大家消彌台日資訊落差，更輕鬆挖寶。",
    },
    {
      id: "item-2",
      q: "目前支援哪些日本拍賣與購物網站？",
      a: "目前主要支援 Mercari (メルカリ)、Yahoo! 拍賣、駿河屋 (Surugaya)、樂天 Rakuma (ラクマ) 等主流日淘平台。傳送照片或品名，小幫手會自動幫您查找比對相關商品。",
    },
    {
      id: "item-3",
      q: "我完全不懂日文也能順利使用嗎？",
      a: "可以的！小幫手會自動將日文商品描述與重點成色狀態翻譯為繁體中文，讓你更清楚了解商品內容與配件狀況，避免誤買瑕疵故障品。",
    },
    {
      id: "item-4",
      q: "查到商品後要怎麼購買與寄回台灣？",
      a: "比價卡片會直接提供專屬的 Buyee 快速連結，點擊即可一鍵跳轉至 Buyee 查看商品現貨並進行代購下單，由官方代購平台處理後續日本倉庫收件與國際寄送流程。",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="text-xs mb-3 text-zinc-400 border-zinc-800">
            常見問題
          </Badge>
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-100">
            常見問題解答
          </h2>
          <p className="mt-3 text-sm text-zinc-400 text-balance">
            關於比價小幫手的使用方式與購買流程說明。
          </p>
        </motion.div>

        {/* Authentic Shadcn Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-md"
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-sm sm:text-base font-semibold hover:no-underline hover:text-zinc-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
