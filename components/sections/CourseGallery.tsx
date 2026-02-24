"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShowcaseCard } from "@/components/cards/ShowcaseCard";
import { messages } from "@/lib/messages";

type Course =
  (typeof messages.course.items)[keyof typeof messages.course.items][number];

export function CourseGallery() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const renderGrid = (courses: ReadonlyArray<Course>) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: Course, index: number) => (
          <ShowcaseCard
            key={course.name}
            imageSrc={course.image}
            imageAlt={course.name}
            title={
              <span className="text-xl font-playfair font-semibold tracking-tight">
                {course.name}
              </span>
            }
            description={course.description}
            onClick={() => setSelectedCourse(course)}
            revealDirection="up"
            revealDelay={index * 0.1}
            hoverOffset={8}
            imageContainerClassName="h-64"
            imageSizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          >
            <p className="text-2xl font-bold text-primary">{course.price}</p>
          </ShowcaseCard>
        ))}
      </div>
    );
  };

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
          {renderGrid(messages.course.items.lunch)}
        </TabsContent>

        <TabsContent value="dinner">
          {renderGrid(messages.course.items.dinner)}
        </TabsContent>

        <TabsContent value="aLaCarte">
          {renderGrid(messages.course.items.aLaCarte)}
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
