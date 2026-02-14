import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || 'sk_live_your_secret_key_here'
)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session
      
      console.log('Payment successful for session:', session.id)
      console.log('Customer email:', session.customer_details?.email)
      console.log('Product:', session.metadata?.product_id)
      
      await sendConfirmationEmail(session)
      
      break
      
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log('PaymentIntent succeeded:', paymentIntent.id)
      break
      
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

async function sendConfirmationEmail(session: Stripe.Checkout.Session) {
  const customerEmail = session.customer_details?.email
  const productId = session.metadata?.product_id
  
  if (!customerEmail || !productId) {
    console.error('Missing customer email or product ID')
    return
  }
  
  const emailData = {
    to: customerEmail,
    subject: 'Your DIY IRS Relief Playbook - Download Links',
    html: `
      <h2>Thank you for your purchase!</h2>
      <p>Your DIY IRS Relief materials are ready for download:</p>
      <ul>
        <li><a href="${process.env.NEXTAUTH_URL}/downloads/diy-irs-relief-playbook.pdf">DIY IRS Relief Playbook (PDF)</a></li>
        ${productId === 'pro' ? `
        <li><a href="${process.env.NEXTAUTH_URL}/downloads/letter-templates.pdf">Letter Templates (PDF)</a></li>
        <li><a href="${process.env.NEXTAUTH_URL}/downloads/eligibility-calculator.xlsx">Eligibility Calculator (Excel)</a></li>
        <li><a href="${process.env.NEXTAUTH_URL}/downloads/bonus-currently-not-collectible.pdf">Bonus Guide (PDF)</a></li>
        ` : ''}
      </ul>
      <p>Need help? Contact us at support@diyirsrelief.com</p>
      <p>Old Saybrook IT Solutions LLC</p>
    `
  }
  
  console.log('Would send email to:', customerEmail, 'with data:', emailData)
}