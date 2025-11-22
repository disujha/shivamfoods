'use client';
import { useState } from "react";

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    orderType: '',
    quantity: '',
    products: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bulk order inquiry:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours with a custom quote.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bulk Orders</h1>
          <p className="text-xl text-gray-100">
            Special pricing for restaurants, retailers, and corporate orders
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--primary-color)' }}>
            Why Choose Us for Bulk Orders?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Special wholesale rates for bulk quantities. The more you order, the more you save.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Flexible Packaging
              </h3>
              <p className="text-gray-600">
                Custom packaging options available for your brand or corporate gifting needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                Reliable Delivery
              </h3>
              <p className="text-gray-600">
                Pan-India delivery with timely dispatch and tracking for all bulk orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Types */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--primary-color)' }}>
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Corporate Offices</h3>
              <p className="text-gray-600 text-sm">Pantry supplies and employee snack programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Restaurants & Cafes</h3>
              <p className="text-gray-600 text-sm">Menu items and complementary snacks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Retailers</h3>
              <p className="text-gray-600 text-sm">Stock your shelves with quality products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Corporate Gifting</h3>
              <p className="text-gray-600 text-sm">Premium hampers for festivals and events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              Request a Quote
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will get back to you with a customized quote
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="orderType" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Type *
                </label>
                <select
                  id="orderType"
                  required
                  value={formData.orderType}
                  onChange={(e) => setFormData({...formData, orderType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                >
                  <option value="">Select order type</option>
                  <option value="corporate">Corporate Office Supply</option>
                  <option value="restaurant">Restaurant/Cafe</option>
                  <option value="retail">Retail/Wholesale</option>
                  <option value="gifting">Corporate Gifting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Approximate Quantity *
                </label>
                <select
                  id="quantity"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                >
                  <option value="">Select quantity range</option>
                  <option value="50-100">50-100 packets</option>
                  <option value="100-250">100-250 packets</option>
                  <option value="250-500">250-500 packets</option>
                  <option value="500+">500+ packets</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-2">
                Products/Flavors Interested In *
              </label>
              <input
                type="text"
                id="products"
                required
                value={formData.products}
                onChange={(e) => setFormData({...formData, products: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                placeholder="e.g., Methi Khakhra, Mixed Combo Packs"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Requirements
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                placeholder="Tell us about your specific requirements, delivery timeline, packaging needs, etc."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--secondary-color)' }}
              >
                Request Quote
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * We typically respond within 24 hours with a customized quote
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Prefer to Discuss Directly?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Call us or chat on WhatsApp for immediate assistance
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:+918850977911"
              className="px-8 py-4 bg-white text-lg font-semibold rounded-lg transition-all hover:bg-gray-100"
              style={{ color: 'var(--primary-color)' }}
            >
              📞 Call: +91 88509 77911
            </a>
            <a
              href="https://wa.me/918850977911"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
