'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SubscribeSuccessPage() {
    const router = useRouter();

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-20 flex items-center justify-center" style={{ backgroundColor: '#0B0E14' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Success Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="w-12 h-12 text-green-400" />
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                            Bienvenue chez <span style={{ color: '#E11D48' }}>KERYX</span> !
                        </h1>

                        <p className="text-xl mb-8" style={{ color: '#9CA3AF' }}>
                            Votre abonnement a été activé avec succès. Vous pouvez maintenant profiter de tous les avantages de KERYX.
                        </p>

                        {/* Next Steps */}
                        <div className="glass-panel p-8 rounded-2xl border mb-8" style={{ borderColor: 'rgba(243, 244, 246, 0.1)', backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
                            <h2 className="text-2xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                Prochaines étapes
                            </h2>
                            <div className="space-y-4 text-left">
                                {[
                                    'Configurez votre assistant vocal dans le tableau de bord',
                                    'Personnalisez vos réponses automatiques',
                                    'Testez votre assistant avec une démo',
                                    'Commencez à recevoir des appels 24/7',
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E11D4833', color: '#E11D48' }}>
                                            {index + 1}
                                        </div>
                                        <p className="pt-1" style={{ color: '#F3F4F6' }}>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <Button
                            onClick={() => router.push('/dashboard')}
                            className="px-12 py-6 text-lg font-semibold rounded-full"
                            style={{ backgroundColor: '#E11D48', color: '#F3F4F6' }}
                        >
                            Accéder au tableau de bord
                        </Button>

                        <p className="mt-6 text-sm" style={{ color: '#9CA3AF' }}>
                            Un email de confirmation a été envoyé à votre adresse.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
