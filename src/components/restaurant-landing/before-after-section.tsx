import { X, Check } from 'lucide-react';

export function BeforeAfterSection() {
    const before = [
        "Appels manqués",
        "Clients impatients",
        "Notes perdues",
        "Manque d'organisation",
        "Argent qui s'envole"
    ];

    const after = [
        "Appels pris automatiquement",
        "Planification parfaite",
        "Zéro erreur",
        "Zéro stress en cuisine",
        "Plus de ventes, plus de clients satisfaits"
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* AVANT */}
                    <div className="relative p-8 rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent">
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#E11D48', color: '#F3F4F6' }}>
                            AVANT
                        </div>
                        <h3 className="text-3xl font-bold mb-8 mt-4" style={{ color: '#E11D48' }}>
                            Sans KERYX
                        </h3>
                        <div className="space-y-4">
                            {before.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <X className="w-4 h-4 text-red-400" />
                                    </div>
                                    <p className="text-lg" style={{ color: '#F3F4F6' }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* APRÈS */}
                    <div className="relative p-8 rounded-2xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent">
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#22C55E', color: '#0B0E14' }}>
                            APRÈS
                        </div>
                        <h3 className="text-3xl font-bold mb-8 mt-4" style={{ color: '#22C55E' }}>
                            Avec KERYX
                        </h3>
                        <div className="space-y-4">
                            {after.map((item, index) => (
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
    );
}
