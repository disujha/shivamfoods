import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

export default function Khakhra() {
  // All khakhra varieties
  const khakhraProducts = [
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
    },
    {
      id: "13",
      name: "Tomato Khakhra",
      price: 125,
      imageUrl: "/khakhra.jpg",
      description: "Tangy tomato flavored khakhra"
    },
    {
      id: "14",
      name: "Pav Bhaji Khakhra",
      price: 140,
      imageUrl: "/khakhra.jpg",
      description: "Mumbai's favorite pav bhaji flavor"
    },
    {
      id: "15",
      name: "Schezwan Khakhra",
      price: 145,
      imageUrl: "/khakhra.jpg",
      description: "Indo-Chinese schezwan spice"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Khakhra Collection</h1>
          <p className="text-xl text-gray-100">
            Authentic handmade Gujarati khakhra in 15+ delicious flavors
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              What Makes Our Khakhra Special?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🥖</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Handmade</h3>
              <p className="text-sm text-gray-600">Each khakhra is carefully hand-rolled and roasted</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>No Preservatives</h3>
              <p className="text-sm text-gray-600">100% natural with zero artificial additives</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Made Fresh</h3>
              <p className="text-sm text-gray-600">Prepared fresh daily for maximum taste</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Authentic Recipe</h3>
              <p className="text-sm text-gray-600">Traditional Gujarati preparation method</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>
                All Khakhra Flavors
              </h2>
              <p className="text-gray-600">Showing {khakhraProducts.length} varieties</p>
            </div>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0d524b]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A-Z</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {khakhraProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Can't Decide? Try Our Combo Packs
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Get assorted flavors in one pack and discover your favorites
          </p>
          <Link
            href="/combos"
            className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--secondary-color)' }}
          >
            Explore Combo Packs
          </Link>
        </div>
      </section>
    </div>
  );
}
