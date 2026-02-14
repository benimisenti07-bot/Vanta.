'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface NeonButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function NeonButton({ 
  children, 
  onClick, 
  className, 
  size = 'md', 
  variant = 'primary',
  disabled = false 
}: NeonButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'btn-neon',
    secondary: 'glass border-2 border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-black',
  }

  return (
    <motion.button
      className={cn(
        'relative font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={!disabled ? { 
        scale: 1.05,
        transition: { duration: 0.2 }
      } : undefined}
      whileTap={!disabled ? { 
        scale: 0.95,
        transition: { duration: 0.1 }
      } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  )
}