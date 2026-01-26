import { CourseGallery } from "@/components/sections/CourseGallery"
import { FadeInView } from "@/components/animations/FadeInView"
import { Separator } from "@/components/ui/separator"
import { messages } from "@/lib/messages"

export const metadata = {
  title: messages.pages.course.title,
  description: messages.pages.course.description,
}

export default function CoursePage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{messages.pages.course.heading}</h1>
            <Separator className="mx-auto w-24 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
              {messages.pages.course.subtitle}
            </p>
          </div>
        </FadeInView>

        <CourseGallery />
      </div>
    </main>
  )
}
