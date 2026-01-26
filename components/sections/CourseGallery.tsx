"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeInView } from "@/components/animations/FadeInView"

// 料理データ
const courses = {
  lunch: [
    { id: 1, name: "ランチコース A", description: "前菜、メイン、デザート", price: "¥3,500", image: "/images/05.jpg", detail: "季節の前菜、お選びいただけるメイン料理、手作りのデザートが含まれます。" },
    { id: 2, name: "ランチコース B", description: "前菜、メイン、スープ、デザート", price: "¥4,500", image: "/images/06.jpg", detail: "季節の前菜、スープ、お選びいただけるメイン料理、手作りのデザートが含まれます。" },
    { id: 3, name: "プレミアムランチ", description: "特別なランチコース", price: "¥6,000", image: "/images/07.jpg", detail: "厳選された食材を使用した特別なランチコースです。" },
  ],
  dinner: [
    { id: 4, name: "ディナーコース A", description: "5品コース", price: "¥8,000", image: "/images/08.jpg", detail: "前菜、スープ、魚料理、肉料理、デザートの5品コースです。" },
    { id: 5, name: "ディナーコース B", description: "7品コース", price: "¥12,000", image: "/images/09.jpg", detail: "前菜、スープ、魚料理、肉料理、チーズ、デザート、コーヒーの7品コースです。" },
    { id: 6, name: "シェフおまかせコース", description: "特別なコース", price: "¥15,000", image: "/images/10.jpg", detail: "シェフがその日の食材でお選びする特別なコースです。" },
  ],
  aLaCarte: [
    { id: 7, name: "季節の前菜", description: "旬の食材を使用", price: "¥1,800", image: "/images/11.jpg", detail: "季節の食材を活かした前菜です。" },
    { id: 8, name: "本日の魚料理", description: "新鮮な魚を使用", price: "¥3,500", image: "/images/12.jpg", detail: "その日仕入れた新鮮な魚を使用した料理です。" },
    { id: 9, name: "本日の肉料理", description: "厳選された肉を使用", price: "¥4,500", image: "/images/13.jpg", detail: "厳選された肉を使用した料理です。" },
    { id: 10, name: "手作りデザート", description: "シェフ手作りのスイーツ", price: "¥1,200", image: "/images/14.jpg", detail: "シェフが心を込めて作る手作りのデザートです。" },
  ],
}

type Course = typeof courses.lunch[0]

// カードコンポーネント（Vercel best practice: rerender-memo）
const CourseCard = ({ course, onOpen }: { course: Course; onOpen: (course: Course) => void }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
      onClick={() => onOpen(course)}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-64 w-full">
          <Image
            src={course.image}
            alt={course.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{course.name}</CardTitle>
          <CardDescription className="text-base">{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">{course.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function CourseGallery() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  return (
    <div className="py-12">
      <Tabs defaultValue="lunch" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="lunch">ランチ</TabsTrigger>
          <TabsTrigger value="dinner">ディナー</TabsTrigger>
          <TabsTrigger value="aLaCarte">アラカルト</TabsTrigger>
        </TabsList>

        <TabsContent value="lunch">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.lunch.map((course, index) => (
              <FadeInView key={course.id} direction="up" delay={index * 0.1}>
                <CourseCard course={course} onOpen={setSelectedCourse} />
              </FadeInView>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dinner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.dinner.map((course, index) => (
              <FadeInView key={course.id} direction="up" delay={index * 0.1}>
                <CourseCard course={course} onOpen={setSelectedCourse} />
              </FadeInView>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="aLaCarte">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.aLaCarte.map((course, index) => (
              <FadeInView key={course.id} direction="up" delay={index * 0.1}>
                <CourseCard course={course} onOpen={setSelectedCourse} />
              </FadeInView>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* 詳細ダイアログ */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedCourse.name}</DialogTitle>
                <DialogDescription className="text-lg">{selectedCourse.description}</DialogDescription>
              </DialogHeader>
              <div className="relative h-64 w-full mt-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedCourse.image}
                  alt={selectedCourse.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-4">
                <p className="text-lg">{selectedCourse.detail}</p>
                <p className="text-2xl font-bold text-primary">{selectedCourse.price}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
