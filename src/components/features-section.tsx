'use client'

import { motion } from 'framer-motion'
import { GlassCard } from './ui/glass-card'
import { FadeIn } from './ui/fade-in'
import { useState } from 'react'

const features = [
  {
    title: "Installment Agreements",
    subtitle: "Step-by-step guide",
    description: "Complete walkthrough of setting up payment plans that actually work for your budget",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Offer in Compromise",
    subtitle: "Complete checklist",
    description: "Everything you need to know about settling your debt for less than what you owe",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Phone Scripts & Letters",
    subtitle: "Professional templates",
    description: "Exact scripts and letter templates used by tax professionals to communicate with the IRS",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    )
  },
  {
    title: "Eligibility Calculator",
    subtitle: "Spreadsheet formula",
    description: "Built-in spreadsheet to test your OIC eligibility before you apply",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
      </svg>
    )
  }
]

export function FeaturesSection() {
  const [activePreview, setActivePreview] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
              What's Inside the Playbook
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to navigate IRS processes like a pro. 
              No fluff, just actionable steps.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FadeIn key={index} direction="left" delay={0.2 + index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActivePreview(index)}
                    className="cursor-pointer"
                  >
                    <GlassCard 
                      className={`transition-all duration-300 ${
                        activePreview === index ? 'neon-glow-teal' : ''
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-neon-teal to-neon-purple rounded-lg flex items-center justify-center text-black">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-neon-teal">
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            {/* PDF Preview Carousel */}
            <FadeIn direction="right" delay={0.6}>
              <div className="relative">
                <GlassCard className="p-8" variant="strong">
                  <div className="space-y-6">
                    <div className="text-center">
                      <motion.div
                        key={activePreview}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {features[activePreview].title}
                        </h3>
                        <p className="text-neon-teal mb-4">
                          {features[activePreview].subtitle}
                        </p>
                      </motion.div>
                    </div>

                    {/* Simulated PDF Pages */}
                    <motion.div
                      key={activePreview}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="bg-white rounded-lg p-6 text-black">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-neon-teal rounded flex items-center justify-center">
                              {features[activePreview].icon}
                            </div>
                            <span className="font-semibold">
                              Page {activePreview + 12}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          <div className="space-y-2 mt-4">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>Step-by-step instructions</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>Real examples included</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span>Professional templates</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Preview Navigation */}
                    <div className="flex justify-center gap-2">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActivePreview(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === activePreview 
                              ? 'bg-neon-teal' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}