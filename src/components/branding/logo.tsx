'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * Dynamic logo that adapts its colors based on the current industry route.
 * For the home page (restaurant) it uses the default red/orange palette.
 */
export function Logo() {
    const pathname = usePathname();

    // Default colors (restaurant)
    let bgColor = '#E11D48'; // pink/red
    let gradientFrom = '#E11D48';
    let gradientTo = '#F97316';

    if (pathname.startsWith('/industries/medecin')) {
        bgColor = '#3B82F6'; // blue
        gradientFrom = '#3B82F6';
        gradientTo = '#60A5FA';
    } else if (pathname.startsWith('/industries/plombier')) {
        bgColor = '#06B6D4'; // cyan
        gradientFrom = '#06B6D4';
        gradientTo = '#22D3EE';
    } else if (pathname.startsWith('/industries/garagiste')) {
        bgColor = '#F97316'; // orange
        gradientFrom = '#F97316';
        gradientTo = '#FB923C';
    } else if (pathname.startsWith('/industries/coiffeur')) {
        bgColor = '#EC4899'; // pink
        gradientFrom = '#EC4899';
        gradientTo = '#A855F7';
    } else if (pathname.startsWith('/industries/agent-immobilier')) {
        bgColor = '#10B981'; // emerald green
        gradientFrom = '#10B981';
        gradientTo = '#34D399';
    }

    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/keryx-logo.png" alt="KERYX" width={40} height={40} />
            <span
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
                style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
            >
                KERYX
            </span>
        </Link>
    );
}
