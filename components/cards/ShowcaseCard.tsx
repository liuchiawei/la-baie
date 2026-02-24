"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { FadeInView } from "@/components/animations/FadeInView";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const HOVER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type ShowcaseCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  badgeText?: React.ReactNode;

  /** Extra content shown under header (e.g. price) */
  children?: React.ReactNode;

  /** If provided, card becomes interactive (button semantics). */
  onClick?: () => void;

  revealDelay?: number;
  revealDirection?: "up" | "down" | "left" | "right" | "none";

  imageContainerClassName?: string;
  imageSizes?: string;

  hoverOffset?: number;
  className?: string;
};

const ShowcaseCard = memo(
  ({
    imageSrc,
    imageAlt,
    title,
    description,
    badgeText,
    children,
    onClick,
    revealDelay = 0,
    revealDirection = "up",
    imageContainerClassName,
    imageSizes = "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    hoverOffset = 8,
    className,
  }: ShowcaseCardProps) => {
    const MotionRoot: React.ElementType = onClick ? motion.button : motion.div;

    return (
      <FadeInView direction={revealDirection} delay={revealDelay}>
        <MotionRoot
          type={onClick ? "button" : undefined}
          onClick={onClick}
          whileHover={{ y: -hoverOffset }}
          transition={{ duration: 0.5, ease: HOVER_EASE }}
          className={cn(
            "group relative h-full",
            onClick &&
              "w-full text-left cursor-pointer appearance-none bg-transparent border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl",
            className
          )}
        >
          <Card className="overflow-hidden h-full bg-card border-border relative rounded-xs pt-0 py-0">
            {/* Top accent border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

            <div
              className={cn(
                "relative w-full overflow-hidden",
                imageContainerClassName ?? "h-72"
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: HOVER_EASE }}
                className="w-full h-full"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes={imageSizes}
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Decorative badge */}
              {badgeText ? (
                <div className="absolute bottom-4 right-4 text-7xl font-playfair font-bold text-primary/50 group-hover:text-accent/30 transition-colors duration-500 select-none">
                  {badgeText}
                </div>
              ) : null}
            </div>

            <CardHeader className="px-6 py-6 relative">
              <CardTitle className="text-xl font-playfair font-semibold mb-3 tracking-tight text-primary group-hover:text-accent transition-colors duration-500">
                {title}
              </CardTitle>

              {/* Decorative underline */}
              <div className="w-0 h-[1px] bg-accent/60 group-hover:w-16 transition-all duration-700 ease-out mb-3" />

              {description ? (
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {description}
                </CardDescription>
              ) : null}
            </CardHeader>

            {children ? <div className="px-6 pb-6">{children}</div> : null}
          </Card>
        </MotionRoot>
      </FadeInView>
    );
  }
);

ShowcaseCard.displayName = "ShowcaseCard";

export { ShowcaseCard };
