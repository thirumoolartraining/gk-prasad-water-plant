import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, pincode, volume } = body;

    // Validate required fields
    if (!name || !phone || !email || !pincode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically save to a database or send to a CRM
    // For now, we'll just log the data and return success
    console.log('New bulk order inquiry:', {
      name,
      company,
      phone,
      email,
      pincode,
      volume,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        id: Math.random().toString(36).substr(2, 9)
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}