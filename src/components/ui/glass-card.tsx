'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  variant?: 'default' | 'strong'
}

export function GlassCard({ 
  children, 
  className, 
  hover = true, 
  glow = false, 
  variant = 'default' 
}: GlassCardProps) {
  const baseClasses = variant === 'strong' ? 'glass-strong' : 'glass'
  
  return (
    <motion.div
      className={cn(
        baseClasses,
        'p-6 transition-all duration-300',
        hover && 'hover-lift hover:neon-glow-teal',
        glow && 'neon-glow-teal',
        className
      )}
      whileHover={hover ? {
        scale: 1.02,
        transition: { duration: 0.2 }
      } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}