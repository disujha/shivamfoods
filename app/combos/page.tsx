import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

export default function Combos() {
  // Sample combo packs - replace with actual data from your database
  const comboPacks = [
    {
      id: "combo-1",
      name: "Family Pack - Mixed Flavors",
      price: 450,
      imageUrl: "/khakhra.jpg",
      description: "4 packs of assorted khakhra flavors (Methi, Jeera, Masala, Garlic)"
    },
    {
      id: "combo-2",
      name: "Festival Special Combo",
      price: 650,
      imageUrl: "/khakhra.jpg",
      description: "6 premium flavors in a beautiful gift box"
    },
    {
      id: "combo-3",
      name: "Spicy Lovers Combo",
      price: 550,
      imageUrl: "/khakhra.jpg",
      description: "5 packs of spicy varieties (Masala, Chilli Garlic, Pizza, Mixed)"
    },
    {
      id: "combo-4",
      name: "Traditional Combo",
      price: 400,
      imageUrl: "/khakhra.jpg",
      description: "Classic flavors combo (Methi, Jeera, Ajwain, Plain)"
    },
    {
      id: "combo-5",
      name: "Premium Gift Hamper",
      price: 850,
      imageUrl: "/khakhra.jpg",
      description: "8 flavors in premium packaging - perfect for gifting"
    },
    {
      id: "combo-6",
      name: "Office Snack Pack",
      price: 700,
      imageUrl: "/khakhra.jpg",
      description: "6 packs ideal for office pantry or sharing"
    },
    {
      id: "combo-7",
      name: "Health Mix Combo",
      price: 500,
      imageUrl: "/khakhra.jpg",
      description: "Healthy options (Palak, Methi, Ajwain, Plain)"
    },
    {
      id: "combo-8",
      name: "Party Pack",
      price: 950,
      imageUrl: "/khakhra.jpg",
      description: "10 assorted packs for gatherings and parties"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Combo Packs</h1>
          <p className="text-xl text-gray-100">
            Curated snack hampers perfect for gifting or sharing
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>Save More</h3>
              <p className="text-gray-600">Get up to 20% off on combo packs</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>Perfect Gifts</h3>
              <p className="text-gray-600">Beautiful packaging for any occasion</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>Variety Pack</h3>
              <p className="text-gray-600">Try multiple flavors in one pack</p>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Packs Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              Our Combo Collections
            </h2>
            <p className="text-gray-600">
              Choose from our specially curated combo packs. Mix & match your favorite flavors or opt for our pre-selected collections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {comboPacks.map((combo) => (
              <ProductCard key={combo.id} product={combo} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Combo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Want to Create Your Own Combo?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Choose your favorite flavors and create a custom combo pack tailored to your taste
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--secondary-color)' }}
          >
            Build Your Combo
          </Link>
        </div>
      </section>

      {/* Why Choose Combo Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--primary-color)' }}>
            Why Choose Combo Packs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Better Value</h3>
                <p className="text-gray-600">Save 15-20% compared to buying individual packs</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Explore Flavors</h3>
                <p className="text-gray-600">Try multiple varieties without committing to large quantities</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Gift Ready</h3>
                <p className="text-gray-600">Premium packaging suitable for all occasions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Fresh Guarantee</h3>
                <p className="text-gray-600">All packs are made fresh to order</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Need Larger Quantities?
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Contact us for bulk orders and corporate gifting options
          </p>
          <Link
            href="/bulk-orders"
            className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--secondary-color)' }}
          >
            Get Bulk Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
