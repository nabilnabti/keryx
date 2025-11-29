'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useState } from 'react';
import { VoiceCallModal } from '@/components/voice-call-modal';

export function LiveDemoSection() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

    const orders = [
        {
            time: "À l'instant",
            type: "Réservation",
            emoji: "📅",
            detail: "2 personnes – 19:30",
            color: "#22C55E"
        },
        {
            time: "Il y a 2 min",
            type: "Commande à emporter",
            emoji: "🍕",
            detail: "Pizza Reine – 20:00",
            color: "#F97316"
        },
        {
            time: "Il y a 5 min",
            type: "Réservation",
            emoji: "📅",
            detail: "4 personnes – 21:00",
            color: "#22C55E"
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Voyez KERYX en action
                    </h2>
                    <p className=" text-xl" style={{ color: '#9CA3AF' }}>
                        Voici ce que votre assistant IA traite en temps réel
                    </p>
                </div>

                {/* Live Orders Carousel */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="glass-panel p-8 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#E11D48' }}></div>
                            <span className="font-semibold" style={{ color: '#F3F4F6' }}>
                                Commandes en direct
                            </span>
                        </div>

                        <div className="space-y-4">
                            {orders.map((order, index) => (
                                <div
                                    key={index}
                                    className="glass-panel p-4 rounded-xl border hover:border-white/20 transition-all"
                                    style={{ borderColor: `${order.color}20` }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl">{order.emoji}</span>
                                            <div>
                                                <p className="font-semibold" style={{ color: '#F3F4F6' }}>
                                                    {order.type}
                                                </p>
                                                <p style={{ color: order.color }}>
                                                    {order.detail}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-sm" style={{ color: '#9CA3AF' }}>
                                            {order.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button
                        size="lg"
                        onClick={() => setIsCallModalOpen(true)}
                        className="text-lg px-10 py-7 rounded-full font-bold hover:scale-105 transition-all"
                        style={{
                            backgroundColor: '#F97316',
                            color: '#F3F4F6'
                        }}
                    >
                        <Phone className="mr-2 w-5 h-5" />
                        Écouter un appel IA
                    </Button>
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
