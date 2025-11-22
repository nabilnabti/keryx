'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, UtensilsCrossed, Phone, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
    { name: 'Commandes en live', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Menu', href: '/dashboard/menu', icon: UtensilsCrossed },
    { name: 'Téléphonie & IA', href: '/dashboard/phone', icon: Phone },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('restaurant_id');
        router.push('/login');
    };

    return (
        <div className="w-64 h-full glass-panel border-r border-white/10 flex flex-col relative z-20">
            <div className="p-6 border-b border-white/10">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    KERYX
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href}>
                            <span className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-white/10 text-white shadow-lg shadow-purple-500/10 border border-white/10'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}>
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : ''}`} />
                                <span className="font-medium">{item.name}</span>
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                    onClick={handleLogout}
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    Déconnexion
                </Button>
            </div>
        </div>
    );
}
