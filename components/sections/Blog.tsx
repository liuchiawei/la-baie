"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInView } from "@/components/animations/FadeInView";
import { messages } from "@/lib/messages";

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
      <FadeInView direction="up" delay={index * 0.1}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground mb-2">
                {entry.date}
              </CardTitle>
              <CardTitle className="text-xl">{entry.title}</CardTitle>
            </CardHeader>
          </Card>
        </motion.div>
      </FadeInView>
    );
  },
);

BlogEntryCard.displayName = "BlogEntryCard";

export function Blog() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {messages.blog.title}
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogEntries.map((entry, index) => (
            <BlogEntryCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
