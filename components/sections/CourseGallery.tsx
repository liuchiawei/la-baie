"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeInView } from "@/components/animations/FadeInView";
import { messages } from "@/lib/messages";

type Course =
  (typeof messages.course.items)[keyof typeof messages.course.items][number];

// カードコンポーネント（Vercel best practice: rerender-memo）
const CourseCard = ({
  course,
  onOpen,
}: {
  course: Course;
  onOpen: (course: Course) => void;
}) => {
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
          <CardDescription className="text-base">
            {course.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">{course.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function CourseGallery() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="py-12">
      <Tabs defaultValue="lunch" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="lunch">{messages.course.tabs.lunch}</TabsTrigger>
          <TabsTrigger value="dinner">
            {messages.course.tabs.dinner}
          </TabsTrigger>
          <TabsTrigger value="aLaCarte">
            {messages.course.tabs.aLaCarte}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lunch">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.course.items.lunch.map(
              (course: Course, index: number) => (
                <FadeInView
                  key={course.name}
                  direction="up"
                  delay={index * 0.1}
                >
                  <CourseCard course={course} onOpen={setSelectedCourse} />
                </FadeInView>
              ),
            )}
          </div>
        </TabsContent>

        <TabsContent value="dinner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.course.items.dinner.map(
              (course: Course, index: number) => (
                <FadeInView
                  key={course.name}
                  direction="up"
                  delay={index * 0.1}
                >
                  <CourseCard course={course} onOpen={setSelectedCourse} />
                </FadeInView>
              ),
            )}
          </div>
        </TabsContent>

        <TabsContent value="aLaCarte">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.course.items.aLaCarte.map(
              (course: Course, index: number) => (
                <FadeInView
                  key={course.name}
                  direction="up"
                  delay={index * 0.1}
                >
                  <CourseCard course={course} onOpen={setSelectedCourse} />
                </FadeInView>
              ),
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* 詳細ダイアログ */}
      <Dialog
        open={!!selectedCourse}
        onOpenChange={() => setSelectedCourse(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedCourse.name}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedCourse.description}
                </DialogDescription>
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
                <p className="text-2xl font-bold text-primary">
                  {selectedCourse.price}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
