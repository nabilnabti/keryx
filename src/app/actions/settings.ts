'use server';

import { supabaseAdmin } from '@/lib/supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function savePhoneSettings(prevState: any, formData: FormData) {
    const restaurant_id = formData.get('restaurant_id') as string;
    const phone_number = formData.get('phone_number') as string;
    const language = formData.get('language') as string;
    const agent_style = formData.get('agent_style') as string;

    if (!restaurant_id) {
        return { error: 'Missing restaurant_id' };
    }

    const { error } = await supabaseAdmin.from('phone_settings').upsert({
        restaurant_id,
        phone_number,
        language,
        agent_style,
        updated_at: new Date().toISOString()
    }, { onConflict: 'restaurant_id' });

    if (error) {
        console.error(error);
        return { error: 'Error saving settings' };
    }

    return { message: 'Success' };
}
