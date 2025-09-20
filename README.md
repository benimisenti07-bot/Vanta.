# DIY IRS Relief Playbook - Premium Landing Page

A modern, professional landing page for selling DIY IRS Relief educational materials with integrated Stripe payment processing.

## 🚀 Live Preview

**Current Deployment**: https://sb-1b34yzq1j1dl.vercel.run

## 🎯 Project Overview

This is a premium fintech-style landing page built for Old Saybrook IT Solutions LLC to sell legitimate IRS tax relief educational materials. The site features glassmorphic design, smooth animations, and professional trust-building elements.

## ✨ Key Features

### 🎨 Design & UX
- **Fintech-Level Design**: Glassmorphic UI with neon teal/purple accents
- **Smooth Animations**: Framer Motion with scroll reveals and hover effects
- **Mobile-First Responsive**: Optimized for all devices and screen sizes
- **Professional Typography**: Inter font family for premium appearance

### 💳 Payment Integration
- **Stripe Checkout**: Secure payment processing with live API integration
- **Two Product Tiers**: Starter ($49) and Pro ($149) packages
- **Success Page**: Professional post-purchase experience with download links
- **Webhook Support**: Automated order processing and email delivery

### 🏛️ Trust & Credibility
- **Business Registration**: Full LLC information and Connecticut registration
- **Legal Compliance**: Comprehensive disclaimers and professional standards
- **Trust Badges**: Multiple credibility indicators throughout the site
- **Guarantee Policy**: 30-day refund policy clearly displayed

### 📄 Content Sections
1. **Hero Section**: Compelling value proposition with animated PDF mockup
2. **Pain Points**: Three key customer problems addressed
3. **Features**: Interactive showcase of playbook contents
4. **Trust Section**: Credibility and legitimacy indicators
5. **Pricing**: Two-tier pricing with Stripe integration
6. **FAQ**: Comprehensive questions addressing customer concerns
7. **Final CTA**: Urgency-driven conversion section

## 🛠 Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphic utilities
- **Animations**: Framer Motion for smooth interactions
- **UI Components**: Radix UI primitives with custom styling
- **Payments**: Stripe Checkout and Webhooks
- **Deployment**: Vercel-ready build configuration

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Stripe account with live API keys

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/benimisenti07-bot/Vanta..git
cd Vanta.
git checkout blackboxai-diy-irs-landing
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
Create `.env.local` with your Stripe keys:
```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51RpJ0uBBCpHvdxpQDCRakA3UR2tw2Xy8f8sgDZwhcAASIUXFouq9iMxopLjftJaZw5WRJXQFQ1JFYLqRsgcX0cD600GfiVdqOe
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET

# Business Configuration
BUSINESS_NAME="Old Saybrook IT Solutions LLC"
BUSINESS_EMAIL=support@diyirsrelief.com
NEXTAUTH_URL=https://yourdomain.com
```

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

Build for production:
```bash
pnpm build
pnpm start
```

## 🔧 Stripe Configuration

### Required Setup Steps

1. **Add Your Secret Key**: Replace `sk_live_YOUR_SECRET_KEY_HERE` in `.env.local`

2. **Configure Webhook Endpoint**:
   - URL: `https://yourdomain.com/api/stripe-webhook`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`

3. **Test Payment Flow**:
   - Use Stripe test cards for development
   - Test both success and failure scenarios

### Payment Products
- **Starter Package**: $49.00 one-time payment
- **Pro Package**: $149.00 one-time payment

## 📊 Business Information

### Old Saybrook IT Solutions LLC
- **Registration**: Connecticut LLC
- **Established**: 2024
- **Location**: Old Saybrook, CT
- **Services**: Tax document preparation and educational resources

## 🚀 Deployment

### Environment Variables Needed
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51RpJ0uBBCpHvdxpQDCRakA3UR2tw2Xy8f8sgDZwhcAASIUXFouq9iMxopLjftJaZw5WRJXQFQ1JFYLqRsgcX0cD600GfiVdqOe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Important Security Note
- Never commit your Stripe secret key to version control
- The publishable key is safe to include in client-side code
- Set up proper webhook signature verification

## 📞 Support

### Contact Information
- **Email**: support@diyirsrelief.com  
- **Business**: Old Saybrook IT Solutions LLC

---

**Built with ❤️ for legitimate tax relief education**