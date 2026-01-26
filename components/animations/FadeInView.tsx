"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

// 可重用的滾動觸發動畫元件
// Vercel best practice: 使用 useInView 檢測可見性，避免不必要的動畫計算
export function FadeInView({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
}: FadeInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`will-change-transform ${className || ""}`}
    >
      {children}
    </motion.div>
  )
}
