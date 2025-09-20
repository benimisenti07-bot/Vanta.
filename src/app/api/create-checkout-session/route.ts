import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { products, ProductId } from '@/lib/stripe'

// Initialize Stripe with your secret key
const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || 'sk_live_your_secret_key_here'
)

export async function POST(request: NextRequest) {
  try {
    const { productId }: { productId: ProductId } = await request.json()

    if (!productId || !products[productId]) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      )
    }

    const product = products[productId]
    const origin = request.headers.get('origin') || 'http://localhost:3000'

    // Create Checkout Sessions
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: product.currency,
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
      cancel_url: `${origin}/#pricing`,
      automatic_tax: {
        enabled: true,
      },
      billing_address_collection: 'required',
      customer_creation: 'always',
      payment_intent_data: {
        metadata: {
          product_id: productId,
          product_name: product.name,
          business: 'Old Saybrook IT Solutions LLC',
        },
      },
      metadata: {
        product_id: productId,
        product_name: product.name,
        business: 'Old Saybrook IT Solutions LLC',
      },
      payment_method_types: ['card'],
      phone_number_collection: {
        enabled: true,
      },
    })

    if (!session.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json(
      { error: err?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}