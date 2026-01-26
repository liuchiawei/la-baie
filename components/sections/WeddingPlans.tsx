"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { FadeInView } from "@/components/animations/FadeInView"
import { messages } from "@/lib/messages"

// ウェディングプランデータ
const weddingPlans = messages.wedding.plans.map((plan, index) => ({
  id: index + 1,
  name: plan.name,
  price: plan.price,
  capacity: plan.capacity,
  includes: plan.includes,
  description: plan.description,
  image: `/images/${String(index + 15).padStart(2, "0")}.jpg`,
}))

export function WeddingPlans() {
  return (
    <div className="space-y-12">
      {/* プランカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {weddingPlans.map((plan, index) => (
          <FadeInView key={plan.id} direction="up" delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">定員: {plan.capacity}</p>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`plan-${plan.id}`}>
                      <AccordionTrigger>{messages.wedding.servicesTitle}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {plan.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="text-primary">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Button className="w-full" size="lg">
                    {messages.reservation.contactButton}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInView>
        ))}
      </div>

      {/* 会場写真 */}
      <FadeInView direction="up">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">{messages.wedding.venueTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[18, 19, 20, 21].map((imgNum, index) => (
              <motion.div
                key={imgNum}
                className="relative h-64 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Image
                  src={`/images/${imgNum.toString().padStart(2, "0")}.jpg`}
                  alt={`会場写真 ${imgNum}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>
    </div>
  )
}
