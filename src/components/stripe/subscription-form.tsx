'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SubscriptionFormProps {
    onSuccess?: () => void;
}

export function SubscriptionForm({ onSuccess }: SubscriptionFormProps) {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const { error: submitError } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/subscribe/success`,
                },
            });

            if (submitError) {
                setError(submitError.message || 'Une erreur est survenue');
            } else {
                onSuccess?.();
            }
        } catch (err) {
            setError('Une erreur est survenue lors du paiement');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement />

            {error && (
                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)', borderColor: 'rgba(225, 29, 72, 0.3)' }}>
                    <p className="text-sm" style={{ color: '#E11D48' }}>{error}</p>
                </div>
            )}

            <Button
                type="submit"
                disabled={!stripe || isLoading}
                className="w-full py-6 text-lg font-semibold rounded-full"
                style={{ backgroundColor: '#E11D48', color: '#F3F4F6' }}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Traitement...
                    </>
                ) : (
                    'Souscrire maintenant'
                )}
            </Button>

            <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                En souscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
        </form>
    );
}
