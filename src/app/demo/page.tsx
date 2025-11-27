'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { VoiceCallModal } from '@/components/voice-call-modal';
import { Phone, Check, Zap } from 'lucide-react';

export default function DemoPage() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

    // 🔧 CONFIGURATION - Modifiez ces valeurs pour chaque client
    const DEMO_CONFIG = {
        // ID de l'agent Retell - À MODIFIER pour chaque client
        agentId: 'agent_aa89ef544fd0a04e13e6f6a301',

        // Informations du métier
        businessType: 'Restaurant',
        businessIcon: '🍕',

        // Couleurs du thème (format hex)
        primaryColor: '#E11D48',
        secondaryColor: '#F97316',

        // Titre et description
        title: 'Testez votre assistant vocal IA',
        subtitle: 'Découvrez comment KERYX peut transformer la gestion de vos appels',

        // Caractéristiques spécifiques au métier
        features: [
            'Prise de commandes automatique',
            'Réservations 24/7',
            'Réponses aux questions menu',
            'Gestion des allergies',
            'Confirmation par SMS',
        ]
    };

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#0B0E14' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <span className="text-6xl">{DEMO_CONFIG.businessIcon}</span>
                                <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#F3F4F6' }}>
                                    {DEMO_CONFIG.businessType}
                                </h1>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: DEMO_CONFIG.primaryColor }}>
                                {DEMO_CONFIG.title}
                            </h2>

                            <p className="text-xl" style={{ color: '#9CA3AF' }}>
                                {DEMO_CONFIG.subtitle}
                            </p>
                        </div>

                        {/* Demo Card */}
                        <div className="glass-panel p-8 md:p-12 rounded-2xl border-2 mb-12"
                            style={{ borderColor: `${DEMO_CONFIG.primaryColor}33`, backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>

                            {/* Status Badge */}
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }}></div>
                                <span className="text-sm font-semibold" style={{ color: '#22C55E' }}>
                                    Assistant disponible • Prêt à répondre
                                </span>
                            </div>

                            {/* Main CTA */}
                            <div className="text-center mb-8">
                                <Button
                                    size="lg"
                                    onClick={() => setIsCallModalOpen(true)}
                                    className="text-xl px-12 py-8 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                    style={{ backgroundColor: DEMO_CONFIG.primaryColor, color: '#F3F4F6' }}
                                >
                                    <Phone className="mr-3 w-6 h-6" />
                                    Lancer la démo vocale
                                </Button>

                                <p className="mt-4 text-sm" style={{ color: '#9CA3AF' }}>
                                    Cliquez pour parler avec l'assistant IA
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(243, 244, 246, 0.1)' }}>
                                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#F3F4F6' }}>
                                    Ce que l'assistant peut faire :
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {DEMO_CONFIG.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-green-400" />
                                            </div>
                                            <span style={{ color: '#F3F4F6' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="glass-panel p-6 rounded-xl border" style={{ borderColor: 'rgba(243, 244, 246, 0.1)', backgroundColor: 'rgba(31, 41, 55, 0.3)' }}>
                            <div className="flex items-start gap-3">
                                <Zap className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: DEMO_CONFIG.secondaryColor }} />
                                <div>
                                    <h4 className="font-semibold mb-2" style={{ color: '#F3F4F6' }}>
                                        Comment tester la démo ?
                                    </h4>
                                    <ol className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
                                        <li>1. Cliquez sur "Lancer la démo vocale"</li>
                                        <li>2. Autorisez l'accès au microphone si demandé</li>
                                        <li>3. Parlez naturellement avec l'assistant</li>
                                        <li>4. Testez différents scénarios (commande, réservation, questions...)</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="mt-8 p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                            <p className="text-sm" style={{ color: DEMO_CONFIG.secondaryColor }}>
                                💡 Cette démo utilise une IA entraînée spécifiquement pour votre secteur d'activité
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <VoiceCallModal
                isOpen={isCallModalOpen}
                onClose={() => setIsCallModalOpen(false)}
                agentId={DEMO_CONFIG.agentId}
                primaryColor={DEMO_CONFIG.primaryColor}
                secondaryColor={DEMO_CONFIG.secondaryColor}
            />
        </>
    );
}
