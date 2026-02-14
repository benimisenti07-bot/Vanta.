import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json()
    
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    // Get Stripe secret key
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    // Initialize Stripe
    const stripe = require('stripe')(stripeSecretKey)

    // Product configurations
    const products = {
      starter: {
        name: 'DIY IRS Relief Playbook - Starter',
        price: 4900, // $49.00 in cents
        description: 'Complete 89-page PDF guide with installment agreements, OIC basics, phone scripts, and email support.'
      },
      pro: {
        name: 'DIY IRS Relief Playbook - Pro',
        price: 14900, // $149.00 in cents
        description: 'Complete package with PDF guide, templates, calculator, advanced strategies, and priority support.'
      }
    }

    const product = products[productId as keyof typeof products]
    if (!product) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
    }

    // Get the domain for success/cancel URLs
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    console.log('Creating Stripe session for:', productId, 'Origin:', origin)

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&product=${productId}`,
      cancel_url: `${origin}/?canceled=true`,
      billing_address_collection: 'required',
      customer_creation: 'always',
      metadata: {
        product_id: productId,
        product_name: product.name,
        business: 'Old Saybrook IT Solutions LLC',
      },
    })

    console.log('Stripe session created:', session.id, 'URL:', session.url)

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })

  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ 
      error: error.message || 'Payment processing failed' 
    }, { status: 500 })
  }
}