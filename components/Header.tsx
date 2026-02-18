"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart, ArrowRight } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:opacity-80 transition-opacity p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <a href="/" className="absolute left-1/2 transform -translate-x-1/2">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#b3e469]"
                    >
                        <path
                            d="M20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0Z"
                            fill="currentColor"
                        />
                        <path
                            d="M10 20C4.5 20 0 24.5 0 30C0 35.5 4.5 40 10 40C15.5 40 20 35.5 20 30C20 24.5 15.5 20 10 20Z"
                            fill="currentColor"
                        />
                        <path
                            d="M30 20C24.5 20 20 24.5 20 30C20 35.5 24.5 40 30 40C35.5 40 40 35.5 40 30C40 24.5 35.5 20 30 20Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="text-white hover:opacity-80 transition-opacity p-2 hidden md:block"
                        aria-label="Shopping cart"
                    >
                        <ShoppingCart size={24} />
                    </button>
                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/30 transition-all text-sm font-medium"
                    >
                        Contact sales
                        <ArrowRight size={16} />
                    </a>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-black/95 z-40 p-6">
                    <div className="flex flex-col gap-6 text-white">
                        <a href="#" className="text-2xl font-medium hover:text-[#b3e469] transition-colors">
                            Products
                        </a>
                        <a href="#" className="text-2xl font-medium hover:text-[#b3e469] transition-colors">
                            Solutions
                        </a>
                        <a href="#" className="text-2xl font-medium hover:text-[#b3e469] transition-colors">
                            Pricing
                        </a>
                        <a href="#" className="text-2xl font-medium hover:text-[#b3e469] transition-colors">
                            Resources
                        </a>
                        <a href="#" className="text-2xl font-medium hover:text-[#b3e469] transition-colors">
                            Support
                        </a>
                        <div className="mt-6">
                            <a
                                href="#contact"
                                className="btn-primary text-lg"
                            >
                                Contact sales
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
