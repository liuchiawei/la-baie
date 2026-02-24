// CTA Section - French Elegance

"use client";

import { messages } from "@/lib/messages";
import { motion } from "motion/react";
import { FadeInView } from "@/components/animations/FadeInView";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with zoom-out enter animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-[image:url('/images/47.jpg')] bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-linear-to-b after:from-background after:to-transparent"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        aria-hidden
      />

      <FadeInView direction="up">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Elegant title with ornamental styling */}
          <h2 className="text-3xl lg:text-5xl font-serif font-semibold whitespace-pre-line tracking-wide leading-tight text-primary text-shadow-lg">
            {messages.pages.home.cta.title}
          </h2>

          <p className="text-xl md:text-2xl text-primary/70 font-serif font-light leading-relaxed tracking-wide text-shadow-sm">
            {messages.pages.home.cta.description}
          </p>
          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center items-center">
            <div className="group relative flex-1">
              <Button
                asChild
                size="lg"
                className="border-2 border-primary/40 bg-primary/70 text-primary-foreground hover:bg-primary text-lg w-full py-6 transition-all duration-500 tracking-wider font-medium relative overflow-hidden"
              >
                <Link href="/course">
                  <span className="relative z-10">
                    {messages.pages.home.cta.menuButton}
                  </span>
                </Link>
              </Button>
              {/* Bottom accent line */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700 ease-out" />
            </div>

            <div className="group relative flex-1">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/40 text-primary hover:text-primary hover:bg-primary/5 hover:border-primary text-lg w-full py-6 transition-all duration-500 tracking-wider font-medium bg-transparent backdrop-blur-xs hover:backdrop-blur-sm"
              >
                <Link href="/about">
                  <span className="relative z-10">
                    {messages.pages.home.cta.aboutButton}
                  </span>
                </Link>
              </Button>
              {/* Bottom accent line */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent/60 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
