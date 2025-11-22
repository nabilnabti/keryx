import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { restaurant_id, items } = body;

        if (!restaurant_id || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'restaurant_id and items are required' }, { status: 400 });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const productIds = items.map((i: any) => i.product_id);

        const { data: products, error } = await supabaseAdmin
            .from('products')
            .select('id, name, price')
            .eq('restaurant_id', restaurant_id)
            .in('id', productIds);

        if (error) {
            console.error(error);
            return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lines: any[] = [];
        let total = 0;

        for (const item of items) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const product = (products || []).find((p: any) => p.id === item.product_id);
            if (!product) {
                return NextResponse.json({
                    error: `Unknown product_id: ${item.product_id}`
                }, { status: 400 });
            }
            const quantity = item.quantity || 1;
            const lineTotal = product.price * quantity;
            total += lineTotal;
            lines.push({
                product_id: product.id,
                name: product.name,
                unit_price: product.price,
                quantity,
                line_total: lineTotal
            });
        }

        return NextResponse.json({
            valid: true,
            currency: 'EUR',
            items: lines,
            total
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
