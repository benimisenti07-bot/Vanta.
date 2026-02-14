'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './ui/fade-in'

export function TrustSection() {
  return (
    <section className="py-16 bg-black border-y border-gray-800">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              
              {/* Shield Icon */}
              <motion.div
                className="flex items-center gap-3"
                animate={{ 
                  filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">100% Legal Methods</span>
              </motion.div>

              {/* Divider */}
              <div className="w-px h-8 bg-gray-700 hidden sm:block"></div>

              {/* Lock Icon */}
              <motion.div
                className="flex items-center gap-3"
                animate={{ 
                  filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-teal to-cyan-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">No Gimmicks</span>
              </motion.div>

              {/* Divider */}
              <div className="w-px h-8 bg-gray-700 hidden sm:block"></div>

              {/* Document Icon */}
              <motion.div
                className="flex items-center gap-3"
                animate={{ 
                  filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2 
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-violet-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">IRS-Approved Processes</span>
              </motion.div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                100% based on official IRS processes and publications. No scams. No schemes. 
                Just legitimate tax relief options explained in plain English so you can 
                handle your own case with confidence.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-gray-400">
                Trusted by thousands seeking legitimate IRS relief
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}