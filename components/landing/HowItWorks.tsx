import React from 'react';
import { Plug, Sparkles, TrendingUp } from 'lucide-react';

const steps = [
    {
        num: '01',
        icon: Plug,
        title: "Plug in. Don\u2019t replace.",
        body: 'We connect to your existing POS — Square, Toast, Clover, Lightspeed, and more. No hardware purchase. No migration. Most restaurants are live in under 15 minutes.',
    },
    {
        num: '02',
        icon: Sparkles,
        title: 'Upload once. AI does the rest.',
        body: 'Drop in photos or short clips of your dishes. Our AI automatically transforms them into professional video reels — no editor, no videographer, no monthly shoots.',
    },
    {
        num: '03',
        icon: TrendingUp,
        title: 'Watch your high-margin items move.',
        body: "Customers scroll a beautiful video feed, discover dishes they\u2019d have never found on a static menu, and tap to order. Your average order value goes up. Every shift.",
    },
];

export function HowItWorks() {
    return (
        <section data-section="how-it-works" className="section-container" style={{ background: '#0D0D0D' }}>
            <div className="section-inner text-center">
                <h2 className="mb-16" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Up and running before dinner service.
                </h2>

                <div className="grid md:grid-cols-3 gap-8 relative mb-16">
                    {steps.map((step, i) => (
                        <div
                            key={step.num}
                            className="relative rounded-[20px] p-10 text-center transition-all duration-400 group"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--bg-card-hover)';
                                e.currentTarget.style.borderColor = 'rgba(255,107,53,0.2)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--bg-card)';
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Number */}
                            <div className="gradient-text mb-4" style={{ fontSize: 64, fontWeight: 800, lineHeight: 1 }}>
                                {step.num}
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                                style={{ background: 'rgba(255,107,53,0.1)' }}>
                                <step.icon size={24} style={{ color: 'var(--brand-orange)' }} />
                            </div>

                            <h3 className="mb-3" style={{ fontSize: 20, fontWeight: 700 }}>{step.title}</h3>
                            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-tertiary)' }}>{step.body}</p>

                            {/* Connector (desktop) */}
                            {i < steps.length - 1 && (
                                <div
                                    className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5"
                                    style={{ background: 'linear-gradient(90deg, rgba(255,107,53,0.4), rgba(255,107,53,0.1))' }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <a href="#get-started" className="btn-tier1 btn-tier1-lg mx-auto">
                    Start Free Trial
                </a>
                <p className="mt-4" style={{ fontSize: 14, color: 'var(--text-muted)', opacity: 0.7 }}>
                    14 days free. No credit card needed. Cancel anytime.
                </p>
            </div>
        </section>
    );
}
