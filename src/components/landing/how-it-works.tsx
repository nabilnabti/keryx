export function HowItWorksSection() {
    const steps = [
        {
            number: "1",
            title: "Le client appelle",
            description: "L'IA répond instantanément",
            icon: "📞"
        },
        {
            number: "2",
            title: "L'IA prend la commande ou réserve une table",
            description: "Elle suit votre menu, vos horaires, votre capacité",
            icon: "📅"
        },
        {
            number: "3",
            title: "Vous recevez la commande/réservation en direct",
            description: "SMS, tableau de bord, WhatsApp, tout automatisé",
            icon: "✅"
        }
    ];

    return (
        <div id="solution" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Comment ça marche ?
                    </h2>
                    <p className="text-xl" style={{ color: '#9CA3AF' }}>
                        3 étapes simples pour ne plus jamais manquer une commande
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector line (except last) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#F97316] to-transparent transform -translate-x-1/2 z-0"></div>
                            )}

                            <div className="glass-panel p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent hover:border-orange-500/40 transition-all relative z-10">
                                {/* Number badge */}
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl font-bold mx-auto" style={{ backgroundColor: '#F97316', color: '#0B0E14' }}>
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="text-6xl text-center mb-4">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#F3F4F6' }}>
                                    {step.title}
                                </h3>
                                <p className="text-center" style={{ color: '#9CA3AF' }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
