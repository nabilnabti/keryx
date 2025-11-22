import { Clock, DollarSign, TrendingUp, Flame } from 'lucide-react';

export function BenefitsSection() {
    const benefits = [
        {
            icon: Clock,
            title: "Économisez 3 à 8 heures par semaine",
            description: "Plus de temps pour vous concentrer sur vos plats",
            color: "#F97316"
        },
        {
            icon: DollarSign,
            title: "Récupérez +20% d'appels manqués",
            description: "Transformez chaque appel en commande",
            color: "#22C55E"
        },
        {
            icon: TrendingUp,
            title: "Améliorez votre satisfaction client",
            description: "Réponse instantanée, zéro attente",
            color: "#E11D48"
        },
        {
            icon: Flame,
            title: "Toujours disponible, même en plein rush",
            description: "L'IA gère pendant que vous cuisinez",
            color: "#F97316"
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Plus de temps. Plus de clients.{' '}
                        <span style={{ color: '#22C55E' }}>Plus d'argent.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: `${benefit.color}20` }}>
                                    <Icon className="w-8 h-8" style={{ color: benefit.color }} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: '#F3F4F6' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-lg" style={{ color: '#9CA3AF' }}>
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
