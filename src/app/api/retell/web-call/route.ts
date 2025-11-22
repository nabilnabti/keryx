import { NextRequest, NextResponse } from 'next/server';
import Retell from 'retell-sdk';

export async function POST(request: NextRequest) {
    try {
        const { agent_id } = await request.json();

        if (!agent_id) {
            return NextResponse.json(
                { error: 'agent_id is required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.RETELL_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: 'RETELL_API_KEY not configured' },
                { status: 500 }
            );
        }

        const client = new Retell({ apiKey });

        const webCallResponse = await client.call.createWebCall({
            agent_id,
        });

        return NextResponse.json({
            access_token: webCallResponse.access_token,
            call_id: webCallResponse.call_id,
        });
    } catch (error) {
        console.error('Error creating web call:', error);

        // Check if it's a 404 error (agent not found)
        if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
            return NextResponse.json(
                { error: `Agent non trouvé. Vérifie que l'ID de l'agent existe dans ton dashboard Retell AI. L'ID doit être un agent ID (commence généralement par "agent_"), pas un LLM ID.` },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to create web call' },
            { status: 500 }
        );
    }
}
