'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LiveOrders from '@/components/dashboard/live-orders';

export default function DashboardPage() {
    const [restaurantId, setRestaurantId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const id = localStorage.getItem('restaurant_id');
        if (!id) {
            router.push('/login');
        } else if (id !== restaurantId) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRestaurantId(id);
        }
    }, [router, restaurantId]);

    if (!restaurantId) return null;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Commandes en Live</h2>
                <p className="text-gray-400">
                    Les commandes vocales arrivent ici en temps réel.
                </p>
            </div>

            <LiveOrders currentRestaurantId={restaurantId} />
        </div>
    );
}
