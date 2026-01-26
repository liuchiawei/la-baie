"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInView } from "@/components/animations/FadeInView"
import { MapPin, Train, Car, Clock, Phone, Mail } from "lucide-react"
import dynamic from "next/dynamic"
import { messages } from "@/lib/messages"

// 地図を動的インポート（Vercel best practice: bundle-dynamic-imports）
const MapComponent = dynamic(() => import("@/components/sections/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-muted animate-pulse rounded-lg" />
  ),
})

export function AccessInfo() {
  return (
    <div className="space-y-12">
      {/* 店舗紹介 */}
      <FadeInView direction="up">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">{messages.restaurant.concept.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              {messages.restaurant.concept.description.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeInView>

      {/* 建物について */}
      <FadeInView direction="up" delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">{messages.building.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              {messages.building.description.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="font-semibold mb-2">{messages.building.colonialStyle.title}</p>
              <p className="text-muted-foreground">{messages.building.colonialStyle.description}</p>
            </div>
          </CardContent>
        </Card>
      </FadeInView>

      {/* 店舗写真 */}
      <FadeInView direction="up" delay={0.2}>
        <div>
          <h3 className="text-3xl font-bold mb-6">{messages.pages.about.interiorTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[22, 23].map((imgNum, index) => (
              <motion.div
                key={imgNum}
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Image
                  src={`/images/${imgNum.toString().padStart(2, "0")}.jpg`}
                  alt={`店内写真 ${imgNum}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* アクセス情報 */}
      <FadeInView direction="up" delay={0.4}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 基本情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{messages.pages.about.basicInfoTitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{messages.pages.about.addressLabel}</p>
                    <p className="text-muted-foreground">
                      {messages.info.address.postal}<br />
                      {messages.info.address.full}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{messages.pages.about.phoneLabel}</p>
                    <p className="text-muted-foreground">{messages.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{messages.pages.about.emailLabel}</p>
                    <p className="text-muted-foreground">{messages.info.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{messages.pages.about.hoursLabel}</p>
                    <p className="text-muted-foreground">
                      ランチ: {messages.info.hours.lunch}<br />
                      ディナー: {messages.info.hours.dinner}
                    </p>
                    <p className="text-muted-foreground mt-1">{messages.pages.about.closedLabel}: {messages.info.closed}</p>
                    <p className="text-muted-foreground mt-1">{messages.info.parking.display}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 交通アクセス */}
          <Card>
            <CardHeader>
              <CardTitle>{messages.pages.about.accessTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Train className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{messages.pages.about.trainLabel}</p>
                    <p className="text-muted-foreground">
                      {messages.info.access.train}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Car className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{messages.pages.about.carLabel}</p>
                    <p className="text-muted-foreground">
                      {messages.info.access.car}<br />
                      駐車場: {messages.info.parking.display}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeInView>

      {/* 地図 */}
      <FadeInView direction="up" delay={0.6}>
        <Card>
          <CardHeader>
            <CardTitle>{messages.pages.about.mapTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent />
          </CardContent>
        </Card>
      </FadeInView>
    </div>
  )
}
