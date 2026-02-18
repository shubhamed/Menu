import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
    {
        name: 'Starter',
        price: '$99',
        tagline: 'Perfect for single-location restaurants ready to get started.',
        recovery: 'Average restaurant recoups this in 9 days of increased AOV.',
        features: [
            '1 location',
            'Video menu + POS integration',
            'Basic analytics dashboard',
            'AI video generation — 10 reels/month',
            'Email support',
            '14-day free trial',
        ],
        featured: false,
    },
    {
        name: 'Growth',
        price: '$249',
        tagline: 'The full platform for restaurants serious about performance.',
        recovery: 'Average restaurant recoups this in 11 days of increased AOV.',
        features: [
            'Up to 5 locations',
            'Full analytics + engagement dashboard',
            'AI recommendations engine',
            'Unlimited AI video generation',
            'Priority support (< 4hr response)',
            'Custom menu branding',
            '14-day free trial',
        ],
        featured: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        tagline: 'For multi-location groups and enterprise restaurant brands.',
        recovery: '',
        features: [
            'Unlimited locations',
            'Dedicated account manager',
            'API + webhook access',
            'White-label menu experience',
            'Custom integrations',
            'SLA guarantees',
            'Quarterly business reviews',
        ],
        featured: false,
    },
];

export function Pricing() {
    return (
        <section
            data-section="pricing"
            className="section-container"
            style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)' }}
        >
            <div className="section-inner text-center">
                <h2 className="mb-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Simple pricing. Real ROI.
                </h2>
                <p className="mb-14" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)' }}>
                    Every plan includes video menus, POS integration, and a 14-day free trial.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto items-start">
                    {tiers.map(tier => (
                        <div
                            key={tier.name}
                            className="relative rounded-[24px] p-8 sm:p-10 text-left transition-all duration-300"
                            style={{
                                background: tier.featured ? 'rgba(255,107,53,0.06)' : 'var(--bg-card)',
                                border: tier.featured ? '2px solid rgba(255,107,53,0.3)' : '1px solid var(--border-default)',
                                transform: tier.featured ? 'scale(1.03)' : 'none',
                                boxShadow: tier.featured ? '0 12px 40px rgba(255,107,53,0.15)' : 'none',
                                zIndex: tier.featured ? 2 : 1,
                            }}
                        >
                            {tier.featured && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                                    style={{ top: -14, background: 'var(--brand-gradient)', color: 'white', letterSpacing: '0.05em' }}
                                >
                                    Most Popular
                                </div>
                            )}

                            <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--brand-orange)' }}>
                                {tier.name}
                            </p>

                            <div className="mb-1">
                                <span style={{ fontSize: 48, fontWeight: 800, lineHeight: 1 }}>{tier.price}</span>
                                {tier.price !== 'Custom' && <span style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-muted)' }}> /mo</span>}
                            </div>

                            {tier.recovery && (
                                <p className="mb-4" style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                    {tier.recovery}
                                </p>
                            )}

                            <p className="mb-6" style={{ fontSize: 15, color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                                {tier.tagline}
                            </p>

                            <div className="flex flex-col gap-0 mb-8">
                                {tier.features.map(f => (
                                    <div
                                        key={f}
                                        className="flex items-center gap-3 py-2.5"
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                                    >
                                        <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                                            style={{ background: 'rgba(74,222,128,0.15)' }}
                                        >
                                            <Check size={11} style={{ color: '#4ADE80' }} />
                                        </div>
                                        <span style={{ fontSize: 15, color: 'var(--text-tertiary)' }}>{f}</span>
                                    </div>
                                ))}
                            </div>

                            {tier.name === 'Starter' && (
                                <a href="#get-started" className="btn-tier2 w-full justify-center">
                                    Start Free Trial
                                </a>
                            )}
                            {tier.name === 'Growth' && (
                                <a href="#get-started" className="btn-tier1 w-full justify-center">
                                    Start Free Trial
                                </a>
                            )}
                            {tier.name === 'Enterprise' && (
                                <a href="#contact" className="btn-tier3 w-full justify-center">
                                    Talk to Sales <ArrowRight size={18} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
