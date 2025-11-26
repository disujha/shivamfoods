// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white border-t">
            {/* Main Footer */}
            <div className="py-12 px-4" style={{ backgroundColor: 'var(--primary-color)' }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/shivam_logo.png" alt="Shivam Foods" width={50} height={50} />
                            <h3 className="text-2xl font-bold" style={{ color: 'var(--secondary-color)' }}>Shivam Foods</h3>
                        </div>
                        <p className="text-gray-200 mb-4">
                            Authentic Gujarati Khakhra and traditional Indian snacks made fresh daily with no preservatives. 100% vegetarian and FSSAI certified.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://wa.me/918850977911" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <span className="text-2xl">💬</span>
                            </Link>
                            <Link href="mailto:enquiry@shivamfoods.co.in" className="hover:opacity-80">
                                <span className="text-2xl">✉️</span>
                            </Link>
                            <Link href="tel:+918850977911" className="hover:opacity-80">
                                <span className="text-2xl">📞</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--secondary-color)' }}>Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/shop" className="text-gray-200 hover:text-white transition-colors">Shop All</Link></li>
                            <li><Link href="/khakhra" className="text-gray-200 hover:text-white transition-colors">Khakhra Collection</Link></li>
                            <li><Link href="/combos" className="text-gray-200 hover:text-white transition-colors">Combo Packs</Link></li>
                            <li><Link href="/bulk-orders" className="text-gray-200 hover:text-white transition-colors">Bulk Orders</Link></li>
                            <li><Link href="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--secondary-color)' }}>Customer Service</h4>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="text-gray-200 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="text-gray-200 hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/refund-cancellation" className="text-gray-200 hover:text-white transition-colors">Refund & Cancellation</Link></li>
                            <li><Link href="/quality" className="text-gray-200 hover:text-white transition-colors">Quality Promise</Link></li>
                            <li><Link href="/track-order" className="text-gray-200 hover:text-white transition-colors">Track Order</Link></li>
                            <li><Link href="/privacy" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--secondary-color)' }}>Contact Us</h4>
                        <ul className="space-y-3 text-gray-200">
                            <li className="flex items-start gap-2">
                                <span>📍</span>
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-sm">C-19, Marudhar Indl Estate,<br />Goodev Road, Bhayander East<br />Thane, Maharashtra - 401105</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📞</span>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <a href="tel:+918850977911" className="hover:text-white">+91 88509 77911</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✉️</span>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href="mailto:enquiry@shivamfoods.co.in" className="hover:text-white">enquiry@shivamfoods.co.in</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>💬</span>
                                <div>
                                    <p className="font-medium">WhatsApp</p>
                                    <a href="https://wa.me/918850977911" target="_blank" rel="noopener noreferrer" className="hover:text-white">Chat with us</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="py-6 px-4 bg-gray-100 border-t">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 text-center text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="font-medium" style={{ color: 'var(--primary-color)' }}>FSSAI Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="font-medium" style={{ color: 'var(--primary-color)' }}>100% Vegetarian</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="font-medium" style={{ color: 'var(--primary-color)' }}>No Preservatives</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="font-medium" style={{ color: 'var(--primary-color)' }}>Free Shipping ₹500+</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-4 px-4 bg-white border-t">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>© 2025 Shivam Foods. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#0d524b] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#0d524b] transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-[#0d524b] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
