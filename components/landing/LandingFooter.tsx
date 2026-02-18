import React from 'react';

const columns = [
    {
        title: 'Product',
        links: ['Video Menus', 'AI Engine', 'Analytics', 'Integrations', 'Pricing'],
    },
    {
        title: 'Company',
        links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
        title: 'Resources',
        links: ['Documentation', 'Help Center', 'Case Studies', 'API Reference', 'Status'],
    },
    {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
    },
];

export function LandingFooter() {
    return (
        <footer
            data-section="footer"
            style={{
                background: '#050505',
                borderTop: '1px solid var(--border-subtle)',
                padding: '64px var(--section-padding-x) 32px',
            }}
        >
            <div className="section-inner">
                <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="gradient-text text-xl font-extrabold tracking-tight">Minute Menus</a>
                        <p className="mt-2" style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>
                            Turn your menu into your best salesperson.
                        </p>
                    </div>

                    {/* Link columns */}
                    {columns.map(col => (
                        <div key={col.title}>
                            <h4
                                className="mb-4"
                                style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    color: 'rgba(255,255,255,0.4)',
                                }}
                            >
                                {col.title}
                            </h4>
                            <div className="flex flex-col gap-2.5">
                                {col.links.map(link => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="transition-colors duration-200"
                                        style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
                                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--brand-orange)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legal Row */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6"
                    style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
                        © 2025 Minute Menus, Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        {['Twitter/X', 'LinkedIn', 'Instagram'].map(social => (
                            <a
                                key={social}
                                href="#"
                                className="transition-colors duration-200"
                                style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
