import { loadStripe, Stripe } from '@stripe/stripe-js'

// Initialize Stripe with your publishable key
const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_live_51RpJ0uBBCpHvdxpQDCRakA3UR2tw2Xy8f8sgDZwhcAASIUXFouq9iMxopLjFYLqRsgcX0cD600GfiVdqOe'
)

export { stripePromise }

// Product configurations
export const products = {
  starter: {
    id: 'starter',
    name: 'DIY IRS Relief Playbook - Starter',
    price: 4900, // $49.00 in cents
    currency: 'usd',
    description: 'Complete 89-page PDF guide with installment agreements, OIC basics, phone scripts, and email support.',
    features: [
      'Complete 89-page PDF guide',
      'Installment Agreement walkthrough',
      'Offer in Compromise basics',
      'Essential phone scripts',
      'Email support for 30 days'
    ]
  },
  pro: {
    id: 'pro',
    name: 'DIY IRS Relief Playbook - Pro',
    price: 14900, // $149.00 in cents
    currency: 'usd',
    description: 'Complete package with PDF guide, templates, calculator, advanced strategies, and priority support.',
    features: [
      'Complete 89-page PDF guide',
      'All letter & form templates',
      'Excel eligibility calculator',
      'Advanced negotiation strategies',
      'Phone scripts for all scenarios',
      'Priority email & phone support',
      'Bonus: Currently Not Collectible guide',
      '60-day money-back guarantee'
    ]
  }
} as const

export type ProductId = keyof typeof products