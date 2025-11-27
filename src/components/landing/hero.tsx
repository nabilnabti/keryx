'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VoiceCallModal } from '@/components/voice-call-modal';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/10 via-[#0B0E14] to-[#F97316]/10"></div>

            {/* Animated blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" style={{ backgroundColor: '#E11D48' }}></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#F97316' }}></div>
            </div>

            {/* Floating Kitchen Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-20 left-10 text-6xl animate-float">🍕</div>
                <div className="absolute top-40 right-20 text-5xl animate-float animation-delay-2000">🍔</div>
                <div className="absolute bottom-40 left-1/4 text-7xl animate-float animation-delay-4000">🍝</div>
                <div className="absolute top-1/3 right-1/3 text-4xl animate-float">🍟</div>
                <div className="absolute bottom-1/4 right-10 text-6xl animate-float animation-delay-2000">🥗</div>
                <div className="absolute top-1/2 left-20 text-5xl animate-float animation-delay-4000">🍱</div>
                <div className="absolute bottom-20 left-1/3 text-4xl animate-float">🌮</div>
                <div className="absolute top-1/4 right-1/4 text-5xl animate-float animation-delay-2000">🥙</div>
            </div>

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Trust badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }}></div>
                        <span className="text-sm" style={{ color: '#F3F4F6' }}>
                            Disponible 24/7 • Installation rapide • Zéro appel manqué
                        </span>
                    </div>

                    {/* H1 */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: '#F3F4F6' }}>
                        Vous perdez des commandes{' '}
                        <span style={{ color: '#E11D48' }}>tous les jours</span>.
                        <br />
                        Votre assistant IA répond à vos clients{' '}
                        <span style={{ color: '#F97316' }}>à votre place</span>.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#9CA3AF' }}>
                        Un assistant vocal intelligent prend vos <span style={{ color: '#F3F4F6' }}>commandes téléphoniques</span> et vos <span style={{ color: '#F3F4F6' }}>réservations de table 24/7</span>, sans jamais laisser un client attendre.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                style={{
                                    backgroundColor: '#E11D48',
                                    color: '#F3F4F6'
                                }}
                            >
                                Réserver une démonstration
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setIsCallModalOpen(true)}
                            className="text-lg px-10 py-7 rounded-full font-bold glass-panel border-2 hover:scale-105 transition-all"
                            style={{
                                borderColor: '#F97316',
                                color: '#F97316'
                            }}
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Écouter une démo IA
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm" style={{ color: '#9CA3AF' }}>
                        <div className="flex items-center gap-2">
                            <span style={{ color: '#22C55E' }}>✓</span>
                            Sans engagement
                        </div>
                        <div className="flex items-center gap-2">
                            <span style={{ color: '#22C55E' }}>✓</span>
                            Support 7j/7
                        </div>
                        <div className="flex items-center gap-2">
                            <span style={{ color: '#22C55E' }}>✓</span>
                            Installation rapide
                        </div>
                    </div>
                </div>
            </div>

            {/* Voice Call Modal */}
            <VoiceCallModal
                isOpen={isCallModalOpen}
                onClose={() => setIsCallModalOpen(false)}
                agentId="agent_d9fedec7822156df18878e4951"
            />
        </div>
    );
}
