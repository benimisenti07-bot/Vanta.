'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassCard } from './ui/glass-card'

export function BusinessModal() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Trigger Link */}
      <button
        onClick={toggleModal}
        className="hover:text-neon-teal transition-colors underline"
      >
        Business Info
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <GlassCard className="p-8" variant="strong">
                <div className="space-y-6">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gradient-neon mb-2">
                        Business Information
                      </h2>
                      <p className="text-gray-400">
                        Transparency and legitimacy you can trust
                      </p>
                    </div>
                    <button
                      onClick={toggleModal}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Business Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Company Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                        Company Details
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Legal Name:</span>
                          <span className="text-white font-medium">Old Saybrook IT Solutions LLC</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Business Type:</span>
                          <span className="text-white">Limited Liability Company</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">State of Registration:</span>
                          <span className="text-white">Connecticut</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Year Established:</span>
                          <span className="text-white">2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Location:</span>
                          <span className="text-white">Old Saybrook, CT</span>
                        </div>
                      </div>
                    </div>

                    {/* Compliance & Trust */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Compliance & Trust
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300">Registered Connecticut LLC</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300">Legal Business Registration</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300">Professional Service Provider</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-neon-teal rounded-full"></div>
                          <span className="text-gray-300">Tax Document Preparation Services</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-300">Business Compliance Standards</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Our Commitment</h3>
                    <div className="text-sm text-gray-300 leading-relaxed space-y-2">
                      <p>
                        Old Saybrook IT Solutions LLC is a registered Connecticut business committed to providing 
                        legitimate, educational resources about IRS processes. We operate with full transparency 
                        and legal compliance.
                      </p>
                      <p>
                        Our DIY IRS Relief Playbook contains only information based on official IRS publications 
                        and established tax law. We maintain the highest standards of business ethics and customer service.
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="text-sm text-gray-400">
                        Questions about our business registration or services?
                      </div>
                      <a 
                        href="mailto:support@diyirsrelief.com"
                        className="text-neon-teal hover:text-neon-purple transition-colors text-sm font-medium"
                      >
                        Contact Support
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}