// components/Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm" style={{ color: 'var(--primary-color)' }}>
                    <div className="flex items-center gap-4">
                        <span>📞 +91 88509 77911</span>
                        <span className="hidden md:inline">✉️ enquiry@shivamfoods.co.in</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:inline">🚚 Free Shipping on Orders Above ₹500</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <Image src="/shivam_logo.png" alt="ShivamFoods Logo" width={60} height={60} priority />
                        <div>
                            <h1 className="text-2xl font-bold" style={{ color: 'var(--primary-color)' }}>Shivam Foods</h1>
                            <p className="text-xs text-gray-600 hidden sm:block">Authentic Gujarati Snacks</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 font-medium" style={{ color: 'var(--primary-color)' }}>
                        <Link href="/" className="hover:text-[#ff6b2d] transition-colors">Home</Link>
                        <Link href="/shop" className="hover:text-[#ff6b2d] transition-colors">Shop All</Link>
                        <Link href="/khakhra" className="hover:text-[#ff6b2d] transition-colors">Khakhra</Link>
                        <Link href="/combos" className="hover:text-[#ff6b2d] transition-colors">Combo Packs</Link>
                        <Link href="/bulk-orders" className="hover:text-[#ff6b2d] transition-colors">Bulk Orders</Link>
                        <Link href="/about" className="hover:text-[#ff6b2d] transition-colors">About Us</Link>
                        <Link href="/contact" className="hover:text-[#ff6b2d] transition-colors">Contact</Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <Link 
                            href="/cart" 
                            className="hidden md:flex items-center gap-2 hover:text-[#ff6b2d] transition-colors"
                            style={{ color: 'var(--primary-color)' }}
                        >
                            <span className="text-2xl">🛒</span>
                            <span className="font-medium">Cart</span>
                        </Link>
                        <Link 
                            href="https://wa.me/918850977911" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition-all"
                            style={{ backgroundColor: 'var(--secondary-color)' }}
                        >
                            <span>💬</span>
                            <span>WhatsApp</span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2"
                            style={{ color: 'var(--primary-color)' }}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3" style={{ color: 'var(--primary-color)' }}>
                        <Link href="/" className="py-2 hover:text-[#ff6b2d] transition-colors">Home</Link>
                        <Link href="/shop" className="py-2 hover:text-[#ff6b2d] transition-colors">Shop All</Link>
                        <Link href="/khakhra" className="py-2 hover:text-[#ff6b2d] transition-colors">Khakhra Collection</Link>
                        <Link href="/combos" className="py-2 hover:text-[#ff6b2d] transition-colors">Combo Packs</Link>
                        <Link href="/bulk-orders" className="py-2 hover:text-[#ff6b2d] transition-colors">Bulk Orders</Link>
                        <Link href="/about" className="py-2 hover:text-[#ff6b2d] transition-colors">About Us</Link>
                        <Link href="/contact" className="py-2 hover:text-[#ff6b2d] transition-colors">Contact</Link>
                        <Link href="/cart" className="py-2 hover:text-[#ff6b2d] transition-colors">🛒 Cart</Link>
                        <Link 
                            href="https://wa.me/918850977911" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="py-2 px-4 mt-2 rounded-lg text-center font-semibold"
                            style={{ backgroundColor: 'var(--secondary-color)' }}
                        >
                            💬 WhatsApp Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
