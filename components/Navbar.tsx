"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  onOpenQR: () => void;
}

export function Navbar({ onOpenQR }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "特色功能", href: "#features" },
    { label: "操作畫面", href: "#preview" },
    { label: "方案比較", href: "#comparison" },
    { label: "三步上手", href: "#steps" },
    { label: "常見問題", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "border-b border-zinc-800 bg-[#07090e]/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-100 font-bold text-xs tracking-tight shadow-sm group-hover:border-[#06C755]/50 transition-colors">
            <span className="text-[#06C755] font-mono">JP</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              日拍比價小幫手
            </span>
            <Badge variant="outline" className="hidden sm:inline-flex text-[10px] px-1.5 py-0 border-zinc-800 text-zinc-400 font-mono">
              v1.0 MVP
            </Badge>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            onClick={onOpenQR}
            variant="line"
            size="sm"
            className="rounded-lg text-xs font-medium flex items-center gap-1.5 h-8 px-3"
          >
            <span>免費加入 LINE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            onClick={onOpenQR}
            variant="line"
            size="sm"
            className="text-xs h-7 px-2.5 rounded-md"
          >
            加入 LINE
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100"
            aria-label="選單"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2.5 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-2.5 rounded-md text-zinc-300 hover:bg-zinc-900 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQR();
              }}
              variant="line"
              size="default"
              className="w-full font-medium text-xs h-9"
            >
              免費加入 LINE 體驗
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
