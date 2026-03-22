"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useNavDirection } from "@/store/useNavDirection"

export default function Template({ children }) {
  const pathname = usePathname()
  const direction = useNavDirection((s) => s.direction)

  const variants = {
    initial: {
      opacity: 0,
      y: direction === "down" ? 100 : -100
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: direction === "down" ? -100 : 100
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}