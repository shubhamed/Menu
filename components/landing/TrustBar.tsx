import React from 'react';

const posNames = ['Square', 'Toast', 'Clover', 'Lightspeed', 'Revel', 'HungerRush'];

export function TrustBar() {
    return (
        <section
            data-section="trust"
            style={{
                background: 'rgba(255,255,255,0.02)',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '0 var(--section-padding-x)',
            }}
        >
            <div className="section-inner flex flex-col md:flex-row items-center justify-between gap-4 py-6">
                <span className="text-sm font-medium shrink-0" style={{ color: 'var(--text-muted)' }}>
                    Works seamlessly with
                </span>
                <div className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar">
                    {posNames.map(name => (
                        <span
                            key={name}
                            className="text-sm font-bold tracking-wide uppercase shrink-0 transition-all duration-300 cursor-default"
                            style={{ color: 'var(--text-faint)', fontSize: 14, letterSpacing: '0.05em', opacity: 0.45 }}
                            onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.opacity = '1'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-faint)'; e.currentTarget.style.opacity = '0.45'; }}
                        >
                            {name}
                        </span>
                    ))}
                </div>
                <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
                    Live in under 15 minutes. Zero migration required.
                </span>
            </div>
        </section>
    );
}
