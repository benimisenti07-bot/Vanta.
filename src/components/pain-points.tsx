'use client'

import { motion } from 'framer-motion'
import { GlassCard } from './ui/glass-card'
import { FadeIn } from './ui/fade-in'

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    title: "IRS penalties piling up?",
    description: "Stop the bleeding with legitimate relief options that actually work"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
    title: "Overpriced tax firms?",
    description: "Save $3,000+ by learning the same processes they use"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    title: "Scary letters in the mail?",
    description: "Know exactly how to respond with professional templates"
  }
]

export function PainPoints() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
              Stop Stressing About IRS Debt
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You're not alone. Thousands face these same challenges every day. 
              Here's how to take control.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-teal to-neon-purple rounded-2xl mx-auto flex items-center justify-center text-black">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.8}>
          <div className="text-center mt-16">
            <motion.div
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Don't let another day pass in uncertainty
              </span>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}