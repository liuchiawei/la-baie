"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { messages } from "@/lib/messages"

interface HeaderProps {
  position?: "fixed" | "sticky"
}

export function Header({ position = "fixed" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = messages.navigation

  return (
    <motion.header
      className={cn(
        position === "sticky" ? "sticky top-0 left-0 right-0" : "fixed top-0 left-0 right-0",
        "z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/20 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              className="text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {messages.restaurant.name}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-sm font-medium"
                  asChild
                >
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          style={{ overflow: "hidden" }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
