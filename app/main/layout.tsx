// app/(main)/layout.tsx
import React from 'react';
import { Navbar } from '@/components/Navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        {children}
      </main>
      {/* Footer component will go here later */}
    </div>
  );
}