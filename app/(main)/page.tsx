// app/(main)/page.tsx

// Note: This is a Server Component by default, making it fast!
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="text-center py-20 bg-green-50 rounded-lg shadow-xl">
      <h2 className="text-5xl font-extrabold text-green-900 mb-4">
        Authentic Village Rice, Hand-Grown 🌾
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        From our family fields to your table. Experience the pure taste of nature, cultivated without chemicals or synthetic fertilizers.
      </p>
      <div className="space-x-4">
        <Link href="/products">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            View All Products
          </Button>
        </Link>
        <Link href="/about">
          <Button size="lg" variant="outline">
            Read Our Story
          </Button>
        </Link>
      </div>
    </section>
  );
}