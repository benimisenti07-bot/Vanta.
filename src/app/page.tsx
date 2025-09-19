'use client'

import { HeroSection } from '@/components/hero-section'
import { PainPoints } from '@/components/pain-points'
import { FeaturesSection } from '@/components/features-section'
import { TrustSection } from '@/components/trust-section'
import { PricingSection } from '@/components/pricing-section'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <PainPoints />
      <FeaturesSection />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-gradient-neon">
              DIY IRS Relief Playbook
            </div>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-400 flex-wrap">
              <a href="mailto:support@diyirsrelief.com" className="hover:text-neon-teal transition-colors">
                Contact Support
              </a>
              <div>•</div>
              <span>30-Day Guarantee</span>
              <div>•</div>
              <span>Secure Checkout</span>
            </div>
            <div className="text-xs text-gray-600 max-w-2xl mx-auto">
              Disclaimer: This product provides educational information about IRS processes. 
              Results may vary based on individual circumstances. Not legal or tax advice. 
              Consult professionals for complex situations.
            </div>
            <div className="text-xs text-gray-700">
              © 2024 DIY IRS Relief. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}