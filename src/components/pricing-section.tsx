'use client'

import { motion } from 'framer-motion'
import { GlassCard } from './ui/glass-card'
import { NeonButton } from './ui/neon-button'
import { FadeIn } from './ui/fade-in'
import { formatPrice } from '@/lib/utils'

const pricingPlans = [
  {
    name: "Starter",
    price: 49,
    popular: false,
    description: "Perfect for simple IRS situations",
    features: [
      "Complete 89-page PDF guide",
      "Installment Agreement walkthrough", 
      "Offer in Compromise basics",
      "Essential phone scripts",
      "Email support for 30 days"
    ],
    buttonText: "Get Starter Guide",
    highlight: false
  },
  {
    name: "Pro",
    price: 149,
    popular: true,
    description: "Everything you need for complex cases",
    features: [
      "Complete 89-page PDF guide",
      "All letter & form templates",
      "Excel eligibility calculator",
      "Advanced negotiation strategies",
      "Phone scripts for all scenarios",
      "Priority email & phone support",
      "Bonus: Currently Not Collectible guide",
      "60-day money-back guarantee"
    ],
    buttonText: "Get Pro Package",
    highlight: true
  }
]

export function PricingSection() {
  const handlePurchase = (planName: string) => {
    // This would typically integrate with a payment processor
    console.log(`Purchasing ${planName} plan`)
    // For demo purposes, just show an alert
    alert(`Redirecting to secure checkout for ${planName} package...`)
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Save thousands compared to hiring a tax resolution firm. 
              Get the same knowledge for a fraction of the cost.
            </p>
            <div className="mt-4 text-sm text-neon-teal">
              ⚡ Instant download • 30-day guarantee • Secure checkout
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="bg-gradient-to-r from-neon-teal to-neon-purple px-4 py-2 rounded-full text-black text-sm font-semibold">
                      Most Popular
                    </div>
                  </motion.div>
                )}
                
                <GlassCard 
                  className={`h-full relative overflow-hidden ${
                    plan.highlight ? 'neon-glow-purple' : ''
                  }`}
                  hover={false}
                  variant={plan.highlight ? 'strong' : 'default'}
                >
                  {plan.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-teal opacity-5"
                      animate={{ opacity: [0.05, 0.1, 0.05] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                  
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-5xl font-bold text-gradient-neon">
                          {formatPrice(plan.price)}
                        </span>
                        <div className="text-gray-400 text-sm">
                          <div>one-time</div>
                          <div>payment</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-gradient-to-br from-neon-teal to-neon-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <NeonButton
                        onClick={() => handlePurchase(plan.name)}
                        size="lg"
                        variant={plan.highlight ? 'primary' : 'secondary'}
                        className="w-full justify-center"
                      >
                        {plan.buttonText}
                      </NeonButton>
                    </div>

                    {/* Guarantee */}
                    <div className="text-center pt-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        30-Day Quality Refund Policy
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <FadeIn direction="up" delay={0.8}>
          <div className="text-center mt-16 space-y-6">
            <div className="flex justify-center items-center gap-8 flex-wrap text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure SSL Checkout
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Instant Access
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Email Support Included
              </div>
            </div>
            
            <motion.p 
              className="text-gray-500 text-sm max-w-2xl mx-auto"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Compare: Tax resolution firms typically charge $3,000-$7,000 for the same knowledge. 
              Get it all for less than what they charge for a consultation.
            </motion.p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}