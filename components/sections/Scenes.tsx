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
    <FadeInView direction="up" delay={index * 0.15}>
      <motion.div
        className="group text-center relative px-6 py-10"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Elegant card border */}
        <div className="absolute inset-0 border border-border group-hover:border-accent/40 transition-colors duration-500" />

        {/* Corner decorative elements */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon with elegant styling */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-flex items-center justify-center w-20 h-20 mb-8 mx-auto"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500" />

          {/* Icon border frame */}
          <div className="absolute inset-0 border border-accent/30 group-hover:border-accent/60 transition-colors duration-500" />

          <Icon className="h-9 w-9 text-accent relative z-10" strokeWidth={1.5} />
        </motion.div>

        {/* Title with elegant typography */}
        <h3 className="text-2xl font-playfair font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-500 tracking-tight">
          {scene.title}
        </h3>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
          className="w-12 h-[1px] bg-accent/40 mx-auto mb-4"
        />

        <p className="text-base leading-relaxed text-muted-foreground relative z-10 font-light">
          {scene.description}
        </p>

        {/* Bottom decorative element on hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-1 h-1 bg-accent/40 rotate-45" />
          <div className="w-1 h-1 bg-accent/40 rotate-45" />
          <div className="w-1 h-1 bg-accent/40 rotate-45" />
        </div>
      </motion.div>
    </FadeInView>
  )
})

SceneCard.displayName = "SceneCard"

export function Scenes() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Vertical accent lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <FadeInView direction="up">
          <div className="text-center mb-20">
            {/* Top decorative ornament */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-4 mb-8"
            >
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-accent" />
              <div className="w-2 h-2 bg-accent rotate-45" />
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent via-accent/50 to-accent" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 tracking-tight text-primary">
              {messages.scenes.title}
            </h2>

            {/* Decorative subtitle ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-2 mb-8"
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-accent/50" />
              <div className="w-1 h-1 bg-accent/50 rounded-full" />
              <div className="w-1 h-1 bg-accent/50 rounded-full" />
              <div className="w-1 h-1 bg-accent/50 rounded-full" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-accent/50" />
            </motion.div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              {messages.scenes.subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {scenes.map((scene, index) => (
            <SceneCard key={scene.title} scene={scene} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
