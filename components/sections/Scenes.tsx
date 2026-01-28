"use client"

import { memo } from "react"
import { motion } from "motion/react"
import { Briefcase, Cake, Heart, Calendar, Sparkles, Users } from "lucide-react"
import { FadeInView } from "@/components/animations/FadeInView"
import { messages } from "@/lib/messages"

// アイコンマッピング
const iconMap: Record<string, typeof Briefcase> = {
  business: Briefcase,
  celebration: Cake,
  wedding: Heart,
  anniversary: Calendar,
  party: Sparkles,
}

// シーンデータ
const scenes = messages.scenes.items.map((scene) => ({
  icon: iconMap[scene.icon] || Users,
  title: scene.title,
  description: scene.description,
}))

// カードコンポーネントをメモ化（Vercel best practice: rerender-memo）
const SceneCard = memo(({ scene, index }: { scene: typeof scenes[0]; index: number }) => {
  const Icon = scene.icon
  return (
    <FadeInView direction="up" delay={index * 0.1}>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{scene.title}</h3>
        <p className="text-muted-foreground">{scene.description}</p>
      </motion.div>
    </FadeInView>
  )
})

SceneCard.displayName = "SceneCard"

export function Scenes() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{messages.scenes.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {messages.scenes.subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenes.map((scene, index) => (
            <SceneCard key={scene.title} scene={scene} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
