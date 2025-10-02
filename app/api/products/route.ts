// app/api/products/route.ts

import { NextResponse } from 'next/server';

// Handle GET requests to /api/products
export async function GET() {
  // We'll replace this with real MongoDB logic on Day 3.
  // For now, return an empty array and a success status.
  return NextResponse.json({ products: [] }, { status: 200 });
}

// Optional: You can also export other HTTP methods you won't use yet
// to prevent "Method Not Allowed" errors if Vercel checks for them.
// export async function POST() {}