// CTA Section - French Elegance

import { messages } from "@/lib/messages";
import { FadeInView } from "@/components/animations/FadeInView";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
      <section className="relative py-32 bg-[image:url('/images/47.jpg')] bg-cover bg-center overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              currentColor 2px,
              currentColor 4px
            )`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Top border ornament */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-accent/60" />
            <div className="w-2 h-2 bg-accent rotate-45" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-accent/30 to-accent/60" />
          </div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative">
          <FadeInView direction="up">
            <div className="text-center max-w-3xl mx-auto">
              {/* Elegant title with ornamental styling */}
              <div className="relative inline-block mb-8">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-0 whitespace-pre-line tracking-tight leading-tight text-primary">
                  {messages.pages.home.cta.title}
                </h2>

                {/* Decorative underline */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent" />
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent" />
                </div>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground mb-16 mt-12 font-light leading-relaxed tracking-wide">
                {messages.pages.home.cta.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="group relative">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 transition-all duration-500 tracking-wider font-medium relative overflow-hidden"
                  >
                    <Link href="/course">
                      <span className="relative z-10">{messages.pages.home.cta.menuButton}</span>
                    </Link>
                  </Button>
                  {/* Bottom accent line */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-out" />
                </div>

                <div className="group relative">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/40 text-primary hover:bg-primary/5 hover:border-primary text-lg px-12 py-7 transition-all duration-500 tracking-wider font-medium bg-transparent"
                  >
                    <Link href="/about">
                      <span className="relative z-10">{messages.pages.home.cta.aboutButton}</span>
                    </Link>
                  </Button>
                  {/* Bottom accent line */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent/60 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>

              {/* Decorative footer element */}
              <div className="mt-16 flex justify-center items-center gap-3">
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-accent/50" />
                <div className="w-1 h-1 bg-accent/50 rotate-45" />
                <div className="w-1 h-1 bg-accent/50 rotate-45" />
                <div className="w-1 h-1 bg-accent/50 rotate-45" />
                <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-accent/50" />
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Bottom border ornament */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-accent/60" />
            <div className="w-2 h-2 bg-accent rotate-45" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-accent/30 to-accent/60" />
          </div>
        </div>
      </section>
  );
}