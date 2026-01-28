"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/animations/FadeInView";
import { messages } from "@/lib/messages";

// 推薦料理データ
const featuredDishes = messages.featuredDishes.items.map((item, index) => ({
  id: index + 1,
  name: item.name,
  description: item.description,
  image: item.image,
  href: "/course",
}));

// カードコンポーネントをメモ化（Vercel best practice: rerender-memo）
const DishCard = ({
  dish,
  index,
}: {
  dish: (typeof featuredDishes)[0];
  index: number;
}) => {
  return (
    <FadeInView direction="up" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden h-full">
          <div className="relative h-64 w-full">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{dish.name}</CardTitle>
            <CardDescription className="text-base">
              {dish.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={dish.href}>
                {messages.featuredDishes.viewDetails}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </FadeInView>
  );
};

export function FeaturedDishes() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInView direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {messages.featuredDishes.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {messages.featuredDishes.subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
