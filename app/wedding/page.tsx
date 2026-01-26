import { WeddingPlans } from "@/components/sections/WeddingPlans"
import { FadeInView } from "@/components/animations/FadeInView"
import { Separator } from "@/components/ui/separator"
import { messages } from "@/lib/messages"

export const metadata = {
  title: messages.pages.wedding.title,
  description: messages.pages.wedding.description,
}

export default function WeddingPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{messages.pages.wedding.heading}</h1>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
              {messages.pages.wedding.subtitle}
            </p>
          </div>
        </FadeInView>

        <WeddingPlans />
      </div>
    </main>
  )
}
