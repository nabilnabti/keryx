import { Hero } from '@/components/landing/hero';
import { ProblemsSection } from '@/components/landing/problems-section';
import { BeforeAfterSection } from '@/components/landing/before-after-section';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { LiveDemoSection } from '@/components/landing/live-demo-section';
import { FeaturesGridSection } from '@/components/landing/features-grid';
import { TestimonialsSection } from '@/components/landing/testimonials';
import { FinalCTASection } from '@/components/landing/final-cta';
import { Navigation } from '@/components/navigation';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function LandingPage() {
    return (
        <main className="min-h-screen relative" style={{ backgroundColor: '#0B0E14' }}>
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Navigation */}
            <Navigation />
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Problems Section */}
            <ProblemsSection />

            {/* 3. Before/After Transformation */}
            <BeforeAfterSection />

            {/* 4. How It Works */}
            <HowItWorksSection />

            {/* 5. Benefits */}
            <BenefitsSection />

            {/* 6. Live Demo */}
            <LiveDemoSection />

            {/* 7. Features Grid */}
            <FeaturesGridSection />

            {/* 8. Testimonials */}
            <TestimonialsSection />

            {/* 9. Final CTA */}
            <FinalCTASection />

            {/* Footer */}
            <footer className="py-8 border-t border-white/10" style={{ backgroundColor: '#1F2937' }}>
                <div className="container mx-auto px-4 text-center text-sm" style={{ color: '#9CA3AF' }}>
                    <p>&copy; {new Date().getFullYear()} KERYX. Tous droits réservés.</p>
                </div>
            </footer>
        </main>
    );
}
