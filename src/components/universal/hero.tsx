'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { VoiceCallModal } from '@/components/voice-call-modal';
import { ArrowRight, Phone, Sparkles, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ConversionHero() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const router = useRouter();

    const industries = [
        { id: 'restaurant', icon: '🍕', name: 'Restaurant', color: '#E11D48', route: '/industries/restaurant' },
        { id: 'medecin', icon: '🩺', name: 'Santé', color: '#3B82F6', route: '/industries/medecin' },
        { id: 'plombier', icon: '🔧', name: 'Services', color: '#06B6D4', route: '/industries/plombier' },
        { id: 'garagiste', icon: '🚗', name: 'Auto', color: '#F97316', route: '/industries/garagiste' },
        { id: 'coiffeur', icon: '✂️', name: 'Beauté', color: '#EC4899', route: '/industries/coiffeur' },
        { id: 'immobilier', icon: '🏠', name: 'Immobilier', color: '#10B981', route: '/industries/agent-immobilier' },
    ];

    const handleIndustrySelect = (industry: typeof industries[0]) => {
        setSelectedIndustry(industry.id);
        // Animation puis redirection
        setTimeout(() => {
            router.push(industry.route);
        }, 300);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            {/* Gradient background animé */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#0B0E14] to-[#8B5CF6]/20 animate-pulse-slow"></div>
            </div>

            {/* Animated blobs plus grands */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob" style={{ backgroundColor: '#6366F1' }}></div>
                <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000" style={{ backgroundColor: '#8B5CF6' }}></div>
                <div className="absolute -bottom-40 left-1/2 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: '#EC4899' }}></div>
            </div>

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Badge animé */}
                    <div className="flex justify-center mb-8 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border-2 border-[#6366F1]/30 hover:border-[#6366F1]/60 transition-all">
                            <Sparkles className="w-5 h-5 animate-pulse" style={{ color: '#6366F1' }} />
                            <span className="text-base font-semibold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                                IA Vocale Nouvelle Génération
                            </span>
                        </div>
                    </div>

                    {/* Titre principal ÉNORME */}
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-center animate-fade-in-up animation-delay-100">
                        <span style={{ color: '#F3F4F6' }}>Ne perdez plus</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent animate-gradient-x">
                            un seul appel
                        </span>
                    </h1>

                    {/* Sous-titre impactant */}
                    <p className="text-2xl md:text-3xl mb-12 text-center font-medium animate-fade-in-up animation-delay-200" style={{ color: '#D1D5DB' }}>
                        Votre assistant IA répond <span className="font-bold" style={{ color: '#F3F4F6' }}>24/7</span>, prend des rendez-vous et{' '}
                        <span className="font-bold bg-gradient-to-r from-[#22C55E] to-[#10B981] bg-clip-text text-transparent">
                            convertit vos appels en clients
                        </span>
                    </p>

                    {/* CTA Principal - DÉMO IMMÉDIATE */}
                    <div className="flex flex-col items-center gap-6 mb-16 animate-fade-in-up animation-delay-300">
                        <Button
                            size="lg"
                            onClick={() => setIsCallModalOpen(true)}
                            className="text-2xl px-16 py-10 rounded-full font-black shadow-2xl hover:scale-110 transition-all relative overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                                backgroundSize: '200% 200%',
                                animation: 'gradient 3s ease infinite',
                                color: '#FFFFFF'
                            }}
                        >
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            <Phone className="mr-3 w-8 h-8 relative z-10 animate-pulse" />
                            <span className="relative z-10">Écouter la Démo IA Maintenant</span>
                        </Button>

                        <p className="text-sm flex items-center gap-2" style={{ color: '#9CA3AF' }}>
                            <Check className="w-4 h-4" style={{ color: '#22C55E' }} />
                            Gratuit • Sans engagement • Réponse immédiate
                        </p>
                    </div>

                    {/* Sélecteur de métier interactif */}
                    <div className="animate-fade-in-up animation-delay-400">
                        <p className="text-center text-lg mb-6 font-semibold" style={{ color: '#F3F4F6' }}>
                            Ou découvrez KERYX pour votre métier :
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                            {industries.map((industry, index) => (
                                <button
                                    key={industry.id}
                                    onClick={() => handleIndustrySelect(industry)}
                                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${selectedIndustry === industry.id ? 'scale-110 -translate-y-2' : ''
                                        }`}
                                    style={{
                                        backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                        borderColor: selectedIndustry === industry.id ? industry.color : 'rgba(255, 255, 255, 0.1)',
                                        boxShadow: selectedIndustry === industry.id ? `0 20px 60px ${industry.color}40` : 'none',
                                        animationDelay: `${index * 50}ms`
                                    }}
                                >
                                    {/* Glow effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                                        style={{ backgroundColor: `${industry.color}30` }}
                                    ></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center gap-3">
                                        <span className="text-5xl transform group-hover:scale-125 transition-transform">
                                            {industry.icon}
                                        </span>
                                        <span className="text-sm font-bold text-center" style={{ color: '#F3F4F6' }}>
                                            {industry.name}
                                        </span>
                                        <ArrowRight
                                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ color: industry.color }}
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stats impressionnantes */}
                    <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-500">
                        {[
                            { number: '24/7', label: 'Disponibilité' },
                            { number: '0', label: 'Appels Manqués' },
                            { number: '+40%', label: 'Conversions' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-sm font-medium" style={{ color: '#9CA3AF' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
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

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                .animate-gradient-x {
                    background-size: 200% auto;
                    animation: gradient-x 3s linear infinite;
                }
            `}</style>
        </div>
    );
}
