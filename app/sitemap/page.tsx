import Link from 'next/link';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-gray-100">Browse all pages</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Main Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-[#0d524b]">Home</Link></li>
                <li><Link href="/shop" className="text-gray-600 hover:text-[#0d524b]">Shop All</Link></li>
                <li><Link href="/khakhra" className="text-gray-600 hover:text-[#0d524b]">Khakhra Collection</Link></li>
                <li><Link href="/combos" className="text-gray-600 hover:text-[#0d524b]">Combo Packs</Link></li>
                <li><Link href="/bulk-orders" className="text-gray-600 hover:text-[#0d524b]">Bulk Orders</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-[#0d524b]">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-[#0d524b]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Customer Service</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-600 hover:text-[#0d524b]">FAQ</Link></li>
                <li><Link href="/shipping" className="text-gray-600 hover:text-[#0d524b]">Shipping & Returns</Link></li>
                <li><Link href="/quality" className="text-gray-600 hover:text-[#0d524b]">Quality Promise</Link></li>
                <li><Link href="/track-order" className="text-gray-600 hover:text-[#0d524b]">Track Order</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-600 hover:text-[#0d524b]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-[#0d524b]">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}