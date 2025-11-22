import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function Home() {
  // Sample products - replace with actual data from your database
  const featuredProducts = [
    {
      id: "1",
      name: "Methi Khakhra",
      price: 120,
      imageUrl: "/khakhra.jpg",
      description: "Classic fenugreek flavored khakhra"
    },
    {
      id: "2",
      name: "Jeera Khakhra",
      price: 120,
      imageUrl: "/khakhra.jpg",
      description: "Cumin spiced traditional khakhra"
    },
    {
      id: "3",
      name: "Pizza Khakhra",
      price: 140,
      imageUrl: "/khakhra.jpg",
      description: "Fusion pizza flavored khakhra"
    },
    {
      id: "4",
      name: "Masala Khakhra",
      price: 130,
      imageUrl: "/khakhra.jpg",
      description: "Spicy masala khakhra"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/kha1.jpg" 
            alt="Shivam Foods Khakhra" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay - Primary color on left fading to transparent on right */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(13, 82, 75, 0.98) 0%, rgba(13, 82, 75, 0.9) 30%, rgba(13, 82, 75, 0.6) 50%, rgba(13, 82, 75, 0.2) 70%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Authentic Gujarati Flavors,<br />
              Crafted with Love & Hygiene
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100">
              Handmade Khakhra & Traditional Indian Snacks<br />
              Made Fresh | 100% Vegetarian | No Preservatives
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/shop"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: 'var(--secondary-color)' }}
              >
                Shop Our Bestsellers
              </Link>
              <Link
                href="/combos"
                className="px-8 py-4 bg-white text-[#0d524b] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Explore Combos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Image src="/fssai.jpg" alt="FSSAI Certified" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--primary-color)' }}>FSSAI Certified</h3>
              <p className="text-xs text-gray-600">Food Safety Guaranteed</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Image src="/fresh.jpg" alt="Made Fresh Daily" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--primary-color)' }}>Made Fresh Daily</h3>
              <p className="text-xs text-gray-600">No Preservatives</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Image src="/veg.jpg" alt="100% Vegetarian" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--primary-color)' }}>100% Vegetarian</h3>
              <p className="text-xs text-gray-600">Pure & Natural</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Image src="/free.jpg" alt="Free Shipping" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--primary-color)' }}>Free Shipping</h3>
              <p className="text-xs text-gray-600">On Orders Above ₹500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-color)' }}>
            Customer Favorites
          </h2>
          <p className="text-center text-gray-600 mb-12">Most loved flavors flying off the shelves</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--primary-color)' }}>
            Why Thousands Trust Shivam Foods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Image src="/hygiene.png" alt="Hygiene First" width={100} height={100} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Hygiene First</h3>
              <p className="text-gray-600">
                Every batch is made in our FSSAI-certified kitchen with strict hygiene protocols. From sourcing to packaging, we maintain the highest food safety standards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Image src="/auth.png" alt="Authentic Taste" width={100} height={100} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Authentic Taste</h3>
              <p className="text-gray-600">
                Recipes passed down through generations. We use traditional techniques and premium ingredients to capture the authentic Gujarati taste in every bite.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Image src="/natural.png" alt="Fresh & Natural" width={100} height={100} className="object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Fresh & Natural</h3>
              <p className="text-gray-600">
                Made fresh to order with zero preservatives or artificial flavors. Just pure, wholesome ingredients you can trust for your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Ready to Experience Authentic Gujarati Flavors?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Order now and get free shipping on your first order above ₹500
          </p>
          <Link
            href="/shop"
            className="inline-block px-10 py-5 text-white text-xl font-semibold rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--secondary-color)' }}
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Get 10% Off Your First Order
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive exclusive deals, new flavor launches, and authentic recipes straight to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
            />
            <button
              className="px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
