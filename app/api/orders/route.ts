// app/api/orders/route.ts

import { NextResponse } from 'next/server';

// Handle POST requests to /api/orders
export async function POST() {
  // We'll replace this with real order saving logic on Day 4.
  // For now, return a placeholder success message.
  return NextResponse.json({ message: 'Order created (placeholder)' }, { status: 201 });
}

// Optional: Handle GET requests to fetch orders (for the Admin page)
export async function GET() {
  // Return an empty array and a success status.
  return NextResponse.json({ orders: [] }, { status: 200 });
}