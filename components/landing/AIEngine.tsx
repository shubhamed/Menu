import React, { useState } from 'react';
import { BarChart3, Bot, Sparkles, ArrowRight, Eye, Clock, Repeat, GaugeIcon, MapPin } from 'lucide-react';

const tabs = [
    { id: 'analytics', icon: BarChart3, label: '📊  See Everything' },
    { id: 'ai', icon: Bot, label: '🤖  AI Recommendations' },
    { id: 'content', icon: Sparkles, label: '🎥  Auto-Generated Content' },
];

const aiCards = [
    'Push the lobster mac during dinner — 3× higher conversion after 6pm.',
    'Bundle the shrimp appetizer with the main — 68% of viewers watch both.',
    'This dish gets 40s avg watch time but low orders. The price may be the issue.',
    'Raise the wagyu burger by $1.50 — demand is price-inelastic at this location.',
];

const analyticsFeatures = [
    { icon: Clock, text: 'Watch time per dish — down to the second' },
    { icon: Eye, text: 'Conversion rate: views → orders, by dish, by shift' },
    { icon: Repeat, text: 'Rewatch behavior and drop-off points' },
    { icon: GaugeIcon, text: 'Peak engagement hours heatmap' },
    { icon: MapPin, text: 'Compare performance across days and locations' },
];

export function AIEngine() {
    const [active, setActive] = useState('analytics');

    return (
        <section
            data-section="ai-engine"
            className="section-container"
            style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)', padding: '140px var(--section-padding-x)' }}
        >
            <div className="section-inner">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="mb-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                        The smartest hire you'll never have to manage.
                    </h2>
                    <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                        Minute Menus doesn't just play videos. It learns what sells — and tells you exactly what to do next.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className="px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                            style={{
                                background: active === tab.id ? 'rgba(255,107,53,0.15)' : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${active === tab.id ? 'rgba(255,107,53,0.3)' : 'var(--border-subtle)'}`,
                                color: active === tab.id ? 'var(--brand-orange)' : 'var(--text-muted)',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-3xl mx-auto">
                    {active === 'analytics' && (
                        <div>
                            <h3 className="text-center mb-8" style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
                                Real-time data on every dish, every scroll, every order.
                            </h3>
                            <div className="flex flex-col gap-4">
                                {analyticsFeatures.map((f, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                                    >
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ background: 'rgba(255,107,53,0.1)' }}>
                                            <f.icon size={18} style={{ color: 'var(--brand-orange)' }} />
                                        </div>
                                        <span style={{ fontSize: 16, color: 'var(--text-secondary)' }}>{f.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {active === 'ai' && (
                        <div>
                            <h3 className="text-center mb-8" style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
                                Actionable intelligence. Not just charts.
                            </h3>
                            <div className="flex flex-col gap-3">
                                {aiCards.map((text, i) => (
                                    <div
                                        key={i}
                                        className="p-5 rounded-[14px] flex items-start gap-3 transition-all duration-300 cursor-default"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border-default)',
                                            borderLeft: '3px solid var(--brand-orange)',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                                            e.currentTarget.style.borderLeftColor = 'var(--brand-amber)';
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                            e.currentTarget.style.borderLeftColor = 'var(--brand-orange)';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: 'var(--success)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                                        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                            "{text}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {active === 'content' && (
                        <div>
                            <h3 className="text-center mb-4" style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
                                Upload a photo. Get a reel back.
                            </h3>
                            <p className="text-center mb-8" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                                No videographer. No editor. No production budget. Upload any photo of your dish and our AI generates a professional, scroll-stopping video reel in minutes. Used by restaurants with zero video experience.
                            </p>
                            <div
                                className="p-5 rounded-xl text-center"
                                style={{ background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.15)' }}
                            >
                                <p style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 600 }}>
                                    10 AI-generated videos included in Starter. Unlimited on Growth and above.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <a href="#product" className="btn-tier3">
                        Explore the Platform <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
