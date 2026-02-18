import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <section
            data-section="final-cta"
            className="relative flex items-center justify-center text-center"
            style={{
                background: `radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,53,0.08) 0%, transparent 70%), var(--bg-primary)`,
                padding: '160px var(--section-padding-x)',
            }}
        >
            {/* Ambient Glow */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
                    animation: 'ctaGlow 3s ease-in-out infinite',
                }}
            />

            <div className="relative z-10 max-w-[600px] mx-auto">
                <p
                    className="uppercase tracking-widest mb-4"
                    style={{ fontSize: 14, letterSpacing: '0.08em', color: 'var(--text-muted)' }}
                >
                    The most visited page in your restaurant is your menu.
                </p>

                <h2 className="mb-4" style={{ fontSize: 'var(--text-hero)', fontWeight: 800, lineHeight: 1.05 }}>
                    Make it <span className="gradient-text">perform.</span>
                </h2>

                <p className="mb-4" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                    Every day without data-driven video menus is revenue you're not capturing at tables you're already filling.
                </p>
                <p className="mb-10" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Your customers are ready. Your menu isn't. Let's fix that.
                </p>

                <div className="flex flex-col items-center gap-3">
                    <a href="#get-started" className="btn-tier1 btn-tier1-lg relative overflow-hidden">
                        Get Started Free <ArrowRight size={20} />
                        <span
                            className="absolute top-0 h-full w-full pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                                animation: 'shimmer 3s ease-in-out infinite',
                            }}
                        />
                    </a>
                    <a href="#demo" className="btn-tier2">
                        Book a 15-min Demo
                    </a>
                </div>

                <p className="mt-5" style={{ fontSize: 13, opacity: 0.4 }}>
                    14-day trial · No credit card · Live in 15 minutes · Cancel anytime
                </p>
            </div>
        </section>
    );
}
