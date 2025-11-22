'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navigation } from '@/components/navigation';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#0B0E14' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                Contactez-nous
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                                Une question ? Besoin d'une démonstration personnalisée ? Notre équipe est là pour vous aider.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="glass-panel p-8 rounded-2xl border border-white/10">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Label htmlFor="name" style={{ color: '#F3F4F6' }}>Nom complet *</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="Votre nom"
                                                className="mt-2"
                                                style={{
                                                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                                    borderColor: 'rgba(243, 244, 246, 0.1)',
                                                    color: '#F3F4F6'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email" style={{ color: '#F3F4F6' }}>Email *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="votre@email.com"
                                                className="mt-2"
                                                style={{
                                                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                                    borderColor: 'rgba(243, 244, 246, 0.1)',
                                                    color: '#F3F4F6'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="phone" style={{ color: '#F3F4F6' }}>Téléphone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+33 6 12 34 56 78"
                                                className="mt-2"
                                                style={{
                                                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                                    borderColor: 'rgba(243, 244, 246, 0.1)',
                                                    color: '#F3F4F6'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="business" style={{ color: '#F3F4F6' }}>Type d'activité</Label>
                                            <select
                                                id="business"
                                                className="w-full mt-2 px-4 py-3 rounded-lg border"
                                                style={{
                                                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                                    borderColor: 'rgba(243, 244, 246, 0.1)',
                                                    color: '#F3F4F6'
                                                }}
                                            >
                                                <option value="">Sélectionnez...</option>
                                                <option value="restaurant">Restaurant</option>
                                                <option value="medecin">Médecin</option>
                                                <option value="plombier">Plombier</option>
                                                <option value="garagiste">Garagiste</option>
                                                <option value="coiffeur">Coiffeur</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>

                                        <div>
                                            <Label htmlFor="message" style={{ color: '#F3F4F6' }}>Message *</Label>
                                            <Textarea
                                                id="message"
                                                required
                                                rows={5}
                                                placeholder="Décrivez votre besoin..."
                                                className="mt-2"
                                                style={{
                                                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                                    borderColor: 'rgba(243, 244, 246, 0.1)',
                                                    color: '#F3F4F6'
                                                }}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isLoading}
                                            className="w-full rounded-full font-semibold"
                                            style={{
                                                backgroundColor: '#E11D48',
                                                color: '#F3F4F6'
                                            }}
                                        >
                                            {isLoading ? (
                                                'Envoi en cours...'
                                            ) : (
                                                <>
                                                    <Send className="mr-2 w-5 h-5" />
                                                    Envoyer le message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#22C55E20' }}>
                                            <CheckCircle className="w-10 h-10" style={{ color: '#22C55E' }} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#F3F4F6' }}>
                                            Message envoyé !
                                        </h3>
                                        <p style={{ color: '#9CA3AF' }}>
                                            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-8">
                                {/* Info Cards */}
                                <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E11D4820' }}>
                                            <Mail className="w-6 h-6" style={{ color: '#E11D48' }} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2" style={{ color: '#F3F4F6' }}>Email</h3>
                                            <a href="mailto:contact@keryx.com" className="hover:underline" style={{ color: '#9CA3AF' }}>
                                                contact@keryx.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F9731620' }}>
                                            <Phone className="w-6 h-6" style={{ color: '#F97316' }} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2" style={{ color: '#F3F4F6' }}>Téléphone</h3>
                                            <a href="tel:+33123456789" className="hover:underline" style={{ color: '#9CA3AF' }}>
                                                +33 1 23 45 67 89
                                            </a>
                                            <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                                                Du lundi au vendredi, 9h-18h
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-panel p-6 rounded-2xl border border-white/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#22C55E20' }}>
                                            <MapPin className="w-6 h-6" style={{ color: '#22C55E' }} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2" style={{ color: '#F3F4F6' }}>Adresse</h3>
                                            <p style={{ color: '#9CA3AF' }}>
                                                123 Avenue des Champs-Élysées<br />
                                                75008 Paris, France
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Link */}
                                <div className="glass-panel p-6 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent">
                                    <h3 className="font-bold mb-3" style={{ color: '#F3F4F6' }}>
                                        Questions fréquentes ?
                                    </h3>
                                    <p className="mb-4" style={{ color: '#9CA3AF' }}>
                                        Consultez notre FAQ pour des réponses rapides aux questions courantes.
                                    </p>
                                    <Link href="/faq">
                                        <Button
                                            variant="outline"
                                            className="rounded-full"
                                            style={{
                                                borderColor: '#F97316',
                                                color: '#F97316'
                                            }}
                                        >
                                            Voir la FAQ
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
