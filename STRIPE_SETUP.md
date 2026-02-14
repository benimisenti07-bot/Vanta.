# 🎯 Stripe Integration Setup Guide

## Overview
This guide will help you set up the complete Stripe integration for the DIY IRS Relief Playbook landing page, enabling secure payment processing for both Starter ($49) and Pro ($149) packages.

## 🔑 Required Information

### You Have:
- **Publishable Key**: `pk_live_51RpJ0uBBCpHvdxpQDCRakA3UR2tw2Xy8f8sgDZwhcAASIUXFouq9iMxopLjFYLqRsgcX0cD600GfiVdqOe` ✅

### Still Need:
1. **Secret Key**: `sk_live_...` (Found in Stripe Dashboard → Developers → API keys)
2. **Webhook Secret**: `whsec_...` (Created when setting up webhook endpoint)

## 🛠️ Setup Steps

### Step 1: Environment Variables
Create/update `.env.local` file:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51RpJ0uBBCpHvdxpQDCRakA3UR2tw2Xy8f8sgDZwhcAASIUXFouq9iMxopLjFYLqRsgcX0cD600GfiVdqOe
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Application Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Step 2: Stripe Dashboard Configuration

#### A. Get Secret Key
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **API keys**
3. Reveal and copy your **Live Secret Key** (starts with `sk_live_`)
4. Add to `.env.local` as `STRIPE_SECRET_KEY`

#### B. Set Up Webhook
1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Set **Endpoint URL**: `https://your-domain.com/api/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add to `.env.local` as `STRIPE_WEBHOOK_SECRET`

### Step 3: Test the Integration

#### Test Mode (Recommended First)
1. Use test keys instead of live keys initially
2. Test publishable key: `pk_test_...`
3. Test secret key: `sk_test_...`

#### Test Cards
- Success: `4242 4242 4242 4242`
- Declined: `4000 0000 0000 0002`
- Authentication: `4000 0025 0000 3155`

## 🏗️ What's Already Implemented

### ✅ Frontend Components
- **Pricing Section**: Integrated with Stripe checkout buttons
- **Success Page**: Complete purchase confirmation with download links
- **Loading States**: Button loading indicators during checkout
- **Error Handling**: User-friendly error messages

### ✅ Backend API Routes
- **`/api/create-checkout-session`**: Creates Stripe checkout sessions
- **`/api/webhook`**: Handles post-purchase events
- **Success/Cancel URLs**: Proper redirect handling

### ✅ Security Features
- **Bank-level encryption**: 256-bit SSL through Stripe
- **PCI Compliance**: Handled by Stripe (no card data touches your server)
- **Webhook verification**: Signature validation for security
- **Environment variables**: Sensitive keys properly isolated

## 📦 Product Configuration

### Starter Package ($49)
- Product ID: `starter`
- Price: $4900 (cents)
- Features: PDF guide, basics, email support
- Support: 30 days

### Pro Package ($149)
- Product ID: `pro`
- Price: $14900 (cents)
- Features: Everything + templates, calculator, priority support
- Support: 60 days

## 🎨 User Experience Flow

1. **Customer clicks "Get Starter/Pro"** → Loading indicator shows
2. **API creates checkout session** → Redirects to Stripe Checkout
3. **Customer enters payment info** → Stripe handles all payment processing
4. **Payment succeeds** → Redirects to `/success` page
5. **Webhook processes purchase** → Could trigger email, database updates
6. **Customer downloads materials** → Immediate access to files

## 🔧 Customization Options

### Modify Products
Edit `src/lib/stripe.ts` to change:
- Prices
- Product descriptions
- Feature lists
- Product IDs

### Customize Checkout
Modify `src/app/api/create-checkout-session/route.ts`:
- Add coupon codes
- Enable tax calculation
- Collect additional customer info
- Set custom success/cancel URLs

### Post-Purchase Actions
Update `src/app/api/webhook/route.ts`:
- Send email confirmations
- Save to database
- Integrate with CRM
- Grant access to protected content

## 🚨 Security Best Practices

### Environment Variables
- Never commit `.env.local` to git
- Use different keys for development/production
- Rotate keys periodically

### Webhook Security
- Always verify webhook signatures
- Use HTTPS endpoints only
- Implement proper error handling

### Customer Data
- Stripe handles all payment data
- Your server only receives necessary metadata
- Comply with data protection regulations

## 📈 Going Live Checklist

### Before Launch:
- [ ] Replace test keys with live keys
- [ ] Set up production webhook endpoint
- [ ] Test end-to-end payment flow
- [ ] Configure email notifications
- [ ] Set up monitoring and alerts
- [ ] Verify tax settings if applicable

### After Launch:
- [ ] Monitor Stripe dashboard for transactions
- [ ] Set up automated reconciliation
- [ ] Configure dispute handling
- [ ] Implement subscription management (if needed)

## 🆘 Troubleshooting

### Common Issues:
1. **"No such customer"**: Check webhook configuration
2. **"Invalid API key"**: Verify environment variables
3. **Payment fails**: Check test card numbers
4. **Webhook not firing**: Verify endpoint URL and events selected

### Debug Steps:
1. Check browser console for errors
2. Verify API response in Network tab
3. Check Stripe dashboard event logs
4. Review server logs for webhook processing

## 📧 Support
For integration issues:
- **Stripe Documentation**: https://stripe.com/docs
- **Stripe Support**: Available in dashboard
- **Application Support**: support@diyirsrelief.com

---

This integration provides a complete, secure, and professional checkout experience for your DIY IRS Relief Playbook customers! 🎉