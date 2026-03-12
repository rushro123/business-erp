"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const isDark = resolvedTheme === "dark"
  const handleToggle = () => {
    setIsAnimating(true)
    setTheme(isDark ? "light" : "dark")
    setTimeout(() => setIsAnimating(false), 500)
  }
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-8 text-muted-foreground"
        disabled
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
    >
      
        <Sun className={`absolute size-4 transition-all duration-500 ease-in-out ${
          isDark
            ? `scale-100 opacity-100 ${isAnimating ? "animate-[moon-rise_0.5s_ease-out]" : "rotate-0"}`
            : "-rotate-90 scale-0 opacity-0"
        }`}
           />
        <Moon className={`absolute size-4 transition-all duration-500 ease-in-out ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : `scale-100 opacity-100 ${isAnimating ? "animate-[spin-in_0.5s_ease-out]" : "rotate-0"}`
        }`}
           />

    </Button>
  )
}
