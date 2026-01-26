import { WeddingPlans } from "@/components/sections/WeddingPlans"
import { FadeInView } from "@/components/animations/FadeInView"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "ウェディング | La Baie",
  description: "La Baie で特別なウェディングを。各種プランをご用意しております。",
}

export default function WeddingPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ウェディング</h1>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              特別な一日を、洗練された空間で
              <br />
              お二人の思い出に残るウェディングをサポートします
            </p>
          </div>
        </FadeInView>

        <WeddingPlans />
      </div>
    </main>
  )
}
