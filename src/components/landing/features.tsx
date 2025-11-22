import { Phone, Mic, ShoppingBag, Clock, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        name: 'Prise de commande IA',
        description: 'Une voix naturelle qui comprend les accents, les modifications et les questions complexes de vos clients.',
        icon: Mic,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10'
    },
    {
        name: 'Intégration Menu',
        description: 'Synchronisation automatique avec votre carte. L\'IA connaît vos produits, prix et disponibilités en temps réel.',
        icon: ShoppingBag,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10'
    },
    {
        name: 'Disponible 24/7',
        description: 'Ne ratez plus aucun appel pendant les coups de feu ou après la fermeture. Votre ligne est toujours ouverte.',
        icon: Clock,
        color: 'text-pink-400',
        bg: 'bg-pink-500/10'
    },
    {
        name: 'Numéro dédié',
        description: 'Obtenez un numéro de téléphone local instantanément ou redirigez votre ligne actuelle.',
        icon: Phone,
        color: 'text-green-400',
        bg: 'bg-green-500/10'
    },
    {
        name: 'Tableau de bord Live',
        description: 'Visualisez les commandes en temps réel et écoutez les enregistrements des conversations.',
        icon: Zap,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10'
    },
    {
        name: 'Sécurisé & Fiable',
        description: 'Infrastructure robuste basée sur Supabase et Retell AI pour une disponibilité maximale.',
        icon: ShieldCheck,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10'
    },
];

export function Features() {
    return (
        <div className="py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/food-bg.png"
                    alt="Gourmet food"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Tout ce dont vous avez besoin pour <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">automatiser vos commandes</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Une suite complète d'outils pour moderniser votre restaurant sans changer vos habitudes en cuisine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="group relative">
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>

                            <div className="relative glass-panel p-8 rounded-2xl h-full transition-transform duration-300 group-hover:-translate-y-2">
                                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                    {feature.name}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof - Restaurant Owners */}
                <div className="mt-20">
                    <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">
                        Ils nous font confiance
                    </p>
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                        {/* Restaurant Owner 1 */}
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all">
                                <Image
                                    src="/restaurant-owner.png"
                                    alt="Restaurant owner"
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Restaurant Gastronomique
                            </div>
                        </div>

                        {/* Pizzeria Chef */}
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-all">
                                <Image
                                    src="/pizza-chef.png"
                                    alt="Pizzeria chef"
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Pizzeria Traditionnelle
                            </div>
                        </div>

                        {/* Burger Restaurant */}
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-pink-500/50 transition-all">
                                <Image
                                    src="/burger-staff.png"
                                    alt="Burger restaurant staff"
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Fast-Food Gourmet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
