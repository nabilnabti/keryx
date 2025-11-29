import { Phone, Calendar, Clock2, Pizza, MessageSquare, Bell, CheckCircle, Wrench } from 'lucide-react';

export function FeaturesGridSection() {
    const features = [
        {
            icon: Calendar,
            title: "Réservations automatiques",
            description: "Gestion intelligente de vos créneaux"
        },
        {
            icon: Phone,
            title: "Appels 24/7",
            description: "Toujours disponible pour vos clients"
        },
        {
            icon: Clock2,
            title: "Gestion des heures de rush",
            description: "L'IA s'adapte à votre charge de travail"
        },
        {
            icon: Pizza,
            title: "Adapté pizzerias, burgers, kebabs",
            description: "Configuré pour votre type de cuisine"
        },
        {
            icon: MessageSquare,
            title: "Message de fermeture automatique",
            description: "Informe vos clients de vos horaires"
        },
        {
            icon: Bell,
            title: "Rappels par SMS",
            description: "Confirmations automatiques envoyées"
        },
        {
            icon: CheckCircle,
            title: "Confirmations automatiques",
            description: "Réduisez les no-shows"
        },
        {
            icon: Wrench,
            title: "Aucune installation matérielle",
            description: "Tout fonctionne en ligne"
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Tout ce dont vous avez besoin
                    </h2>
                    <p className="text-xl" style={{ color: '#9CA3AF' }}>
                        Une solution complète pour votre restaurant
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="glass-panel p-6 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: '#F97316' + '20' }}>
                                    <Icon className="w-6 h-6" style={{ color: '#F97316' }} />
                                </div>
                                <h3 className="font-bold mb-2" style={{ color: '#F3F4F6' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
