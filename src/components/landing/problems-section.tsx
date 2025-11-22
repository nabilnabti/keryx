import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, AlertCircle, TrendingDown, Clock, FileX, Users, Ban } from 'lucide-react';

export function ProblemsSection() {
    const problems = [
        {
            icon: Phone,
            title: "Téléphone qui sonne en plein service",
            color: "text-red-400"
        },
        {
            icon: Ban,
            title: "Clients qui raccrochent faute de réponse",
            color: "text-red-400"
        },
        {
            icon: TrendingDown,
            title: "Commandes perdues = argent perdu",
            color: "text-orange-400"
        },
        {
            icon: Clock,
            title: "Temps perdu à répondre au téléphone",
            color: "text-orange-400"
        },
        {
            icon: FileX,
            title: "Mauvaise organisation des créneaux d'emporter",
            color: "text-red-400"
        },
        {
            icon: AlertCircle,
            title: "Stress du rush",
            color: "text-orange-400"
        },
        {
            icon: Users,
            title: "Trop de doubles réservations",
            color: "text-red-400"
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-[#1F2937] to-[#0B0E14]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Ce que vivent tous les restaurateurs aujourd'hui
                    </h2>
                </div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <div
                                key={index}
                                className="glass-panel p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:border-red-500/40 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-all`}>
                                        <Icon className={`w-6 h-6 ${problem.color}`} />
                                    </div>
                                    <p className="text-lg font-medium" style={{ color: '#F3F4F6' }}>
                                        {problem.title}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="#solution">
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 rounded-full font-semibold"
                            style={{
                                backgroundColor: '#E11D48',
                                color: '#F3F4F6'
                            }}
                        >
                            Voir la solution
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
