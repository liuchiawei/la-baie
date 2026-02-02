"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInView } from "@/components/animations/FadeInView";
import { messages } from "@/lib/messages";
import { Calendar } from "lucide-react";

// ブログエントリーデータ
const blogEntries = messages.blog.recentEntries.map((entry, index) => ({
  id: index + 1,
  date: entry.date,
  title: entry.title,
}));

// カードコンポーネントをメモ化（Vercel best practice: rerender-memo）
const BlogEntryCard = memo(
  ({ entry, index }: { entry: (typeof blogEntries)[0]; index: number }) => {
    return (
      <FadeInView direction="up" delay={index * 0.15}>
        <motion.div
          className="group relative h-full"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="h-full bg-card border-border relative overflow-hidden cursor-pointer">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Side accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Large decorative number in background */}
            <div className="absolute top-4 right-4 text-8xl font-playfair font-bold text-accent/5 select-none">
              {String(entry.id).padStart(2, '0')}
            </div>

            <CardHeader className="px-8 py-8 relative z-10">
              {/* Date with icon */}
              <div className="flex items-center gap-3 mb-6 text-muted-foreground group-hover:text-accent transition-colors duration-500">
                <Calendar className="h-4 w-4" strokeWidth={1.5} />
                <CardTitle className="text-sm tracking-wider uppercase font-light">
                  {entry.date}
                </CardTitle>
              </div>

              {/* Decorative divider */}
              <div className="w-0 h-[1px] bg-accent/60 group-hover:w-20 transition-all duration-700 ease-out mb-6" />

              {/* Title */}
              <CardTitle className="text-2xl md:text-3xl font-playfair font-semibold leading-tight tracking-tight text-primary group-hover:text-accent transition-colors duration-500">
                {entry.title}
              </CardTitle>

              {/* Bottom decorative dots */}
              <div className="flex items-center gap-2 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
                <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
                <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
              </div>
            </CardHeader>

            {/* Corner decorative elements */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Card>
        </motion.div>
      </FadeInView>
    );
  },
);

BlogEntryCard.displayName = "BlogEntryCard";

export function Blog() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {/* Elegant background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            currentColor 2px,
            currentColor 3px
          )`,
          backgroundSize: '100% 60px'
        }} />
      </div>

      {/* Decorative side accents */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      <div className="absolute right-0 top-1/3 bottom-1/3 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <FadeInView direction="up">
          <div className="text-center mb-20">
            {/* Top decorative element */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-4 mb-8"
            >
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-accent" />
              <div className="w-2 h-2 bg-accent rotate-45" />
              <div className="w-20 h-[1px] bg-gradient-to-l from-transparent via-accent/60 to-accent" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 tracking-tight text-primary">
              {messages.blog.title}
            </h2>

            {/* Decorative subtitle element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-2 mb-8"
            >
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-accent/50" />
              <div className="w-1 h-1 bg-accent/50 rounded-full" />
              <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-accent/50" />
            </motion.div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Les dernières nouvelles de notre maison
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {blogEntries.map((entry, index) => (
            <BlogEntryCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        {/* Bottom decorative ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center gap-3 mt-20"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent/40" />
          <div className="w-1 h-1 bg-accent/40 rotate-45" />
          <div className="w-1 h-1 bg-accent/40 rotate-45" />
          <div className="w-1 h-1 bg-accent/40 rotate-45" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent/40" />
        </motion.div>
      </div>
    </section>
  );
}
