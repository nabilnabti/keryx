'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signupRestaurant } from '@/app/actions/auth';
import { useActionState } from 'react';
import { Sparkles } from 'lucide-react';

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [state, formAction] = useActionState(signupRestaurant, null);

    useEffect(() => {
        if (state?.restaurant_id) {
            localStorage.setItem('restaurant_id', state.restaurant_id);
            router.push('/dashboard');
        } else if (state?.error) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLoading(false);
        }
    }, [state, router]);

    return (
        <div className="glass-panel p-8 rounded-2xl border-white/10 shadow-2xl backdrop-blur-xl bg-black/40">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 mb-4 shadow-lg shadow-purple-500/30">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Créer un compte</h1>
                <p className="text-gray-400">Commencez à automatiser vos commandes dès aujourd'hui.</p>
            </div>

            <form action={formAction} onSubmit={() => setLoading(true)} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="restaurant_name" className="text-gray-300">Nom du restaurant</Label>
                    <Input
                        id="restaurant_name"
                        name="restaurant_name"
                        placeholder="Chez Luigi"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20 h-11"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email professionnel</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="contact@resto.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20 h-11"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Mot de passe</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20 h-11"
                    />
                </div>

                {state?.error && (
                    <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                        {state.error}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
                    disabled={loading}
                >
                    {loading ? 'Création en cours...' : "S'inscrire gratuitement"}
                </Button>

                <p className="text-sm text-center text-gray-500">
                    Déjà un compte ? <Link href="/login" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Se connecter</Link>
                </p>
            </form>
        </div>
    );
}
