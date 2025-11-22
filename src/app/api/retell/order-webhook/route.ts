import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            restaurant_id,
            customer_phone,
            order_type,
            pickup_time,
            delivery_address,
            items,
            notes
        } = body;

        if (!restaurant_id || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'restaurant_id and items are required' }, { status: 400 });
        }

        const orderId = uuidv4();

        const { data: products, error: prodError } = await supabaseAdmin
            .from('products')
            .select('id, price')
            .eq('restaurant_id', restaurant_id);

        if (prodError) {
            console.error(prodError);
            return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
        }

        let total = 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const orderItems: any[] = [];

        for (const item of items) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const product = (products || []).find((p: any) => p.id === item.product_id);
            if (!product) {
                return NextResponse.json({ error: `Unknown product_id: ${item.product_id}` }, { status: 400 });
            }
            const quantity = item.quantity || 1;
            const lineTotal = product.price * quantity;
            total += lineTotal;
            orderItems.push({
                order_id: orderId,
                product_id: product.id,
                quantity,
                unit_price: product.price,
                line_total: lineTotal
            });
        }

        const { error: orderError } = await supabaseAdmin.from('orders').insert({
            id: orderId,
            restaurant_id,
            customer_phone,
            order_type: order_type || 'pickup',
            pickup_time: pickup_time || null,
            delivery_address: delivery_address || null,
            total_price: total,
            currency: 'EUR',
            notes: notes || null,
            status: 'new',
            source: 'voice'
        });

        if (orderError) {
            console.error(orderError);
            return NextResponse.json({ error: 'Error inserting order' }, { status: 500 });
        }

        const { error: itemsError } = await supabaseAdmin.from('order_items').insert(orderItems);
        if (itemsError) {
            console.error(itemsError);
            return NextResponse.json({ error: 'Error inserting order items' }, { status: 500 });
        }

        return NextResponse.json({ status: 'ok', order_id: orderId, total });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
