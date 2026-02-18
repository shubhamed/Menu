import React from 'react';
import { ArrowRight } from 'lucide-react';

const rows = [
    { feature: 'Commission per order', bad: '25–35%', good: '$0 — flat monthly' },
    { feature: 'Customer data', bad: 'They own it', good: 'You own it' },
    { feature: 'Menu experience', bad: 'Static photos', good: 'Dynamic video' },
    { feature: 'Brand control', bad: 'Their platform', good: 'Your restaurant' },
    { feature: 'Repeat customer data', bad: 'Hidden', good: 'Full CRM access' },
    { feature: 'Price control', bad: 'Race to bottom', good: 'Premium experience' },
];

export function VSDelivery() {
    return (
        <section data-section="vs-delivery" className="section-container" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-inner text-center">
                <h2 className="mb-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Stop giving 30% to platforms that don't know your customers.
                </h2>
                <p className="mb-12 mx-auto" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)', maxWidth: 700, lineHeight: 1.7 }}>
                    Delivery apps own the digital experience for millions of restaurants. They take your margin, your data, and your customer relationship. We give all three back.
                </p>

                {/* Table */}
                <div
                    className="rounded-[20px] overflow-hidden mx-auto"
                    style={{ maxWidth: 900, border: '1px solid var(--border-default)', background: 'rgba(255,255,255,0.02)' }}
                >
                    {/* Header */}
                    <div
                        className="grid text-left text-sm font-bold uppercase tracking-wider py-4 px-6 sm:px-8"
                        style={{ gridTemplateColumns: '1.2fr 1fr 1fr', background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}
                    >
                        <span>Feature</span>
                        <span>Delivery Apps</span>
                        <span style={{ color: 'var(--brand-orange)' }}>Minute Menus</span>
                    </div>

                    {/* Rows */}
                    {rows.map((row, i) => (
                        <div
                            key={i}
                            className="grid text-left py-4 px-6 sm:px-8 transition-colors duration-200"
                            style={{
                                gridTemplateColumns: '1.2fr 1fr 1fr',
                                borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                        >
                            <span style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 500 }}>
                                {row.feature}
                            </span>
                            <span className="flex items-center gap-2" style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#FF3B30' }} />
                                {row.bad}
                            </span>
                            <span className="flex items-center gap-2" style={{ fontSize: 15, color: '#4ADE80', fontWeight: 600 }}>
                                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#4ADE80' }} />
                                {row.good}
                            </span>
                        </div>
                    ))}
                </div>

                <a href="#get-started" className="btn-tier1 btn-tier1-lg mx-auto mt-12 inline-flex">
                    Switch to Minute Menus <ArrowRight size={18} />
                </a>
            </div>
        </section>
    );
}
