"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface VerticalTitleProps {
  tagline?: string;
  title: string;
  className?: string;
  taglineClassName?: string;
  titleClassName?: string;
}

export function VerticalTitle({
  tagline,
  title,
  className,
  taglineClassName,
  titleClassName,
}: VerticalTitleProps) {
  return (
    <div
      className={cn("w-fit flex flex-col lg:flex-row-reverse gap-2", className)}
    >
      {tagline && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "tween" }}
          className={cn(
            "text-xs lg:text-sm tracking-widest text-accent font-300 uppercase lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]",
            taglineClassName,
          )}
        >
          {tagline}
        </motion.h3>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.2, duration: 0.6, type: "tween" }}
        className={cn(
          "font-serif font-semibold text-primary lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] text-4xl tracking-wider whitespace-wrap",
          title.length > 6 ? "lg:text-5xl" : "lg:text-7xl",
          titleClassName,
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
