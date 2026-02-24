"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { messages } from "@/lib/messages";
import { Calendar } from "lucide-react";

// Default no-op for optional callback (Vercel best practice: 5.4 memo default non-primitive)
const NOOP = () => {};

// Hoisted static JSX (6.3) — avoid re-creation on every render
const SECTION_BACKGROUND = (
  <div className="absolute inset-0 opacity-[0.02]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            currentColor 2px,
            currentColor 3px
          )`,
        backgroundSize: "100% 60px",
      }}
    />
  </div>
);

const SIDE_ACCENT_LEFT = (
  <div className="absolute left-0 top-1/3 bottom-1/3 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
);

const SIDE_ACCENT_RIGHT = (
  <div className="absolute right-0 top-1/3 bottom-1/3 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
);

const BOTTOM_ORNAMENT_CONTENT = (
  <>
    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent/40" />
    <div className="w-1 h-1 bg-accent/40 rotate-45" />
    <div className="w-1 h-1 bg-accent/40 rotate-45" />
    <div className="w-1 h-1 bg-accent/40 rotate-45" />
    <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent/40" />
  </>
);

// Blog list item — memoized, minimal props (3.4, 5.5). content-visibility (6.2).
const BlogListItem = memo(function BlogListItem({
  date,
  title,
  index,
  onClick = NOOP,
}: {
  date: string;
  title: string;
  index: number;
  onClick?: () => void;
}) {
  return (
    <FadeInView direction="up" delay={index * 0.1}>
      <li
        className="group flex items-baseline gap-6 py-5 border-b border-border last:border-b-0 cursor-pointer [content-visibility:auto] [contain-intrinsic-size:0_80px]"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <span
          className="flex shrink-0 items-center gap-2 w-28 text-muted-foreground group-hover:text-accent transition-colors duration-300 text-sm tracking-wider uppercase font-light"
          aria-hidden
        >
          <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
          {date}
        </span>
        <span className="min-w-0 font-playfair font-semibold text-lg md:text-xl leading-tight tracking-tight text-primary group-hover:text-accent transition-colors duration-300 border-b border-transparent group-hover:border-accent/60">
          {title}
        </span>
      </li>
    </FadeInView>
  );
});

// Build entries with stable id; sort newest first (7.12 toSorted)
const blogEntries = messages.blog.recentEntries
  .map((entry, index) => ({
    id: index + 1,
    date: entry.date,
    title: entry.title,
  }))
  .toSorted((a, b) => {
    const [yA, mA, dA] = a.date.split("/").map(Number);
    const [yB, mB, dB] = b.date.split("/").map(Number);
    const tA = new Date(yA, mA - 1, dA).getTime();
    const tB = new Date(yB, mB - 1, dB).getTime();
    return tB - tA;
  });

export function Blog() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {SECTION_BACKGROUND}
      {SIDE_ACCENT_LEFT}
      {SIDE_ACCENT_RIGHT}

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <SectionHeader
          title={messages.blog.title}
          subtitle="Les dernières nouvelles de notre maison"
          className="mb-20"
        />

        <div className="max-w-3xl mx-auto">
          {blogEntries.length > 0 ? (
            <ul className="list-none p-0 m-0">
              {blogEntries.map((entry, index) => (
                <BlogListItem
                  key={entry.id}
                  date={entry.date}
                  title={entry.title}
                  index={index}
                />
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground font-light py-12">
              Aucune entrée pour le moment.
            </p>
          )}
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center gap-3 mt-20"
        >
          {BOTTOM_ORNAMENT_CONTENT}
        </motion.div>
      </div>
    </section>
  );
}
