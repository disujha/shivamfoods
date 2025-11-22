'use client';
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend/API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Call Us</h3>
            <p className="text-gray-600 mb-2">Mon-Sat: 9:00 AM - 6:00 PM</p>
            <a href="tel:+918850977911" className="text-lg font-medium hover:opacity-80" style={{ color: 'var(--secondary-color)' }}>
              +91 88509 77911
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Email Us</h3>
            <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
            <a href="mailto:enquiry@shivamfoods.co.in" className="text-lg font-medium hover:opacity-80" style={{ color: 'var(--secondary-color)' }}>
              enquiry@shivamfoods.co.in
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>WhatsApp</h3>
            <p className="text-gray-600 mb-2">Quick support via chat</p>
            <a 
              href="https://wa.me/918850977911" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-80" 
              style={{ color: 'var(--secondary-color)' }}
            >
              Chat with us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
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
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                  placeholder="Your name"
                />
              </div>
              
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
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="quality">Quality/Product Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--secondary-color)' }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out our FAQ section for quick answers to common questions
          </p>
          <a
            href="/faq"
            className="inline-block px-8 py-3 bg-white border-2 text-lg font-semibold rounded-lg transition-all hover:bg-gray-50"
            style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
          >
            View FAQs
          </a>
        </div>
      </section>
    </div>
  );
}
