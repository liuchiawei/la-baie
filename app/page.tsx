import { Hero } from "@/components/sections/Hero"
import { FeaturedDishes } from "@/components/sections/FeaturedDishes"
import { Features } from "@/components/sections/Features"
import { Scenes } from "@/components/sections/Scenes"
import { Blog } from "@/components/sections/Blog"
import { CTA } from "@/components/sections/CTA"
import { messages } from "@/lib/messages"

export const metadata = {
  title: messages.pages.home.title,
  description: messages.pages.home.description,
}

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <FeaturedDishes />
      <Features />
      <Scenes />
      <Blog />
      <CTA />
    </main>
  )
}
