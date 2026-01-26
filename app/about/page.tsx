import { AccessInfo } from "@/components/sections/AccessInfo"
import { FadeInView } from "@/components/animations/FadeInView"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "店舗情報・アクセス | La Baie",
  description: "La Baie の店舗情報、アクセス方法、営業時間をご案内します。",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">店舗情報・アクセス</h1>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La Baie へのアクセス方法と店舗情報をご案内します
            </p>
          </div>
        </FadeInView>

        <AccessInfo />
      </div>
    </main>
  )
}
