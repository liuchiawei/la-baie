"use client";

import { motion } from "motion/react";
import { FadeInView } from "@/components/animations/FadeInView";

const EASING = [0.22, 1, 0.36, 1] as const;

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <FadeInView direction="up">
      <div className={`text-center mb-16 md:mb-20 ${className}`}>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASING }}
          className="flex justify-center items-center gap-4 mb-6 md:mb-8"
        >
          <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-accent/60" />
          <div className="w-2 h-2 bg-accent rotate-45" />
          <div className="w-16 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-accent/60" />
        </motion.div>

        <h2 className="text-section-title text-primary tracking-tight mb-6">
          {title}
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASING }}
          className="flex justify-center items-center gap-2 mb-6 md:mb-8"
        >
          <div className="w-8 md:w-10 h-[1px] bg-gradient-to-r from-transparent to-accent/50" />
          <div className="w-1 h-1 bg-accent/50 rounded-full" />
          <div className="w-8 md:w-10 h-[1px] bg-gradient-to-l from-transparent to-accent/50" />
        </motion.div>

        {subtitle && (
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </FadeInView>
  );
}
