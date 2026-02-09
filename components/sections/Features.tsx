"use client";

import { ShowcaseCard } from "@/components/cards/ShowcaseCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { messages } from "@/lib/messages";

// 特徴データ（画像パスを追加）
const features = messages.features.items.map((item, index) => ({
  id: index + 1,
  title: item.title,
  description: item.description,
  image: `/images/${String(index + 18).padStart(2, "0")}.jpg`,
}));

export function Features() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-card/30 to-background overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-accent/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-accent/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-accent/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-accent/20" />

      <div className="container mx-auto px-8 lg:px-16">
        <SectionHeader
          title={messages.features.title}
          subtitle={messages.features.subtitle}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ShowcaseCard
              key={feature.id}
              imageSrc={feature.image}
              imageAlt={feature.title}
              title={feature.title}
              description={feature.description}
              badgeText={String(feature.id).padStart(2, "0")}
              revealDelay={index * 0.12}
              revealDirection="up"
              hoverOffset={10}
              imageContainerClassName="h-72"
              imageSizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
