"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function PatternWrapper({ children }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={
        theme === "dark"
          ? "bg-background pattern-grid-dark"
          : "bg-background pattern-grid-light"
      }
    >
      {children}
    </div>
  )
}