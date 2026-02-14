'use client'

import { motion } from 'framer-motion'
import { NeonButton } from './ui/neon-button'
import { GlassCard } from './ui/glass-card'
import { FadeIn } from './ui/fade-in'

export function HeroSection() {
  const handleGetPlaybook = () => {
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-teal opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="heading-gradient">DIY IRS Relief</span>
                <br />
                <span className="text-gradient-neon">Playbook</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <h2 className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Legally Lower What You Owe
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
                The same IRS processes tax firms charge $3,000+ for, explained step-by-step 
                so you can do it yourself. Keep your cash, skip the middleman.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <NeonButton 
                  size="lg" 
                  onClick={handleGetPlaybook}
                  className="text-xl px-10 py-5"
                >
                  Download Now — Instant PDF
                </NeonButton>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secure checkout • Immediate access
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1.0}>
              <div className="flex items-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">100% Legal Methods</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-teal rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">30-Day Guarantee</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - PDF Mockup */}
          <div className="flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.6}>
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GlassCard 
                  className="p-8 neon-glow-teal max-w-sm mx-auto"
                  hover={false}
                  variant="strong"
                >
                  <div className="space-y-4">
                    {/* PDF Cover Mockup */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-700">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-neon-teal rounded-lg mx-auto flex items-center justify-center">
                          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-white text-lg">DIY IRS Relief</h3>
                        <p className="text-sm text-gray-400">Complete Playbook</p>
                        <div className="space-y-2 text-xs text-gray-500 text-left">
                          <div className="flex justify-between">
                            <span>Installment Agreements</span>
                            <span>✓</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Offer in Compromise</span>
                            <span>✓</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Phone Scripts</span>
                            <span>✓</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Letter Templates</span>
                            <span>✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient-neon">89 pages</div>
                      <div className="text-sm text-gray-400">of actionable guidance</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}