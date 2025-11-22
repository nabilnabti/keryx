'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQPage() {
    const searchParams = useSearchParams();
    const industry = searchParams.get('industry') || 'restaurant';

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // FAQ data by industry
    const faqData: Record<string, any> = {
        restaurant: {
            title: 'Questions Fréquentes - Restaurant',
            subtitle: 'Tout ce que vous devez savoir sur KERYX pour votre restaurant',
            color: '#E11D48',
            faqs: [
                {
                    category: "Fonctionnement",
                    questions: [
                        {
                            q: "Comment fonctionne l'assistant vocal KERYX ?",
                            a: "KERYX est un assistant vocal intelligent alimenté par l'IA qui répond automatiquement aux appels de vos clients 24/7. Il peut prendre des commandes, gérer les réservations de table, répondre aux questions sur votre menu et vos horaires."
                        },
                        {
                            q: "L'assistant peut-il vraiment comprendre tous mes clients ?",
                            a: "Oui ! KERYX utilise une technologie de reconnaissance vocale avancée qui comprend le français naturel, même avec des accents régionaux. Il peut gérer les hésitations, les changements d'avis et les conversations complexes."
                        }
                    ]
                },
                {
                    category: "Commandes & Réservations",
                    questions: [
                        {
                            q: "Comment l'assistant gère-t-il les commandes à emporter ?",
                            a: "L'assistant prend les détails de la commande, propose les créneaux de retrait disponibles selon votre capacité, confirme le total et envoie automatiquement les détails dans votre tableau de bord et par SMS."
                        },
                        {
                            q: "Comment sont traitées les réservations de table ?",
                            a: "L'assistant vérifie en temps réel vos disponibilités, propose des créneaux alternatifs si nécessaire, et confirme la réservation. Tout est synchronisé avec votre tableau de bord."
                        }
                    ]
                }
            ]
        },
        medecin: {
            title: 'Questions Fréquentes - Médecin',
            subtitle: 'Tout ce que vous devez savoir sur KERYX pour votre cabinet médical',
            color: '#3B82F6',
            faqs: [
                {
                    category: "Fonctionnement",
                    questions: [
                        {
                            q: "Comment KERYX gère-t-il les rendez-vous médicaux ?",
                            a: "KERYX prend les rendez-vous 24/7, vérifie vos disponibilités en temps réel, et confirme automatiquement les créneaux. Les patients reçoivent une confirmation par SMS."
                        },
                        {
                            q: "L'assistant peut-il gérer les urgences ?",
                            a: "KERYX peut identifier les urgences selon vos critères et les transférer immédiatement vers votre ligne d'urgence ou vous envoyer une notification prioritaire."
                        }
                    ]
                },
                {
                    category: "Confidentialité & RGPD",
                    questions: [
                        {
                            q: "Les données patients sont-elles sécurisées ?",
                            a: "Absolument. KERYX est conforme RGPD et utilise un chiffrement de niveau médical. Les données sont hébergées en France et ne sont jamais partagées."
                        },
                        {
                            q: "Que fait l'assistant avec les informations médicales ?",
                            a: "L'assistant ne collecte que les informations nécessaires à la prise de rendez-vous (nom, motif, coordonnées). Aucune donnée médicale sensible n'est stockée."
                        }
                    ]
                }
            ]
        },
        plombier: {
            title: 'Questions Fréquentes - Plombier',
            subtitle: 'Tout ce que vous devez savoir sur KERYX pour votre entreprise de plomberie',
            color: '#06B6D4',
            faqs: [
                {
                    category: "Gestion des urgences",
                    questions: [
                        {
                            q: "Comment KERYX gère-t-il les appels d'urgence ?",
                            a: "KERYX prend tous les appels d'urgence 24/7, qualifie la nature du problème, et vous envoie immédiatement les détails par SMS avec l'adresse et la description."
                        },
                        {
                            q: "L'assistant peut-il donner des tarifs au téléphone ?",
                            a: "Oui ! Vous configurez vos tarifs par type d'intervention et KERYX donne une estimation au client selon la description du problème."
                        }
                    ]
                },
                {
                    category: "Planning & Interventions",
                    questions: [
                        {
                            q: "Comment sont planifiées les interventions non urgentes ?",
                            a: "KERYX consulte votre agenda en temps réel, propose des créneaux disponibles au client, et confirme le rendez-vous automatiquement."
                        }
                    ]
                }
            ]
        },
        garagiste: {
            title: 'Questions Fréquentes - Garagiste',
            subtitle: 'Tout ce que vous devez savoir sur KERYX pour votre garage',
            color: '#F97316',
            faqs: [
                {
                    category: "Dépannages & Réparations",
                    questions: [
                        {
                            q: "Comment KERYX gère-t-il les demandes de dépannage ?",
                            a: "KERYX prend les appels de dépannage 24/7, note la localisation, le type de panne, et vous envoie toutes les informations immédiatement par SMS."
                        },
                        {
                            q: "L'assistant peut-il qualifier les pannes ?",
                            a: "Oui ! KERYX pose les bonnes questions pour identifier le problème (batterie, pneu, moteur...) et vous indique les pièces potentiellement nécessaires."
                        }
                    ]
                },
                {
                    category: "Rendez-vous atelier",
                    questions: [
                        {
                            q: "Comment sont gérés les rendez-vous atelier ?",
                            a: "KERYX consulte votre planning, propose des créneaux selon le type d'intervention, et confirme le rendez-vous avec rappel SMS automatique."
                        }
                    ]
                }
            ]
        },
        coiffeur: {
            title: 'Questions Fréquentes - Coiffeur',
            subtitle: 'Tout ce que vous devez savoir sur KERYX pour votre salon',
            color: '#EC4899',
            faqs: [
                {
                    category: "Réservations",
                    questions: [
                        {
                            q: "Comment KERYX gère-t-il les réservations ?",
                            a: "KERYX prend les réservations 24/7, propose des créneaux disponibles selon le type de prestation, et confirme automatiquement avec rappel SMS."
                        },
                        {
                            q: "L'assistant peut-il renseigner sur les prestations et tarifs ?",
                            a: "Oui ! Vous configurez votre carte de prestations avec les tarifs et durées, et KERYX répond précisément aux questions des clients."
                        }
                    ]
                },
                {
                    category: "Gestion de l'agenda",
                    questions: [
                        {
                            q: "Comment optimiser mon agenda avec KERYX ?",
                            a: "KERYX remplit automatiquement les créneaux vides en proposant les disponibilités en temps réel, maximisant ainsi votre taux de remplissage."
                        }
                    ]
                }
            ]
        }
    };

    const currentData = faqData[industry] || faqData.restaurant;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    let questionIndex = 0;

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#0B0E14' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: `${currentData.color}33` }}>
                                <HelpCircle className="w-8 h-8" style={{ color: currentData.color }} />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#F3F4F6' }}>
                                {currentData.title}
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                                {currentData.subtitle}
                            </p>
                        </div>

                        {/* FAQ Categories */}
                        <div className="space-y-8">
                            {currentData.faqs.map((category: any, catIndex: number) => (
                                <div key={catIndex}>
                                    <h2 className="text-2xl font-bold mb-4" style={{ color: currentData.color }}>
                                        {category.category}
                                    </h2>
                                    <div className="space-y-3">
                                        {category.questions.map((faq: any) => {
                                            const currentIndex = questionIndex++;
                                            const isOpen = openIndex === currentIndex;

                                            return (
                                                <div
                                                    key={currentIndex}
                                                    className="glass-panel rounded-xl border transition-all"
                                                    style={{
                                                        borderColor: isOpen ? `${currentData.color}4D` : 'rgba(243, 244, 246, 0.1)',
                                                        backgroundColor: 'rgba(31, 41, 55, 0.3)'
                                                    }}
                                                >
                                                    <button
                                                        onClick={() => toggleFAQ(currentIndex)}
                                                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                                                    >
                                                        <span className="font-semibold text-lg" style={{ color: '#F3F4F6' }}>
                                                            {faq.q}
                                                        </span>
                                                        <ChevronDown
                                                            className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                            style={{ color: currentData.color }}
                                                        />
                                                    </button>

                                                    {isOpen && (
                                                        <div className="px-6 pb-6">
                                                            <p style={{ color: '#9CA3AF' }} className="leading-relaxed">
                                                                {faq.a}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-16 text-center glass-panel p-8 rounded-2xl border" style={{ borderColor: `${currentData.color}4D`, backgroundColor: 'rgba(31, 41, 55, 0.3)' }}>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#F3F4F6' }}>
                                Vous ne trouvez pas votre réponse ?
                            </h3>
                            <p className="mb-6" style={{ color: '#9CA3AF' }}>
                                Notre équipe est là pour répondre à toutes vos questions
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
                                style={{
                                    backgroundColor: currentData.color,
                                    color: '#F3F4F6'
                                }}
                            >
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
