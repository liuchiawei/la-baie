"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { messages } from "@/lib/messages";

// constants for the clip path
const CLIP_START = "circle(1vmin at 50% 50%)";
const CLIP_END = "circle(150vmax at 50% 50%)";

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], [CLIP_START, CLIP_END]);

  return (
    <div ref={wrapperRef} className="h-[200vh]">
      <section className="sticky top-0 flex h-screen items-center justify-center overflow-hidden relative">
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center"
          style={{
            clipPath: prefersReducedMotion ? "none" : clipPath,
          }}
        >
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
          <div className="relative z-10 container mx-auto px-8 lg:px-16 text-center flex flex-col items-center justify-center gap-8">
            {/* Title */}
            <FadeInView direction="up" delay={0.2}>
              <motion.div
                className="w-full flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2, type: "tween" }}
              >
                <Image src="/images/logo-vertical.svg" alt="La Baie" width={300} height={300} className="w-full h-full object-contain select-none pointer-events-none text-white" />
              </motion.div>
            </FadeInView>

            {/* Subtitle */}
            <FadeInView direction="up" delay={0.4}>
              <motion.p
                className="text-sm text-primary/90 max-w-3xl mx-auto whitespace-pre-line font-light tracking-wide leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {messages.restaurant.hero.subtitle}
              </motion.p>
            </FadeInView>
          </div>

          {/* Elegant scroll indicator */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <motion.button
              aria-label="Scroll down"
              type="button"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 2,
                  behavior: "smooth",
                });
              }}
              className="text-primary/60 text-xs tracking-[0.3em] uppercase font-sans font-light cursor-pointer hover:text-primary hover:font-bold transition-colors duration-300"
            >
              Scroll
            </motion.button>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
