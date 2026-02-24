import { CourseGallery } from "@/components/sections/CourseGallery"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { messages } from "@/lib/messages"

export const metadata = {
  title: messages.pages.course.title,
  description: messages.pages.course.description,
}

export default function CoursePage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title={messages.pages.course.heading}
          subtitle={messages.pages.course.subtitle}
        />
        <CourseGallery />
      </div>
    </main>
  )
}
