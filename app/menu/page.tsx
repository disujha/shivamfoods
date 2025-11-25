'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Product data
const menuProducts = [
  {
    id: "1",
    name: "Methi Khakhra",
    price: 120,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "Experience the authentic taste of Gujarat with our Methi Khakhra. Made from fresh fenugreek leaves (methi) and premium whole wheat flour, this traditional snack is roasted to crispy perfection. Rich in iron and vitamins, methi khakhra is known for its slightly bitter yet delightful flavor that pairs wonderfully with tea or as a healthy snack.",
    category: "Khakhra"
  },
  {
    id: "2",
    name: "Jeera Khakhra",
    price: 120,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "Indulge in the aromatic goodness of our Jeera Khakhra, infused with premium roasted cumin seeds. This classic Gujarati delicacy combines the wholesome nutrition of wheat with the digestive benefits of jeera (cumin). Known for its distinctive earthy flavor and incredible crunch, perfect for tea-time or as a light meal accompaniment.",
    category: "Khakhra"
  },
  {
    id: "3",
    name: "Pizza Khakhra",
    price: 140,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "A delightful fusion of East meets West! Our Pizza Khakhra brings together the traditional Indian snack with the beloved flavors of Italian pizza. Seasoned with a special blend of tomato powder, cheese, oregano, basil, and Italian herbs. Perfect for kids and adults alike, it's a healthier alternative to regular pizza.",
    category: "Khakhra"
  },
  {
    id: "4",
    name: "Masala Khakhra",
    price: 130,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "Turn up the heat with our Masala Khakhra! This spicy variant is loaded with a robust blend of traditional Indian spices including red chili, turmeric, coriander, and garam masala. Each bite delivers an explosion of flavors that spice lovers crave. Hand-crafted with care and roasted to achieve the perfect golden-brown crispness.",
    category: "Khakhra"
  },
  {
    id: "5",
    name: "Plain Khakhra",
    price: 100,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "Our classic Plain Khakhra is the traditional favorite - simple, healthy, and delicious. Made with just whole wheat flour, oil, and a pinch of salt, it's the perfect canvas for your favorite toppings or enjoyed as is. Low in calories and high in fiber, this is the go-to snack for health-conscious individuals.",
    category: "Khakhra"
  },
  {
    id: "6",
    name: "Garlic Khakhra",
    price: 130,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "For garlic lovers! Our Garlic Khakhra is infused with fresh garlic and aromatic spices. Known for its bold flavor and health benefits, garlic adds a savory punch to the traditional khakhra. Perfect as a standalone snack or paired with your favorite chutney or pickle.",
    category: "Khakhra"
  },
  {
    id: "7",
    name: "Pudina Khakhra",
    price: 120,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "Refreshing and flavorful Pudina (Mint) Khakhra combines the cooling effect of fresh mint leaves with the crunch of traditional khakhra. Known for its digestive properties and refreshing taste, this variant is perfect for those who enjoy a subtle minty flavor with their snacks.",
    category: "Khakhra"
  },
  {
    id: "8",
    name: "Ajwain Khakhra",
    price: 120,
    imageUrl: "/khakhra.jpg",
    weight: "200g",
    description: "Traditional Ajwain (Carom seeds) Khakhra is a digestive powerhouse. The distinctive flavor of ajwain combined with whole wheat makes this a favorite among those seeking both taste and health benefits. Known for relieving acidity and aiding digestion, this khakhra is as medicinal as it is delicious.",
    category: "Khakhra"
  }
];

export default function MenuPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Authentic Gujarati Khakhra & Traditional Snacks
          </p>
          <p className="text-sm text-gray-500">
            All products are 100% vegetarian, FSSAI certified, and made fresh daily with no preservatives
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {menuProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Header - Always Visible */}
              <div
                className="flex items-center gap-4 p-4 cursor-pointer"
                onClick={() => toggleItem(product.id)}
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--primary-color)' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.weight}</p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xl md:text-2xl font-bold" style={{ color: 'var(--secondary-color)' }}>
                      ₹{product.price}
                    </p>
                  </div>

                  {/* Chevron Icon */}
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expandedItems.has(product.id) ? 'rotate-180' : ''
                      }`}
                      style={{ color: 'var(--primary-color)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Collapsible Description */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems.has(product.id) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Large Image */}
                    <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={`/products/${product.id}`}
                          className="px-6 py-2 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                          style={{ backgroundColor: 'var(--secondary-color)' }}
                        >
                          View Details
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Added ${product.name} to cart!`);
                          }}
                          className="px-6 py-2 border-2 font-semibold rounded-lg transition-all hover:bg-gray-50"
                          style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Can't Decide? We're Here to Help!
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us on WhatsApp for personalized recommendations and bulk order discounts
          </p>
          <Link
            href="https://wa.me/918850977911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all"
          >
            <span>💬</span>
            <span>Chat with us on WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
