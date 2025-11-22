export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-xl text-gray-100">Review your items</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Your cart is empty</p>
          <a href="/shop" className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all hover:opacity-90" style={{ backgroundColor: 'var(--secondary-color)' }}>Continue Shopping</a>
        </div>
      </section>
    </div>
  );
}