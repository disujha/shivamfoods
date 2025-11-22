import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Shivam Foods</h1>
          <p className="text-xl text-gray-100">
            Tradition, Quality, and Authentic Flavors Since Years
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: 'var(--primary-color)' }}>
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Shivam Foods was born from a passion for preserving authentic Gujarati culinary traditions while maintaining the highest standards of hygiene and quality. What started as a small family venture has grown into a trusted name for authentic khakhra and traditional Indian snacks.
            </p>
            <p className="mb-4">
              Our journey began with a simple mission: to bring the authentic taste of Gujarat to homes across India. We use time-honored recipes passed down through generations, combined with modern food safety practices to ensure every bite is both delicious and safe.
            </p>
            <p>
              Today, we're proud to serve thousands of happy customers who trust us for their daily snacking needs, festival gifting, and bulk requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--primary-color)' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Image src="/hygiene.png" alt="Hygiene" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Hygiene First</h3>
              <p className="text-gray-600">
                FSSAI-certified kitchen with strict hygiene protocols at every step of production
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Image src="/auth.png" alt="Authenticity" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Authenticity</h3>
              <p className="text-gray-600">
                Traditional recipes and techniques to preserve the genuine taste of Gujarat
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Image src="/natural.png" alt="Natural" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Natural Ingredients</h3>
              <p className="text-gray-600">
                100% natural ingredients with no preservatives or artificial flavors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--primary-color)' }}>
            Our Quality Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>Made Fresh Daily</h4>
                <p className="text-gray-600">Every batch is prepared fresh to ensure maximum taste and quality</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>FSSAI Certified</h4>
                <p className="text-gray-600">Fully certified and compliant with all food safety standards</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>Premium Ingredients</h4>
                <p className="text-gray-600">We source only the finest quality ingredients for our products</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>100% Vegetarian</h4>
                <p className="text-gray-600">All products are completely vegetarian with no animal derivatives</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>No Preservatives</h4>
                <p className="text-gray-600">Zero artificial preservatives, colors, or flavors in any product</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>Quality Control</h4>
                <p className="text-gray-600">Rigorous quality checks at every stage of production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Experience the Shivam Foods Difference
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied customers who trust us for authentic taste and quality
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/shop"
              className="px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              Start Shopping
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-lg font-semibold rounded-lg transition-all hover:bg-gray-100"
              style={{ color: 'var(--primary-color)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
