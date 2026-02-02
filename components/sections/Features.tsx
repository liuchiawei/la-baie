"use client"

import { memo } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInView } from "@/components/animations/FadeInView"
import { messages } from "@/lib/messages"

// 特徴データ（画像パスを追加）
const features = messages.features.items.map((item, index) => ({
  id: index + 1,
  title: item.title,
  description: item.description,
  image: `/images/${String(index + 18).padStart(2, "0")}.jpg`,
}))

// カードコンポーネントをメモ化（Vercel best practice: rerender-memo）
const FeatureCard = memo(({ feature, index }: { feature: typeof features[0]; index: number }) => {
  return (
    <FadeInView direction="up" delay={index * 0.12}>
      <motion.div
        className="group relative h-full"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="overflow-hidden h-full bg-card border-border relative">
          {/* Top accent border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

          <div className="relative h-72 w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Decorative number overlay */}
            <div className="absolute bottom-4 right-4 text-7xl font-playfair font-bold text-primary/20 group-hover:text-accent/30 transition-colors duration-500 select-none">
              {String(feature.id).padStart(2, '0')}
            </div>
          </div>

          <CardHeader className="px-6 py-6 relative">
            <CardTitle className="text-xl font-playfair font-semibold mb-3 tracking-tight text-primary group-hover:text-accent transition-colors duration-500">
              {feature.title}
            </CardTitle>

            {/* Decorative underline */}
            <div className="w-0 h-[1px] bg-accent/60 group-hover:w-16 transition-all duration-700 ease-out mb-3" />

            <CardDescription className="text-base leading-relaxed text-muted-foreground">
              {feature.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </FadeInView>
  )
})

FeatureCard.displayName = "FeatureCard"

export function Features() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-card/30 to-background overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-accent/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-accent/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-accent/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-accent/20" />

      <div className="container mx-auto px-8 lg:px-16">
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
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-accent/60" />
              <div className="w-2 h-2 bg-accent/60 rotate-45" />
              <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-accent/60" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 tracking-tight text-primary">
              {messages.features.title}
            </h2>

            {/* Subtitle underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-2 mb-8"
            >
              <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-accent/40" />
              <div className="w-1 h-1 bg-accent/40 rounded-full" />
              <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-accent/40" />
            </motion.div>

            <p className="text-sm md:text-md lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              {messages.features.subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
