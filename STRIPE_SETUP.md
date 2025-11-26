# Stripe Payment Integration - Documentation

## Configuration

### 1. Environment Variables

Add the following to your `.env.local` file:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET
```

**Important:** You need to get your publishable key from your Stripe dashboard:
1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy the "Publishable key" (starts with `pk_test_`)
3. Add it to your `.env.local`

### 2. Webhook Setup

To receive subscription events:

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Run: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
3. Copy the webhook signing secret (starts with `whsec_`)
4. Add it to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

For production:
1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events: `customer.subscription.*`, `invoice.payment_*`
4. Copy the signing secret to your production environment

## Usage

### Subscription Flow

1. **User visits pricing page**: `/` or any landing page with `<PricingSection />`
2. **Clicks "Commencer maintenant"**: Redirects to `/subscribe`
3. **Subscription page**:
   - Automatically creates Stripe customer and subscription
   - Displays embedded payment form
   - User enters card details
4. **Payment confirmation**: Redirects to `/subscribe/success`

### Test Cards

Use these test cards in development:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0027 6000 3184`

Any future expiry date and any 3-digit CVC.

## Files Created

### API Routes
- `/api/stripe/create-subscription` - Creates customer and subscription
- `/api/stripe/webhook` - Handles Stripe events

### Pages
- `/subscribe` - Subscription page with payment form
- `/subscribe/success` - Success page after payment

### Components
- `/components/stripe/subscription-form.tsx` - Payment form with Stripe Elements
- `/components/pricing-section.tsx` - Pricing display for landing pages

## Pricing

- **Amount**: 9.90€/month
- **Product**: KERYX Unlimited
- **Features**: Unlimited calls, AI assistant, automatic scheduling, etc.

## Next Steps

1. Get your Stripe publishable key and add to `.env.local`
2. Set up webhook (development or production)
3. Test the payment flow with test cards
4. Integrate `<PricingSection />` into your landing pages
5. Connect subscription status to user authentication/database

## Production Checklist

- [ ] Replace test keys with live keys
- [ ] Set up production webhook endpoint
- [ ] Test with real card (small amount)
- [ ] Set up email notifications for successful/failed payments
- [ ] Implement subscription status in database
- [ ] Add subscription management page (cancel, update card, etc.)
