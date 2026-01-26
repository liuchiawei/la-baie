import { Hero } from "@/components/sections/Hero"
import { FeaturedDishes } from "@/components/sections/FeaturedDishes"
import { Features } from "@/components/sections/Features"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeInView } from "@/components/animations/FadeInView"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedDishes />
      <Features />
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                特別なひとときを
                <br />
                お過ごしください
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ご予約・お問い合わせはお気軽にどうぞ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/course">メニューを見る</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/about">店舗情報</Link>
                </Button>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}
