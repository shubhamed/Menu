import React, { useState, useMemo } from 'react';

export function ROICalculator() {
    const [covers, setCovers] = useState(400);
    const [checkSize, setCheckSize] = useState(45);
    const [highMarginRate, setHighMarginRate] = useState(20);

    const outputs = useMemo(() => {
        const monthlyCovers = (covers * 52) / 12;
        const additionalRevenue = monthlyCovers * checkSize * 0.21;
        const highMarginOrders = Math.round(monthlyCovers * (highMarginRate * 1.32 - highMarginRate) / 100);
        const payback = Math.round(249 / (additionalRevenue / 30));
        const annual = additionalRevenue * 12;
        return { additionalRevenue, highMarginOrders, payback, annual };
    }, [covers, checkSize, highMarginRate]);

    const fmt = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

    return (
        <section data-section="roi-calculator" className="section-container" style={{ background: 'var(--bg-secondary)' }}>
            <div className="section-tight text-center">
                <h2 className="mb-4" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    See your number.
                </h2>
                <p className="mb-12" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                    Enter your restaurant's averages. We'll show what Minute Menus could mean for your bottom line.
                </p>

                {/* Sliders */}
                <div className="flex flex-col gap-8 mb-12 text-left">
                    <SliderInput label="Weekly Covers" value={covers} min={50} max={2000} step={50} onChange={setCovers} suffix="" />
                    <SliderInput label="Average Check Size" value={checkSize} min={10} max={200} step={5} onChange={setCheckSize} prefix="$" />
                    <SliderInput label="High-Margin Item Order Rate" value={highMarginRate} min={5} max={60} step={5} onChange={setHighMarginRate} suffix="%" />
                </div>

                {/* Outputs */}
                <div className="grid grid-cols-2 gap-4">
                    <OutputCard
                        value={`$${fmt(outputs.additionalRevenue)}`}
                        label="Estimated monthly revenue lift (18–24% AOV increase)"
                        gradient
                    />
                    <OutputCard
                        value={`+${fmt(outputs.highMarginOrders)} orders`}
                        label="More high-margin orders per month (32% uplift)"
                        color="#4ADE80"
                    />
                    <OutputCard
                        value={`${outputs.payback} days`}
                        label="Days to recover Minute Menus subscription"
                    />
                    <OutputCard
                        value={`$${fmt(outputs.annual)}`}
                        label="Estimated annual upside"
                        gradient
                        large
                    />
                </div>

                <a href="#get-started" className="btn-tier1 btn-tier1-lg mx-auto mt-10 inline-flex">
                    Start Free Trial — No Credit Card
                </a>
            </div>
        </section>
    );
}

function SliderInput({ label, value, min, max, step, onChange, prefix = '', suffix = '' }: {
    label: string; value: number; min: number; max: number; step: number;
    onChange: (v: number) => void; prefix?: string; suffix?: string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{label}</label>
                <span className="text-lg font-bold gradient-text">{prefix}{value}{suffix}</span>
            </div>
            <div className="relative">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    aria-label={label}
                    className="w-full h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, var(--brand-orange) 0%, var(--brand-amber) ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
                        accentColor: 'var(--brand-orange)',
                    }}
                />
            </div>
        </div>
    );
}

function OutputCard({ value, label, gradient, color, large }: {
    value: string; label: string; gradient?: boolean; color?: string; large?: boolean;
}) {
    return (
        <div
            className="rounded-[18px] p-6 text-center transition-all duration-300"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
        >
            <div
                className={gradient ? 'gradient-text' : ''}
                style={{ fontSize: large ? 48 : 36, fontWeight: 800, lineHeight: 1.2, color: color || 'white' }}
                aria-live="polite"
            >
                {value}
            </div>
            <p className="mt-2" style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{label}</p>
        </div>
    );
}
