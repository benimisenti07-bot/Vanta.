'use client'

import { motion } from 'framer-motion'
import { NeonButton } from './ui/neon-button'
import { GlassCard } from './ui/glass-card'
import { FadeIn } from './ui/fade-in'

export function CTASection() {
  const handleGetPlaybook = () => {
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-teal opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-teal opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <GlassCard className="text-center p-12 lg:p-16" variant="strong">
              <div className="space-y-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    <span className="heading-gradient">Stop Stressing</span>
                    <br />
                    <span className="text-gradient-neon">Start Fixing It Today</span>
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Every day you wait, the situation gets worse. Take control of your IRS debt 
                    with the same processes tax firms charge thousands for.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-4"
                >
                  <NeonButton 
                    size="lg" 
                    onClick={handleGetPlaybook}
                    className="text-2xl px-12 py-6 mb-6"
                  >
                    Get the Playbook — Instant PDF Download
                  </NeonButton>
                  
                  <div className="space-y-3">
                    <div className="flex justify-center items-center gap-4 text-sm text-gray-400 flex-wrap">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Secure checkout
                      </div>
                      <div>•</div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Immediate access
                      </div>
                      <div>•</div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Trusted info
                      </div>
                    </div>
                    
                    <motion.div
                      className="text-sm text-gray-500"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Join thousands who've taken control of their IRS situation
                    </motion.div>
                  </div>
                </motion.div>

                {/* Urgency Elements */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="border-t border-gray-800 pt-8 mt-8"
                >
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-1">Penalties Add Up</h3>
                      <p className="text-sm text-gray-400">Interest and penalties compound daily</p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-1">Options Expire</h3>
                      <p className="text-sm text-gray-400">Some relief programs have deadlines</p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-1">Take Action Today</h3>
                      <p className="text-sm text-gray-400">Start fixing your situation now</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}