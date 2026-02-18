import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';

export function BeforeAfter() {
    return (
        <section data-section="before-after" className="section-container" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
                    {/* Left — Text */}
                    <div>
                        <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
                            Meet <span className="gradient-text">Minute Menus.</span>
                        </h2>
                        <p className="mb-4" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            A video layer that sits on top of your existing menu and POS. No replacement. No migration. No training required.
                        </p>
                        <p className="mb-8" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Customers scroll, watch, tap, and order — like the feeds they already love. But it's YOUR restaurant, YOUR brand, YOUR data.
                        </p>
                        <a href="#demo" className="btn-tier3">
                            See It In Action <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Right — Before / After */}
                    <div className="flex items-center justify-center gap-6 flex-wrap md:flex-nowrap">
                        {/* Before */}
                        <div className="relative" style={{ width: 260 }}>
                            <div
                                className="rounded-[20px] overflow-hidden p-6"
                                style={{
                                    border: '2px solid var(--border-subtle)',
                                    filter: 'saturate(0.2) brightness(0.7)',
                                    background: 'var(--bg-card)',
                                    minHeight: 400,
                                }}
                            >
                                <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                                    Menu
                                </div>
                                {['Appetizers', 'Mains', 'Desserts', 'Drinks'].map(cat => (
                                    <div key={cat} className="mb-4">
                                        <p className="text-xs font-bold mb-2" style={{ color: 'var(--text-tertiary)' }}>{cat}</p>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex justify-between py-1">
                                                <div className="h-2 rounded-full" style={{ width: `${50 + i * 10}%`, background: 'rgba(255,255,255,0.08)' }} />
                                                <div className="h-2 w-8 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}>
                                Static Menu
                            </div>
                        </div>

                        {/* Arrow */}
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(255,107,53,0.15)' }}
                        >
                            <ArrowRight size={20} style={{ color: 'var(--brand-orange)' }} />
                        </div>

                        {/* After */}
                        <div className="relative">
                            <div style={{
                                border: '2px solid var(--border-brand)',
                                borderRadius: 28,
                                boxShadow: '0 20px 60px rgba(255,107,53,0.15), 0 8px 24px rgba(0,0,0,0.3)',
                            }}>
                                <DeviceMockup size="md" />
                            </div>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                style={{ background: 'var(--brand-gradient)', color: 'white' }}>
                                Minute Menus
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
