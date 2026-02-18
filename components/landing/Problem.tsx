import React from 'react';

const bullets = [
    { text: <>Static menus don't <strong>sell</strong> — they just list.</> },
    { text: <>High-margin dishes get <strong>buried</strong> under everything else.</> },
    { text: <>You have <strong>zero data</strong> on what customers actually look at.</> },
    { text: <>Delivery apps charge <strong>30%</strong> and take your customer data with them.</> },
];

export function Problem() {
    return (
        <section data-section="problem" className="section-container" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-narrow">
                <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1, marginBottom: 40 }}>
                    Menus haven't changed in 50 years.
                </h2>

                <div className="mb-10">
                    <p style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                        Your food is incredible.
                    </p>
                    <p style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                        Your menu doesn't show it.
                    </p>
                </div>

                <div className="flex flex-col gap-5 mb-12">
                    {bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div
                                className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                                style={{ background: 'rgba(255,59,48,0.15)' }}
                            >
                                <span style={{ color: '#FF3B30', fontSize: 12, fontWeight: 700 }}>✗</span>
                            </div>
                            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                                {b.text}
                            </p>
                        </div>
                    ))}
                </div>

                <p style={{ fontSize: 'var(--text-h3)', fontWeight: 700, color: 'var(--brand-orange)' }}>
                    You're leaving money on every table.
                </p>
            </div>
        </section>
    );
}
