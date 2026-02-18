import React from 'react';

const useCases = [
    {
        emoji: '🍕',
        title: 'Speed up decisions. Increase combo attachment.',
        body: 'Video menus let customers decide before they reach the counter. Highlight combos, daily specials, and high-margin add-ons automatically. Reduce counter questions. Increase throughput.',
        category: 'Quick Service & Fast Casual',
    },
    {
        emoji: '🍷',
        title: 'Tell the story behind every dish.',
        body: 'Showcase your sourcing, your technique, your plating. Video lets you convey the experience before the first bite. Guests who engage with the menu spend more. Always.',
        category: 'Fine Dining & Full Service',
    },
    {
        emoji: '🏢',
        title: 'Centralized content. Location-level intelligence.',
        body: 'Push content updates across every location in minutes. Each location gets its own analytics and AI recommendations. Corporate control with local optimization.',
        category: 'Multi-Location Groups',
    },
    {
        emoji: '🍺',
        title: 'Show the drinks, sell the experience.',
        body: 'Video works even harder for drinks menus. Showcase craft cocktails, seasonal specials, and pairings. Watch drink attachment rates climb every weekend.',
        category: 'Bars & Casual Dining',
    },
];

export function UseCases() {
    return (
        <section data-section="use-cases" className="section-container" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                <h2 className="text-center mb-12" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Built for every kind of restaurant.
                </h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
                    {useCases.map(uc => (
                        <div
                            key={uc.category}
                            className="relative rounded-[20px] p-8 sm:p-10 overflow-hidden transition-all duration-400 group cursor-default"
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--bg-card-hover)';
                                e.currentTarget.style.borderColor = 'rgba(255,107,53,0.2)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--bg-card)';
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Gradient bar on hover */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'var(--brand-gradient)' }}
                            />

                            <span className="text-[40px] block mb-4">{uc.emoji}</span>
                            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--brand-orange)' }}>
                                {uc.category}
                            </p>
                            <h3 className="mb-2" style={{ fontSize: 20, fontWeight: 700 }}>{uc.title}</h3>
                            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)' }}>{uc.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
