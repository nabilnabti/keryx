'use server';

import { supabaseAdmin, supabaseClient } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signupRestaurant(prevState: any, formData: FormData) {
    const restaurant_name = formData.get('restaurant_name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!restaurant_name || !email || !password) {
        return { error: 'Missing fields' };
    }

    // Check for Service Role Key
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
        console.error('SUPABASE_SERVICE_ROLE_KEY is missing');
        return { error: 'Configuration error: Missing Service Role Key. Please check .env.local' };
    }

    const restaurantId = uuidv4();

    try {
        const { error: restError } = await supabaseAdmin.from('restaurants').insert({
            id: restaurantId,
            name: restaurant_name,
            email
        });
        if (restError) {
            console.error('Error creating restaurant:', restError);
            return { error: `Database error: ${restError.message}` };
        }
    } catch (e) {
        console.error('Unexpected error creating restaurant:', e);
        return { error: 'Unexpected error during restaurant creation' };
    }

    const { data: user, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        user_metadata: {
            restaurant_id: restaurantId
        },
        email_confirm: true // Auto confirm for MVP
    });

    if (authError) {
        console.error(authError);
        return { error: 'Error creating user' };
    }

    return { restaurant_id: restaurantId, user_id: user?.user?.id };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loginRestaurant(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'Missing credentials' };
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
        console.error(error);
        return { error: 'Invalid credentials' };
    }

    return { session: data.session, user: data.user };
}
