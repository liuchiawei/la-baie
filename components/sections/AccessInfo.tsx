"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInView } from "@/components/animations/FadeInView"
import { MapPin, Train, Car, Clock, Phone, Mail } from "lucide-react"
import dynamic from "next/dynamic"

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
            <CardTitle className="text-3xl mb-4">La Baie について</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                La Baie は、洗練されたフレンチ料理と上質な空間で
                お客様に特別なひとときを提供するレストランです。
              </p>
              <p className="text-lg leading-relaxed">
                厳選された食材と経験豊富なシェフの技術により、
                季節の味わいを最大限に活かした料理をお届けします。
              </p>
              <p className="text-lg leading-relaxed">
                大切な人との特別な時間、ビジネスの場、記念日など、
                様々なシーンでご利用いただけます。
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeInView>

      {/* 店舗写真 */}
      <FadeInView direction="up" delay={0.2}>
        <div>
          <h3 className="text-3xl font-bold mb-6">店内の様子</h3>
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
                <span>基本情報</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">住所</p>
                    <p className="text-muted-foreground">
                      〒000-0000<br />
                      東京都渋谷区○○○1-2-3<br />
                      ○○ビル 2F
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p className="text-muted-foreground">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">メール</p>
                    <p className="text-muted-foreground">info@la-baie.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">営業時間</p>
                    <p className="text-muted-foreground">
                      ランチ: 11:30 - 15:00 (L.O. 14:00)<br />
                      ディナー: 17:30 - 22:00 (L.O. 21:00)
                    </p>
                    <p className="text-muted-foreground mt-1">定休日: 月曜日</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 交通アクセス */}
          <Card>
            <CardHeader>
              <CardTitle>交通アクセス</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Train className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">電車でお越しの場合</p>
                    <p className="text-muted-foreground">
                      JR山手線「渋谷駅」より徒歩5分<br />
                      東京メトロ「渋谷駅」より徒歩3分
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Car className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">お車でお越しの場合</p>
                    <p className="text-muted-foreground">
                      首都高速3号渋谷線「渋谷IC」より5分<br />
                      駐車場: 近隣にコインパーキングあり（要予約）
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
            <CardTitle>地図</CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent />
          </CardContent>
        </Card>
      </FadeInView>
    </div>
  )
}
