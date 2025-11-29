import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { TrendingUp, Clock, Phone, DollarSign } from 'lucide-react';

export function SocialProof() {
    const stats = [
        {
            icon: Phone,
            number: '10,000+',
            label: 'Appels traités par jour',
            color: '#6366F1',
            description: 'Nos agents IA gèrent des milliers d\'appels quotidiennement'
        },
        {
            icon: TrendingUp,
            number: '+40%',
            label: 'Taux de conversion',
            color: '#22C55E',
            description: 'Augmentation moyenne des rendez-vous pris'
        },
        {
            icon: Clock,
            number: '24/7',
            label: 'Disponibilité',
            color: '#8B5CF6',
            description: 'Votre assistant ne dort jamais, ne prend pas de pause'
        },
        {
            icon: DollarSign,
            number: '€12K+',
            label: 'CA additionnel/mois',
            color: '#F59E0B',
            description: 'Revenu moyen généré par nos clients'
        }
    ];

    return (
        <div className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimation animation="fade-in-up">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#F3F4F6' }}>
                            Des résultats qui parlent
                            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent"> d'eux-mêmes</span>
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <ScrollAnimation
                                key={index}
                                animation="scale-in"
                                delay={index * 150}
                            >
                                <div
                                    className="relative p-8 rounded-3xl border-2 hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
                                    style={{
                                        backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                        borderColor: 'rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    {/* Animated background */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`
                                        }}
                                    ></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                                            style={{ backgroundColor: `${stat.color}20` }}
                                        >
                                            <Icon className="w-8 h-8" style={{ color: stat.color }} />
                                        </div>

                                        {/* Number */}
                                        <div
                                            className="text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-500"
                                            style={{ color: stat.color }}
                                        >
                                            {stat.number}
                                        </div>

                                        {/* Label */}
                                        <div className="text-xl font-bold mb-3" style={{ color: '#F3F4F6' }}>
                                            {stat.label}
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                                            {stat.description}
                                        </p>
                                    </div>

                                    {/* Glow effect */}
                                    <div
                                        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                                        style={{ backgroundColor: `${stat.color}30` }}
                                    ></div>
                                </div>
                            </ScrollAnimation>
                        );
                    })}
                </div>

                {/* Trust badges */}
                <ScrollAnimation animation="fade-in-up" delay={600}>
                    <div className="mt-20 flex flex-wrap justify-center items-center gap-12">
                        {[
                            { text: '✓ Installation en 24h', color: '#22C55E' },
                            { text: '✓ Sans engagement', color: '#6366F1' },
                            { text: '✓ Support 7j/7', color: '#8B5CF6' },
                            { text: '✓ Garantie satisfait ou remboursé', color: '#F59E0B' }
                        ].map((badge, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-lg font-semibold"
                                style={{ color: badge.color }}
                            >
                                {badge.text}
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
