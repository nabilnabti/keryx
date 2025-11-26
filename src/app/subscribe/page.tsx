'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Navigation } from '@/components/navigation';
import { SubscriptionForm } from '@/components/stripe/subscription-form';
import { Check, Zap } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function SubscribePage() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Create subscription on mount
        const createSubscription = async () => {
            try {
                const response = await fetch('/api/stripe/create-subscription', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: 'user@example.com', // TODO: Get from auth
                        name: 'User Name', // TODO: Get from auth
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to create subscription');
                }

                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (err) {
                setError('Impossible de charger le formulaire de paiement');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        createSubscription();
    }, []);

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#0B0E14' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                Rejoignez <span style={{ color: '#E11D48' }}>KERYX</span>
                            </h1>
                            <p className="text-xl" style={{ color: '#9CA3AF' }}>
                                Automatisez vos appels avec l'IA
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Pricing Card */}
                            <div className="glass-panel p-8 rounded-2xl border-2" style={{ borderColor: '#E11D4833', backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap className="w-6 h-6" style={{ color: '#E11D48' }} />
                                    <h2 className="text-2xl font-bold" style={{ color: '#F3F4F6' }}>
                                        Plan Illimité
                                    </h2>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold" style={{ color: '#E11D48' }}>9,90€</span>
                                        <span className="text-xl" style={{ color: '#9CA3AF' }}>/mois</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {[
                                        'Appels illimités 24/7',
                                        'Assistant vocal IA',
                                        'Prise de rendez-vous automatique',
                                        'Gestion des commandes',
                                        'Tableau de bord complet',
                                        'Support prioritaire',
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-green-400" />
                                            </div>
                                            <span style={{ color: '#F3F4F6' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                                    <p className="text-sm" style={{ color: '#F97316' }}>
                                        ✨ Sans engagement • Annulation à tout moment
                                    </p>
                                </div>
                            </div>

                            {/* Payment Form */}
                            <div className="glass-panel p-8 rounded-2xl border" style={{ borderColor: 'rgba(243, 244, 246, 0.1)', backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
                                <h3 className="text-2xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                    Informations de paiement
                                </h3>

                                {isLoading && (
                                    <div className="flex items-center justify-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#E11D48' }}></div>
                                    </div>
                                )}

                                {error && (
                                    <div className="p-4 rounded-lg border mb-6" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)', borderColor: 'rgba(225, 29, 72, 0.3)' }}>
                                        <p className="text-sm" style={{ color: '#E11D48' }}>{error}</p>
                                    </div>
                                )}

                                {clientSecret && !isLoading && (
                                    <Elements
                                        stripe={stripePromise}
                                        options={{
                                            clientSecret,
                                            appearance: {
                                                theme: 'night',
                                                variables: {
                                                    colorPrimary: '#E11D48',
                                                    colorBackground: '#1F2937',
                                                    colorText: '#F3F4F6',
                                                    colorDanger: '#E11D48',
                                                    fontFamily: 'system-ui, sans-serif',
                                                    borderRadius: '12px',
                                                },
                                            },
                                        }}
                                    >
                                        <SubscriptionForm />
                                    </Elements>
                                )}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 text-center">
                            <div className="flex flex-wrap items-center justify-center gap-8 text-sm" style={{ color: '#9CA3AF' }}>
                                <div className="flex items-center gap-2">
                                    <span style={{ color: '#22C55E' }}>🔒</span>
                                    Paiement sécurisé
                                </div>
                                <div className="flex items-center gap-2">
                                    <span style={{ color: '#22C55E' }}>✓</span>
                                    Données cryptées
                                </div>
                                <div className="flex items-center gap-2">
                                    <span style={{ color: '#22C55E' }}>✓</span>
                                    Conforme RGPD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
