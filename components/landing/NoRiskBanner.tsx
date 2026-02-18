import React from 'react';
import { Shield, Check } from 'lucide-react';

const items = [
    'No credit card required',
    'Cancel from your dashboard in 2 clicks',
    'Your menu data exports with you',
    'Live in under 15 minutes',
];

export function NoRiskBanner() {
    return (
        <section
            data-section="no-risk"
            className="py-10"
            style={{
                background: 'rgba(255,107,53,0.06)',
                borderTop: '1px solid rgba(255,107,53,0.15)',
                borderBottom: '1px solid rgba(255,107,53,0.15)',
                padding: '40px var(--section-padding-x)',
            }}
        >
            <div className="section-inner flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <div className="flex items-center gap-3">
                    <Shield size={24} style={{ color: 'var(--brand-orange)' }} />
                    <span style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
                        Try Minute Menus free for 14 days.
                    </span>
                </div>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {items.map((item, i) => (
                        <React.Fragment key={i}>
                            <span className="flex items-center gap-2" style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
                                <Check size={14} style={{ color: '#4ADE80' }} />
                                {item}
                            </span>
                            {i < items.length - 1 && (
                                <span className="hidden md:block" style={{ color: 'var(--border-strong)' }}>|</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
