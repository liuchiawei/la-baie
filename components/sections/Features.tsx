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
    <FadeInView direction="up" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden h-full">
          <div className="relative h-64 w-full">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{feature.title}</CardTitle>
            <CardDescription className="text-base">
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-0">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{messages.features.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
