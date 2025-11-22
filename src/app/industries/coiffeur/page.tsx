'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { VoiceCallModal } from '@/components/voice-call-modal';
import { ArrowRight, Phone, Clock, Users, Ban, TrendingDown, Calendar, X, Check } from 'lucide-react';

export default function CoiffeurPage() {
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);

    return (
        <>
            <Navigation />
            <main className="min-h-screen" style={{ backgroundColor: '#0B0E14' }}>
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/10 via-[#0B0E14] to-[#A855F7]/10"></div>

                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" style={{ backgroundColor: '#EC4899' }}></div>
                        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#A855F7' }}></div>
                    </div>

                    {/* Floating Hair Salon Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                        <div className="absolute top-20 left-10 text-6xl animate-float">✂️</div>
                        <div className="absolute top-40 right-20 text-5xl animate-float animation-delay-2000">💇</div>
                        <div className="absolute bottom-40 left-1/4 text-7xl animate-float animation-delay-4000">💈</div>
                        <div className="absolute top-1/3 right-1/3 text-4xl animate-float">🪮</div>
                        <div className="absolute bottom-1/4 right-10 text-6xl animate-float animation-delay-2000">💅</div>
                        <div className="absolute top-1/2 left-20 text-5xl animate-float animation-delay-4000">🎀</div>
                        <div className="absolute bottom-20 left-1/3 text-4xl animate-float">👨‍🦱</div>
                        <div className="absolute top-1/4 right-1/4 text-5xl animate-float animation-delay-2000">💆</div>
                    </div>

                    <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8">
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }}></div>
                                <span className="text-sm" style={{ color: '#F3F4F6' }}>
                                    Disponible 24/7 • Réservations automatisées
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: '#F3F4F6' }}>
                                Votre agenda{' '}
                                <span style={{ color: '#EC4899' }}>toujours plein</span>
                                <br />
                                Grâce à votre assistant{' '}
                                <span style={{ color: '#A855F7' }}>beauté IA</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#9CA3AF' }}>
                                Un assistant vocal intelligent gère vos <span style={{ color: '#F3F4F6' }}>réservations 24/7</span>, répond aux questions sur vos <span style={{ color: '#F3F4F6' }}>prestations et tarifs</span> pendant que vous coiffez.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        className="text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                        style={{ backgroundColor: '#EC4899', color: '#F3F4F6' }}
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
                                    style={{ borderColor: '#A855F7', color: '#A855F7' }}
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
                        primaryColor="#EC4899"
                        secondaryColor="#A855F7"
                    />
                </div>

                {/* Problems Section */}
                <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#1F2937] to-[#0B0E14]"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                Les défis quotidiens des salons de coiffure
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                            {[
                                { icon: Phone, title: "Téléphone qui sonne pendant les coupes" },
                                { icon: Ban, title: "Rendez-vous manqués = perte sèche" },
                                { icon: Calendar, title: "Agenda mal géré, créneaux vides" },
                                { icon: Clock, title: "Temps perdu à répondre au téléphone" },
                                { icon: Users, title: "Clients qui raccrochent" },
                                { icon: TrendingDown, title: "Difficulté à remplir les créneaux" }
                            ].map((problem, index) => {
                                const Icon = problem.icon;
                                return (
                                    <div
                                        key={index}
                                        className="glass-panel p-6 rounded-xl border bg-red-500/5 hover:border-pink-500/40 transition-all group"
                                        style={{ borderColor: 'rgba(236, 72, 153, 0.2)' }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-all" style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}>
                                                <Icon className="w-6 h-6" style={{ color: '#EC4899' }} />
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
                                    style={{ backgroundColor: '#EC4899', color: '#F3F4F6' }}
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
                            <div className="relative p-8 rounded-2xl border-2 bg-gradient-to-br from-pink-500/10 to-transparent" style={{ borderColor: 'rgba(236, 72, 153, 0.3)' }}>
                                <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#EC4899', color: '#F3F4F6' }}>
                                    AVANT
                                </div>
                                <h3 className="text-3xl font-bold mb-8 mt-4" style={{ color: '#EC4899' }}>
                                    Sans KERYX
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Rendez-vous manqués pendant les coupes",
                                        "Créneaux vides",
                                        "Agenda désorganisé",
                                        "Interruptions constantes",
                                        "Perte de clients"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}>
                                                <X className="w-4 h-4" style={{ color: '#EC4899' }} />
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
                                        "Tous les rendez-vous pris 24/7",
                                        "Agenda plein optimisé",
                                        "Planning parfaitement géré",
                                        "Concentration sur la coiffure",
                                        "Plus de clients, plus de CA"
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
                                    quote: "Mon agenda est toujours plein maintenant. Les clients peuvent réserver même le dimanche soir !",
                                    author: "Salon Belle Époque",
                                    location: "Nice"
                                },
                                {
                                    quote: "Plus d'interruptions pendant mes coupes. Je me concentre sur mon art.",
                                    author: "Coiffure Tendance",
                                    location: "Montpellier"
                                },
                                {
                                    quote: "L'assistant répond aux questions sur mes tarifs. Je gagne un temps fou !",
                                    author: "Hair Studio",
                                    location: "Cannes"
                                }
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all"
                                >
                                    <div className="mb-6">
                                        <svg className="w-10 h-10" style={{ color: '#EC4899' }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg mb-6 italic" style={{ color: '#F3F4F6' }}>
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-bold" style={{ color: '#EC4899' }}>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/20 via-[#A855F7]/20 to-[#EC4899]/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#F3F4F6' }}>
                                Concentrez-vous sur{' '}
                                <span style={{ color: '#EC4899' }}>votre art</span>
                            </h2>

                            <p className="text-2xl mb-12" style={{ color: '#9CA3AF' }}>
                                Rejoignez des centaines de coiffeurs qui ont choisi KERYX
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        className="text-xl px-12 py-8 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                        style={{ backgroundColor: '#EC4899', color: '#F3F4F6' }}
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
