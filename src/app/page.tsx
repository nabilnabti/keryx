import { ConversionHero } from '@/components/universal/hero';
import { IndustriesGrid } from '@/components/universal/industries-grid';
import { SocialProof } from '@/components/universal/social-proof';
import { UniversalBenefits } from '@/components/universal/benefits';
import { FinalConversionCTA } from '@/components/universal/final-cta';
import { Navigation } from '@/components/navigation';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function UniversalLandingPage() {
    return (
        <main className="min-h-screen relative" style={{ backgroundColor: '#0B0E14' }}>
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Navigation */}
            <Navigation />

            {/* 1. Hero avec sélecteur de métier et CTA démo */}
            <ConversionHero />

            {/* 2. Social Proof - Chiffres impressionnants */}
            <SocialProof />

            {/* 3. Industries Grid */}
            <IndustriesGrid />

            {/* 4. Benefits */}
            <UniversalBenefits />

            {/* 5. Final CTA avec urgence */}
            <FinalConversionCTA />

            {/* Footer */}
            <footer className="py-8 border-t border-white/10 relative z-10" style={{ backgroundColor: '#1F2937' }}>
                <div className="container mx-auto px-4 text-center text-sm" style={{ color: '#9CA3AF' }}>
                    <p>&copy; {new Date().getFullYear()} KERYX. Tous droits réservés.</p>
                </div>
            </footer>
        </main>
    );
}
