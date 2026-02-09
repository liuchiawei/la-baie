"use client";

import { motion } from "motion/react";
import { FadeInView } from "@/components/animations/FadeInView";

const EASING = [0.22, 1, 0.36, 1] as const;

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/** 統一 section 標題：頂部裝飾、主標、副標裝飾、可選副標文案。 */
export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <FadeInView direction="up">
      <div className={`text-center mb-16 md:mb-20 ${className}`.trim()}>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASING }}
          className="flex justify-center items-center gap-4 mb-6 md:mb-8"
        >
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-accent" />
          <div className="w-2 h-2 bg-accent rotate-45" />
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-accent/50 to-accent" />
        </motion.div>
        {/* タイトル */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-primary mb-6">
          {title}
        </h2>
        {/* 副標題 */}
        {subtitle && (
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </FadeInView>
  );
}
