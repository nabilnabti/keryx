import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
    return (
        <div className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E11D48]/20 via-[#F97316]/20 to-[#E11D48]/20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#F3F4F6' }}>
                        Ne perdez plus{' '}
                        <span style={{ color: '#E11D48' }}>un seul client</span>.
                    </h2>

                    <p className="text-2xl mb-12" style={{ color: '#9CA3AF' }}>
                        Rejoignez des centaines de restaurateurs qui ont choisi KERYX
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="text-xl px-12 py-8 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                                style={{
                                    backgroundColor: '#E11D48',
                                    color: '#F3F4F6'
                                }}
                            >
                                Réserver ma démonstration
                                <ArrowRight className="ml-3 w-6 h-6" />
                            </Button>
                        </a>
                    </div>

                    <p className="mt-8 text-sm" style={{ color: '#9CA3AF' }}>
                        ✓ Sans engagement • ✓ Installation en 2 minutes • ✓ Support 7j/7
                    </p>
                </div>
            </div>
        </div>
    );
}
