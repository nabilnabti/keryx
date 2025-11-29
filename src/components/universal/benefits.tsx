import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Clock, PhoneOff, TrendingUp, Users, Zap, Shield } from 'lucide-react';

export function UniversalBenefits() {
    const benefits = [
        {
            icon: Clock,
            title: 'Disponible 24/7',
            description: 'Votre assistant ne dort jamais. Vos clients sont pris en charge à toute heure.',
            color: '#6366F1'
        },
        {
            icon: PhoneOff,
            title: 'Zéro appel manqué',
            description: 'Chaque appel est une opportunité. Ne perdez plus jamais un client.',
            color: '#8B5CF6'
        },
        {
            icon: TrendingUp,
            title: 'Augmentez votre CA',
            description: 'Convertissez plus d\'appels en rendez-vous et en ventes.',
            color: '#22C55E'
        },
        {
            icon: Users,
            title: 'Satisfaction client',
            description: 'Réponse immédiate, professionnelle et personnalisée à chaque appel.',
            color: '#3B82F6'
        },
        {
            icon: Zap,
            title: 'Gain de temps',
            description: 'Concentrez-vous sur votre cœur de métier, l\'IA gère vos appels.',
            color: '#F59E0B'
        },
        {
            icon: Shield,
            title: 'Fiabilité totale',
            description: 'Aucune erreur, aucun oubli. Votre assistant est toujours au top.',
            color: '#10B981'
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimation animation="fade-in-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                            Pourquoi choisir <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">KERYX</span> ?
                        </h2>
                        <p className="text-xl" style={{ color: '#9CA3AF' }}>
                            Des bénéfices concrets pour votre entreprise, quel que soit votre secteur
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <ScrollAnimation
                                key={index}
                                animation="fade-in-up"
                                delay={index * 100}
                            >
                                <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover-lift">
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${benefit.color}20` }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#F3F4F6' }}>
                                        {benefit.title}
                                    </h3>

                                    <p className="text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
