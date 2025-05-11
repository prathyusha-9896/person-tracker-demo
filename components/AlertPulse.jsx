'use client'
import { motion } from 'framer-motion'

export default function AlertPulse() {
  return (
    <motion.div
      className="w-20 h-20 bg-red-500 rounded-full"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity
      }}
    />
  )
}
