export function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Depuis que j'ai KERYX, j'ai récupéré des dizaines d'appels par jour.",
            author: "Pizza Napoli",
            location: "Lyon"
        },
        {
            quote: "Plus de téléphone à gérer en rush, un bonheur.",
            author: "Burger Empire",
            location: "Paris"
        },
        {
            quote: "Mes clients adorent pouvoir commander à toute heure. Et moi aussi !",
            author: "Sushi Time",
            location: "Marseille"
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                        Ils nous font confiance
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all"
                        >
                            <div className="mb-6">
                                <svg className="w-10 h-10" style={{ color: '#F97316' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-lg mb-6 italic" style={{ color: '#F3F4F6' }}>
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <p className="font-bold" style={{ color: '#F97316' }}>
                                    {testimonial.author}
                                </p>
                                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
