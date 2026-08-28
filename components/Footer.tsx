"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80 py-10 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 font-bold text-xs font-mono">
              JP
            </div>
            <div>
              <p className="font-semibold text-zinc-300 text-xs">日拍比價小幫手</p>
              <p className="text-zinc-500 text-[11px]">
                日本拍賣 AI 輔助比價與日文商品資訊工具
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
            <a href="#features" className="hover:text-zinc-200 transition-colors">
              特色功能
            </a>
            <a href="#preview" className="hover:text-zinc-200 transition-colors">
              操作畫面
            </a>
            <a href="#comparison" className="hover:text-zinc-200 transition-colors">
              方案比較
            </a>
            <a href="#steps" className="hover:text-zinc-200 transition-colors">
              三步上手
            </a>
            <a href="#faq" className="hover:text-zinc-200 transition-colors">
              常見問題
            </a>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="text-center md:text-right text-[11px] text-zinc-500 space-y-1">
            <p>© {new Date().getFullYear()} 日拍比價小幫手. All rights reserved.</p>
            <p className="text-[10px] text-zinc-600">
              免責聲明：本工具為拍賣行情資訊整合與翻譯輔助工具，商品購買由第三方平台 Buyee 提供。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
