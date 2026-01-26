"use client"

import { motion } from "motion/react"
import { UtensilsCrossed, Award, Heart, Users } from "lucide-react"
import { FadeInView } from "@/components/animations/FadeInView"

const features = [
  {
    icon: UtensilsCrossed,
    title: "厳選食材",
    description: "最高品質の食材を厳選し、季節の味わいをお届けします",
  },
  {
    icon: Award,
    title: "シェフの技術",
    description: "経験豊富なシェフによる洗練されたフレンチ料理",
  },
  {
    icon: Heart,
    title: "心のこもったサービス",
    description: "お客様ひとりひとりに寄り添う丁寧なサービス",
  },
  {
    icon: Users,
    title: "特別な時間",
    description: "大切な人との特別なひとときを演出します",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">La Baie の特徴</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              私たちが大切にしていること
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <FadeInView key={feature.title} direction="up" delay={index * 0.1}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
