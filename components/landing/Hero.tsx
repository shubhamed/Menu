import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';

export function Hero() {
    return (
        <section
            data-section="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: `radial-gradient(ellipse 80% 50% at 30% 50%, rgba(255,107,53,0.06) 0%, transparent 70%), var(--bg-primary)`,
                paddingTop: 72,
                minHeight: 700,
            }}
        >
            <div className="section-inner w-full" style={{ padding: '0 var(--section-padding-x)' }}>
                <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center py-16 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        {/* Eyebrow */}
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 font-medium"
                            style={{
                                background: 'rgba(255,107,53,0.08)',
                                border: '1px solid rgba(255,107,53,0.3)',
                                color: 'var(--brand-orange)',
                                fontSize: 12,
                            }}
                        >
                            Video-Powered Restaurant Menus
                        </div>

                        {/* Headline */}
                        <h1 style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.02em' }}>
                            Your menu should{' '}
                            <span className="gradient-text">sell.</span>
                        </h1>
                        <p style={{ fontSize: 'var(--text-h1)', fontWeight: 800, color: 'rgba(255,255,255,0.45)', lineHeight: 1.1, marginTop: 8 }}>
                            Not just list.
                        </p>

                        {/* Body */}
                        <p className="mt-6 leading-relaxed" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: 560 }}>
                            Video menus that plug into your POS, boost high-margin sales, and show you exactly what your customers want.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-10">
                            <a href="#get-started" className="btn-tier1 btn-tier1-lg justify-center">
                                Get Started Free
                            </a>
                            <a href="#demo" className="btn-tier2 justify-center">
                                Watch Demo <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Microcopy */}
                        <p className="mt-5" style={{ fontSize: 14, opacity: 0.55, color: 'var(--text-secondary)' }}>
                            No app downloads. No menu replacement.<br />
                            Works with your existing POS.
                        </p>

                        {/* Trust micro */}
                        <div className="flex items-center gap-2 mt-4" style={{ opacity: 0.6, fontSize: 14 }}>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="var(--brand-amber)" color="var(--brand-amber)" />
                                ))}
                            </div>
                            <span style={{ color: 'var(--text-secondary)' }}>Loved by 500+ restaurants across the US</span>
                        </div>
                    </div>

                    {/* Right — Device Mockup */}
                    <div className="flex justify-center lg:justify-end lg:pr-8">
                        <DeviceMockup size="lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
