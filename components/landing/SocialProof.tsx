import React from 'react';
import { ArrowRight } from 'lucide-react';

const testimonials = [
    {
        quote: 'We added Minute Menus on a Tuesday. By Friday, our wagyu burger went from 8th most ordered to 1st. Same menu. Same price. Just video.',
        name: 'Chef Marcus R.',
        role: 'Executive Chef & Owner, The Copper Pan — Austin, TX',
        stat: '+34% wagyu orders — Week 1',
        initials: 'MR',
    },
    {
        quote: 'I finally know what my customers actually look at. That data alone is worth 10× the subscription cost.',
        name: 'Sarah Kim',
        role: 'Owner, Noodle District — 3 Locations, Seattle WA',
        stat: 'AOV up $8.40 in first 2 weeks',
        initials: 'SK',
    },
    {
        quote: 'Setup took 11 minutes. I timed it. We were live before lunch.',
        name: 'Danny Okafor',
        role: 'GM, Brick & Mortar Tavern — Chicago, IL',
        stat: 'Live in 11 minutes flat',
        initials: 'DO',
    },
];

export function SocialProof() {
    return (
        <section data-section="social-proof" className="section-container" style={{ background: '#0D0D0D' }}>
            <div className="section-inner">
                <h2 className="text-center mb-12" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Restaurants that sell smarter.
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
                    {testimonials.map(t => (
                        <div
                            key={t.initials}
                            className="relative rounded-[20px] p-8 sm:p-10 transition-all duration-300 cursor-default"
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--bg-card)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Decorative quote */}
                            <span
                                className="absolute top-5 left-7"
                                style={{ fontSize: 72, fontWeight: 800, color: 'rgba(255,107,53,0.12)', fontFamily: 'Georgia, serif', lineHeight: 1, pointerEvents: 'none' }}
                            >
                                "
                            </span>

                            <p className="relative z-10 mb-6" style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic' }}>
                                "{t.quote}"
                            </p>

                            <div
                                className="inline-block px-3 py-1 rounded-lg mb-5"
                                style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)' }}
                            >
                                <span style={{ color: '#4ADE80', fontSize: 13, fontWeight: 700 }}>{t.stat}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                    style={{ background: 'var(--brand-gradient)', color: 'white', fontWeight: 700, fontSize: 18 }}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</p>
                                    <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a href="#case-studies" className="btn-tier3">
                        Read Full Case Studies <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
