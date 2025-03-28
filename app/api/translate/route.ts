import { NextResponse, NextRequest } from 'next/server';

export async function  POST(req: NextRequest) {
    try {
        const body = await req.json();

        const response = await fetch("https://d603-46-122-68-255.ngrok-free.app/translate", {
            method: "POST",
            body: JSON.stringify({
                q: body.q,
                source: "it",
                target: "en",
                format: "text",
                api_key: ""  // Make sure to replace this with the actual API key
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Error translating text' }, { status: 500 });
    }
}
