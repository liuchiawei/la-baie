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
    <FadeInView direction="up" delay={index * 0.15}>
      <motion.div
        className="group relative"
        whileHover={{ y: -12 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="overflow-hidden h-full bg-card border-border relative">
          {/* Elegant top border accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative h-80 w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <CardHeader className="px-6 py-8">
            {/* Decorative number */}
            <div className="absolute top-72 right-6 text-6xl font-playfair font-bold text-accent/10 select-none">
              {String(dish.id).padStart(2, '0')}
            </div>

            <CardTitle className="text-2xl font-playfair font-semibold mb-4 tracking-tight relative">
              {dish.name}
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-0 w-12 h-[1px] bg-accent/60" />
            </CardTitle>
            <CardDescription className="text-base leading-relaxed mt-4 text-muted-foreground">
              {dish.description}
            </CardDescription>
          </CardHeader>

          <CardFooter className="px-6 pb-8">
            <div className="group/btn relative w-full">
              <Button
                asChild
                variant="outline"
                className="w-full border border-primary/30 hover:border-primary text-primary hover:bg-primary/5 transition-all duration-500 py-6 tracking-wider"
              >
                <Link href={dish.href}>
                  <span className="relative z-10">{messages.featuredDishes.viewDetails}</span>
                </Link>
              </Button>
              {/* Bottom accent line */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent group-hover/btn:w-3/4 transition-all duration-700 ease-out" />
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </FadeInView>
  );
};

export function FeaturedDishes() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Decorative side borders */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-8 lg:px-16">
        <FadeInView direction="up">
          <div className="text-center mb-20">
            {/* Top ornament */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-3 mb-8"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-accent" />
              <div className="w-1.5 h-1.5 bg-accent rotate-45" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-accent" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 tracking-tight text-primary">
              {messages.featuredDishes.title}
            </h2>

            {/* Decorative underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center items-center gap-2 mb-8"
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-accent/60" />
              <div className="w-1 h-1 bg-accent/60 rounded-full" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-accent/60" />
            </motion.div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              {messages.featuredDishes.subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
