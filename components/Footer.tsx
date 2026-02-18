"use client";

import { Facebook, Twitter, Instagram, Youtube, Linkedin, Github, Globe, Pause } from "lucide-react";

const footerLinks = {
    takePayments: {
        title: "Take payments",
        links: [
            { label: "Card readers and POS devices", href: "#" },
            { label: "Point of sale system", href: "#" },
            { label: "Online ordering and sales", href: "#" },
            { label: "Payment processing", href: "#" },
            { label: "Invoicing", href: "#" },
            { label: "Virtual Terminal", href: "#" },
        ],
    },
    runBusiness: {
        title: "Run your business",
        links: [
            { label: "Tracking and reporting", href: "#" },
            { label: "Inventory management", href: "#" },
            { label: "Clover Capital", href: "#" },
            { label: "Rapid Deposit", href: "#" },
            { label: "Employee management", href: "#" },
        ],
    },
    sellMore: {
        title: "Sell more",
        links: [
            { label: "Customer engagement", href: "#" },
            { label: "Gift cards", href: "#" },
            { label: "Apps and integrations", href: "#" },
        ],
    },
    businessTypes: {
        title: "Business types",
        links: [
            { label: "Restaurants", href: "#" },
            { label: "Retail stores", href: "#" },
            { label: "Service businesses", href: "#" },
        ],
    },
    hardware: {
        title: "Hardware devices",
        links: [
            { label: "Go", href: "#" },
            { label: "Compact", href: "#" },
            { label: "Flex Pocket", href: "#" },
            { label: "Flex", href: "#" },
            { label: "Mini", href: "#" },
            { label: "Station Solo", href: "#" },
            { label: "Station Duo", href: "#" },
            { label: "Kiosk", href: "#" },
            { label: "Kitchen Display System", href: "#" },
            { label: "Accessories", href: "#" },
            { label: "Pricing", href: "#" },
        ],
    },
    help: {
        title: "Help",
        links: [
            { label: "Help center", href: "#" },
            { label: "FAQ", href: "#" },
            { label: "Contact us", href: "#" },
            { label: "Clover Care", href: "#" },
            { label: "Contact sales", href: "#" },
            { label: "Small Business Resources", href: "#" },
        ],
    },
    about: {
        title: "About",
        links: [
            { label: "Blog", href: "#" },
            { label: "Case studies", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Intellectual property", href: "#" },
            { label: "Referrals", href: "#" },
        ],
    },
    integrations: {
        title: "Integrations",
        links: [
            { label: "Developers", href: "#" },
            { label: "App market", href: "#" },
            { label: "Clover Connect", href: "#" },
            { label: "Integration services", href: "#" },
        ],
    },
};

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="mb-12 text-black">
                        <a href="/" className="text-2xl font-formula mb-6 block">
                            Clover
                        </a>
                    </div>

                    {/* Link Sections - First Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {Object.entries(footerLinks).slice(0, 4).map(([key, section]) => (
                            <div key={key}>
                                <h4 className="font-semibold text-black mb-4 normal-case not-italic font-graphik">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-gray-600 hover:text-black transition-colors font-graphik"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Link Sections - Second Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {Object.entries(footerLinks).slice(4).map(([key, section]) => (
                            <div key={key}>
                                <h4 className="font-semibold text-black mb-4 normal-case not-italic font-graphik">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-gray-600 hover:text-black transition-colors font-graphik"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="text-gray-600 hover:text-black transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-8">
                        {/* Controls */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <button type="button" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                <Pause size={16} />
                                Pause Animations
                            </button>
                            <button type="button" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                <Globe size={16} />
                                United States (English)
                            </button>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                            <div className="text-sm text-gray-500 max-w-2xl">
                                <p className="mb-2">© 2026 Clover Network, LLC</p>
                                <p className="text-xs">
                                    All pricing and promotions presented on clover.com are for new merchant acquiring customers only. Merchants currently processing on First Data systems and merchants that have processed on First Data systems during the previous 90 days are not eligible for offers and pricing on clover.com.
                                </p>
                                <p className="text-xs mt-2">
                                    First Data Merchant Services, LLC, doing business as Clover Business Solutions, is a registered ISO of Pathward N.A., Sioux Falls, SD; and Wells Fargo Bank N.A., Concord, CA
                                </p>
                                <p className="text-xs mt-2">
                                    The Clover name and logo are registered trademarks owned by Clover Network, LLC. All trademarks, service marks, and trade names referenced in this material are the property of their respective owners.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm">
                                <a href="#" className="text-gray-600 hover:text-black transition-colors">Terms</a>
                                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors">Accessibility</a>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors">Do Not Sell My Information</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
