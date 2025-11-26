'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/branding/logo';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Navigation() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

    const industries = [
        { name: 'Restaurant / Pizzeria', href: '/', emoji: '🍕' },
        { name: 'Médecin', href: '/industries/medecin', emoji: '🩺' },
        { name: 'Plombier', href: '/industries/plombier', emoji: '🔧' },
        { name: 'Garagiste', href: '/industries/garagiste', emoji: '🚗' },
        { name: 'Coiffeur', href: '/industries/coiffeur', emoji: '✂️' },
        { name: 'Agent Immobilier', href: '/industries/agent-immobilier', emoji: '🏠' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10" style={{ backgroundColor: 'rgba(11, 14, 20, 0.9)' }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Logo />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Nos métiers - Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                clearTimeout((window as any).menuTimeout);
                                setIsIndustriesOpen(true);
                            }}
                            onMouseLeave={() => {
                                (window as any).menuTimeout = setTimeout(() => {
                                    setIsIndustriesOpen(false);
                                }, 200);
                            }}
                        >
                            <button className="flex items-center gap-1 py-2 transition-colors" style={{ color: '#F3F4F6' }}>
                                Nos métiers
                                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isIndustriesOpen && (
                                <div className="absolute top-full left-0 pt-2">
                                    <div className="w-56 glass-panel rounded-xl border border-white/10 shadow-2xl p-2" style={{ backgroundColor: 'rgba(31, 41, 55, 0.95)' }}>
                                        {industries.map((industry) => (
                                            <Link
                                                key={industry.href}
                                                href={industry.href}
                                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                                style={{ color: '#F3F4F6' }}
                                            >
                                                <span className="text-xl">{industry.emoji}</span>
                                                <span>{industry.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact */}
                        <Link href="/contact" className="py-2 transition-colors hover:text-[#F97316]" style={{ color: '#F3F4F6' }}>
                            Contact
                        </Link>

                        {/* FAQ */}
                        <Link
                            href={
                                pathname.startsWith('/industries/medecin') ? '/faq?industry=medecin' :
                                    pathname.startsWith('/industries/plombier') ? '/faq?industry=plombier' :
                                        pathname.startsWith('/industries/garagiste') ? '/faq?industry=garagiste' :
                                            pathname.startsWith('/industries/coiffeur') ? '/faq?industry=coiffeur' :
                                                '/faq?industry=restaurant'
                            }
                            className="py-2 transition-colors hover:text-[#F97316]"
                            style={{ color: '#F3F4F6' }}
                        >
                            FAQ
                        </Link>

                        {/* CTA */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="rounded-full font-semibold"
                                style={{
                                    backgroundColor: '#E11D48',
                                    color: '#F3F4F6'
                                }}
                            >
                                Réserver une démo
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ color: '#F3F4F6' }}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <div className="space-y-4">
                            {/* Nos métiers */}
                            <div>
                                <button
                                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                                    className="flex items-center justify-between w-full py-2"
                                    style={{ color: '#F3F4F6' }}
                                >
                                    Nos métiers
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isIndustriesOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {industries.map((industry) => (
                                            <Link
                                                key={industry.href}
                                                href={industry.href}
                                                className="flex items-center gap-3 py-2"
                                                style={{ color: '#9CA3AF' }}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span>{industry.emoji}</span>
                                                <span>{industry.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Contact */}
                            <Link
                                href="/contact"
                                className="block py-2"
                                style={{ color: '#F3F4F6' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            {/* CTA */}
                            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                                <Button
                                    className="w-full rounded-full font-semibold"
                                    style={{
                                        backgroundColor: '#E11D48',
                                        color: '#F3F4F6'
                                    }}
                                >
                                    Essayer gratuitement
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
