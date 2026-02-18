import React from 'react';

const stats = [
    { value: '18–24%', arrow: '↑', label: 'Average Order Value', arrowColor: '#4ADE80' },
    { value: '32%', arrow: '↑', label: 'High-Margin Item Sales', arrowColor: '#4ADE80' },
    { value: '40%', arrow: '↓', label: 'Customer Decision Time', arrowColor: '#4ADE80' },
    { value: '15%', arrow: '↑', label: 'Table Turnover Rate', arrowColor: '#4ADE80' },
    { value: '100%', arrow: '', label: 'Data You Own', arrowColor: '#4ADE80' },
];

export function Results() {
    return (
        <section data-section="results" className="section-container" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-inner text-center">
                <h2 className="mb-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Built to increase profit. Not just engagement.
                </h2>
                <p className="mb-12" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)' }}>
                    Here's what restaurants in our pilot saw in the first 30 days.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="rounded-[18px] p-6 sm:p-8 text-center transition-all duration-400 cursor-default"
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,107,53,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(255,107,53,0.2)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--bg-card)';
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div className="gradient-text mb-2" style={{ fontSize: 42, fontWeight: 800, lineHeight: 1 }}>
                                {s.arrow && <span style={{ color: s.arrowColor, fontSize: 20, marginRight: 4, WebkitTextFillColor: s.arrowColor }}>{s.arrow}</span>}
                                {s.value}
                            </div>
                            <p style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 500 }}>{s.label}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-8" style={{ fontSize: 12, opacity: 0.35, maxWidth: 600, margin: '32px auto 0' }}>
                    Based on closed pilot data with 12 restaurant operators and industry benchmarks. Individual results vary by location, cuisine type, and menu structure.
                </p>
            </div>
        </section>
    );
}
