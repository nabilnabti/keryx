'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { savePhoneSettings } from '@/app/actions/settings';
import { useActionState } from 'react';

export default function PhonePage() {
    const [restaurantId, setRestaurantId] = useState<string | null>(null);
    const router = useRouter();
    const [state, formAction] = useActionState(savePhoneSettings, null);

    // Form default values state
    const [defaultValues, setDefaultValues] = useState({
        phone_number: '',
        language: 'fr-FR',
        agent_style: 'professional'
    });

    useEffect(() => {
        const id = localStorage.getItem('restaurant_id');
        if (!id) {
            router.push('/login');
        } else {
            setRestaurantId(id);
            fetchSettings(id);
        }
    }, [router]);

    async function fetchSettings(id: string) {
        const { data } = await supabaseClient
            .from('phone_settings')
            .select('*')
            .eq('restaurant_id', id)
            .single();

        if (data) {
            setDefaultValues({
                phone_number: data.phone_number || '',
                language: data.language || 'fr-FR',
                agent_style: data.agent_style || 'professional'
            });
        }
    }

    if (!restaurantId) return null;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Téléphonie & Agent IA</h2>
                <p className="text-gray-400">
                    Configure ici ton numéro Retell et la personnalité de ton agent vocal.
                </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-white/10">
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white">Configuration</h3>
                </div>

                <form action={formAction} className="space-y-6">
                    <input type="hidden" name="restaurant_id" value={restaurantId} />

                    <div className="space-y-2">
                        <Label htmlFor="phone_number" className="text-gray-300">Numéro IA Retell</Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            placeholder="+33 1 23 45 67 89"
                            defaultValue={defaultValues.phone_number}
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20"
                        />
                        <p className="text-xs text-gray-500">Le numéro fourni par Retell AI.</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="language" className="text-gray-300">Langue principale</Label>
                        <select
                            id="language"
                            name="language"
                            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
                            defaultValue={defaultValues.language}
                            key={defaultValues.language} // Force re-render when defaults load
                        >
                            <option value="fr-FR" className="bg-gray-900">Français (France)</option>
                            <option value="en-US" className="bg-gray-900">English (US)</option>
                            <option value="es-ES" className="bg-gray-900">Español (Spain)</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="agent_style" className="text-gray-300">Style de voix / ton</Label>
                        <select
                            id="agent_style"
                            name="agent_style"
                            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
                            defaultValue={defaultValues.agent_style}
                            key={defaultValues.agent_style}
                        >
                            <option value="professional" className="bg-gray-900">Professionnel</option>
                            <option value="chaleureux" className="bg-gray-900">Chaleureux</option>
                            <option value="rapide" className="bg-gray-900">Rapide / Efficace</option>
                        </select>
                    </div>

                    {state?.message && (
                        <div className="p-3 rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                            Paramètres enregistrés avec succès !
                        </div>
                    )}

                    {state?.error && (
                        <div className="p-3 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
                            {state.error}
                        </div>
                    )}

                    <Button type="submit" variant="glass" className="w-full sm:w-auto bg-blue-600/80 hover:bg-blue-500/80">
                        Enregistrer les modifications
                    </Button>
                </form>
            </div>
        </div>
    );
}
