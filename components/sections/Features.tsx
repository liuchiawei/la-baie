"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VerticalTitle } from "@/components/ui/vertical-title";
import { messages } from "@/lib/messages";

const { features } = messages;

export function Features() {
  return (
    <section className="w-full min-w-0 relative z-10 bg-black">
      {features.items.map((item, index) => (
        <div
          key={item.title}
          className="flex flex-col lg:flex-row relative"
        >
          {/* 左欄：主圖（行動裝置先圖後文，桌面奇偶交替左右） */}
          <div
            className={`relative flex-1 h-full min-h-[50vh] lg:min-h-svh flex justify-center items-center ${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1024}
              height={1024}
              className="select-none"
              loading="lazy"
            />
          </div>

          {/* 右欄：文字 */}
          <div
            className={`flex-1 flex flex-col lg:flex-row p-8 gap-8 ${
              index % 2 === 0 ? "lg:order-2 " : "lg:order-1 lg:flex-row-reverse"
            }`}
          >
              <VerticalTitle
                tagline="Features"
                title={item.title}
              />
              <div className="flex flex-col justify-center space-y-4 border">
                <p className="w-full min-w-0 lg:max-w-60 h-full min-h-0 max-h-20 leading-relaxed text-muted-foreground font-serif font-light lg:text-lg">
                  {item.description}
                </p>
                <Link
                  href={features.moreLink.href}
                  className="inline-flex items-center gap-2 text-sm tracking-wide text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {features.moreLink.label}
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </Link>
              </div>
          </div>
        </div>
      ))}
    </section>
  );
}
