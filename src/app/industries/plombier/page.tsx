'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { VoiceCallModal } from '@/components/voice-call-modal';
import { ArrowRight, Phone, Clock, Users, Ban, TrendingDown, AlertCircle, X, Check } from 'lucide-react';

export default function PlombierPage() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

    return (
        <>
            <Navigation />
            <main className="min-h-screen" style={{ backgroundColor: '#0B0E14' }}>
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 via-[#0B0E14] to-[#22D3EE]/10"></div>

                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" style={{ backgroundColor: '#06B6D4' }}></div>
                        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#22D3EE' }}></div>
                    </div>

                    {/* Floating Plumber Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                        <div className="absolute top-20 left-10 text-6xl animate-float">🔧</div>
                        <div className="absolute top-40 right-20 text-5xl animate-float animation-delay-2000">🚰</div>
                        <div className="absolute bottom-40 left-1/4 text-7xl animate-float animation-delay-4000">🛠️</div>
                        <div className="absolute top-1/3 right-1/3 text-4xl animate-float">💧</div>
                        <div className="absolute bottom-1/4 right-10 text-6xl animate-float animation-delay-2000">🔩</div>
                        <div className="absolute top-1/2 left-20 text-5xl animate-float animation-delay-4000">🪠</div>
                        <div className="absolute bottom-20 left-1/3 text-4xl animate-float">⚙️</div>
                        <div className="absolute top-1/4 right-1/4 text-5xl animate-float animation-delay-2000">🚿</div>
                    </div>

                    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8">
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }}></div>
                                <span className="text-sm" style={{ color: '#F3F4F6' }}>
                                    Disponible 24/7 • Urgences prises en charge immédiatement
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: '#F3F4F6' }}>
                                Ne manquez plus{' '}
                                <span style={{ color: '#06B6D4' }}>aucune urgence</span>
                                <br />
                                Avec votre assistant{' '}
                                <span style={{ color: '#22D3EE' }}>plomberie IA</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#9CA3AF' }}>
                                Un assistant vocal intelligent gère vos <span style={{ color: '#F3F4F6' }}>appels d'urgence</span>, prend des <span style={{ color: '#F3F4F6' }}>rendez-vous 24/7</span> et qualifie les interventions pendant que vous travaillez.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        className="text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                        style={{ backgroundColor: '#06B6D4', color: '#F3F4F6' }}
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
                                    style={{ borderColor: '#22D3EE', color: '#22D3EE' }}
                                >
                                    <Phone className="mr-2 w-5 h-5" />
                                    Écouter une démo IA
                                </Button>
                            </div>

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

                    <VoiceCallModal
                        isOpen={isCallModalOpen}
                        onClose={() => setIsCallModalOpen(false)}
                        agentId="agent_5adc766d49221508c2cb0e5c1e"
                        primaryColor="#06B6D4"
                        secondaryColor="#22D3EE"
                    />
                </div>

                {/* Problems Section */}
                <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#1F2937] to-[#0B0E14]"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                Les défis quotidiens des plombiers
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                            {[
                                { icon: Phone, title: "Téléphone qui sonne en pleine intervention" },
                                { icon: Ban, title: "Urgences manquées = clients perdus" },
                                { icon: AlertCircle, title: "Difficulté à qualifier les urgences" },
                                { icon: Clock, title: "Temps perdu à répondre au téléphone" },
                                { icon: Users, title: "Clients impatients qui raccrochent" },
                                { icon: TrendingDown, title: "Interventions non plannifiées" }
                            ].map((problem, index) => {
                                const Icon = problem.icon;
                                return (
                                    <div
                                        key={index}
                                        className="glass-panel p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:border-red-500/40 transition-all group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-all">
                                                <Icon className="w-6 h-6 text-red-400" />
                                            </div>
                                            <p className="text-lg font-medium" style={{ color: '#F3F4F6' }}>
                                                {problem.title}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center">
                            <a href="#solution">
                                <Button
                                    size="lg"
                                    className="text-lg px-8 py-6 rounded-full font-semibold"
                                    style={{ backgroundColor: '#06B6D4', color: '#F3F4F6' }}
                                >
                                    Voir la solution
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Before/After */}
                <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="relative p-8 rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent">
                                <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#06B6D4', color: '#F3F4F6' }}>
                                    AVANT
                                </div>
                                <h3 className="text-3xl font-bold mb-8 mt-4" style={{ color: '#06B6D4' }}>
                                    Sans KERYX
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Urgences manquées pendant les chantiers",
                                        "Clients mécontents",
                                        "Planning désorganisé",
                                        "Stress constant du téléphone",
                                        "Perte de revenus"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <X className="w-4 h-4 text-red-400" />
                                            </div>
                                            <p className="text-lg" style={{ color: '#F3F4F6' }}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative p-8 rounded-2xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent">
                                <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#22C55E', color: '#0B0E14' }}>
                                    APRÈS
                                </div>
                                <h3 className="text-3xl font-bold mb-8 mt-4" style={{ color: '#22C55E' }}>
                                    Avec KERYX
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Toutes les urgences prises même la nuit",
                                        "Clients rassurés et fidèles",
                                        "Planning optimisé automatiquement",
                                        "Concentration sur les interventions",
                                        "Plus de chantiers, plus de revenus"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Check className="w-4 h-4 text-green-400" />
                                            </div>
                                            <p className="text-lg" style={{ color: '#F3F4F6' }}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                Ils nous font confiance
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    quote: "KERYX prend mes urgences même quand je suis sous un évier. Un vrai soulagement !",
                                    author: "Jean-Marc Plomberie",
                                    location: "Toulouse"
                                },
                                {
                                    quote: "Plus aucun appel manqué. Mon chiffre d'affaires a augmenté de 30% en 6 mois.",
                                    author: "Dupont Services",
                                    location: "Bordeaux"
                                },
                                {
                                    quote: "L'assistant qualifie les urgences. Je sais exactement quoi apporter avant de partir.",
                                    author: "SOS Plombier 24/7",
                                    location: "Lille"
                                }
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all"
                                >
                                    <div className="mb-6">
                                        <svg className="w-10 h-10" style={{ color: '#22D3EE' }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg mb-6 italic" style={{ color: '#F3F4F6' }}>
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-bold" style={{ color: '#22D3EE' }}>
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm" style={{ color: '#9CA3AF' }}>
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4]/20 via-[#22D3EE]/20 to-[#06B6D4]/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#F3F4F6' }}>
                                Ne perdez plus{' '}
                                <span style={{ color: '#06B6D4' }}>une seule urgence</span>
                            </h2>

                            <p className="text-2xl mb-12" style={{ color: '#9CA3AF' }}>
                                Rejoignez des centaines de plombiers qui ont choisi KERYX
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        className="text-xl px-12 py-8 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                        style={{ backgroundColor: '#06B6D4', color: '#F3F4F6' }}
                                    >
                                        Réserver ma démonstration
                                        <ArrowRight className="ml-3 w-6 h-6" />
                                    </Button>
                                </a>
                            </div>

                            <p className="mt-8 text-sm" style={{ color: '#9CA3AF' }}>
                                ✓ Sans engagement • ✓ Installation rapide • ✓ Support 7j/7
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-8 border-t border-white/10" style={{ backgroundColor: '#1F2937' }}>
                    <div className="container mx-auto px-4 text-center text-sm" style={{ color: '#9CA3AF' }}>
                        <p>&copy; {new Date().getFullYear()} KERYX. Tous droits réservés.</p>
                    </div>
                </footer>
            </main>
        </>
    );
}
