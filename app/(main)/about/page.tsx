// app/(main)/about/page.tsx
// This is the essential structure required by Next.js
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800">Our Story of Cultivation</h1>
      <p className="text-lg text-gray-600">
        We are a collective of small farming families dedicated to sustainable agriculture. Our fields are nestled in the pristine highlands, where the air is clean and the water is naturally filtered.
      </p>
      <h2 className="text-2xl font-semibold text-green-700">The Natural Way</h2>
      <p>
        For generations, we have relied on traditional methods. We use natural fertilizer derived from cow dung and green manure, avoiding all synthetic chemicals. This commitment ensures our rice is not just a food source, but a pure, nourishing experience.
      </p>
    </div>
  );
}