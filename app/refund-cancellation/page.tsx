import Link from 'next/link';

export default function RefundCancellationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Cancellation & Refund Policy
          </h1>
          <p className="text-gray-600">
            Last updated on 26-11-2025 15:41:09
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              <strong>SHIVAM FOODS</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>
          </section>

          {/* Policy Points */}
          <section>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <div className="flex gap-3">
                <span className="font-bold flex-shrink-0" style={{ color: 'var(--secondary-color)' }}>•</span>
                <p>
                  Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold flex-shrink-0" style={{ color: 'var(--secondary-color)' }}>•</span>
                <p>
                  SHIVAM FOODS does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold flex-shrink-0" style={{ color: 'var(--secondary-color)' }}>•</span>
                <p>
                  In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within <strong>same day</strong> of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>same day</strong> of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold flex-shrink-0" style={{ color: 'var(--secondary-color)' }}>•</span>
                <p>
                  In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by SHIVAM FOODS, it'll take <strong>3-5 days</strong> for the refund to be processed to the end customer.
                </p>
              </div>
            </div>
          </section>

          {/* Important Notice */}
          <section className="mt-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <h3 className="font-bold text-yellow-800 mb-2">Important Notice:</h3>
              <p className="text-yellow-700 leading-relaxed">
                As we deal with food products, we follow strict hygiene and safety protocols. Please inspect your order immediately upon delivery and report any issues on the same day. Once a product has been opened or consumed, it cannot be returned or refunded for safety reasons.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t pt-6 mt-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              How to Request Cancellation or Refund
            </h2>
            <p className="text-gray-700 mb-4">
              To initiate a cancellation or refund request, please contact our Customer Service team immediately:
            </p>
            <div className="bg-white border-2 rounded-lg p-6 space-y-3" style={{ borderColor: 'var(--primary-color)' }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+91 88509 77911 (Mon-Sat: 9 AM - 6 PM)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold">WhatsApp:</p>
                  <p>+91 88509 77911</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>enquiry@shivamfoods.co.in</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Please have your order number ready when contacting us. This will help us process your request faster.
            </p>
          </section>

          {/* Company Details */}
          <section className="border-t pt-6 mt-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              Contact Details
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2 bg-gray-50 p-6 rounded-lg">
              <p><strong>Business Name:</strong> Shivam Foods</p>
              <p><strong>Address:</strong> C-19, Marudhar Indl Estate, Goodev Road, Bhayander East, Thane, Maharashtra - 401105</p>
              <p><strong>Phone:</strong> +91 88509 77911</p>
              <p><strong>Email:</strong> enquiry@shivamfoods.co.in</p>
              <p><strong>WhatsApp:</strong> +91 88509 77911</p>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help you with any concerns
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://wa.me/918850977911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/terms"
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ color: 'var(--primary-color)' }}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ color: 'var(--primary-color)' }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/shipping"
            className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ color: 'var(--primary-color)' }}
          >
            Shipping Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
