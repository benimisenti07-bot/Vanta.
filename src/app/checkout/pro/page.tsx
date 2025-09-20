'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/glass-card'
import { NeonButton } from '@/components/ui/neon-button'

export default function ProCheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)
    
    try {
      console.log('Starting checkout for pro package...')
      
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: 'pro' }),
      })

      const data = await response.json()
      console.log('Checkout response:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Checkout failed')
      }

      if (data.url) {
        console.log('Redirecting to Stripe:', data.url)
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err: any) {
      console.error('Checkout error:', err)
      setError(err.message || 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 text-center relative overflow-hidden">
            
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-neon-teal to-neon-purple px-4 py-2 rounded-full text-black text-sm font-semibold">
                Most Popular
              </div>
            </div>

            <div className="pt-4">
              <h1 className="text-4xl font-bold text-gradient-neon mb-4">
                DIY IRS Relief Playbook
              </h1>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Pro Package
              </h2>
              
              <div className="mb-8">
                <div className="text-5xl font-bold text-gradient-neon mb-2">
                  $149
                </div>
                <div className="text-gray-400">One-time payment</div>
                <div className="text-sm text-neon-teal mt-2">
                  Save $3,000+ vs. hiring a tax firm
                </div>
              </div>

              <div className="text-left mb-8 space-y-3">
                {[
                  'Complete 89-page PDF guide',
                  'All letter & form templates',
                  'Excel eligibility calculator',
                  'Advanced negotiation strategies',
                  'Phone scripts for all scenarios',
                  'Priority email & phone support',
                  'Bonus: Currently Not Collectible guide',
                  '60-day money-back guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-br from-neon-teal to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <NeonButton
                  onClick={handleCheckout}
                  disabled={loading}
                  size="lg"
                  className="w-full text-xl"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Redirecting to Stripe...
                    </div>
                  ) : (
                    'Proceed to Secure Checkout'
                  )}
                </NeonButton>
              </div>

              {error && (
                <div className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 mb-4">
                  <p className="text-red-300">{error}</p>
                  <button 
                    onClick={() => setError(null)}
                    className="text-red-200 underline text-sm mt-2"
                  >
                    Try again
                  </button>
                </div>
              )}

              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Bank-level Security</span>
                  </div>
                  <div>•</div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Instant Download</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-4">
                  Powered by Stripe • Old Saybrook IT Solutions LLC
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <div className="text-center mt-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-neon-teal hover:text-neon-purple transition-colors"
          >
            ← Back to homepage
          </button>
        </div>
      </div>
    </div>
  )
}