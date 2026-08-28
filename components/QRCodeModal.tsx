"use client";

import React, { useState } from "react";
import { X, Check, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const botLineId = "@jp_price_bot";
  const lineAddUrl = "https://line.me/R/ti/p/@jp_price_bot";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(botLineId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLineClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06C755", "#10b981", "#3b82f6"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-zinc-100 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
          aria-label="關閉"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center space-y-1.5 mb-5">
          <Badge variant="outline" className="text-[11px] px-2 py-0 border-zinc-800 text-zinc-400 mb-1">
            LINE 官方帳號
          </Badge>
          <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
            加入「日拍比價小幫手」
          </h3>
          <p className="text-xs text-zinc-400">
            用手機掃描 QR Code 或點擊下方按鈕直接加好友
          </p>
        </div>

        {/* QR Code Container */}
        <div className="mx-auto w-48 h-48 rounded-xl bg-white p-3.5 flex flex-col items-center justify-center shadow-inner relative border border-zinc-200">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="currentColor"
            >
              {/* Corner markers */}
              <rect x="5" y="5" width="26" height="26" rx="4" fill="#090d14" />
              <rect x="9" y="9" width="18" height="18" rx="2" fill="#ffffff" />
              <rect x="13" y="13" width="10" height="10" rx="1" fill="#06C755" />

              <rect x="69" y="5" width="26" height="26" rx="4" fill="#090d14" />
              <rect x="73" y="9" width="18" height="18" rx="2" fill="#ffffff" />
              <rect x="77" y="13" width="10" height="10" rx="1" fill="#06C755" />

              <rect x="5" y="69" width="26" height="26" rx="4" fill="#090d14" />
              <rect x="9" y="73" width="18" height="18" rx="2" fill="#ffffff" />
              <rect x="13" y="77" width="10" height="10" rx="1" fill="#06C755" />

              {/* Data matrix dots */}
              <rect x="36" y="8" width="5" height="5" fill="#090d14" />
              <rect x="44" y="8" width="5" height="5" fill="#090d14" />
              <rect x="55" y="8" width="8" height="5" fill="#090d14" />
              <rect x="36" y="16" width="10" height="5" fill="#090d14" />
              <rect x="50" y="16" width="5" height="5" fill="#090d14" />
              <rect x="58" y="16" width="6" height="5" fill="#090d14" />
              <rect x="36" y="24" width="6" height="5" fill="#090d14" />
              <rect x="48" y="24" width="8" height="5" fill="#090d14" />

              <rect x="8" y="36" width="5" height="5" fill="#090d14" />
              <rect x="16" y="36" width="10" height="5" fill="#090d14" />
              <rect x="29" y="36" width="5" height="5" fill="#090d14" />
              <rect x="69" y="36" width="12" height="5" fill="#090d14" />
              <rect x="85" y="36" width="7" height="5" fill="#090d14" />

              <rect x="8" y="44" width="12" height="5" fill="#090d14" />
              <rect x="24" y="44" width="5" height="5" fill="#090d14" />
              <rect x="72" y="44" width="6" height="5" fill="#090d14" />
              <rect x="82" y="44" width="10" height="5" fill="#090d14" />

              <rect x="8" y="52" width="6" height="5" fill="#090d14" />
              <rect x="18" y="52" width="8" height="5" fill="#090d14" />
              <rect x="28" y="52" width="5" height="5" fill="#090d14" />
              <rect x="68" y="52" width="10" height="5" fill="#090d14" />
              <rect x="82" y="52" width="8" height="5" fill="#090d14" />

              <rect x="8" y="60" width="8" height="5" fill="#090d14" />
              <rect x="20" y="60" width="10" height="5" fill="#090d14" />
              <rect x="70" y="60" width="6" height="5" fill="#090d14" />
              <rect x="80" y="60" width="12" height="5" fill="#090d14" />

              <rect x="36" y="69" width="8" height="5" fill="#090d14" />
              <rect x="48" y="69" width="6" height="5" fill="#090d14" />
              <rect x="58" y="69" width="8" height="5" fill="#090d14" />
              <rect x="36" y="77" width="5" height="5" fill="#090d14" />
              <rect x="45" y="77" width="10" height="5" fill="#090d14" />
              <rect x="58" y="77" width="5" height="5" fill="#090d14" />
              <rect x="36" y="85" width="10" height="5" fill="#090d14" />
              <rect x="50" y="85" width="6" height="5" fill="#090d14" />
              <rect x="60" y="85" width="8" height="5" fill="#090d14" />

              <rect x="69" y="69" width="8" height="5" fill="#090d14" />
              <rect x="82" y="69" width="10" height="5" fill="#090d14" />
              <rect x="72" y="77" width="12" height="5" fill="#090d14" />
              <rect x="88" y="77" width="4" height="5" fill="#090d14" />
              <rect x="70" y="85" width="6" height="5" fill="#090d14" />
              <rect x="80" y="85" width="12" height="5" fill="#090d14" />

              <circle cx="50" cy="50" r="13" fill="#ffffff" />
              <circle cx="50" cy="50" r="10" fill="#06C755" />
            </svg>
            <span className="absolute font-black text-white text-[8px] tracking-tight">LINE</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          <a
            href={lineAddUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLineClick}
            className="block"
          >
            <Button
              variant="line"
              size="lg"
              className="w-full text-xs font-semibold h-10 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>點此直接打開 LINE 加好友</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500 text-[11px]">ID:</span>
              <code className="font-mono text-[#06C755] font-semibold text-xs">
                {botLineId}
              </code>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-100 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#06C755]" />
                  <span className="text-[#06C755]">已複製</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>複製</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#06C755] shrink-0" />
          <span>免綁定信用卡・完全免費使用</span>
        </div>
      </div>
    </div>
  );
}
