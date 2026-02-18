import React from 'react';
import { BarChart3, TrendingUp, Bot, PieChart, Heart } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';

export function DualExperience() {
    return (
        <section data-section="dual-experience" className="section-container" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
                        One platform. Two powerful experiences.
                    </h2>
                    <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                        While your customers scroll a beautiful video feed, you're watching real-time data on what they love — and AI telling you exactly what to push.
                    </p>
                </div>

                {/* Two Panels */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* LEFT — Owner Dashboard */}
                    <div
                        className="rounded-2xl p-8 lg:p-10"
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--brand-orange)' }}>
                            For You — The Restaurant Owner
                        </span>
                        <h3 className="mt-3 mb-8" style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
                            Know exactly what sells before the night ends.
                        </h3>

                        {/* Dashboard Mockup */}
                        <div className="flex flex-col gap-4">
                            {/* Bar Chart */}
                            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                                <div className="flex items-center gap-2 mb-4">
                                    <BarChart3 size={16} style={{ color: 'var(--brand-orange)' }} />
                                    <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Most Watched Dishes</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {[85, 72, 58, 45, 30].map((w, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-[10px] w-16 shrink-0" style={{ color: 'var(--text-muted)' }}>
                                                {['Wagyu', 'Lobster', 'Truffle', 'Caesar', 'Wings'][i]}
                                            </span>
                                            <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                                <div className="h-full rounded-full" style={{ width: `${w}%`, background: 'var(--brand-gradient)' }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Metric + AI Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                                    <div className="flex items-center gap-2 mb-1">
                                        <TrendingUp size={14} style={{ color: 'var(--success)' }} />
                                        <span className="text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>Avg Watch Time</span>
                                    </div>
                                    <span className="text-2xl font-extrabold gradient-text">34s</span>
                                    <span className="text-xs ml-2" style={{ color: 'var(--success)' }}>↑12%</span>
                                </div>
                                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                                    <div className="flex items-center gap-2 mb-1">
                                        <PieChart size={14} style={{ color: 'var(--brand-amber)' }} />
                                        <span className="text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>High-margin</span>
                                    </div>
                                    <span className="text-2xl font-extrabold gradient-text">68%</span>
                                    <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>of orders</span>
                                </div>
                            </div>

                            {/* AI Card */}
                            <div
                                className="rounded-xl p-4 flex items-start gap-3"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderLeft: '3px solid var(--brand-orange)' }}
                            >
                                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                                    <Bot size={16} style={{ color: 'var(--brand-orange)' }} />
                                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--success)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                                </div>
                                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    "Push the truffle fries tonight — 3× conversion after 6pm"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Diner Phone */}
                    <div
                        className="rounded-2xl p-8 lg:p-10 flex flex-col items-center"
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest self-start" style={{ color: 'var(--brand-orange)' }}>
                            For Them — Your Customers
                        </span>
                        <h3 className="mt-3 mb-8 self-start" style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
                            A menu they actually want to use.
                        </h3>

                        <DeviceMockup size="md" />

                        <p className="mt-6 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
                            Swipe up for next dish ↑
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
