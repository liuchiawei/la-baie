"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/animations/FadeInView";
import { messages } from "@/lib/messages";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with elegant overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/39.jpg"
          alt="La Baie レストラン"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/50" />

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      {/* Ornamental border frame */}
      <div className="absolute inset-8 md:inset-16 border border-primary/20 z-[5] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16 text-center">
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        <FadeInView direction="up" delay={0.2}>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-playfair font-semibold text-primary mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {messages.restaurant.hero.title}
          </motion.h1>
        </FadeInView>

        {/* Decorative middle ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-accent" />
          <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-accent" />
        </motion.div>

        <FadeInView direction="up" delay={0.4}>
          <motion.p
            className="text-sm md:text-md lg:text-lg text-primary/90 mb-12 max-w-3xl mx-auto whitespace-pre-line font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {messages.restaurant.hero.subtitle}
          </motion.p>
        </FadeInView>

        <FadeInView direction="up" delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block group"
          >
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-12 py-7 transition-all duration-500 ease-out tracking-wider font-medium relative overflow-hidden"
            >
              <Link href="/course">
                <span className="relative z-10">{messages.restaurant.hero.ctaButton}</span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </Button>

            {/* Button accent lines */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-out" />
          </motion.div>
        </FadeInView>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary/60 text-xs tracking-[0.3em] uppercase font-light"
        >
          Scroll
        </motion.div>
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
