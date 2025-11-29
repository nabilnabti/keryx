'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { VoiceCallModal } from '@/components/voice-call-modal';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Phone, ArrowRight, Zap } from 'lucide-react';

export function FinalConversionCTA() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

    return (
        <div className="py-32 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-transparent to-[#8B5CF6]/20"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" style={{ backgroundColor: '#6366F1' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000" style={{ backgroundColor: '#8B5CF6' }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <ScrollAnimation animation="fade-in-up">
                        <div className="text-center mb-12">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border-2 border-[#22C55E]/30 mb-8">
                                <Zap className="w-5 h-5" style={{ color: '#22C55E' }} />
                                <span className="text-base font-semibold" style={{ color: '#22C55E' }}>
                                    Offre limitée : 30 jours d'essai gratuit
                                </span>
                            </div>

                            {/* Titre */}
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                                <span style={{ color: '#F3F4F6' }}>Prêt à transformer</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                                    vos appels en clients ?
                                </span>
                            </h2>

                            {/* Sous-titre */}
                            <p className="text-2xl mb-12 max-w-3xl mx-auto" style={{ color: '#D1D5DB' }}>
                                Rejoignez des centaines d'entreprises qui ont choisi KERYX pour ne plus jamais manquer une opportunité
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* CTAs */}
                    <ScrollAnimation animation="scale-in" delay={200}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                            <Button
                                size="lg"
                                onClick={() => setIsCallModalOpen(true)}
                                className="text-2xl px-16 py-10 rounded-full font-black shadow-2xl hover:scale-110 transition-all relative overflow-hidden group"
                                style={{
                                    background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                                    backgroundSize: '200% 200%',
                                    color: '#FFFFFF'
                                }}
                            >
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                <Phone className="mr-3 w-8 h-8 relative z-10" />
                                <span className="relative z-10">Démarrer Maintenant</span>
                            </Button>

                            <a href="#industries">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-xl px-12 py-8 rounded-full font-bold glass-panel border-2 hover:scale-105 transition-all"
                                    style={{
                                        borderColor: '#8B5CF6',
                                        color: '#8B5CF6'
                                    }}
                                >
                                    Voir pour mon métier
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </a>
                        </div>
                    </ScrollAnimation>

                    {/* Garanties */}
                    <ScrollAnimation animation="fade-in" delay={400}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { icon: '🚀', title: 'Installation rapide', desc: 'Opérationnel en 24h' },
                                { icon: '💰', title: 'Sans risque', desc: '30 jours satisfait ou remboursé' },
                                { icon: '🎯', title: 'Support dédié', desc: 'Équipe disponible 7j/7' }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#6366F1]/40 transition-all">
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <div className="text-lg font-bold mb-2" style={{ color: '#F3F4F6' }}>
                                        {item.title}
                                    </div>
                                    <div className="text-sm" style={{ color: '#9CA3AF' }}>
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>

                    {/* Urgence */}
                    <ScrollAnimation animation="fade-in-up" delay={600}>
                        <div className="mt-16 text-center">
                            <p className="text-lg font-semibold mb-2" style={{ color: '#F59E0B' }}>
                                ⚡ Plus que 5 places disponibles ce mois-ci
                            </p>
                            <p className="text-sm" style={{ color: '#9CA3AF' }}>
                                Ne laissez pas vos concurrents prendre l'avantage
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Voice Call Modal */}
            <VoiceCallModal
                isOpen={isCallModalOpen}
                onClose={() => setIsCallModalOpen(false)}
                agentId="agent_aa89ef544fd0a04e13e6f6a301"
                primaryColor="#6366F1"
                secondaryColor="#8B5CF6"
            />
        </div>
    );
}
