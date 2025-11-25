'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample product data - replace with actual database call
const allProducts = {
  "1": {
    id: "1",
    name: "Methi Khakhra",
    price: 120,
    imageUrl: "/khakhra.jpg",
    description: "Experience the authentic taste of Gujarat with our Methi Khakhra. Made from fresh fenugreek leaves (methi) and premium whole wheat flour, this traditional snack is roasted to crispy perfection. Rich in iron and vitamins, methi khakhra is known for its slightly bitter yet delightful flavor that pairs wonderfully with tea or as a healthy snack. Each khakhra is hand-rolled and roasted using traditional methods to ensure the perfect crunch and authentic taste.",
    weight: "200g",
    ingredients: "Wheat flour, Fenugreek leaves, Oil, Salt, Spices",
    shelfLife: "60 days",
    category: "Khakhra",
    nutritionalInfo: {
      calories: "119 kcal per khakhra",
      protein: "2.6g",
      carbs: "15.7g",
      fiber: "2.6g",
      fat: "5.4g"
    },
    healthBenefits: [
      "Rich in B vitamins, especially Vitamin B9 (Folic Acid)",
      "Good source of calcium, iron, magnesium, phosphorus, potassium, and zinc",
      "High fiber content helps with digestion and blood sugar control",
      "Zero cholesterol",
      "No added sugar",
      "Fenugreek has antioxidant properties"
    ]
  },
  "2": {
    id: "2",
    name: "Jeera Khakhra",
    price: 120,
    imageUrl: "/khakhra.jpg",
    description: "Indulge in the aromatic goodness of our Jeera Khakhra, infused with premium roasted cumin seeds. This classic Gujarati delicacy combines the wholesome nutrition of wheat with the digestive benefits of jeera (cumin). Known for its distinctive earthy flavor and incredible crunch, jeera khakhra is a favorite among health-conscious snackers. Perfect for tea-time or as a light meal accompaniment, each piece is carefully crafted to deliver consistent quality and authentic taste.",
    weight: "200g",
    ingredients: "Wheat flour, Cumin seeds, Oil, Salt, Spices",
    shelfLife: "60 days",
    category: "Khakhra",
    nutritionalInfo: {
      calories: "119 kcal per khakhra",
      protein: "2.6g",
      carbs: "15.7g",
      fiber: "2.6g",
      fat: "5.4g"
    },
    healthBenefits: [
      "Rich in B vitamins, especially Vitamin B9 (Folic Acid)",
      "Good source of calcium, iron, magnesium, phosphorus, potassium, and zinc",
      "High fiber content helps with digestion and blood sugar control",
      "Zero cholesterol",
      "No added sugar",
      "Cumin has powerful antioxidant and digestive properties"
    ]
  },
  "3": {
    id: "3",
    name: "Pizza Khakhra",
    price: 140,
    imageUrl: "/khakhra.jpg",
    description: "A delightful fusion of East meets West! Our Pizza Khakhra brings together the traditional Indian snack with the beloved flavors of Italian pizza. Seasoned with a special blend of tomato powder, cheese, oregano, basil, and Italian herbs, this innovative variant offers a unique taste experience. Perfect for kids and adults alike, it's a healthier alternative to regular pizza that doesn't compromise on flavor. Enjoy the best of both worlds in every crispy bite!",
    weight: "200g",
    ingredients: "Wheat flour, Tomato powder, Cheese powder, Italian herbs, Oil, Salt",
    shelfLife: "60 days",
    category: "Khakhra",
    nutritionalInfo: {
      calories: "119 kcal per khakhra",
      protein: "2.6g",
      carbs: "15.7g",
      fiber: "2.6g",
      fat: "5.4g"
    },
    healthBenefits: [
      "Rich in B vitamins, especially Vitamin B9 (Folic Acid)",
      "Good source of calcium, iron, magnesium, phosphorus, potassium, and zinc",
      "High fiber content helps with digestion and blood sugar control",
      "Zero cholesterol",
      "No added sugar",
      "Italian herbs provide antioxidant benefits"
    ]
  },
  "4": {
    id: "4",
    name: "Masala Khakhra",
    price: 130,
    imageUrl: "/khakhra.jpg",
    description: "Turn up the heat with our Masala Khakhra! This spicy variant is loaded with a robust blend of traditional Indian spices including red chili, turmeric, coriander, and garam masala. Each bite delivers an explosion of flavors that spice lovers crave. The perfect balance of heat and taste makes it an ideal snack for those who enjoy bold, authentic Indian flavors. Hand-crafted with care and roasted to achieve the perfect golden-brown crispness.",
    weight: "200g",
    ingredients: "Wheat flour, Red chili powder, Mixed spices, Oil, Salt",
    shelfLife: "60 days",
    category: "Khakhra",
    nutritionalInfo: {
      calories: "119 kcal per khakhra",
      protein: "2.6g",
      carbs: "15.7g",
      fiber: "2.6g",
      fat: "5.4g"
    },
    healthBenefits: [
      "Rich in B vitamins, especially Vitamin B9 (Folic Acid)",
      "Good source of calcium, iron, magnesium, phosphorus, potassium, and zinc",
      "High fiber content helps with digestion and blood sugar control",
      "Zero cholesterol",
      "No added sugar",
      "Turmeric and spices have powerful antioxidant properties"
    ]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = allProducts[productId as keyof typeof allProducts];
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">Sorry, the product you're looking for doesn't exist.</p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--secondary-color)' }}
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
    // TODO: Implement actual cart functionality
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} x ${product.name}`);
    // TODO: Implement checkout functionality
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#ff6b2d]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[#ff6b2d]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="font-medium" style={{ color: 'var(--primary-color)' }}>{product.name}</span>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                {product.name}
              </h1>
              
              <div className="text-3xl font-bold mb-4" style={{ color: 'var(--secondary-color)' }}>
                ₹{product.price.toLocaleString()}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Product Info */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold" style={{ color: 'var(--primary-color)' }}>Weight:</span>
                  <span className="text-gray-700">{product.weight}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold" style={{ color: 'var(--primary-color)' }}>Category:</span>
                  <span className="text-gray-700">{product.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold" style={{ color: 'var(--primary-color)' }}>Shelf Life:</span>
                  <span className="text-gray-700">{product.shelfLife}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>
                  Quantity:
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                    style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold w-12 text-center" style={{ color: 'var(--primary-color)' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                    style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-8 py-4 border-2 text-lg font-semibold rounded-lg transition-all hover:bg-gray-50"
                  style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--secondary-color)' }}
                >
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="border-t pt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-1">✓</div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--primary-color)' }}>FSSAI Certified</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">🌿</div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--primary-color)' }}>100% Vegetarian</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--primary-color)' }}>Free Shipping</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="border-t p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                Ingredients
              </h2>
              <p className="text-gray-700">{product.ingredients}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>
                Nutritional Information
              </h2>
              <p className="text-sm text-gray-600 mb-4 italic">
                *Values shown are per individual khakhra piece (approximately 30g), not per 100g
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--primary-color)' }}>
                      <th className="border border-gray-300 px-4 py-3 text-left text-white font-semibold">Nutrient</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-white font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: 'var(--primary-color)' }}>Calories</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{product.nutritionalInfo.calories}</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: 'var(--primary-color)' }}>Protein</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{product.nutritionalInfo.protein}</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: 'var(--primary-color)' }}>Carbohydrates</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{product.nutritionalInfo.carbs}</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: 'var(--primary-color)' }}>Dietary Fiber</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{product.nutritionalInfo.fiber}</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: 'var(--primary-color)' }}>Total Fat</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{product.nutritionalInfo.fat}</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: 'var(--primary-color)' }}>Cholesterol</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">0mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary-color)' }}>
                Health Benefits
              </h3>
              <ul className="space-y-2">
                {product.healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Have questions about this product?</p>
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
