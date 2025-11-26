'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Zap, ArrowRight } from 'lucide-react';

export function PricingSection() {
    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#1F2937] to-[#0B0E14]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Un tarif simple et transparent
                    </h2>
                    <p className="text-xl" style={{ color: '#9CA3AF' }}>
                        Tout illimité pour 9,90€/mois. Sans engagement.
                    </p>
                </div>

                <div className="max-w-lg mx-auto">
                    <div className="glass-panel p-8 rounded-2xl border-2 hover:border-[#E11D48] transition-all" style={{ borderColor: '#E11D4833', backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
                        {/* Badge */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Zap className="w-5 h-5" style={{ color: '#E11D48' }} />
                            <span className="text-sm font-semibold" style={{ color: '#E11D48' }}>
                                OFFRE DE LANCEMENT
                            </span>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-6xl font-bold" style={{ color: '#E11D48' }}>9,90€</span>
                                <span className="text-2xl" style={{ color: '#9CA3AF' }}>/mois</span>
                            </div>
                            <p className="text-sm" style={{ color: '#9CA3AF' }}>
                                Sans engagement • Annulation à tout moment
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            {[
                                'Appels illimités 24/7',
                                'Assistant vocal IA avancé',
                                'Prise de rendez-vous automatique',
                                'Gestion des commandes',
                                'Tableau de bord complet',
                                'Support prioritaire',
                                'Mises à jour incluses',
                                'Sans frais cachés',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span style={{ color: '#F3F4F6' }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link href="/subscribe">
                            <Button
                                className="w-full py-6 text-lg font-semibold rounded-full hover:scale-105 transition-all"
                                style={{ backgroundColor: '#E11D48', color: '#F3F4F6' }}
                            >
                                Commencer maintenant
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>

                        {/* Trust badges */}
                        <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(243, 244, 246, 0.1)' }}>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: '#9CA3AF' }}>
                                <div className="flex items-center gap-2">
                                    <span style={{ color: '#22C55E' }}>🔒</span>
                                    Paiement sécurisé
                                </div>
                                <div className="flex items-center gap-2">
                                    <span style={{ color: '#22C55E' }}>✓</span>
                                    Conforme RGPD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
