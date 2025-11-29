import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ArrowRight } from 'lucide-react';

export function IndustriesGrid() {
    const industries = [
        {
            icon: '🍕',
            title: 'Restauration',
            description: 'Commandes et réservations automatiques',
            color: '#E11D48',
            href: '/industries/restaurant',
            features: ['Prise de commandes', 'Réservations de tables', 'Gestion allergies']
        },
        {
            icon: '🩺',
            title: 'Santé',
            description: 'Prise de rendez-vous médicaux 24/7',
            color: '#3B82F6',
            href: '/industries/medecin',
            features: ['Rendez-vous', 'Rappels patients', 'Urgences']
        },
        {
            icon: '🔧',
            title: 'Services',
            description: 'Interventions et devis instantanés',
            color: '#06B6D4',
            href: '/industries/plombier',
            features: ['Urgences', 'Devis', 'Planning']
        },
        {
            icon: '🚗',
            title: 'Automobile',
            description: 'Rendez-vous atelier et diagnostics',
            color: '#F97316',
            href: '/industries/garagiste',
            features: ['RDV atelier', 'Devis réparations', 'Suivi véhicule']
        },
        {
            icon: '✂️',
            title: 'Beauté',
            description: 'Réservations salon et spa',
            color: '#EC4899',
            href: '/industries/coiffeur',
            features: ['Réservations', 'Rappels', 'Promotions']
        },
        {
            icon: '🏠',
            title: 'Immobilier',
            description: 'Visites et qualification prospects',
            color: '#10B981',
            href: '/industries/agent-immobilier',
            features: ['Visites', 'Qualification', 'Suivi dossiers']
        }
    ];

    return (
        <div id="industries" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#1F2937] to-[#0B0E14]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimation animation="fade-in-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                            Une solution pour <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">chaque métier</span>
                        </h2>
                        <p className="text-xl" style={{ color: '#9CA3AF' }}>
                            KERYX s'adapte à votre secteur d'activité avec des agents IA spécialisés
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {industries.map((industry, index) => (
                        <ScrollAnimation
                            key={index}
                            animation="scale-in"
                            delay={index * 100}
                        >
                            <Link href={industry.href}>
                                <div className="modern-card p-8 h-full hover-lift cursor-pointer group">
                                    {/* Icon */}
                                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                                        {industry.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#F3F4F6' }}>
                                        {industry.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base mb-4" style={{ color: '#9CA3AF' }}>
                                        {industry.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {industry.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: '#D1D5DB' }}>
                                                <span style={{ color: industry.color }}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: industry.color }}>
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
}
