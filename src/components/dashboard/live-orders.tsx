'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Phone, ShoppingBag } from 'lucide-react';

export default function LiveOrders({ currentRestaurantId }: { currentRestaurantId: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        if (!currentRestaurantId) return;

        const fetchOrders = async () => {
            const { data } = await supabaseClient
                .from('orders')
                .select('*, order_items(*, products(*))')
                .eq('restaurant_id', currentRestaurantId)
                .order('created_at', { ascending: false });

            if (data) setOrders(data);
        };

        fetchOrders();

        const channel = supabaseClient
            .channel('realtime orders')
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'orders',
                filter: 'restaurant_id=eq.' + currentRestaurantId
            },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (payload: any) => {
                    if (payload.eventType === 'INSERT') {
                        setOrders((prev) => [payload.new, ...prev]);
                    } else if (payload.eventType === 'UPDATE') {
                        setOrders((prev) => prev.map(o => o.id === payload.new.id ? payload.new : o));
                    }
                })
            .subscribe();

        return () => {
            supabaseClient.removeChannel(channel);
        };
    }, [currentRestaurantId]);

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
                <div key={order.id} className="glass-panel rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="p-6 border-b border-white/10 bg-white/5">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2 text-blue-400">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                    order.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                                }`}>
                                {order.status === 'pending' ? 'En attente' : order.status}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white font-medium">{order.customer_phone}</p>
                                <p className="text-xs text-gray-400">Commande Vocale</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="space-y-3 mb-6">
                            {order.order_items?.map((item: any) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-300">
                                        <span className="text-blue-400 font-bold mr-2">{item.quantity}x</span>
                                        {item.products?.name || 'Produit inconnu'}
                                    </span>
                                    <span className="text-white font-medium">{(item.unit_price * item.quantity).toFixed(2)} €</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Total</span>
                            <span className="text-2xl font-bold text-white">{order.total_price} €</span>
                        </div>
                    </div>
                </div>
            ))}

            {orders.length === 0 && (
                <div className="col-span-full text-center py-20 glass-panel rounded-xl border-dashed border-white/20">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Aucune commande pour le moment</h3>
                    <p className="text-gray-500">Les commandes apparaîtront ici en temps réel.</p>
                </div>
            )}
        </div>
    );
}
