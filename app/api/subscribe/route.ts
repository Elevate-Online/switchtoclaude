import { NextRequest, NextResponse } from 'next/server';

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_API_URL = 'https://api.convertkit.com/v3';

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, tagId } = await req.json();

    if (!email || !tagId) {
      return NextResponse.json({ error: 'Email and tagId are required' }, { status: 400 });
    }

    if (!KIT_API_KEY) {
      console.error('KIT_API_KEY is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Subscribe to tag (this also creates the subscriber if they don't exist)
    const tagRes = await fetch(`${KIT_API_URL}/tags/${tagId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: KIT_API_KEY,
        email,
        first_name: firstName || '',
      }),
    });

    if (!tagRes.ok) {
      const err = await tagRes.json();
      console.error('ConvertKit API error:', err);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    const data = await tagRes.json();
    console.log('ConvertKit success:', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}