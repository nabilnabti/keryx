import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-11-17.clover',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
    const body = await request.text();
    const signature = (await headers()).get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err);
        return Response.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'customer.subscription.created':
            const subscriptionCreated = event.data.object as Stripe.Subscription;
            console.log('Subscription created:', subscriptionCreated.id);
            // TODO: Update user subscription status in database
            break;

        case 'customer.subscription.updated':
            const subscriptionUpdated = event.data.object as Stripe.Subscription;
            console.log('Subscription updated:', subscriptionUpdated.id);
            // TODO: Update user subscription status in database
            break;

        case 'customer.subscription.deleted':
            const subscriptionDeleted = event.data.object as Stripe.Subscription;
            console.log('Subscription deleted:', subscriptionDeleted.id);
            // TODO: Update user subscription status in database
            break;

        case 'invoice.payment_succeeded':
            const invoice = event.data.object as Stripe.Invoice;
            console.log('Payment succeeded for invoice:', invoice.id);
            // TODO: Send confirmation email
            break;

        case 'invoice.payment_failed':
            const failedInvoice = event.data.object as Stripe.Invoice;
            console.log('Payment failed for invoice:', failedInvoice.id);
            // TODO: Send payment failure notification
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return Response.json({ received: true });
}
