import React, { useState } from 'react';

const faqs = [
    {
        q: 'Do I need to replace my current menu?',
        a: 'Not at all. Minute Menus sits on top of your existing menu and POS as a video layer. Your staff keeps using the same system. Nothing changes for your kitchen or your workflow.',
    },
    {
        q: 'Do my customers need to download an app?',
        a: 'No. Everything runs in the browser. A customer scans your existing QR code and the video menu opens instantly — no app store, no account, no friction.',
    },
    {
        q: 'What POS systems do you work with?',
        a: 'Square, Toast, Clover, Lightspeed, Revel, and HungerRush are fully integrated. If yours isn\'t listed, contact us — we typically build new integrations within 2–4 weeks.',
    },
    {
        q: 'Do I need a videographer or video editor?',
        a: 'No. Upload any photo of your dish and our AI generates a professional video reel automatically. The whole thing takes about 90 seconds.',
    },
    {
        q: 'How quickly can I go live?',
        a: 'Most restaurants are fully live within 15 minutes of connecting their POS. Our onboarding flow guides you step by step.',
    },
    {
        q: 'How is this different from posting food content on Instagram or TikTok?',
        a: 'Instagram keeps your customers scrolling Instagram. Minute Menus keeps them in your restaurant, ordering your food. The video feed is embedded directly in your menu — and every scroll, pause, and tap gives you data. Social media gives your content away for free. We put it to work.',
    },
    {
        q: 'What happens if I cancel?',
        a: 'Cancel anytime from your dashboard in two clicks. There are no contracts and no cancellation fees. All your menu data and analytics history export with you in CSV format.',
    },
    {
        q: 'Is there a free trial?',
        a: 'Yes. Every plan comes with a 14-day free trial. No credit card required to start. You\'ll have access to the full platform from day one.',
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section data-section="faq" className="section-container" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-tight">
                <h2 className="text-center mb-12" style={{ fontSize: 'var(--text-h1)', fontWeight: 800, lineHeight: 1.1 }}>
                    Answers before you ask.
                </h2>

                <div className="flex flex-col">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                                <button
                                    className="w-full flex items-center justify-between py-6 cursor-pointer text-left"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    style={{ background: 'none', border: 'none', fontFamily: 'var(--font-primary)' }}
                                >
                                    <span
                                        className="pr-4 transition-colors duration-300"
                                        style={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: isOpen ? 'var(--brand-orange)' : 'rgba(255,255,255,0.9)',
                                        }}
                                    >
                                        {faq.q}
                                    </span>
                                    <div
                                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                                        style={{
                                            background: isOpen ? 'rgba(255,107,53,0.15)' : 'rgba(255,255,255,0.06)',
                                            color: isOpen ? 'var(--brand-orange)' : 'var(--text-muted)',
                                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                            fontSize: 14,
                                        }}
                                    >
                                        +
                                    </div>
                                </button>
                                <div
                                    className="overflow-hidden transition-all duration-400"
                                    style={{
                                        maxHeight: isOpen ? 300 : 0,
                                        opacity: isOpen ? 1 : 0,
                                        paddingBottom: isOpen ? 24 : 0,
                                        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    }}
                                >
                                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', paddingRight: 48 }}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
