import { Hero } from "@/components/sections/Hero"
import { FeaturedDishes } from "@/components/sections/FeaturedDishes"
import { Features } from "@/components/sections/Features"
import { Scenes } from "@/components/sections/Scenes"
import { Blog } from "@/components/sections/Blog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeInView } from "@/components/animations/FadeInView"
import { messages } from "@/lib/messages"

export const metadata = {
  title: messages.pages.home.title,
  description: messages.pages.home.description,
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedDishes />
      <Features />
      <Scenes />
      <Blog />
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInView direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line">
                {messages.pages.home.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {messages.pages.home.cta.description}
              </p>
              <div className="flex lg:flex-col gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/course">{messages.pages.home.cta.menuButton}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/about">{messages.pages.home.cta.aboutButton}</Link>
                </Button>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}
