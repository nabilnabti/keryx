import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-11-17.clover',
});

export async function POST(request: Request) {
    try {
        const { email, name } = await request.json();

        // Create a customer
        const customer = await stripe.customers.create({
            email,
            name,
        });

        // Create a subscription with the 9.90€ price
        // First, we need to create a product and price if they don't exist
        let price;

        try {
            // Try to find existing price
            const prices = await stripe.prices.list({
                limit: 100,
            });

            price = prices.data.find(p =>
                p.unit_amount === 990 &&
                p.currency === 'eur' &&
                p.recurring?.interval === 'month'
            );
        } catch (error) {
            console.error('Error finding price:', error);
        }

        // If price doesn't exist, create product and price
        if (!price) {
            const product = await stripe.products.create({
                name: 'KERYX Unlimited',
                description: 'Abonnement illimité KERYX - Assistant vocal IA',
            });

            price = await stripe.prices.create({
                product: product.id,
                unit_amount: 990, // 9.90€ in cents
                currency: 'eur',
                recurring: {
                    interval: 'month',
                },
            });
        }

        // Create subscription
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price: price.id }],
            payment_behavior: 'default_incomplete',
            payment_settings: { save_default_payment_method: 'on_subscription' },
            expand: ['latest_invoice.payment_intent'],
        });

        const invoice = subscription.latest_invoice as Stripe.Invoice;
        // @ts-ignore - payment_intent is expanded but not in type definition
        const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent | null;

        if (!paymentIntent || typeof paymentIntent === 'string') {
            throw new Error('Payment intent not found');
        }

        return Response.json({
            subscriptionId: subscription.id,
            clientSecret: paymentIntent.client_secret,
            customerId: customer.id,
        });
    } catch (error) {
        console.error('Error creating subscription:', error);
        return Response.json(
            { error: 'Failed to create subscription' },
            { status: 500 }
        );
    }
}
