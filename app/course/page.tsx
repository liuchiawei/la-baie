import { CourseGallery } from "@/components/sections/CourseGallery"
import { FadeInView } from "@/components/animations/FadeInView"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "コース・料理 | La Baie",
  description: "La Baie のコース料理とアラカルトメニューをご紹介します。",
}

export default function CoursePage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">コース・料理</h1>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              厳選された食材と洗練された技術でお届けする
              <br />
              特別なコース料理とアラカルトメニュー
            </p>
          </div>
        </FadeInView>

        <CourseGallery />
      </div>
    </main>
  )
}
