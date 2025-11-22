import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const restaurantId = searchParams.get('restaurant_id');

        if (!restaurantId) {
            return NextResponse.json({ error: 'restaurant_id is required' }, { status: 400 });
        }

        const { data: categories, error: catError } = await supabaseAdmin
            .from('categories')
            .select('id, name, position')
            .eq('restaurant_id', restaurantId)
            .order('position', { ascending: true });

        if (catError) {
            console.error(catError);
            return NextResponse.json({ error: 'Error fetching categories' }, { status: 500 });
        }

        const { data: products, error: prodError } = await supabaseAdmin
            .from('products')
            .select('id, name, description, price, category_id, is_available')
            .eq('restaurant_id', restaurantId)
            .eq('is_available', true);

        if (prodError) {
            console.error(prodError);
            return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
        }

        const categoriesWithProducts = (categories || []).map((cat) => ({
            id: cat.id,
            name: cat.name,
            products: (products || [])
                .filter((p) => p.category_id === cat.id)
                .map((p) => ({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    price: p.price
                }))
        }));

        return NextResponse.json({
            restaurant_id: restaurantId,
            currency: 'EUR',
            categories: categoriesWithProducts
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
