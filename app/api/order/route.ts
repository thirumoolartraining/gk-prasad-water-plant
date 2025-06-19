import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      company, 
      gstNo, 
      email, 
      phone, 
      address, 
      city, 
      state, 
      pincode, 
      items, 
      totalAmount, 
      totalItems 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !state || !pincode || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the order data (in production, you'd save to database or send to CRM)
    console.log('New order received:', {
      customer: {
        name,
        company,
        gstNo,
        email,
        phone,
        address: `${address}, ${city}, ${state} ${pincode}`,
      },
      order: {
        items: items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          total: item.quantity * item.unitPrice,
        })),
        totalItems,
        totalAmount,
      },
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        message: 'Order placed successfully',
        orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}