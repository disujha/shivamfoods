import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  // Sample products - replace with actual data from your database
  const products = [
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
    },
    {
      id: "5",
      name: "Garlic Khakhra",
      price: 130,
      imageUrl: "/khakhra.jpg",
      description: "Bold garlic flavored khakhra"
    },
    {
      id: "6",
      name: "Pudina Khakhra",
      price: 125,
      imageUrl: "/khakhra.jpg",
      description: "Refreshing mint flavored khakhra"
    },
    {
      id: "7",
      name: "Palak Khakhra",
      price: 125,
      imageUrl: "/khakhra.jpg",
      description: "Healthy spinach khakhra"
    },
    {
      id: "8",
      name: "Chilli Garlic Khakhra",
      price: 135,
      imageUrl: "/khakhra.jpg",
      description: "Spicy chilli garlic combo"
    },
    {
      id: "9",
      name: "Cheese Khakhra",
      price: 150,
      imageUrl: "/khakhra.jpg",
      description: "Creamy cheese flavored khakhra"
    },
    {
      id: "10",
      name: "Mixed Masala Khakhra",
      price: 135,
      imageUrl: "/khakhra.jpg",
      description: "Special blend of masalas"
    },
    {
      id: "11",
      name: "Ajwain Khakhra",
      price: 120,
      imageUrl: "/khakhra.jpg",
      description: "Traditional carom seed khakhra"
    },
    {
      id: "12",
      name: "Plain Khakhra",
      price: 110,
      imageUrl: "/khakhra.jpg",
      description: "Simple and classic plain khakhra"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-100">
            Discover our complete range of authentic Gujarati snacks
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 border-b sticky top-[140px] z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2 rounded-lg font-medium transition-all text-white" style={{ backgroundColor: 'var(--secondary-color)' }}>
                All Products
              </button>
              <button className="px-4 py-2 rounded-lg font-medium border border-gray-300 hover:border-[#0d524b] transition-all text-gray-700 hover:text-[#0d524b]">
                Khakhra
              </button>
              <button className="px-4 py-2 rounded-lg font-medium border border-gray-300 hover:border-[#0d524b] transition-all text-gray-700 hover:text-[#0d524b]">
                Combo Packs
              </button>
              <button className="px-4 py-2 rounded-lg font-medium border border-gray-300 hover:border-[#0d524b] transition-all text-gray-700 hover:text-[#0d524b]">
                Best Sellers
              </button>
            </div>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0d524b]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A-Z</option>
              <option>Name: Z-A</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-gray-600">
            <p>Showing {products.length} products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Looking for Bulk Orders?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Special pricing available for restaurants, retailers, and corporate orders
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
