// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import the new shadcn button

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-10">
      <Link href="/">
        <h2 className="text-5xl font-extrabold text-green-900 mb-4">
          Village Harvest 🌾
        </h2>
      </Link>
      <div className="space-x-4">
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/products">
          <Button variant="ghost">Products</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">Our Story</Button>
        </Link>
        <Link href="/order">
          <Button className="bg-green-600 hover:bg-green-700">Order Now</Button>
        </Link>
        {/* Admin link will be visible only to us for now */}
        <Link href="/admin">
          <Button variant="outline" size="sm">Admin</Button>
        </Link>
      </div>
    </nav>
  );
}
